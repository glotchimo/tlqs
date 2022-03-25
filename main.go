package main

import (
	"log"
	"net/http"

	jwtMiddleware "github.com/auth0/go-jwt-middleware"
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
	JWTM     *jwtMiddleware.JWTMiddleware

	CORSOrigins = handlers.AllowedOrigins([]string{"*"})
	CORSHeaders = handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Origin", "Accept"})
	CORSMethods = handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})
)

func init() {
	InitCache()
	InitRouter()
	InitHandler()
	InitDatabase()
	InitJWTMiddleware()
}

func main() {
	log.Fatal(http.ListenAndServe(":8080", *Handler))
}
