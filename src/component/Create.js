import React, { Component } from "react";
import { connect } from "react-redux";
import { funAddPost, funGetAllPosts } from "../action/post.action";
import PageTitle from "./PageTitle";
import firedb from '../firebase';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      post_title: "",
      post_cat: "",
      post_body: "",
      post_image: "",
      addPostMessage: "",
      valid: true,
      loading:false,
      selectedFile:"",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.funSetUsername();
  }

  funSetState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  funSetImage = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  funUploadImage = () => {
    this.setState({loading:true});
    const newImage = firedb.child(this.state.selectedFile.name);
    newImage.put(this.state.selectedFile)
    .then((snapshot)=>{
      newImage.getDownloadURL().then((url)=>{
        this.setState({post_image:url,loading:false});
      })
    })
  }

  funSetUsername = () => {
    let name;
    if (localStorage.getItem("username") === "") {
      name = "Anonymous";
    } else {
      name = localStorage.getItem("username");
    }

    this.setState({ username: name });
  };

  funSendMessage = () => {
    const form = {
      username: this.state.username,
      post_title: this.state.post_title,
      post_cat: this.state.post_cat,
      post_image:this.state.post_image,
      post_body: this.state.post_body,
    };

    this.props.funAddPost(form);
    this.props.funGetAllPosts();
    this.routeToAllMessages();
  };

  funValidator = () => {
    if (
      this.state.username === "" ||
      this.state.post_title === "" ||
      this.state.post_cat === "" ||
      this.state.post_body === ""||
      this.state.post_image === ""
    ) {
      this.setState({ valid: false });
      return false;
    } else {
      this.setState({ valid: true });
      this.funSendMessage();
    }
  };

  routeToAllMessages = () => {
    this.props.history.push("/all-posts");
  };

  funReset = () => {
    this.setState({
      post_title: "",
      post_cat: "",
      post_image: "",
      post_body: "",
      selectedFile:"",
    });
  };

  render() {
    return (
      <div className="container py-3">
        <PageTitle title="Create new Post" />
        <div className="form-group form-bg rounded text-dark mt-5 col-md-6 mx-auto p-3">
          <div className="my-3 h6">Title</div>
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
        

          <div className="my-3 h6">Image</div>

            {
              this.state.loading ? (<div className="text-center mb-3 rounded bg-warning"><i className="fa fa-cog fa-spin"></i></div>) : null
            }
            
              {
                this.state.post_image ? (
                  <div className="border border-light rounded p-2 mb-3 bg-light">
                    <img src={this.state.post_image} className="img-fluid" alt="postimg" />
                  </div>
                ) : null
              }

          <button className="btn btn-light w-100 mb-3" data-toggle="modal" data-target="#exampleModal">Upload Image</button>            
            
          <div className="my-3 h6">Body</div>
              <textarea
                type="text"
                rows="3"
                name="post_body"
                value={this.state.post_body}
                className="rounded form-control"
                onChange={this.funSetState}
              ></textarea>


          {this.state.valid ? null : (
            <div className="alert alert-danger my-3">
              Please fill all the details !!!
            </div>
          )}

          <hr className="bg-grad rounded-pill pt-1 border-light mt-4"></hr>

          <div className="mt-3 text-right">
            <button
              className="btn btn-dark mr-2"
              onClick={this.routeToAllMessages}
            >
              <i className="fa fa-close"></i>
            </button>
            <button className="btn btn-dark mr-2" onClick={this.funReset}>
              <i className="fa fa-repeat"></i>
            </button>
            <button className="btn btn-success" onClick={this.funValidator}>
              Create
            </button>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Upload Image</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                  <input type="file" className="form-control my-3 p-1" onChange={this.funSetImage} />
                  <div className="mt-3 text-right">
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.funUploadImage}>Upload</button>
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
  addPost: state.post.addPost,
});

export default connect(mapStateToProps, { funAddPost, funGetAllPosts })(
  Create
);
