import React, { Component } from 'react';
import PageTitle from './PageTitle';
import { Link } from 'react-router-dom';
import {APIURL} from '../action/types';
import axios from 'axios';


export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             valid:true,
             loading:false,
        }
    }

    componentDidMount(){
        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined && token !== ""){
            this.props.history.push('/messages');
        }
    }
    
    funSetState=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }


    funLogIn=()=>{
        const method = "/find-user";
        const form = {
            username : this.state.username,
            password : this.state.password,
        }
        axios.post(APIURL+method,form)
        .then((res)=>{
            if(res.data.status === "OK"){
                localStorage.setItem('username',this.state.username);
                localStorage.setItem('token',res.data.token);
                this.setState({ loading: false });
                this.props.history.push('/messages');
            }
            else{
                this.setState({ valid: false });
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    funValidator = () => {
        this.setState({ loading: true });
        if (this.state.username === "" || this.state.password === "" ) {
          this.setState({ valid: false });
          this.setState({ loading: false });
          return false;
        } else {
          this.setState({ valid: true });
          this.funLogIn();
        }
      };

    render() {
        return (
            <div className="container py-3">
               <PageTitle title="Log-In" />
                <div className="form-group form-bg mt-4 col-md-5 mx-auto p-3">
                    <div className="text-dark h6 mb-3">Username</div>    
                    <input className="form-control my-3" type="text" name="username" value={this.state.username} onChange={this.funSetState}/>
                    <div className="text-dark h6 mb-3">Password</div>    
                    <input className="form-control my-3" type="password" name="password" value={this.state.password} onChange={this.funSetState}/>
                    
                        {this.state.valid ? null : (
                            <div className="alert alert-danger my-3">
                            Invalid Details !!!
                            </div>
                        )}
                    
                    <button className="btn btn-success mt-2 mb-3" onClick={this.funValidator}>
                        Login
                        {
                            this.state.loading ? (<i className="fa fa-spin ml-1 fa-spinner"></i>) : null
                        }
                    </button>
                    <hr className="w-100 bg-grad rounded pt-1"/>
                    <div className="text-center">
                    <Link to="/signup" className="text-decoration-none small text-dark">
                        Dont have an account? Sign-Up here.  
                    </Link>
                    </div>
                </div>    
            </div>
        )
    }
}
