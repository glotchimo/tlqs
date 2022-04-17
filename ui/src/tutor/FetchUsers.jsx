import React from 'react';

export default class FetchUsers extends React.Component {
    state = {
        firstUser: null, 
    }

    async componentDidMount(){
        const url = "http://localhost:8080/users/"
        try{
            const response = await fetch(url);
            //always 
            const data = await response.json();
            this.setState({
                firstUser: data[0]
            })

            console.log(data);
            console.log(this.state.firstUser);


        }catch(e){
            console.log(e)
        }
    }

  render() {
    return (
        <div>
        <h1>Fetch Users</h1>
        <h1>{this.state.firstUser.name}</h1>
      </div>
    );
  }
}
