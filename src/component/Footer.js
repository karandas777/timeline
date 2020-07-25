import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container-fluid bg-grad foot text-light">
        <div className="container py-3">
          <div className="row pt-4 pb-2">
            <div className="col-md-4 pt-3">
            <Link
              className="foot-logo text-decoration-none text-light"
              to="/"
              data-toggle="tooltip"
              data-placement="top"
              title="Timeline."
            >
              Timeline.
            </Link>
              <p className="mb-5 mt-0 pr-5 mr-5">
                <i className="fa fa-play mr-2"></i>Blog Network
              </p>
            </div>


            <div className="col-md-5 pt-3">
              <h4 className="text-light">Navigate</h4>
              <ul className="list-group mt-3 mb-2">
                <div className="row p-0 m-0">
                  <div className="col-6">
                  <li>
                  <Link className="nav-link text-light" to="/user">
                    Profile
                  </Link>
                  </li>
                  <li>
                  <Link className="nav-link text-light" to="/all-posts">
                    Posts
                  </Link>
                  </li>
                  </div>
                  <div className="col-6">
                  <li>
                  <Link className="nav-link text-light" to="/new-post">
                    Create
                  </Link>
                  </li>
                  <li>
                  <Link className="nav-link text-light" to="/info">
                    About
                  </Link>
                  </li>
                  </div>
                </div>
				      </ul>
            </div>

            <div className="col-md-3 pt-3">
              <h4 className="text-light">Contact</h4>
              <div className="mt-4">
                    <div className="mb-2 mt-2">
                        <i className="fa fa-envelope fa-fw mr-2"></i>
                        <a className="text-decoration-none text-light" href="mailto:karandas.21.08.98@gmail.com">Email</a>
                    </div>
                    <div className="mb-2">
                        <i className="fa fa-github fa-fw mr-2"></i>
                        <a className="text-decoration-none text-light" href="https://github.com/karandas777">Github</a>
                    </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <div className="text-center p-4 form-bg text-dark shadow">Designed by <span className="text-success">Karan Das</span></div>
      </React.Fragment>
    );
  }
}
