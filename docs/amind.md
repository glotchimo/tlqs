**TLQS Documentation (Admin View)**

made by **Hewr  Tarkhany**

**PROGRESS:**

> **Admin:**
>
> **Progress:**

-   In the beginning I worked on the app using YouTube videos and
    article on how to build and app using react, because I was not
    familiar with react mainly I have never used react in the past.

-   learning how GO works in the back end and connecting to react as a
    frontend

-   learning how to use postman as an API endpoints

-   I started using HTML, JS and CSS for a while to learn how everything
    works but later on, I switched to material UI which it made things
    easier but complex in a way that it's all black box, in another term
    you don't know what is going on. It's all magically work

> **Current State:**

-   using material UI data grid to grab the data from rows and columns
    using fetch will fill in the rows and columns and with react
    useEffect it displays it on the page.

-   Using pagination every page has 100 rows and it shows the total
    amount of data in rows left in next pages

-   On the top with the name of the columns you have setting option by
    default to how you want to display the data.

> **Problems:**

-   1.Admin can only preview the data that is being posted from tutor

-   2\. Changing the role from the admin section was assigned but I
    can't do it because docker is disabled because of the

![](./images/media/image1.png){width="7.088542213473316in"
height="3.251022528433946in"}

**Solutions:**

-   1\. in the future, communicate with client and ask what the
    exceptions is beyond just displaying and sorting data

-   2\. Perhaps would be best if you don't use arch Linux in the future
    because with the distro being not stable will create docker or any
    other software that you may use will end up breaking

> **Recommendations :**

-   number one thing. First thing you should start is to not build the
    app individually, learn to pair program as much as you can.

-   All the developers shall use the same operating system

-   If Linux is used make sure that you all use the same distro

-   If Linux distro is used try to avoid arch Linux because of not being
    stable

-   Using material UI is for someone who already knows how to code in
    react, so if you want to learn while doing this project, I will
    start with react native or just react using JS and HTML

-   Using yarn instead of NPM is much lighter and you don't get all the
    extra node dependencies that will not need.

-   Keep things basic and simple for sake of testing and finding bugs

-   

**Communications:**

> **Discord:**

-   on discord meetings were not so often so we relied mostly on
    personal meetings which it helped us to understand each other in a
    personal level

    -   texting mainly for short responds

    -   calls and screen sharing for demos and code examples

    -   texting mainly for short responds

    -   calls and screen sharing for demos and code examples

**Meetings:**

**Class:**

-   in end of every sprint, we went meet with Dr Nadar, and she guided
    us to what we should work on and just watching our progress.

-   We would show little preview of the app individually every sprint in
    the beginning

-   In the second quarter toward the end all the sections of the app put
    together to show over all teamwork

**Team:**

-   we met on Monday- Wednesday and Friday to discuss the project

-   pair programing and helping each other out and team bonding

**CHALLENGES:**

-   most of the tools I used in the project was new to me.

-   this project was also a session for learning in my experience

-   I was in 4 classes that most of them were project and I ended up
    doing most of the projects by myself

-   In the middle of the project, I got an internship opportunity so I
    put most of my main focus on that.

**APP-GUIDE:**

**Admin:**

**Production environment & how to Use**

**Getting started:**

-   **Admin view**

    -   In the app you go to the admin view, and you will have access to
        3 views, it automatically open the course view

> **Course view:**

![](./images/media/image2.png){width="7.495138888888889in"
height="2.588888888888889in"}

-   **ID :** it will give a unique id for the Course

-   **Title :** the tittle of the course example : CSCD320

-   **Code :**

-   **COLUMNS:**

    -   It will allow you to disable any column you want or show all

![](./images/media/image3.png){width="7.489583333333333in"
height="2.797222222222222in"}

-   **FILTERS**

![](./images/media/image4.png){width="7.495138888888889in"
height="1.9118055555555555in"}

-   **OPERATOR**

> In this section you will have access to contains, equals, starts with,
> ends with, is empty ,is not empty, is any of attributes that will
> allow you to filter the data

-   **Value**

> You can enter a value that you want to work on
>
> **EXPORT**

