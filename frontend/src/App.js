import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { actionGetAllPostsApi } from './redux/actions/src/postsActions';
import PostsList from './components/smart_components/postsList';

const App =  ({ dispatchGetAllPostsApi }) => {
  return (
    <div className="App container bg-light shadow">
    <header className="App-header">
      <img src={logo} className={"App-logo"} alt="logo" />
      <h1 className="App-title">
        React Comments
        <span className="px-2" role="img" aria-label="Chat"> &#128172;&#128540;&#129322;</span>
      </h1>
    </header>
    <div className="row">
      <div className="col-4  pt-3 border-right">
        <PostsList/>
      </div>
      <div className="col-8  pt-3 bg-white">
        {/* Comment List Component */}
      </div>
    </div>
    </div>
  );
}

export default connect(null, {dispatchGetAllPostsApi: actionGetAllPostsApi})(App);

//All Proptypes of this object
App.propTypes = {
};