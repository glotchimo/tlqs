# Tutor Lab Queue System
This is the monorepo for TLQS, containing a React SPA and a Go back-end. It features a Dockerfile for quick containerized deployment and a Makefile for a rapid build-test-edit cycle.

To build and run the service, run `make run`, and to clean up binaries and distribution files, run `make clean`.

### Git Instructions

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
