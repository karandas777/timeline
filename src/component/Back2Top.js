import React, { Component } from 'react'

export default class Back2Top extends Component {

    scrollTop=()=>{
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="text-center my-5">
                <button className="btn bg-grad border-light rounded-pill text-light" onClick={this.scrollTop}>
                <i className="fa fa-chevron-circle-up"></i> Back to Top
                </button>
            </div>
        )
    }
}
