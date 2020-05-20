import React from "react";
import axios from "axios";


export default class UserInfo extends React.Component{

  //constructor
  constructor(){
    super();
    this.state = {
      user: [],
      people: [],
      followers: []
    }
    console.log('inside constructor');
  }

  //componentDidMount with axios call
  componentDidMount(){
  //I'm using axios.all here to do three calls at once and make this neater
  let one = `https://api.github.com/users`;
  let two = `https://api.github.com/users/erin-davis`;
  let three = `https://api.github.com/users/erin-davis/followers`;

  const reqOne = axios.get(one);
  const reqTwo =  axios.get(two);
  const reqThree = axios.get(three);

  //order is people, user, followers (to be edited to be followers though)

  axios
    .all([reqOne, reqTwo, reqThree])
    .then(
      axios.spread((...res) =>{
        const resOne = res[0];
        const resTwo = res[1];
        const resThree = res[2];

        const people = resOne.data;
        const user = resTwo.data;
        const followers = resThree.data;

        //setting state
        this.setState({people: people, user: user, followers: followers})

        console.log(resOne.data, resTwo.data, resThree);
      })
    )
    .catch(errs =>{
      console.error(errs);
    })



}

  render(){
    return (
      <div className="user-card">
      <div className="individual">
      <h4>Name: {this.state.user.login}</h4>
                <p>ID: {this.state.user.id}</p>
      </div>
      {this.state.followers.map((item)=>{
        return(
          <div className="followers individual">
            <h4>Username: {item.login}</h4>
            <p>ID: {item.id}</p>
          </div>
        )
      })}
      {this.state.people.map((item) =>{
        return(
          <div className="individual">
          <h4>Username: {item.login}</h4>
          <p>ID: {item.id}</p>
          </div>
        )
      })}
      </div>
    )
  }
}
