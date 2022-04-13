//ToDo: Need the button to do something. As well as figure out how I want to fetch users through the map.
//ToDo: Refactor and make it more readable.
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

export default class TutorMain extends React.Component {
  state = {
    loading: true,
    session: null,
    firstSession: null,
    firstUser: null,
    currentUser: null,
  };

  async componentDidMount() {
    const url = "http://localhost:8080/sessions/";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const user = await this.fetchUser(data[0].student);
      console.log(data);
      console.log(data[1]);
      this.setState({
        session: data,
        firstSession: data[0],
        firstUser: user,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUser(userId) {
    const userResponse = await fetch(`http://localhost:8080/users/${userId}/`);
    const user = await userResponse.json();
    return user;
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (this.state.firstUser == null)
      return <div>I'm sorry but couldn't load user</div>;

    return (
      <>
        <div className="MainView">
          <SessionGlance
            name={this.state.firstUser.name}
            email={this.state.firstUser.email}
            course={this.state.firstSession.course}
            description={this.state.firstSession.description}
            retrospective={this.state.firstSession.retrospective}
          />
        </div>
        <div className="SecondaryView">
          <Grid
            container
            spacing={4}
            style={useStyles.gridContainer}
            justify="center"
          >
            {this.state.session.slice(1).map((currentSession) => (
              <Grid item xs={12} sm={12} md={12}>
                <StudentCard
                  name={currentSession.name}
                  email={currentSession.email}
                  course={currentSession.course}
                  description={currentSession.description}
                  retrospective={currentSession.retrospective}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}
