import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      loading: false,
    };
  }

  componentDidMount() {
    this.funSetUsername();
  }

  funSetUsername = () => {
    let name;
    if (localStorage.getItem("username") === "") {
      name = "Anonymous";
    } else {
      name = localStorage.getItem("username");
    }

    this.setState({ username: name });
  };

  funLogOut=()=>{
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div className="container-fluid form-bg head px-0">
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link
              className="nav-logo mb-0 text-decoration-none text-dark"
              to="/all-posts"
              data-toggle="tooltip"
              data-placement="top"
              title="Timeline."
            >
              Timeline.
            </Link>
            <button
              className="navbar-toggler border-dark py-1"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars text-dark"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <Link
                  className="nav-item nav-link text-dark"
                  to="/user"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Profile"
                >
                  Profile
                </Link>
                <Link
                  className="nav-item nav-link text-dark"
                  to="/all-posts"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="All Posts"
                >
                  Posts
                </Link>
                <Link
                  className="nav-item nav-link text-dark"
                  to="/new-post"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Create new Post"
                >
                  Create
                </Link>
                <Link
                  className="nav-item nav-link text-dark"
                  to="/info"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="About the project"
                >
                  About
                </Link>
                <Link
                  className="nav-item nav-link text-dark"
                  to="/"
                  onClick={this.funLogOut}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="LogOut"
                >
                  Logout
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
