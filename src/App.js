import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Messages from "./component/Messages";
import NewMessage from "./component/NewMessage";
import Header from "./component/Header";
import User from "./component/User";
import Footer from "./component/Footer";
import Info from "./component/Info";
import SignUp from "./component/SignUp";
import PrivateRoute from "./component/PrivateRoute";
import Sidebar from "./component/Sidebar";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Header />
          <div className="container-fluid master-holder">
            <div className="row m-0">
              <div className="col-md-3 bg-grad p-0 side-bar overflow-auto">
                  <Sidebar/>
              </div>
              <div className="col-md-9 main-section overflow-auto">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/signup" component={SignUp} />
                  <PrivateRoute exact path="/new-message" component={NewMessage} />
                  <PrivateRoute exact path="/messages" component={Messages} />
                  <PrivateRoute exact path="/user" component={User} />
                  <PrivateRoute exact path="/info" component={Info} />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}
