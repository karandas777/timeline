import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container pt-5 text-dark rounded">
        <div className="landing-holder">
          <div className="landing-head my-5 text-center">Express Yourself</div>
          <hr className="w-75 bg-grad rounded-pill border-light my-3 pt-1" />
          <div className="mt-5 text-center">
            <Link className="btn btn-lg btn-dark" to="/login">
              Get Started
            </Link>
          </div>
        </div>

        <div className="p-3 mb-4">
          <div className="foot-logo text-dark mb-2">About us</div>
          Timeline is a discussion or informational website consisting of
          discrete, often informal diary-style text entries (posts). Posts are
          typically displayed in reverse chronological order, so that the most
          recent post appears first, at the top of the page.
        </div>

        <div className="p-3 mb-4">
          <div className="foot-logo text-dark mb-2">Design</div>
          The design of the site consists of two-tone minimal asthetics, a
          mixture of light and vibrant colors.
          <div className="mt-3">
            Colors used :
            <button className="btn bg-grad rounded-pill border-dark mx-2">
              Gradient Green
            </button>
            &
            <button className="btn form-bg rounded-pill border-dark ml-2">
              Off White
            </button>
          </div>
        </div>

        <div className="p-3 mb-5">
          <div className="foot-logo text-dark mb-2">Development</div>
          The server-side of this project consists of a NodeJS Server connected to a MongoDB Database that stores all the data.
          The client-side is a ReactJS application that uses Redux to manage the data and is themed using Bootstrap & CSS.
        </div>


      </div>
    );
  }
}
