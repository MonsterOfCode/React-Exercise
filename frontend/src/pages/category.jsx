import React, {useEffect} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import '../App.css';
import PostsList from '../components/posts/postsList';
import CategoriesList from '../components/categories/categoriesList';

import { actionGetPostsByCategoryApi, actionGetAllCategoriesApi } from '../redux/actions';

const Category =  ({dispatchGetByCategoryApi, dispatchGetAllCategoriesApi, category = null }) => {

    useEffect(() => {
        dispatchGetByCategoryApi(category)
        dispatchGetAllCategoriesApi()
      }, [category]);

  return (
        <>
            <CategoriesList/>
            <PostsList category={category}/>
        </>
  );
}


export default connect(
    null, 
    {
        dispatchGetByCategoryApi: actionGetPostsByCategoryApi,
        dispatchGetAllCategoriesApi: actionGetAllCategoriesApi,
    }
    )(Category);

//All Proptypes of this object
Category.propTypes = {
    dispatchGetByCategoryApi: PropTypes.func.isRequired,
    dispatchGetAllCategoriesApi: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
};