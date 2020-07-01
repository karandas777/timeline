import React, { Component } from 'react';
import PageTitle from './PageTitle';
import { Link } from 'react-router-dom';


export default class SignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
        }
    }
    
    funSetState=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    funLogIn=()=>{
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container py-3">
               <PageTitle title="Sign-Up" />
                <div className="form-group bg-black rounded my-5 col-md-4 mx-auto p-3">
                    <div className="text-light h6 mb-3">Username</div>    
                    <input className="form-control my-3" type="text" name="username" value={this.state.username} onChange={this.funSetState}/>
                    <div className="text-light h6 mb-3">Password</div>    
                    <input className="form-control my-3" type="text" name="password" value={this.state.password} onChange={this.funSetState}/>
                    <button className="btn btn-success w-25 mt-2 mb-3" onClick={this.funLogIn}>Sign-In</button>
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
