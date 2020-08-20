import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./component/Posts";
import Create from "./component/Create";
import Header from "./component/Header";
import Info from "./component/Info";
import SignUp from "./component/SignUp";
import PrivateRoute from "./component/PrivateRoute"
import Footer from "./component/Footer";
import Profile from "./component/Profile";
import Login from "./component/Login";


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Header />
          <div className="container-fluid master-holder bg-light">
            
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
                  <PrivateRoute exact path="/create" component={Create} />
                  <PrivateRoute exact path="/" component={Posts} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <PrivateRoute exact path="/info" component={Info} />
                </Switch>
           
          </div>
          <Footer/>
        </Router>
      </Provider>
    );
  }
}
