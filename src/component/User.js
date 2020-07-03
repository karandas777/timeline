import React, { Component } from "react";
import PageTitle from './PageTitle';
import {connect} from 'react-redux';
import {funGetSortedPosts} from '../action/post.action';
import Loading from "./Loading";
import PostCard from "./PostCard";


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
        <div className="my-4 display-4">
            <img src={imgUrl} alt="userprofile" className="bg-grad userprofile rounded-pill mb-2 mr-3" />
            {name}
        </div>

        <div className="text-secondary text-center my-3">Posts by : {name}</div>

        <div className="pb-2 px-0 my-4">
          {this.props.sortedPosts.length === 0 ? <Loading /> : null}
          {this.props.sortedPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sortedPosts : state.post.sortedPosts,
})

export default connect(mapStateToProps,{funGetSortedPosts})(User);