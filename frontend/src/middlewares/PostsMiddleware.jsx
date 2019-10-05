import React from 'react';
import { connect } from "react-redux";
import PostDetail from "../pages/postDetail";
import NotFound from "../pages/404";

const PostsMiddleware = ({match, posts}) => {
    const postId = match.params.post_id
    return posts.find(element => element.id === postId) ? <PostDetail /> : <NotFound/>
}

const mapStateToProps = state => {
    return {posts: state.posts.list}
  }
  
export default connect(
    mapStateToProps,
    null
    )(PostsMiddleware);