import React, { Component } from 'react';
import PageTitle from './PageTitle';
import { Link } from 'react-router-dom';
import {APIURL} from '../action/types';
import axios from 'axios';


export default class SignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             valid:true,
        }
    }
    
    funSetState=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    funSignIn=()=>{
        const method = "/insert-user";
        const form = {
            username : this.state.username,
            password : this.state.password,
        }
        axios.post(APIURL+method,form)
        .then((res)=>{
            if(res.data.status === "OK"){
                this.props.history.push('/');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    funValidator = () => {
        if (this.state.username === "" || this.state.password === "" ) {
          this.setState({ valid: false });
          return false;
        } else {
          this.setState({ valid: true });
          this.funSignIn();
        }
      };

    render() {
        return (
            <div className="container py-3">
               <PageTitle title="Sign-Up" />
                <div className="form-group bg-black rounded mt-4 col-md-5 mx-auto p-3">
                    <div className="text-light h6 mb-3">Username</div>    
                    <input className="form-control my-3" type="text" name="username" value={this.state.username} onChange={this.funSetState}/>
                    <div className="text-light h6 mb-3">Password</div>    
                    <input className="form-control my-3" type="password" name="password" value={this.state.password} onChange={this.funSetState}/>
                    
                        {this.state.valid ? null : (
                            <div className="alert alert-danger my-3">
                            Please fill all the details !!!
                            </div>
                        )}

                    <button className="btn btn-warning w-25 mt-2 mb-3" onClick={this.funValidator}>Sign-In</button>
                    <div className="text-center">
                    <Link to="/" className="text-decoration-none small text-warning">
                        Already have an account? Log-In here.  
                    </Link>
                    </div>
                </div>    
            </div>
        )
    }
}
