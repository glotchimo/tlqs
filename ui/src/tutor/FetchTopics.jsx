import React from "react";

//reference material
export default class FetchTopics extends React.Component {
    
    state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    this.setState({
      person: data.results[0],
      loading: false,
    });

    console.log(data.results[0]);
  }


  render() {
      
    if(this.state.loading) {
      return <div>Loading...</div>
    }
      if(!this.state.person)
          return <div>I'm sorry but couldn't load user</div>
    return (
      <div>
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <div><img src={this.state.person.picture.large} alt="randomuser"/></div>
      </div>
    );
  }
}
