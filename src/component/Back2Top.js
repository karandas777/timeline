import React, { Component } from 'react'

export default class Back2Top extends Component {

    scrollTop=()=>{
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="text-right fixed-bottom mb-3 px-3">
                <button className="btn btn-success border-0 btt text-light" onClick={this.scrollTop}>
                <i className="fa fa-arrow-circle-up"></i>
                </button>
            </div>
        )
    }
}
