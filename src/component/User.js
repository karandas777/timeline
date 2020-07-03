import React, { Component } from "react";
import PageTitle from './PageTitle';
import {connect} from 'react-redux';
import {funGetSortedPosts} from '../action/post.action';

class User extends Component {

  componentDidMount(){
    this.getMyPosts();
  }

  getMyPosts=()=>{
    const name = localStorage.getItem('username');
    this.props.funGetSortedPosts({username:name});
  }

  render() {
    const name = localStorage.getItem('username');
    const imgUrl = "https://robohash.org/"+name+".png";

    return (
      <div className="container py-3">
        <PageTitle title="User Profile" />
        <div className="my-3 display-4">
            <img src={imgUrl} alt="userprofile" className="bg-grad userprofile rounded-pill mb-2 mr-3" />
            {name}
            <br/>

            <div className="w-100 my-3 bg-black rounded p-3">
              <img src={require('../assets/under2.gif')} className="img-fluid w-100" alt="under const" />
            </div>
        </div>
      </div>
    );
  }
}


export default connect(null,{funGetSortedPosts})(User);