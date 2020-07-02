import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {

  funLogOut=()=>{
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div className="container-fluid px-1 fixed-bottom w-100 foot">
        <div className="container d-flex justify-content-between px-2 py-1">
          <Link className="btn btn-lg text-dark" to="/user">
            <i className="fa fa-fw fa-user-circle"></i>
          </Link>
          <Link className="btn btn-lg text-dark" to="/messages">
            <i className="fa fa-fw fa-bars"></i>
          </Link>
          <Link className="btn btn-lg text-dark" to="/new-message">
            <i className="fa fa-fw fa-plus"></i>
          </Link>
          <Link className="btn btn-lg text-dark" to="/info">
            <i className="fa fa-fw fa-info-circle"></i>
          </Link>
          <Link className="btn btn-lg text-dark" to="/" onClick={this.funLogOut}>
            <i className="fa fa-fw fa-power-off"></i>
          </Link>
        </div>
      </div>
    );
  }
}
