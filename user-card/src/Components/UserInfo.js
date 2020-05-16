import React from "react";
import axios from "axios";


export default class UserInfo extends React.Component{

  //constructor
  constructor(){
    super();
    this.state = {
      user: [],
      people: []
    }
  }

  //componentDidMount with axios call
  componentDidMount(){
    //https://api.github.com/users/erin-davis
    axios.get('https://api.github.com/users')
      .then(res => {
        const people = res.data;
        console.log("this one is just data",people);
        this.setState({people: people})
      })
      .catch(err =>{
        console.log("this is the error:", err);
      })
      //I'm doing a second axios call for a random list of 30 gh users

  }

  render(){
    return (
      <div>
        <h4>check the console</h4>
      </div>
    )
  }
}
