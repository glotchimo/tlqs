# API

This document details the mechanics of the generic (not in the Go 1.18 sense) CRUD functions in `crud.go` and their use in each model file (i.e. `course.go`, `session.go`, `user.go`).

## Generic CRUD handlers

### Why generic functions?

Thanks to the flexibility of Go's `net/http` package,

### How do they work?

Each function in `crud.go` corresponds to one of the following typical CRUD operations: create, get (for single objects by ID), list (for many objects by filter), update, delete. They all take at the least an `http.ResponseWriter`, an `*http.Request`, and a pointer to the context model. `List` takes an additional variadic `scopes` parameter through which the user can pass functions abiding by GORM's [scoping API](https://gorm.io/docs/scopes.html).

This allows for flexibility in what's done with requests without forcing the user to deal with too much boilerplate in model files. It also standardizes how requests are dealt with which is good for readability, reliability, and transparency.

### How are they used?

Each model file has a series of corresponding function stubs that pass in the proper structs, and those handlers are then used to satisfy the router requirements in `router.go` and `utils.go`.

    List(w, r, &[]Course{}, ByOffset(w, r), ByDepartment(w, r)) // ByOffset and ByDepartment are valid scope functions

## Route protection/JWT middleware

To protect the API from unauthenticated/unauthorized use, a middleware is used that requires validation of a JSON Web Token which is expected to be supplied by Auth0 when a user logs in through the client.
