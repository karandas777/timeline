import React, { Component } from "react";

export default class PostCard extends Component {
  render() {
    const { post } = this.props;
    let date = new Date(this.props.post.createdAt);
    let convDate = date.toDateString();
    const imgUrl = "https://robohash.org/"+post.post_title+".png"

    return (
      <div className="card form-bg border border-dark rounded text-dark mb-3">
        <div className="card-header pt-3"><img src={imgUrl} alt={post.username} className="post-img bg-grad p-0 mb-1 mr-2"/>{post.username}</div>
        <div className="card-body">
            <h4 className="card-title mb-3">
              {post.post_title} 
            </h4>
            
            <h6 className="small text-secondary">{post.post_cat}</h6>
            <p className="card-text">
                {post.post_body}
            </p>
            
        </div>
        <div className="card-footer small py-1 bg-dark text-right text-light"><i className="fa fa-clock-o"></i> {convDate}</div>
      </div>
    );
  }
}
