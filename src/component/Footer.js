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
        <div className="container col-md-4 d-flex justify-content-between px-2 py-1">
          <Link className="btn text-dark" to="/user" data-toggle="tooltip" data-placement="top" title="Profile">
            <i className="fa fa-fw fa-user-circle"></i>
          </Link>
          <Link className="btn text-dark" to="/messages" data-toggle="tooltip" data-placement="top" title="All Posts">
            <i className="fa fa-fw fa-bars"></i>
          </Link>
          <Link className="btn text-dark" to="/new-message" data-toggle="tooltip" data-placement="top" title="Create new Post">
            <i className="fa fa-fw fa-plus"></i>
          </Link>
          <Link className="btn text-dark" to="/info" data-toggle="tooltip" data-placement="top" title="About the project">
            <i className="fa fa-fw fa-info-circle"></i>
          </Link>
          <Link className="btn text-dark" to="/" onClick={this.funLogOut} data-toggle="tooltip" data-placement="top" title="LogOut">
            <i className="fa fa-fw fa-power-off"></i>
          </Link>
        </div>
      </div>
    );
  }
}
