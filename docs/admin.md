**TLQS Documentation (Admin View)**

made by **Hewr Tarkhany**

**PROGRESS:**

> **Admin:**
>
> **Progress:**

- In the beginning I worked on the app using YouTube videos and
  article on how to build and app using react, because I was not
  familiar with react mainly I have never used react in the past.

- learning how GO works in the back end and connecting to react as a
  frontend

- learning how to use postman as an API endpoints

- I started using HTML, JS and CSS for a while to learn how everything
  works but later on, I switched to material UI which it made things
  easier but complex in a way that it's all black box, in another term
  you don't know what is going on. It's all magically work

> **Current State:**

- using material UI data grid to grab the data from rows and columns
  using fetch will fill in the rows and columns and with react
  useEffect it displays it on the page.

- Using pagination every page has 100 rows and it shows the total
  amount of data in rows left in next pages

- On the top with the name of the columns you have setting option by
  default to how you want to display the data.

> **Problems:**

- 1.Admin can only preview the data that is being posted from tutor

- 2\. Changing the role from the admin section was assigned but wasn't able to get to it due to third party issues with building our application in docker.

**Solutions:**

- 1\. in the future, communicate with client and ask what the
  exceptions is beyond just displaying and sorting data

- 2\. Perhaps would be best if you don't use arch Linux in the future
  because with the distro being not stable will create docker or any
  other software that you may use will end up breaking

> **Recommendations :**

- number one thing. First thing you should start is to not build the
  app individually, learn to pair program as much as you can.

- All the developers shall use the same operating system

- If Linux is used make sure that you all use the same distro

- If Linux distro is used try to avoid arch Linux because of not being
  stable

- Using material UI is for someone who already knows how to code in
  react, so if you want to learn while doing this project, I will
  start with react native or just react using JS and HTML

- Using yarn instead of NPM is much lighter and you don't get all the
  extra node dependencies that will not need.

- Keep things basic and simple for sake of testing and finding bugs

-

**Communications:**

> **Discord:**

- on discord meetings were not so often so we relied mostly on
  personal meetings which it helped us to understand each other in a
  personal level

  - texting mainly for short responds

  - calls and screen sharing for demos and code examples

  - texting mainly for short responds

  - calls and screen sharing for demos and code examples

**Meetings:**

**Class:**

- in end of every sprint, we went meet with Dr Nadar, and she guided
  us to what we should work on and just watching our progress.

- We would show little preview of the app individually every sprint in
  the beginning

- In the second quarter toward the end all the sections of the app put
  together to show over all teamwork

**Team:**

- we met on Monday- Wednesday and Friday to discuss the project

- pair programing and helping each other out and team bonding

**CHALLENGES:**

- most of the tools I used in the project was new to me.

- this project was also a session for learning in my experience

- I was in 4 classes that most of them were project and I ended up
  doing most of the projects by myself

- In the middle of the project, I got an internship opportunity so I
  put most of my main focus on that.

**APP-GUIDE:**

**Admin:**

**Production environment & how to Use**

**Getting started:**

- **Admin view**

  - In the app you go to the admin view, and you will have access to
    3 views, it automatically open the course view

> **Course view:**

![course](https://github.com/glotchimo/tlqs/blob/main/docs/images/course%20view.png)

- **ID :** it will give a unique id for the Course
![id](https://github.com/glotchimo/tlqs/blob/main/docs/images/id.png)

- **Title :** the tittle of the course example : CSCD320

- **Code :**

- **COLUMNS:**

  - It will allow you to disable any column you want or show all

![column](https://github.com/glotchimo/tlqs/blob/main/docs/images/columns.png)

- **FILTERS**

![filter](https://github.com/glotchimo/tlqs/blob/main/docs/images/filter.png)

- **OPERATOR**

> In this section you will have access to contains, equals, starts with,
> ends with, is empty ,is not empty, is any of attributes that will
> allow you to filter the data
![density](https://github.com/glotchimo/tlqs/blob/main/docs/images/desity.png)

- **Value**

> You can enter a value that you want to work on
>
> **EXPORT**

![export](https://github.com/glotchimo/tlqs/blob/main/docs/images/export.png)

- You will have access to download as CSV or print attributes to
  obtain the data

> **SESSION PAGE**

![session](https://github.com/glotchimo/tlqs/blob/main/docs/images/session.png)

- Student : the student that needs help

- Tutor : is the person who helped the student

- Course: is the course that student needs help with

- Topic : is the topic that student want to work on with tutor

- Description: is the student's point of view and things he or she
  needs help with

- Retrospective: is tutor's point of view on the student and the topic

- Status: it shows either if the session is marked as completed or
  not.

> **USER PAGE**

![user](https://github.com/glotchimo/tlqs/blob/main/docs/images/user.png)

- **Names:** name of the student

- **Email:** student's email

- **Role:** Role of the user who has access to the app, it's either
  student, tutor or admin

- **Sessions:** the session that's worked on

- **Course:** courses that is worked on

**Note:** All the attributes in Course page will work for the rest of
the Session and User pages

**Developer environment:**

**How to Use:**

- in the view section of the part of the app you will get to see the
  admin view,

- Admin.jsx page

> This page is job is to act like a home page for the admin view to show
> all the other sections USER, COURSE, SESSION In the single page
> application

- Courses.jsx

> Is a page where it grabs the data from API and display it on the admin
> view page in the single page application form
>
> In this page you will have ID, Title and code
>
> Matrial UI is used to create a data table called DataGrid and it
> brings all the attributes with it like it is displayed in the pictures
> above. Columns and rows user and by calling fetch API and using
> useState will fill in the rows and columns and also using useEffect
> you can display the data instantly.

- Sessions.jsx
> This page is job is to display the ID, STUDENT, TUTOR, TOPICS,
> DESCRIPTION, RETROSPETIVE, STATUS
>
> Individual tasks for each section had been divided on them and
> explained in the above section.

- Note: The functionality and codes used in this section is explained
  in course section and the same methodology and tools had been used

- User.jsx

> This page is job is to display ID, NAMES, EMAIL, COURSE, SESSIONS,
> ROLE
>
> All these sections are explained and displayed with images above

- Note: The functionality and codes used in this section is explained
  in course section and the same methodology and tools had been used
