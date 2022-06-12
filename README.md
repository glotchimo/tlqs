# Tutor Lab Queue System
[![Docker Image CI](https://github.com/glotchimo/tlqs/actions/workflows/docker.yml/badge.svg)](https://github.com/glotchimo/tlqs/actions/workflows/docker.yml) [![Go ](https://github.com/glotchimo/tlqs/actions/workflows/go.yml/badge.svg)](https://github.com/glotchimo/tlqs/actions/workflows/go.yml)

This is the monorepo for TLQS, containing a React SPA and a Go back-end. It features a Docker setup for quick containerized deployment and a Makefile for a rapid build-test-edit cycle.

### What is TLQS?
TLQS (pronounced “TALKS”) is a web-based application that supports students by facilitating a robust and streamlined way to interact with the tutors at EWU. 

The application also makes life easier for both tutors and administrators, by allowing a straightforward and visually appealing way to catalog and save notes from a session with a student.

These notes can then be further analyzed at a later date to make adjustments and see trending patterns in the tutor lab.

### View Breakdown
The application is broken into three views [student](./docs/student.md), [tutor](./docs/tutor.md), and [admin](./docs/admin.md). Each view has it's own function in the application, please check out the provided documentation for more info on each view. 

Need an idea of the flow of the application? Please check out the demo video showcasing the [web app](https://www.youtube.com/watch?v=vVqLiVAbyfQ).

### Basic Usage

To build and run the service, run `make run`, If you are working on the project locally and want to populate the API with test classes, sessions, and users, use `make populate`, and to clean up binaries and distribution files, run `make clean`. If you want to run it in the background, use `make run-background`, and if you want to clear all Docker caches, images, volumes, etc. on your system, use `make clean-all`.

### Contributing

#### Git Instructions

1. `git checkout -b <branch name>`
2. Do your changes, use atomic commits (i.e. commit small, individual changes, not huge groups of changes)
    - `git add <file>`
    - `git commit -m "<what you did>"`
3. Push your changes to remote (i.e. GitHub)
    - On your first push, use `git push -u origin <branch name>`
    - After that, use `git push`
4. Open a pull request in GitHub and assign Elliott for review
5. Once that PR has landed on main, update your local main
    - `git checkout main`
    - `git pull`
6. If somebody else's code has landed on main and you're updating your existing work, make sure you rebase
    - `git rebase main` (from your working branch)

#### Additional notes

- If you have a working PR and main has been updated, make sure you rebase before pushing
- **Always** update and rebase before pushing to remote (i.e. GitHub)
- If you run into issues or see errors, ask Elliott and he will help resolve

### Other Instructions/Notes

#### Configuration files

The `Dockerfile` and `docker-compose.yml` files define configuration and process information for our Docker setup. These don't need to be changed. The `.gitignore` file tells Git what files to never stage. The `Makefile` has some commands in it that make certain development/deployment steps simpler. And finally, `go.mod` and `go.sum` define dependencies and Go module info, and these two should never be changed manually.

#### Utility Files

`main.go` defines initialization and startup behavior for the app. It instantiates globals and calls a handful of init utilities that spin up things like the database and router. `utils.go` implements those init utilities among other various things. If there are system utilities that don't make sense living elsewhere, they go here. `routes.go` defines the API's routes in a structified way for readability and ease-of-use. `crud.go` implements 5 generic CRUD boilerplate functions.

#### Model Files

Every model file (i.e. `course.go`, `session.go`, `topic.go`, `user.go`) contains the same set of things: a struct that defines the model itself, any GORM hoooks that it requires (e.g. for setting ID), 5 CRUD functions (all of which should use the generic functions defined in `crud.go`), and any other model-relevant functions necessary.
