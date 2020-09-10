import React from 'react';
import './App.css';
import UserCreate from './components/UserCreate';
import UserList from './components/UserList';
import Table from './components/Table';


export class App extends React.Component {

  state = {
    loading: true,
    person: null
  }

  componentDidMount() {
    // const url = "http://usermainapp.herokuapp.com/getallusers";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({ person: data.results[0], loading: false });
    console.log("gokul");
  }


  render() {
    return (
      <div className="App">
        <h1>User Account Maintenance Application</h1>
       
        {/* <div>
          <div>{this.state.person.name.title}</div>
          <div>{this.state.person.name.first}</div>
          <div>{this.state.person.name.last}</div>
          <img src={this.state.person.picture.large} />
        </div> */}

        
      </div>
    );
  }
}

export default App;
