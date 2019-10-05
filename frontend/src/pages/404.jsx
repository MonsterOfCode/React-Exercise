import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const notFound = () => {
    return (
      <div className={"textCenter"}>
        <h2>Page not found</h2>
        <Link to="/">Go back to the application</Link>
      </div>
    );
  }

  export default notFound