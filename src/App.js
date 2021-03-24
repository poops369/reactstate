import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile'
import React, { Component } from 'react'

 class App extends Component {
   constructor(){
  super();
  this.state= {
    show: false,

  };
  this.handleClick=()=>{
    this.setState({show: !this.state.show});
  };
}
  render() {
      return (
      <div className="App">
        <button variant="dark" onClick={this.handleClick}>
          show Profile
          </button> 
        {this.state.show ? (
          <div className="">
            <Profile />
            </div>
        ) :(
          <h1> Click on the button</h1>
        )
        
        }
      </div>
    );
  }
 }
export default App;
