package main

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	jwtMiddleware "github.com/auth0/go-jwt-middleware"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/patrickmn/go-cache"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type SPAHandler struct {
	staticPath string
	indexPath  string
}

func (h SPAHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	path = filepath.Join(h.staticPath, path)
	_, err = os.Stat(path)
	if os.IsNotExist(err) {
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func InitCache() {
	Cache = cache.New(5*time.Minute, 10*time.Minute)
}

func InitRouter() {
	Router = mux.NewRouter()
	Router.PathPrefix("/").Handler(SPAHandler{staticPath: "dist", indexPath: "dist/index.html"})
	for _, route := range Routes {
		Router.Methods(route.Method).Path(route.Path).Name(route.Name).Handler(JWTM.Handler(route.Handler))
	}
}

func InitHandler() {
	h := handlers.CORS(CORSOrigins, CORSHeaders, CORSMethods)(Router)
	h = handlers.LoggingHandler(os.Stdout, h)
	Handler = &h
}

func InitDatabase() {
	db, err := gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})
	if err != nil {
		log.Println("InitDatabase couldn't connect to database (might be in test).")
		return
	}
	Database = db
	Database.AutoMigrate(User{})
	Database.AutoMigrate(Session{})
	Database.AutoMigrate(Course{})
	Database.AutoMigrate(Topic{})
}

func InitJWTMiddleware() {
	JWTM = jwtMiddleware.New(jwtMiddleware.Options{
		ValidationKeyGetter: func(t *jwt.Token) (interface{}, error) {
			aud := os.Getenv("AUTH0_AUDIENCE")
			checkAud := t.Claims.(jwt.MapClaims).VerifyAudience(aud, false)
			if !checkAud {
				return t, errors.New("invalid audience")
			}
			iss := os.Getenv("AUTH0_ISSUER")
			checkIss := t.Claims.(jwt.MapClaims).VerifyIssuer(iss, false)
			if !checkIss {
				return t, errors.New("invalid issuer")
			}
			cert, err := getPEMCert(t)
			if err != nil {
				panic(err.Error())
			}
			result, _ := jwt.ParseRSAPublicKeyFromPEM([]byte(cert))
			return result, nil
		},
		SigningMethod: jwt.SigningMethodRS256,
	})
}

func getPEMCert(token *jwt.Token) (string, error) {
	type jwk struct {
		Kty string   `json:"kty"`
		Kid string   `json:"kid"`
		Use string   `json:"use"`
		N   string   `json:"n"`
		E   string   `json:"e"`
		X5c []string `json:"x5c"`
	}

	type jwkList struct {
		Keys []jwk `json:"keys"`
	}

	cert := ""
	resp, err := http.Get("https://dev-ewsga7nm.us.auth0.com/.well-known/jwks.json")

	if err != nil {
		return cert, err
	}
	defer resp.Body.Close()

	var jwks = jwkList{}
	err = json.NewDecoder(resp.Body).Decode(&jwks)

	if err != nil {
		return cert, err
	}

	for k := range jwks.Keys {
		if token.Header["kid"] == jwks.Keys[k].Kid {
			cert = "-----BEGIN CERTIFICATE-----\n" + jwks.Keys[k].X5c[0] + "\n-----END CERTIFICATE-----"
		}
	}

	if cert == "" {
		err := errors.New("unable to find appropriate key")
		return cert, err
	}

	return cert, nil
}
