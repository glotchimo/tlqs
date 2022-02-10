package main

import (
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/patrickmn/go-cache"
	"gorm.io/gorm"
)

var (
	Cache    *cache.Cache
	Router   *mux.Router
	Handler  *http.Handler
	Database *gorm.DB

	Port string

	CORSOrigins = handlers.AllowedOrigins([]string{"*"})
	CORSHeaders = handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Origin", "Accept"})
	CORSMethods = handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})
)

func init() {
	InitCache()
	InitRouter()
	InitHandlers()
	InitDatabase()
}

func main() {
	log.Fatal(http.ListenAndServe(":"+Port, *Handler))
}
