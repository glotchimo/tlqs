import React from "react";
import React, { useState, useEffect } from "react";
import SessionGlance from "./SessionGlance";
import StudentCard from "./StudentCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SplashPage from "./SplashPage";

const styles = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#b7142e",
    fontSize: "20px",
  },
  gridContainer: {
    margin: "5 auto",
  },
};

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sessionsSorted, setSessionsSorted] = useState(false);
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

  const compareTimes = (timeA, timeB) => {
    let comparison = 0;
    if (timeA.session.created_at > timeB.session.created_at) {
      comparison = 1;
    } else if (timeA.session.created_at < timeB.session.created_at) {
      comparison = -1;
    }
    return comparison;
  };

  const fetchAllSessionData = () => {
    fetch("/sessions/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  const fetchUser = async (userId) => {
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

  //grab the list of sessions from the API
  useEffect(() => {
    fetchAllSessionData();
  }, []);

  //depend on all sessions to be loaded before sorting them out to users and sessions
  useEffect(() => {
    if (data != previousData.current) {
      loadData().then((data) => setSessionAndUsers(data));
    }
  }, [data]);

  //depends on all session and users to be loaded before updating the state to loaded.
  useEffect(() => {
    if (previousSessionAndUsers.current !== sessionAndUsers) {
      setIsLoading(false);
    }
  }, [sessionAndUsers]);

  //If everything has been loaded into state then we can sort the sessions by time.
  if (!isLoading && !sessionsSorted && sessionAndUsers.length > 0) {
    sessionAndUsers.sort(compareTimes);
    setSessionsSorted(true);
  }

  if (isLoading) {
    return <SplashPage status="Loading...🚀" />;
  }

  if (sessionAndUsers.length === 0) {
    return (
      <SplashPage
        status="WooHoo! You're all caught up! 🎉"
        message="Refresh the page to check for new sessions."
      />
    );
  }

  return (
    <Box>
      <div className="MainView">
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
        <div className="SecondaryView">
          <Box sx={{ flexGrow: 1, m: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 18, lg: 24, xl: 36 }}
            >
              {sessionAndUsers.slice(1).map((currentSession) => {
                return displaySessionData(currentSession);
              })}
            </Grid>
          </Box>
        </div>
      </div>
    </Box>
  );
};
