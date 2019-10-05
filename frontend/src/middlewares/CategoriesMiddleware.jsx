import React from 'react';
import { connect } from "react-redux";
import Category from "../pages/category";
import NotFound from "../pages/404";

const CategoriesMiddleware = ({match, categories}) => {
    const category = match.params.category
    return categories.find(element => element.name === category) ? <Category category={category} /> : <NotFound/>
}

const mapStateToProps = state => {
    return {categories: state.categories.list}
  }
  
export default connect(
    mapStateToProps,
    null
    )(CategoriesMiddleware);