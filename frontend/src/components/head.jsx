import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from "react-router-dom";

const Head =  () => {

  return (
    <header className="App-header">
      <img src={logo} className={"App-logo"} alt="logo" />
      <h1 className="App-title">
        React Comments
        <span className="px-2" role="img" aria-label="Chat"> &#128172;&#128540;&#129322;</span>
      </h1>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Head;