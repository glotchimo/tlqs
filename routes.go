package main

import "net/http"

type Route struct {
	Name    string
	Method  string
	Path    string
	Handler http.HandlerFunc
}

var Routes []Route = []Route{
	{
		Name:    "Create Course",
		Method:  http.MethodPost,
		Path:    "/courses/",
		Handler: CourseCreate,
	},
	{
		Name:    "Get Course",
		Method:  http.MethodGet,
		Path:    "/courses/{id}/",
		Handler: CourseGet,
	},
	{
		Name:    "List Courses",
		Method:  http.MethodGet,
		Path:    "/courses/",
		Handler: CourseList,
	},
	{
		Name:    "Update Course",
		Method:  http.MethodPatch,
		Path:    "/courses/{id}/",
		Handler: CourseUpdate,
	},
	{
		Name:    "Delete Course",
		Method:  http.MethodDelete,
		Path:    "/courses/{id}/",
		Handler: CourseDelete,
	},
}
