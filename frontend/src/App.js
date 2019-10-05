import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Head from "./components/head";
import Category from "./pages/category";
import PostDetail from "./pages/postDetail";


function About({ match }) {
    return (
      <div>
        <h3>Plugins: {match.params.category}</h3>
      </div>
    );
  }

export default function App() {

  return (
    <Router>
        <div>
            <Head/>
            <Switch>
                <Route path="/:category/:post_id" component={PostDetail}/>
                <Route path="/about" component={About}/>
                <Route path="/:category" component={Category}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    </Router>
  );
}