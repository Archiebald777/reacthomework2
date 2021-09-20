import { Component } from "react";
import UserImg from "../UserImg/UserImg";
import "./userCard.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user } = this.props;
    const { id, firstName, lastName, profilePicture, contacts } = user;
    const fullName = `${firstName} ${lastName}`.trim();
    return (
      <div className="card-wrapper">
        {fullName !== "" ? <h1> {fullName} </h1> : <h1> Invalid Name </h1>}
        <UserImg src={profilePicture} className="userImg" alt={fullName} />
        <p>Something about this Person(must be in Data.js</p>
        <a className="links" href="#">
          {contacts}
        </a>
      </div>
    );
  }
}

export default UserCard;
