import * as React from "react";
import Grid from "@mui/material/Grid";
import StudentCard from "./StudentCard";
import Grid from "@mui/material/Grid";

const useStyles = {
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },
};

user = {
  id: "1",
  userid: "1",
  tutorid: "1",
  courseid: "1",
  topicid: "1",
  name: "Luis Garcia",
  email: "lgarcia29@ewu.edu",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  retrospective:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  role: "1",
  //sessions
  //Courses
};

export default function () {
  return (
    <>
      <Grid
        container
        spacing={4}
        style={useStyles.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <StudentCard
            name={user.name}
            email={user.email}
            role={user.role}
            description={user.description}
            retrospective={user.retrospective}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StudentCard
            name={user.name}
            email={user.email}
            role={user.role}
            description={user.description}
            retrospective={user.retrospective}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StudentCard
            name={user.name}
            email={user.email}
            role={user.role}
            description={user.description}
            retrospective={user.retrospective}
          />
        </Grid>
      </Grid>
    </>
  );
}
