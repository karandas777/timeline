import React, { Component } from 'react'
import PageTitle from './PageTitle';

export default class Info extends Component {
    render() {
        return (
            <div className="container py-3">
                <PageTitle title="About the Project" />

                <div className="w-100 my-3 bg-black rounded p-3">
                    <img src={require('../assets/under2.gif')} className="img-fluid w-100" alt="under const" />
                </div>
            </div>
        )
    }
}
