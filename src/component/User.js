import React, { Component } from "react";
import PageTitle from './PageTitle';

export default class User extends Component {
  render() {
    const name = localStorage.getItem('username');
    const imgUrl = "https://robohash.org/"+localStorage.getItem('username')+".png";

    return (
      <div className="container py-3">
        <PageTitle title="User Profile" />
        <div className="my-3 display-4 text-light">
            <img src={imgUrl} alt="userprofile" className="bg-dark rounded-pill mr-3" />
            {name}
        </div>
      </div>
    );
  }
}
