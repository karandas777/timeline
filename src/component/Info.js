import React, { Component } from "react";
import PageTitle from "./PageTitle";

export default class Info extends Component {
  render() {
    return (
      <div className="container py-3">
        <PageTitle title="About the Project" />
        <div className="col-md-8 mt-5 text-secondary form-bg mx-auto p-3 rounded">
            <div
              className="foot-logo text-dark"
            >
              Timeline.
            </div>
          is a discussion or informational website consisting of discrete, often informal diary-style text entries (posts).
          <div className="mt-2"></div>
          Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the page.
          <div className="mt-3"></div>
        </div>
      </div>
    );
  }
}