![](./images/media/image5.png){width="7.5in" height="1.875in"}

-   You will have access to download as CSV or print attributes to
    obtain the data

> **SESSION PAGE**

![](./images/media/image6.png){width="7.489583333333333in"
height="1.8020833333333333in"}

-   Student : the student that needs help

-   Tutor : is the person who helped the student

-   Course: is the course that student needs help with

-   Topic : is the topic that student want to work on with tutor

-   Description: is the student's point of view and things he or she
    needs help with

-   Retrospective: is tutor's point of view on the student and the topic

-   Status: it shows either if the session is marked as completed or
    not.

> **USER PAGE**

![](./images/media/image7.png){width="7.5in"
height="1.7659722222222223in"}

-   **Names:** name of the student

-   **Email:** student's email

-   **Role:** Role of the user who has access to the app, it's either
    student, tutor or admin

-   **Sessions:** the session that's worked on

-   **Course:** courses that is worked on

**Note:** All the attributes in Course page will work for the rest of
the Session and User pages

**Developer environment:**

**How to Use:**

-   in the view section of the part of the app you will get to see the
    admin view,

-   Admin.jsx page

> This page is job is to act like a home page for the admin view to show
> all the other sections USER, COURSE, SESSION In the single page
> application

-   Courses.jsx

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

-   Sessions.jsx

> This page is job is to display the ID, STUDENT, TUTOR, TOPICS,
> DESCRIPTION, RETROSPETIVE, STATUS
>
> Individual tasks for each section had been divided on them and
> explained in the above section.

-   Note: The functionality and codes used in this section is explained
    in course section and the same methodology and tools had been used

-   User.jsx

> This page is job is to display ID, NAMES, EMAIL, COURSE, SESSIONS,
> ROLE
>
> All these sections are explained and displayed with images above

-   Note: The functionality and codes used in this section is explained
    in course section and the same methodology and tools had been used

-   

**SYSTEM RREQUIREMENTS:**

**MUI:**

-   The MUI React library is designed from the ground up to be fast,
    small and developer-friendly. Using the MUI React library you can
    add MUI components to your React apps and switch seamlessly between
    MUI CSS/JS and MUI React even within the same app. MUI is designed
    to work with React 15.X and 16.X.

-   Link https://mui.com/

**Docker:**

> Docker is an open platform for developing, shipping, and running
> applications. Docker enables you to separate your applications from
> your infrastructure so you can deliver software quickly. With Docker,
> you can manage your infrastructure in the same ways you manage your
> applications. By taking advantage of Docker's methodologies for
> shipping, testing, and deploying code quickly, you can significantly
> reduce the delay between writing code and running it in production.
>
> Link https://docs.docker.com/get-started/overview/
>
> **Go:**

-   The Go programming language is an open source project to make
    programmers more productive.

-   Go is expressive, concise, clean, and efficient. Its concurrency
    mechanisms make it easy to write programs that get the most out of
    multicore and networked machines, while its novel type system
    enables flexible and modular program construction. Go compiles
    quickly to machine code yet has the convenience of garbage
    collection and the power of run-time reflection. It\'s a fast,
    statically typed, compiled language that feels like a dynamically
    typed, interpreted language.

> Link https://go.dev/learn/

**Golang ORMs**

-   Go community has built a number of Object Relational Mapping
    libraries (ORMs) to allow Go developers to use JSON key:value pair
    syntax and encoding to map directly to a SQL database like
    PostgreSQL. ORMs enable developers to use their native programming
    paradigm to map data to SQL. An ORM transforms your database
    information to Golang objects and vice-versa. When working with an
    ORM, instead of writing SQL queries directly into your application,
    you can map your data much better using Golang struct.

> **GORM attributes**

-   Go get -u gorm.io/gorm

-   Go get -u gorm.io/driver/sqlite/

-   Associations (Has One, Has Many, Belongs To, Many To Many,
    Polymorphism, Single-table inheritance)

-   Hooks (Before/After Create/Save/Update/Delete/Find)

-   Eager loading with Preload, Joins

-   Transactions, Nested Transactions, Save Point, RollbackTo to Saved
    Point

