import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container-fluid bg-grad foot text-light">
        <div className="container pt-3">
          <div className="row pt-3 pb-5">
            <div className="col-md-8">
            <Link
              className="foot-logo text-decoration-none text-light"
              to="/"
              data-toggle="tooltip"
              data-placement="top"
              title="Timeline."
            >
              Timeline Blogs
            </Link>
            </div>

            <div className="col-md-4 pt-3">
                  
                  <a className="text-light h6 text-decoration-none text-left d-block my-3" href="https://github.com/karandas777">
                    <i className="fa fa-github mr-1 fa-fw"></i> Get connected on Github.
                  </a>
                  <a className="text-light h6 text-decoration-none text-left d-block my-3" href="https://pro-list.netlify.app/">
                    <i className="fa fa-bars mr-1 fa-fw"></i> View my other Projects.
                  </a>
                  <a className="text-light h6 text-decoration-none text-left d-block mb-3" href="mailto:karandas.21.08.98@gmail.com">
                    <i className="fa fa-envelope mr-1 fa-fw"></i> Contact via Mail.
                  </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center p-4 form-bg text-dark shadow">Designed by <span className="text-success">Karan Das</span></div>
      </React.Fragment>
    );
  }
}
