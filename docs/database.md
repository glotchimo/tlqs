# Database

### Models 

#### User

The `User` model must hold all data directly relevant to a given user of the service. Because authentication is delegated to EWU SAML 2.0, a minimal amount of personal information is stored (i.e. name, email address, student ID). Beyond that, all we need is a role designation (i.e. student, tutor, faculty), and relation fields (to sessions and supported courses).

### Session

The `Session` model must hold all data directly relevant to a single tutor session. Objects are created when students submit a help request after selecting tutor, course, topic, and fills out the detail form. It's a simple model that, beyond necessary relations, contains only two text fields, one for the student's detailed description, and the other for the tutor's retrospective.

### Course & Topic

The `Course` and `Topic` models represent offered courses and related topics as defined by admins.
