import React, { Component } from 'react';
import {connect} from 'react-redux';
import {funGetAllPosts} from '../action/post.action';
import PostCard from './PostCard';
import PageTitle from './PageTitle';
import Loading from './Loading';

class Messages extends Component {


    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.funGetAllPosts();
    }

    
    render() {
        
        return (
            <div className="container py-3">
                <PageTitle title="Latest Posts" />
                        
                <div className="pb-3 px-0 my-4">
                {this.props.allPosts.length === 0 ? (<Loading/>) : null}
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
