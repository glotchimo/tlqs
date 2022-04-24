# User Interface

There seems to be a million approaches to the design and structure of a React project, but in the interest of minimalism and readability, this one is fairly simple and small. There are three pages a user can land on: Student, Tutor, and Admin, each according to the user's designated role. The base route is protected and requires log-in via Auth0.

## UI landing

The base route features a role-based renderer that gives the just-logged-in user their corresponding view. On a successful authentication, the user data returned by Auth0 is used to send a `POST` request to the API's user creation endpoint with the user's name and email address. The `crud.go:Create` generic uses GORM's `FirstOrCreate` function which stops duplicate user records from being created but keeps the front-end code clean.
