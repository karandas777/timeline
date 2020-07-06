import React, { Component } from "react";

export default class UserPostCard extends Component {


  render() {
    const { post } = this.props;
    let date = new Date(this.props.post.createdAt);
    let convDate = date.toDateString();

    return (
      <div className="card bg-light border border-dark rounded text-dark mb-4">
        <div className="card-header pt-3 text-right">

        <button type="button" className="btn btn-primary btn-sm mr-2" 
          data-toggle="modal" data-target='#editor'
          onClick={()=>{this.props.funSetPost(post)}}  
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm">Delete</button>
            
        </div>
        <div className="card-body">
            <h4 className="card-title mb-3">
              {post.post_title.slice(0,30)}... 
            </h4>
            
            <h6 className="small text-secondary">{post.post_cat}</h6>
            <p className="card-text">
                {post.post_body.slice(0,30)}...
            </p>
            
        </div>
        <div className="card-footer small py-1 bg-dark text-right text-light"><i className="fa fa-clock-o"></i> {convDate}</div>
      </div>
    );
  }
}