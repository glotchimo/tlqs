package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

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
		Router.Methods(route.Method).Path(route.Path).Name(route.Name).Handler(route.Handler)
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
