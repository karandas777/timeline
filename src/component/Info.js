import React, { Component } from 'react'
import PageTitle from './PageTitle';

export default class Info extends Component {
    render() {
        return (
            <div className="container py-3">
                <PageTitle title="About the Project" />
            </div>
        )
    }
}
