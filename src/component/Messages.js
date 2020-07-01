import React, { Component } from 'react';
import {connect} from 'react-redux';
import {funGetAllPosts} from '../action/post.action';
import PostCard from './PostCard';
import PageTitle from './PageTitle';

class Messages extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading:false,
        }
    }
    

    componentDidMount(){
        this.props.funGetAllPosts();
    }

    
    render() {
        
        return (
            <div className="container py-3">
                <PageTitle title="Latest Posts" />
                {
                    this.state.loading === true ? (<div className="text-center text-primary">Loading</div>) : null
                }
                
                <div className="pb-3 my-4">
                    {
                        this.props.allPosts.map((post)=>(
                            <PostCard key={post._id} post={post}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    allPosts : state.post.allPosts,
})

export default connect(mapStateToProps,{funGetAllPosts})(Messages);
