import React from "react";
//This is an example for fetching sessions. 
//reference material
export default class FetchSessions extends React.Component {
  state = {
    loading: true,
    session: null,
    firstSession: null,
    firstUser: null,
  };

  async componentDidMount() {
    const url = "http://localhost:8080/sessions/";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const user = await this.userDidMount(data[0].student);
    
      this.setState({
        session: data,
        firstSession: data[0],
        firstUser: user,
        loading: false,
      });
        console.log(this.state.firstSession);
    } catch (error) {
      console.log(error);
    }
  }

  async userDidMount(userId) {
    const userResponse = await fetch(`http://localhost:8080/users/${userId}/`);
    const user = await userResponse.json();
    return user;
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (this.state.session === null)
      return <div>I'm sorry but couldn't load user</div>;
    return (
      <div>
        <h1>Hello from session</h1>
        <h2>Student: {this.state.firstUser.name}</h2>
        <div>Course: {this.state.firstSession.course}</div>
        <div>Description: {this.state.firstSession.description}</div>
        <div>Retrospective: {this.state.firstSession.retrospective}</div>
        <div>Topic: {this.state.firstSession.topic}</div>
      </div>
    );
  }
}
