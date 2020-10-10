import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import './App.css';
import { Container, Columns, Column } from 'bloomer';

import RandomUser from './Components/RandomUser';

class App extends Component {
  state = {
    userData: [],
  };

  loadData = async () =>{
    const response = await fetch('https://randomuser.me/api/?results=6');
    const data = await response.json();
    return data;
  }

  handleClick = async () => {
    const userData = await this.loadData();
    
      this.setState({
        userData: userData.results,
      });
  }

  async componentDidMount(){
    const userData = await this.loadData();
    
      this.setState({
        userData: userData.results,
      });
    
  }

  render(){
    const { userData } = this.state;
  return (
    <div className="App">
      <Container isFluid>
      <header className="App-header">
        <h1>Random User App</h1>
      </header>
      <button onClick={this.handleClick}>Load more users</button>
      <Columns isCentered>
      {this.state.userData.length ? (
        <Column isSize='1/3'>
          <RandomUser userData={userData} />
        </Column>
      ):(
        <Column isSize='full'> No User Data Loaded!</Column>
      
      )}
      </Columns>
      </Container>
    </div>
  );
  }
};

export default App;
