import React, {Component} from 'react';
import './App.css';
import UserInfo from "./Components/UserInfo.js";

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "Erin!",
      user: [
      ]
    }
  }
  render(){
    return (
      <div className="App">
        React Github User Card for {this.state.name}
        <UserInfo />
      </div>
    )
  }
}

export default App;
