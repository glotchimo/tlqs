//ToDo: This is a rough draft that needs to be cleaned up. There are some areas that I can shrink down and make simpler.
//ToDo: For Fun: Make button delete the current session until we add a field to mark sessions completed.
import React from "react";
import SessionGlance from "./SessionGlance";
import StudentCard from "./StudentCard";
import WaitingPage from "./WaitingPage";
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
    usersList: null,
    arrayOfSessionPlusUsers: [],
  };

  async componentDidMount() {
    const url = "http://localhost:8080/sessions/";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const user = await this.fetchUser(data[0].student);

      this.setState({
        session: data,
        firstSession: data[0],
        firstUser: user,
        usersList: await this.loadAllUsers(data),
        loading: false,
      });

      this.setState({
        arrayOfSessionPlusUsers: await this.loadUsersAndSessions(
          data,
          this.state.usersList
        ),
      });

        this.setState({
            firstUser:this.state.arrayOfSessionPlusUsers[0].user, 
            firstSession:this.state.arrayOfSessionPlusUsers[0].session
        });

        console.log(this.state.arrayOfSessionPlusUsers);

    } catch (error) {
      console.log(error);
    }
  }

  async loadUsersAndSessions(session, usersList) {
    const arrayOfSessionPlusUsers = [];
    for (let i = 0; i < session.length; i++) {
      if (!session[i].completed) {
        arrayOfSessionPlusUsers.push({
          session: session[i],
          user: usersList[i],
        });
      }
    }
    return arrayOfSessionPlusUsers;
  }

  async loadAllUsers(data) {
    const users = [];
    for (let i = 0; i < data.length; i++) {
      const user = await this.fetchUser(data[i].student);
      users.push(user);
    }
    return users;
  }

  async fetchUser(userId) {
    const userResponse = await fetch(`http://localhost:8080/users/${userId}/`);
    const user = await userResponse.json();
    return user;
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <WaitingPage />
        </div>
      );
    }

    return (
      <>
        <div className="MainView">
          <SessionGlance
            id={this.state.firstSession.id}
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
            {this.state.arrayOfSessionPlusUsers
              .slice(1)
              .map((currentSession) => (
                <Grid item xs={12} sm={12} md={12}>
                  <StudentCard
                    name={currentSession.user.name}
                    email={currentSession.user.email}
                    course={currentSession.session.course}
                    description={currentSession.session.description}
                    retrospective={currentSession.session.retrospective}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </>
    );
  }
}
