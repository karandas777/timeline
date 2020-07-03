import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="nav-logo text-light text-center h1 mb-0 mt-3 pt-4">
          <img
            className="nav-icon bg-light rounded-pill pb-1 mb-2 mr-2"
            src={require("../assets/logo.png")}
            alt="logo"
          />
          <span className="mb-0">Timeline.</span>
        </div>
        <div className="px-4 pb-0 pt-5 mt-5">
          <Link className="btn btn-light rounded-pill text-left w-100 mb-3" to="/user">
            <i className="fa fa-fw fa-user-circle"></i> Profile
          </Link>
          <Link className="btn btn-light rounded-pill text-left w-100 mb-3" to="/messages">
            <i className="fa fa-fw fa-bars"></i> All Posts
          </Link>
          <Link className="btn btn-light rounded-pill text-left w-100 mb-3" to="/new-message">
            <i className="fa fa-fw fa-plus"></i> Create new Post
          </Link>
          <Link className="btn btn-light rounded-pill text-left w-100 mb-3" to="/info">
            <i className="fa fa-fw fa-info-circle"></i> About
          </Link>
          <Link className="btn btn-light rounded-pill text-left w-100 mb-3" to="/" onClick={this.funLogOut}>
            <i className="fa fa-fw fa-power-off"></i> Logout
          </Link>
        </div>
      </div>
    );
  }
}
