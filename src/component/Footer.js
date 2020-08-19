import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container-fluid bg-grad foot text-light">
        <div className="container pt-3">
          <div className="row pt-3 pb-0">
            <div className="col-md-12 text-center">
            <Link
              className="foot-logo text-decoration-none text-light"
              to="/"
              data-toggle="tooltip"
              data-placement="top"
              title="Timeline."
            >
              Timeline.
            </Link>
              <p className="mb-4 mt-0">
               Blog Network
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center p-4 form-bg text-dark shadow">Designed by <span className="text-success">Karan Das</span></div>
      </React.Fragment>
    );
  }
}
