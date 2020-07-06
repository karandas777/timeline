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
      <div className="container-fluid bg-grad head px-1">
        <div className="container py-0">
          <div className="nav-logo text-light mb-0 mt-1">
           Timeline.
          </div>
        </div>
      </div>
    );
  }
}
