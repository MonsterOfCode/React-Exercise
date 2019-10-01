import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { actionGetAllPostsApi } from '../../redux/actions/src/postsActions';


const PostsList =  ({ posts, loading, dispatchGetAllPostsApi }) => {

    useEffect(() => {
        console.log("mount")
        dispatchGetAllPostsApi()
      }, []);

    const renderList = () => {
        return posts.map((post, index) => (
            <p key={index}> {post.title} </p>
          ))
    }


  return(
      <div>
          {renderList()}
      </div>
  )
}

// to get the todo object from the state inside the redux and send to the component
const mapStateToProps = state => {
    return {posts: state.posts.list, loading: state.posts.loading}
  }

export default connect(mapStateToProps, {dispatchGetAllPostsApi: actionGetAllPostsApi})(PostsList);

//All Proptypes of this object
PostsList.propTypes = {
};