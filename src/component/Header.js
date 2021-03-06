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

  render() {
    return (
      <div className="container-fluid bg-grad head px-0 shadow">
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link
              className="nav-logo mb-0 text-decoration-none text-light"
              to="/"
              data-toggle="tooltip"
              data-placement="top"
              title="Timeline."
            >
              Timeline.
            </Link>
            <button
              className="navbar-toggler border-light py-1"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars text-light"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <Link
                  className="nav-item nav-link text-light"
                  to="/profile"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Profile"
                >
                  Profile
                </Link>
                <Link
                  className="nav-item nav-link text-light"
                  to="/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="All Posts"
                >
                  Posts
                </Link>
                <Link
                  className="nav-item nav-link text-light"
                  to="/create"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Create new Post"
                >
                  Create
                </Link>
                <Link
                  className="nav-item nav-link text-light"
                  to="/info"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="About the project"
                >
                  About
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
