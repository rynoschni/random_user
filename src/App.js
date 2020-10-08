import React, { Component } from 'react';
import RandomUser from './Components/RandomUser';
import UserData from './userData';
import './App.css';

class App extends Component {
  state = {
    userData: UserData
  };

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User App</h1>
      </header>
      <RandomUser userData={this.state.userData.results[0]} />
    </div>
  )};
}

export default App;
