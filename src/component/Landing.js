import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Landing extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="container pt-5 text-dark rounded">
                <div className="landing-head my-5 text-center">Express Yourself</div>
                <hr className="w-75 bg-grad rounded-pill border-light my-3 pt-1"/>
                <div className="mt-5 text-center">
                    <Link className="btn btn-lg btn-dark" to="/login">Get Started</Link>
                </div>
            </div>
        )
    }
}
