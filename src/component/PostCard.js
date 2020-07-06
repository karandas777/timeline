import React, { Component } from "react";

export default class PostCard extends Component {
  render() {
    const { post } = this.props;
    let date = new Date(this.props.post.createdAt);
    let convDate = date.toDateString();
    const imgUrl = "https://robohash.org/" + post.post_title + ".png";

    return (
      <div className="form-bg text-dark mb-4 p-0">
        <div className="row m-0">
          <div className="col-md-4 post-pic-holder p-0">
            <img
              src={imgUrl}
              alt={post.username}
              className="post-img bg-grad p-2"
            />
          </div>
          <div className="col-md-8 py-3">
            <div className="post-body">
              <h4 className="card-title mb-3">{post.post_title}</h4>
              <p className="card-text text-secondary">{post.post_body}</p>
              <div className="mt-3 text-dark">Posted By : {post.username} in {post.post_cat}</div>
            </div>
          </div>
          <div className="small py-1 px-2 bg-dark w-100 text-right text-light"><i className="fa fa-clock-o"></i> {convDate}</div>
        </div>
      </div>
    );
  }
}
