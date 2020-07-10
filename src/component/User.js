import React, { Component } from "react";
import PageTitle from "./PageTitle";
import { connect } from "react-redux";
import {
  funGetSortedPosts,
  funUpdatePost,
  funDeletePost,
} from "../action/post.action";
import Loading from "./Loading";
import UserPostCard from "./UserPostCard";
import Back2Top from "./Back2Top";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      username: "",
      post_title: "",
      post_cat: "",
      post_body: "",
      valid: true,
    };
  }

  componentDidMount() {
    this.getMyPosts();
  }

  funSetPost = (post) => {
    this.setState({
      _id: post._id,
      username: post.username,
      post_title: post.post_title,
      post_cat: post.post_cat,
      post_body: post.post_body,
    });
  };

  funSetState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  funClearState = () => {
    this.setState({
      _id: "",
      username: "",
      post_title: "",
      post_cat: "",
      post_body: "",
    });
  };

  funDelete = () => {
    this.props.funDeletePost({ _id: this.state._id });
    this.getMyPosts();
  };

  funUpdate = () => {
    const form = {
      _id: this.state._id,
      username: this.state.username,
      post_title: this.state.post_title,
      post_cat: this.state.post_cat,
      post_body: this.state.post_body,
    };
    this.props.funUpdatePost(form);
    this.getMyPosts();
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

  getMyPosts = () => {
    window.scrollTo(0, 0);
    const name = localStorage.getItem("username");
    this.props.funGetSortedPosts({ username: name });
  };

  render() {
    const name = localStorage.getItem("username");
    const imgUrl = "https://robohash.org/" + name + ".png";

    return (
      <div className="container py-3">
        <PageTitle title="User Profile" />

        <div className="mt-5 text-center">
          <img
            src={imgUrl}
            alt="userprofile"
            className="bg-grad userprofile rounded-pill"
          />
        </div>

        <div className="mb-5 mt-3 h1 text-center">
          {name} <i className="fa fa-check-circle text-primary"></i>
        </div>

        <div className="text-secondary text-center my-3">Posts</div>

        <div className="pb-2 px-0 my-4">
          {this.props.sortedPosts.length === 0 ? <Loading /> : null}
          {this.props.sortedPosts.map((post) => (
            <UserPostCard
              key={post._id}
              post={post}
              funSetPost={this.funSetPost}
            />
          ))}
        </div>

        <Back2Top />

        <div className="modal fade" id="editor" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body p-0 text-left">
                <div className="form-group form-bg rounded text-dark m-0 pt-3 pb-4 px-3">
                  <PageTitle title="Edit Post" />
                  <div className="mb-3 mt-4 h6">Title</div>
                  <input
                    type="text"
                    name="post_title"
                    value={this.state.post_title}
                    className="rounded my-3 form-control"
                    onChange={this.funSetState}
                  />
                  <div className="my-3 h6">Category</div>
                  <select
                    name="post_cat"
                    value={this.state.post_cat}
                    className="rounded my-3 form-control"
                    onChange={this.funSetState}
                  >
                    <option value="">Select a category</option>
                    <option value="General">General</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Entertainment">Movies & TV</option>
                    <option value="Sports">Sports</option>
                    <option value="Food & Drink">Food & Drink</option>
                    <option value="Programming">Programming</option>
                    <option value="Travelling">Traveling</option>
                    <option value="Music">Music</option>
                    <option value="Fitness & Diet">Fitness & Diet</option>
                  </select>
                  <div className="my-3 h6">Body</div>
                  <textarea
                    type="text"
                    rows="3"
                    name="post_body"
                    value={this.state.post_body}
                    className="rounded my-3 form-control"
                    onChange={this.funSetState}
                  ></textarea>

                  {this.state.valid ? null : (
                    <div className="alert alert-danger my-3">
                      Please fill all the details !!!
                    </div>
                  )}

                  <div className="mt-3 text-right">
                    <button
                      type="button"
                      className="btn btn-danger mr-2"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="fa fa-close"></i>
                    </button>
                    <button
                      className="btn btn-warning mr-2"
                      onClick={this.funClearState}
                    >
                      <i className="fa fa-repeat"></i>
                    </button>
                    <button
                      className="btn btn-success"
                      data-dismiss="modal"
                      onClick={this.funValidator}
                    >
                      <i className="fa fa-plus"></i> Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="deletor" tabIndex="-1" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body p-0 text-left">
                <div className="form-group form-bg rounded text-dark m-0 p-3">
                  <PageTitle title="Delete Post" />
                  <div className="my-4 h6 text-center">Are you sure ?</div>

                  <div className="my-3 text-center">
                    <button
                      className="btn btn-secondary mr-5"
                      data-dismiss="modal"
                    >
                      No
                    </button>
                    <button
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={this.funDelete}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sortedPosts: state.post.sortedPosts,
});

export default connect(mapStateToProps, {
  funGetSortedPosts,
  funUpdatePost,
  funDeletePost,
})(User);
