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
    //first axios if for a list of 30 random gh users
    axios.get(`https://api.github.com/users`)
      .then(res => {
        const people = res.data;
        console.log("this one is random users",people);
        this.setState({people: people})
      })
      .catch(err =>{
        console.log("this is the error within the people axios:", err);
      })
      //I'm doing a second axios call for a single user (me)
      axios.get(`https://api.github.com/users/erin-davis`)
        .then(res =>{
          const user = res.data;
          console.log('this is only me', user);
          this.setState({user: user})
        })
        .catch(err =>{
          console.log('this error is from the single user axios', err);
        })
  }

  render(){
    return (
      <div>

      </div>
    )
  }
}
