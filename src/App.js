import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Messages from "./component/Messages";
import NewMessage from "./component/NewMessage";
import Header from "./component/Header";
import User from "./component/User";
import Info from "./component/Info";
import SignUp from "./component/SignUp";
import PrivateRoute from "./component/PrivateRoute"
import Footer from "./component/Footer";


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Header />
          <div className="container-fluid master-holder bg-light">
            
                <Switch>
                  <Route exact path="/login" component={Home} />
                  <Route exact path="/signup" component={SignUp} />
                  <PrivateRoute exact path="/new-post" component={NewMessage} />
                  <PrivateRoute exact path="/" component={Messages} />
                  <PrivateRoute exact path="/user" component={User} />
                  <PrivateRoute exact path="/info" component={Info} />
                </Switch>
           
          </div>
          <Footer/>
        </Router>
      </Provider>
    );
  }
}
