//ToDo: Fix logic. Skip first user for secondary view.

import React from "react";
import SessionGlance from "./SessionGlance";
import StudentCard from "./StudentCard";
import Grid from "@mui/material/Grid";

const useStyles = {
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },
};

const user = {
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

export default class TutorMain extends React.Component {
  state = {
    loading: true,
    firstPerson: null,
    persons: null,
  };

  async componentDidMount() {
    //calling api
    //fetching 3 random users
    const url = "https://randomuser.me/api/?results=3";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);

    //catching
    this.setState({
      loading: false,
      firstPerson: data.results[0],
      persons: data.results,
    });

    console.log(this.state.firstPerson);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.firstPerson || !this.state.persons)
      return <div>I'm sorry but couldn't load user</div>;
    return (
      <>
        <div className="MainView">
          <SessionGlance
            name={`${this.state.firstPerson.name.first} ${this.state.firstPerson.name.last}`}
            image={this.state.firstPerson.picture.large}
            email={`${this.state.firstPerson.email}`}
            description={user.description}
            retrospective={user.retrospective}
          />
        </div>

        <div className="SecondaryView">
          <Grid
            container
            spacing={4}
            style={useStyles.gridContainer}
            justify="center"
          >
            {this.state.persons.map((person) => (
              <Grid item xs={12} sm={6} md={4}>
                <StudentCard
                  name={`${person.name.first} ${person.name.last}`}
                  image={person.picture.large}
                  email={`${person.email}`}
                  description={user.description}
                  retrospective={user.retrospective}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}
