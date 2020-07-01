import React, { Component } from "react";

export default class PostCard extends Component {
  render() {
    const { post } = this.props;
    let date = new Date(this.props.post.createdAt);
    let convDate = date.toDateString();

    const imgUrl = "https://robohash.org/"+post.post_title+".png"
    return (
      <div className="card bg-black text-light mb-3 py-3 px-1">
        <div className="card-header small"><i className="fa fa-user-circle"></i> {post.username}</div>
        <div className="card-body">
            <h4 className="card-title overflow-hidden">{post.post_title} 
              <img src={imgUrl} alt={post.post_title} className="post-img bg-dark p-2 float-right" />
            </h4>
            
            <h6 className="text-secondary">{post.post_cat}</h6>
            <p className="card-text">
                {post.post_body}
            </p>
        </div>
        <div className="card-footer small text-warning text-right"><i className="fa fa-clock-o"></i> {convDate}</div>
      </div>
    );
  }
}
