package main

import "net/http"

type Route struct {
	Name    string
	Method  string
	Path    string
	Handler http.HandlerFunc
}

// Add routes like this:
// ```
// {
//     Name:    "Get Session",
//     Method:  "GET",
//     Path:    "/sessions/{id}",
//     Handler: SessionGet
// },
// ```
var Routes []Route = []Route{}
