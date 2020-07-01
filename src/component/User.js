import React, { Component } from "react";
import PageTitle from './PageTitle';

export default class User extends Component {
  render() {
    const name = localStorage.getItem('username');
    const imgUrl = "https://robohash.org/"+name+".png";

    return (
      <div className="container py-3">
        <PageTitle title="User Profile" />
        <div className="my-3 display-4 text-light">
            <img src={imgUrl} alt="userprofile" className="bg-dark userprofile rounded-pill mb-2 mr-3" />
            {name}
            <br/>

            <div className="w-100 my-3 bg-black rounded p-3">
              <img src={require('../assets/under2.gif')} className="img-fluid w-100" alt="under const" />
            </div>
        </div>
      </div>
    );
  }
}
