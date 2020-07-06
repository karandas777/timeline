import React, { Component } from "react";
import PageTitle from './PageTitle';
import {connect} from 'react-redux';
import {funGetSortedPosts} from '../action/post.action';
import Loading from "./Loading";
import UserPostCard from "./UserPostCard";


class User extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      _id:"",
      username:"",
      post_title: "",
      post_cat: "",
      post_body: "",
      valid:true,
    }
  }

  componentDidMount(){
    this.getMyPosts();
  }

  funSetPost=(post)=>{
    this.setState({
      _id:post._id,
       username:post.username,
       post_title: post.post_title,
       post_cat: post.post_cat,
       post_body: post.post_body,
    })
  }

  funSetState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  funClearState = () => {
    this.setState({
      _id:"",
      username:"",
      post_title: "",
      post_cat: "",
      post_body: "",
    })
  }

  funUpdate = () => {
    const form = {
      _id: this.state._id,
      username: this.state.username,
      post_title: this.state.post_title,
      post_cat: this.state.post_cat,
      post_body: this.state.post_body,
    };
    console.log(form);
  };

  funValidator = () => {
    if (
      this.state._id === "" ||
      this.state.username === "" ||
      this.state.post_title === "" ||
      this.state.post_cat === "" ||
      this.state.post_body === ""
    ) {
      this.setState({ valid: false });
      return false;
    } else {
      this.setState({ valid: true });
      this.funUpdate();
    }
  };

  getMyPosts=()=>{
    window.scrollTo(0,0);
    const name = localStorage.getItem('username');
    this.props.funGetSortedPosts({username:name});
  }

  render() {
    console.log(this.state);
    const name = localStorage.getItem('username');
    const imgUrl = "https://robohash.org/"+name+".png";

    return (
      <div className="container py-3">
        <PageTitle title="User Profile" />

        <div className="mt-5 text-center">
          <img src={imgUrl} alt="userprofile" className="bg-grad userprofile rounded-pill" />
        </div>

        <div className="mb-5 mt-3 h1 text-center">
            
            {name} <i className="fa fa-check-circle text-primary"></i>
        </div>

        <div className="text-secondary text-center my-3">Posts</div>

        <div className="pb-2 px-0 my-4">
          {this.props.sortedPosts.length === 0 ? <Loading /> : null}
          {this.props.sortedPosts.map((post) => (
            <UserPostCard key={post._id} post={post} funSetPost={this.funSetPost} />
          ))}
        </div>

        <div
          className="modal fade"
          id="editor"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-left">
                  Hello
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa fa-close"></i>
                </button>
              </div>
              <div className="modal-body text-left">
              <div className="form-group form-bg border border-dark text-dark rounded my-3 p-3">
          <div className="my-3 h6">Title</div>
          <input
            type="text"
            name="post_title"
            value={this.state.post_title}
            className="rounded my-3 form-control border-dark"
            onChange={this.funSetState}
          />
          <div className="my-3 h6">Category</div>
          <select
            name="post_cat"
            value={this.state.post_cat}
            className="rounded my-3 form-control border-dark"
            onChange={this.funSetState}
          >
            <option value="">Select a category</option>
            <option value="General">General</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
          </select>
          <div className="my-3 h6">Body</div>
          <textarea
            type="text"
            rows="3"
            name="post_body"
            value={this.state.post_body}
            className="rounded my-3 form-control border-dark"
            onChange={this.funSetState}
          ></textarea>

          {this.state.valid ? null : (
            <div className="alert alert-danger my-3">
                Please fill all the details !!!
            </div>
          )}

          <hr className="w-100 bg-grad rounded pt-1"/>

          <div className="mt-3 text-right">
            <button className="btn btn-warning mr-2" onClick={this.funClearState}>
              <i className="fa fa-repeat"></i>
            </button>
            <button className="btn btn-success" onClick={this.funValidator}>
              <i className="fa fa-plus"></i> Update
            </button>
          </div>
        </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
           
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sortedPosts : state.post.sortedPosts,
})

export default connect(mapStateToProps,{funGetSortedPosts})(User);