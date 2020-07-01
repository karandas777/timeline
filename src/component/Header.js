import React, { Component } from "react";

export default class Header extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             loading:false,
        }
    }
    

    componentDidMount(){
        this.funSetUsername();
    }

    funSetUsername=()=>{
        let name;
        if(localStorage.getItem('username')===""){
            name = "Anonymous"
        }
        else{
            name = localStorage.getItem('username');
        }

        this.setState({username:name});
    }

  render() {
    return (
      <div className="container-fluid top-bar fixed-top w-100 px-1">
        <div className="container p-2">
          <div className="nav-logo text-light h3 mb-0 mt-1">
            <img className="nav-icon pb-1 mr-1" src={require('../assets/logo.png')} alt="logo" />
            <span className="text-warning">Time</span>
            line.
          </div>
        </div>
      </div>
    );
  }
}