-   Context, Prepared Statement Mode, DryRun Mode

-   Batch Insert, FindInBatches, Find/Create with Map, CRUD with SQL
    Expr and Context Valuer

-   SQL Builder, Upsert, Locking, Optimizer/Index/Comment Hints, Named
    Argument, SubQuery

-   Composite Primary Key, Indexes, Constraints

-   Auto Migrations

-   Logger

-   Extendable, flexible plugin API: Database Resolver (Multiple
    Databases, Read/Write Splitting) / Prometheus...

-   Every feature comes with tests

-   Developer Friendly

> Information:
>
> Stackoverflow - https://stackoverflow.com/questions/tagged/go-gorm
>
> Github Issues - <https://github.com/go-gorm/gorm/issues>
>
> https://jfrog.com/blog/top-go-modules-golang-web-apis-with-gorm/

**Postgress:**

> PostgreSQL is an object-relational database management system (ORDBMS)
> based on POSTGRES, Version 4.2, developed at the University of
> California at Berkeley Computer Science Department. POSTGRES pioneered
> many concepts that only became available in some commercial database
> systems much later.

**Postgress: attributes**

-   PostgreSQL is an open-source descendant of this original Berkeley
    code. It supports a large part of the SQL standard and offers many
    modern features:

-   complex queries

-   foreign keys

-   triggers

-   updatable views

-   transactional integrity

-   multi-version concurrency control

-   Also, PostgreSQL can be extended by the user in many ways, for
    example by adding new

-   data types

-   functions

-   operators

-   aggregate functions

-   index methods

-   procedural languages

-   And because of the liberal license, PostgreSQL can be used,
    modified, and distributed by anyone free of charge for any purpose,
    be it private, commercial, or academic.

-   **Link: https://www.postgresql.org/docs/current/**

**REACT:**

> React (also known as React.js or ReactJS) is a free and open-source
> front-end JavaScript library, for building user interfaces based on UI
> components. It is maintained by Meta (formerly Facebook) and a
> community of individual developers and companies. React can be used as
> a base in the development of single-page, mobile, or server-rendered
> applications with frameworks like Next.js. However, React is only
> concerned with state management and rendering that state to the DOM,
> so creating React applications usually requires the use of additional
> libraries for routing, as well as certain client-side
> functionality.\[Wikipedia\]

-   Link: https://reactjs.org/docs/getting-started.html

**AWS:**

-   Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that
    provides on-demand cloud computing platforms and APIs to
    individuals, companies, and governments, on a metered pay-as-you-go
    basis. These cloud computing web services provide distributed
    computing processing capacity and software tools via AWS server
    farms. One of these services is Amazon Elastic Compute Cloud (EC2),
    which allows users to have at their disposal a virtual cluster of
    computers, available all the time, through the Internet. AWS\'s
    virtual computers emulate most of the attributes of a real computer,
    including hardware central processing units (CPUs) and graphics
    processing units (GPUs) for processing; local/RAM memory;
    hard-disk/SSD storage; a choice of operating systems; networking;
    and pre-loaded application software such as web servers, databases,
    and customer relationship management (CRM).

-   AWS services are delivered to customers via a network of AWS server
    farms located throughout the world. Fees are based on a combination
    of usage (known as a \"Pay-as-you-go\" model), hardware, operating
    system, software, or networking features chosen by the subscriber
    required availability, redundancy, security, and service options.
    Subscribers can pay for a single virtual AWS computer, a dedicated
    physical computer, or clusters of either.Amazon provides select
    portions of security for subscribers (e.g. physical security of the
    data centers) while other aspects of security are the responsibility
    of the subscriber (e.g. account management, vulnerability scanning,
    patching). AWS operates from many global geographical regions
    including 6 in North America.

-   Amazon markets AWS to subscribers as a way of obtaining large-scale
    computing capacity more quickly and cheaply than building an actual
    physical server farm.All services are billed based on usage, but
    each service measures usage in varying ways. As of 2021 Q4, AWS has
    33% market share for cloud infrastructure while the next two
    competitors Microsoft Azure and Google Cloud have 21%, and 10%
    respectively, according to Synergy Group.\[Wikipedia\]
