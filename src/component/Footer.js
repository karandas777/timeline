import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container-fluid bg-grad foot text-light">
        <div className="container py-3">
          <div className="row py-4">
            <div className="col-md-4 pt-3 pb-3">
            <Link
              className="foot-logo text-decoration-none text-light"
              to="/all-posts"
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
            <div className="col-md-3 pt-3 pb-3">
              <h4 className="text-light">Navigate</h4>
              <ul className="list-group mt-3 ml-3">
                <li>
                  <Link className="text-light nav-link" to="/user">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="text-light nav-link" to="/all-posts">
                    Posts
                  </Link>
                </li>
                <li>
                  <Link className="text-light nav-link" to="/new-post">
                    Create
                  </Link>
                </li>
                <li>
                  <Link className="text-light nav-link" to="/info">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5 pt-3 pb-3">
              <h4 className="text-light">Contact</h4>
              <div className="mt-4">
                    <div className="mb-3">
                        <i className="fa fa-envelope fa-fw mr-2"></i>
                        <a className="text-decoration-none text-light" href="mailto:karandas.21.08.98@gmail.com">Email</a>
                    </div>
                    <div className="mb-3">
                        <i className="fa fa-github fa-fw mr-2"></i>
                        <a className="text-decoration-none text-light" href="https://github.com/karandas777">Github</a>
                    </div>
                  <div className="my-3">
                        <i className="fa fa-globe fa-fw mr-2"></i>
                        <a className="text-decoration-none text-light" href="https://karandas.netlify.app/">Website</a>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center p-4 form-bg text-secondary">Designed by <span className="text-dark">Karan Das</span></div>
      </React.Fragment>
    );
  }
}