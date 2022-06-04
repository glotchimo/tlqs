# Database

### Models

#### User

The `User` model must hold all data directly relevant to a given user of the service. Because authentication is delegated to Auth0, a minimal amount of personal information is stored (i.e. name, email address). Beyond that, all we need is a role designation (i.e. student, tutor, faculty), and relation fields (to sessions and supported courses).

`User` objects are created on first log-in using a hook in the app's entrypoint. Every following post of the same user simply returns the existing record. User data can be updated via the admin panel.

### Session

The `Session` model must hold all data directly relevant to a single tutor session. Objects are created when students submit a help request after selecting tutor, course, topic, and fills out the detail form. It's a simple model that, beyond necessary relations, contains only two text fields, one for the student's detailed description, and the other for the tutor's retrospective.

Both the `Description` and `Retrospective` fields contain raw text data that is entered and rendered as rich text (using `mui/rte`).

### Course

The `Course` model represents offered courses as defined by the EWU catalog. Courses have a `Department` field similar to `User.Role` that allows convenient filtering on the front-end.
