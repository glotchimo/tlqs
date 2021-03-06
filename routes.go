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
	{
		Name:    "Create Session",
		Method:  http.MethodPost,
		Path:    "/sessions/",
		Handler: SessionCreate,
	},
	{
		Name:    "Get Session",
		Method:  http.MethodGet,
		Path:    "/sessions/{id}/",
		Handler: SessionGet,
	},
	{
		Name:    "List Sessions",
		Method:  http.MethodGet,
		Path:    "/sessions/",
		Handler: SessionList,
	},
	{
		Name:    "Update Session",
		Method:  http.MethodPatch,
		Path:    "/sessions/{id}/",
		Handler: SessionUpdate,
	},
	{
		Name:    "Delete Session",
		Method:  http.MethodDelete,
		Path:    "/sessions/{id}/",
		Handler: SessionDelete,
	},
	{
		Name:    "Create User",
		Method:  http.MethodPost,
		Path:    "/users/",
		Handler: UserCreate,
	},
	{
		Name:    "Get User",
		Method:  http.MethodGet,
		Path:    "/users/{id}/",
		Handler: UserGet,
	},
	{
		Name:    "List Users",
		Method:  http.MethodGet,
		Path:    "/users/",
		Handler: UserList,
	},
	{
		Name:    "Update User",
		Method:  http.MethodPatch,
		Path:    "/users/{id}/",
		Handler: UserUpdate,
	},
	{
		Name:    "Delete User",
		Method:  http.MethodDelete,
		Path:    "/users/{id}/",
		Handler: UserDelete,
	},
}
