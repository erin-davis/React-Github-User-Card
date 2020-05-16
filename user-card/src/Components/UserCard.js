import React from 'react';
import UserInfo from "./UserInfo.js";

class UserCard extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className="user-card">
        {props.user.map((person)=>{
          return <UserCard key={item.id} user={person} />
        })}
      </div>
    )
  }
}
