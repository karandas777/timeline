import React, { Component } from "react";
import PageTitle from './PageTitle';

export default class User extends Component {
  render() {
    return (
      <div className="container py-3">
        <PageTitle title="User Profile" />
      </div>
    );
  }
}
