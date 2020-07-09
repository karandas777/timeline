import React, { Component } from "react";

export default class PostCard extends Component {
  render() {
    const { post } = this.props;
    let date = new Date(this.props.post.createdAt);
    let convDate = date.toDateString();
    const imgUrl = "https://robohash.org/" + post.post_title + ".png";

    return (
      <div className="my-4 p-0">
        <div className="row m-0">
          <div className="col-2 post-pic-holder text-left p-0">
            
            <img
              src={imgUrl}
              alt={post.username}
              className="post-img bg-grad p-1"
            />
          </div>
          <div className="col-10 py-3 form-bg text-dark rounded">
            <div className="post-body">
              <h4 className="card-title h2 mb-3">{post.post_title}</h4>
              <p className="card-text text-secondary">{post.post_body}</p>
              <div className="mt-3 text-dark">Posted By : {post.username} in {post.post_cat}</div>
            </div>
          </div>
          <div className="small py-1 px-2 w-100 text-right text-secondary">{convDate}</div>
        </div>
      </div>
    );
  }
}
