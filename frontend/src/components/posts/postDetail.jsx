import React from 'react';
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    wrapperTable: {
      width: '50%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    }
  }));

const PostDetail =  ({ post, loading }) => {

    const classes = useStyles();

    var longToDate = function(millisec) {
        return (new Date(millisec).toUTCString());
    }

    const renderPost = () => {
        return (
            <>
            <p> &nbsp; id: {post.id}</p>
            <p> &nbsp; title: {post.title}</p>
            <p> &nbsp; body: {post.body}</p>
            <p> &nbsp; author: {post.author}</p>
            <p> &nbsp; category: {post.category}</p>
            <p> &nbsp; voteScore: {post.voteScore}</p>
            <p> &nbsp; commentCount: {post.commentCount}</p>
            <p> &nbsp; Created: {longToDate(post.timestamp)}</p>
            </>
        )
    }

    return post ? renderPost() : <p className={classes.wrapperTable}>No post selected</p>
}

// to get the todo object from the state inside the redux and send to the component
const mapStateToProps = state => {
    return {post: state.posts.previewPost, loading: state.posts.loading}
  }

export default connect(
    mapStateToProps, 
    null
    )(PostDetail);

//All Proptypes of this object
PostDetail.propTypes = {
};