package main

import (
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/patrickmn/go-cache"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
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
}

func InitHandlers() {
	h := handlers.CORS(CORSOrigins, CORSHeaders, CORSMethods)(Router)
	h = handlers.LoggingHandler(os.Stdout, h)
	Handler = &h
}

func InitDatabase() {
	db, err := gorm.Open(postgres.Open(os.Getenv("DATABASE_URL")), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	Database = db
	Database.AutoMigrate(User{})
	Database.AutoMigrate(Session{})
	Database.AutoMigrate(Course{})
	Database.AutoMigrate(Topic{})
}
