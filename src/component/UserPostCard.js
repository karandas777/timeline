import React, { Component } from "react";

export default class UserPostCard extends Component {


  render() {
    const { post } = this.props;
    let date = new Date(this.props.post.createdAt);
    let convDate = date.toDateString();

    return (
      <div className="form-bg text-dark mb-4 pt-3">
        <div className="post-body">
            <h4 className="card-title mb-3 px-3">
              {post.post_title}
            </h4>
          
            <p className="card-text text-secondary px-3">
                {post.post_body.slice(0,100)}...
            </p>
            <div className="mt-3 text-dark px-3">Posted By : You in {post.post_cat}</div>
            <div className="my-3 px-3">

              <button type="button" className="btn btn-primary btn-sm mr-2" 
              data-toggle="modal" data-target='#editor'
              onClick={()=>{this.props.funSetPost(post)}}  
              >
              Edit
              </button>
              <button className="btn btn-danger btn-sm" 
              data-toggle="modal" data-target='#deletor'
              onClick={()=>{this.props.funSetPost(post)}}
              >Delete</button>
            
            </div>
            
        </div>
        <div className="small py-1 px-2 bg-dark text-right text-light"><i className="fa fa-clock-o"></i> {convDate}</div>
      </div>
    );
  }
}