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
      <div className="container-fluid bg-grad fixed-top head w-100 px-1">
        <div className="container px-2 py-1">
          <div className="nav-logo text-light text-right h4 mb-0 mt-1">
            <span className="float-left"><i className="fa fa-lightbulb-o text-dark"></i></span>
           Timeline.
          </div>
        </div>
      </div>
    );
  }
}
