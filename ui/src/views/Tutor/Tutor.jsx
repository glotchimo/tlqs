import React from "react";
import React, { useState, useEffect } from "react";
import SessionGlance from "./SessionGlance";
import StudentCard from "./StudentCard";
import Grid from "@mui/material/Grid";

const stylingObject = {
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },
  container: {
    backgroundColor: "#525E75",
    color: "#fff",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function Tutor() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sessionAndUsers, setSessionAndUsers] = useState([]);
  const previousSessionAndUsers = React.useRef(sessionAndUsers);
  const previousData = React.useRef(data);

  const fetchUsers = async (userId) => {
    try {
      let response = await fetch(`/users/${userId}/`);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const fetchCourse = async (classId) => {
    try {
      let response = await fetch(`/courses/${classId}/`);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const loadData = async () => {
    try {
      let response = await fetch(`/sessions/`);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const loadAllSessionsUsersAndClasses = async () => {
    try {
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        if (!data[i].completed) {
          let currentSession = {
            session: data[i],
            class: await fetchCourse(data[i].course),
            user: await fetchUsers(data[i].student),
          };
          arr.push(currentSession);
        }
      }
      return arr;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData().then((data) => {
      setData(data);
    });
  }, []);
  useEffect(() => {
    if (data != previousData.current) {
      loadAllSessionsUsersAndClasses().then((data) => {
        setSessionAndUsers(data);
      });
    }
  }, [data]);
  useEffect(() => {
    if (previousSessionAndUsers.current !== sessionAndUsers) {
      setIsLoading(false);
    }
  }, [sessionAndUsers]);

  if (isLoading) {
    return (
      <div style={stylingObject.container}>
        <h1>Loading Sessions...</h1>
      </div>
    );
  }

  if (sessionAndUsers.length === 0) {
    return (
      <div style={stylingObject.container}>
        <h1>Woohoo! You're all caught up with everything. </h1>
      </div>
    );
  }

  return (
    <>
      <div style={stylingObject.container}>
        <SessionGlance
          style={stylingObject.container}
          key={sessionAndUsers[0].session.id}
          id={sessionAndUsers[0].session.id}
          name={sessionAndUsers[0].user.name}
          email={sessionAndUsers[0].user.email}
          course={
            sessionAndUsers[0].class.code +
            " " +
            sessionAndUsers[0].class.title
          }
          description={sessionAndUsers[0].session.description}
        />
      </div>

      <div className="SecondaryView">
        <Grid
          container
          spacing={4}
          style={stylingObject.gridContainer}
          justify="center"
        >
          {sessionAndUsers.slice(1).map((currentSession) => (
            <Grid item xs={12} key={currentSession.session.id}>
              <StudentCard
                name={currentSession.user.name}
                email={currentSession.user.email}
                course={
                  currentSession.class.code + " " + currentSession.class.title
                }
                description={currentSession.session.description}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
