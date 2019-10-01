import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { actionGetAllPostsApi } from './redux/actions/src/posts';


const App =  ({ dispatchGetAllPostsApi }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={dispatchGetAllPostsApi}
          rel="noopener noreferrer"
        >
          Learn React 2
        </a>
      </header>
    </div>
  );
}

export default connect(null, {dispatchGetAllPostsApi: actionGetAllPostsApi})(App);

//All Proptypes of this object
App.propTypes = {
};