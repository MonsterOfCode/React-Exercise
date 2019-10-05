import React, {useEffect} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import '../App.css';
import PostsList from '../components/posts/postsList';
import CategoriesList from '../components/categories/categoriesList';

import { actionGetAllPostsApi, actionGetAllCategoriesApi } from '../redux/actions';

const Home =  ({dispatchGetAllPostsApi, dispatchGetAllCategoriesApi }) => {

    useEffect(() => {
        dispatchGetAllPostsApi()
        dispatchGetAllCategoriesApi()
      }, []);

  return (
        <>
            <CategoriesList/>
            <PostsList/>
        </>
  );
}

const mapStateToProps = state => {
    return {posts: state.posts.list, loading: state.posts.loading}
  }

export default connect(
    mapStateToProps, 
    {
        dispatchGetAllPostsApi: actionGetAllPostsApi,
        dispatchGetAllCategoriesApi: actionGetAllCategoriesApi,
    }
    )(Home);

//All Proptypes of this object
Home.propTypes = {
    dispatchGetAllPostsApi: PropTypes.func.isRequired,
    dispatchGetAllCategoriesApi: PropTypes.func.isRequired,
};