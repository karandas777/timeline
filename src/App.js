import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Messages from "./component/Messages";
import NewMessage from "./component/NewMessage";
import Header from "./component/Header";
import User from "./component/User";
import Footer from "./component/Footer";
import Info from './component/Info';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container-fluid px-1 py-4 my-4">
            <Route exact path="/" component={Home} />
            <Route exact path="/new-message" component={NewMessage} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/user" component={User} />
            <Route exact path="/info" component={Info} />
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}
