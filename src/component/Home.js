import React, { Component } from 'react';
import PageTitle from './PageTitle';


export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
        }
    }
    
    funSetState=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    funSetUsername=()=>{
        localStorage.setItem('username',this.state.username);
        this.props.history.push('/messages');
    }

    render() {
        return (
            <div className="container py-3">
               <PageTitle title="Sign-In" />
                <div className="form-group text-center bg-black rounded my-5 col-md-4 mx-auto p-3">
                    <div className="text-light h6 mb-3">Username</div>    
                    <input className="form-control my-3" type="text" name="username" value={this.state.username} onChange={this.funSetState}/>
                    <button className="btn btn-success w-25" onClick={this.funSetUsername}><i className="fa fa-arrow-right"></i></button>
                </div>    
            </div>
        )
    }
}
