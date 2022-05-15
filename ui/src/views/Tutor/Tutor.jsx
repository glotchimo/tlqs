import React from "react";
import React, { useState, useEffect } from "react";
import SessionGlance from "./SessionGlance";
import StudentCard from "./StudentCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const styles = {
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

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sessionAndUsers, setSessionAndUsers] = useState([]);
  const previousSessionAndUsers = React.useRef(sessionAndUsers);
  const previousData = React.useRef(data);

  const displaySessionData = (currentSession) => {
    return (
      <Grid item xs={6} key={currentSession.session.id}>
        <StudentCard
          key={currentSession.session.id}
          id={currentSession.session.id}
          name={currentSession.user.name}
          email={currentSession.user.email}
          topic={currentSession.session.topic}
          course={currentSession.class.code + " " + currentSession.class.title}
          description={currentSession.session.description}
        />
      </Grid>
    );
  };

  const fetchAllSessionData = () => {
    fetch("http://localhost:8080/sessions/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  const fetchUser = async (userId) => {
    try {
      let response = await fetch(`http://localhost:8080/users/${userId}/`);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCourse = async (classId) => {
    try {
      let response = await fetch(`http://localhost:8080/courses/${classId}/`);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const loadData = async () => {
    try {
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        if (!data[i].completed) {
          let currentSession = {
            session: data[i],
            class: await fetchCourse(data[i].course),
            user: await fetchUser(data[i].student),
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
    fetchAllSessionData();
  }, []);

  useEffect(() => {
    if (data != previousData.current) {
      loadData().then((data) => setSessionAndUsers(data));
    }
  }, [data]);

  useEffect(() => {
    if (previousSessionAndUsers.current !== sessionAndUsers) {
      setIsLoading(false);
    }
  }, [sessionAndUsers]);

  if (isLoading) {
    return (
      <div style={styles.container}>
        <h1>Loading Sessions...</h1>
      </div>
    );
  }

  if (sessionAndUsers.length === 0) {
    return (
      <div style={styles.container}>
        <h1>Woohoo! You're all caught up with everything.</h1>
      </div>
    );
  }

  return (
    <>
      <div style={styles.container}>
        <SessionGlance
          style={styles.container}
          key={sessionAndUsers[0].session.id}
          id={sessionAndUsers[0].session.id}
          name={sessionAndUsers[0].user.name}
          email={sessionAndUsers[0].user.email}
          topic={sessionAndUsers[0].session.topic}
          course={
            sessionAndUsers[0].class.code + " " + sessionAndUsers[0].class.title
          }
          description={sessionAndUsers[0].session.description}
        />
      </div>

      <div className="SecondaryView">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {sessionAndUsers.slice(1).map((currentSession) => {
              return displaySessionData(currentSession);
            })}
          </Grid>
        </Box>
      </div>
    </>
  );
};
