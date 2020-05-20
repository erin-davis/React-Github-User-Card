import React, {Component} from 'react';
import './App.css';
import UserInfo from "./Components/UserInfo.js";


class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "Erin!",
      user: [],
      people: []
    }
//      console.log('from app', this.state.user);
  }

  render(){
    return (
      <div className="App">
        <h1>React Github User Card for {this.state.name}</h1>
        <UserInfo />

      </div>
    )
  }
}

export default App;
