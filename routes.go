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
<<<<<<< HEAD
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
=======
		Name:    "Create Topic",
		Method:  http.MethodPost,
		Path:    "/topics/",
		Handler: TopicCreate,
	},
	{
		Name:    "Get Topic",
		Method:  http.MethodGet,
		Path:    "/topics/{id}/",
		Handler: TopicGet,
	},
	{
		Name:    "List Topics",
		Method:  http.MethodGet,
		Path:    "/topics/",
		Handler: TopicList,
	},
	{
		Name:    "Update Topic",
		Method:  http.MethodPatch,
		Path:    "/topics/{id}/",
		Handler: TopicUpdate,
	},
	{
		Name:    "Delete Topic",
		Method:  http.MethodDelete,
		Path:    "/topics/{id}/",
		Handler: TopicDelete,
>>>>>>> 46d59e6 (routes for topic defined)
	},
}
