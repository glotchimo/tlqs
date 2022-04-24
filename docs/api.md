# CRUD API

This document details the mechanics of the generic (not in the Go 1.18 sense) CRUD functions in `crud.go` and their use in each model file (i.e. `course.go`, `session.go`, `topic.go`, and `user.go`).

## Why generic functions?

In our context, it made more sense to write reusable functions for CRUD operations than rewrite a ton of boilerplate. API interactions with this project were not estimated to be all that complex, so this design supported it well.

## How do they work?

Each function in `crud.go` corresponds to one of the following typical CRUD operations: create, get (for single objects by ID), list (for many objects by filter), update, delete. They all take at the least an `http.ResponseWriter`, an `*http.Request`, and an interface which would specify what model is being dealt with. `List` takes an additional variadic `scopes` parameter through which the user can pass functions abiding by GORM's [scoping API](https://gorm.io/docs/scopes.html).

This allows for flexibility in what's done with requests without forcing the user to deal with too much boilerplate in model files. It also standardizes how requests are dealt with which is good for readability and reliability.

## How are they used?

Each model file has a series of corresponding function stubs that pass in the proper structs, and those handlers are then used to satisfy the router requirements in `router.go` and `utils.go`.
