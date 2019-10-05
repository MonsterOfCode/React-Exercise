import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Head from "./components/head";
import PostDetail from "./pages/postDetail";
import About from "./pages/about";
import NotFound from "./pages/404";
import CategoriesMiddleware from "./middlewares/CategoriesMiddleware";
import PostsMiddleware from "./middlewares/PostsMiddleware";


const App = () => {

    return (
        <Router>
            <div>
                <Head/>
                <Switch>
                    <Route path="/:category/:post_id" component={PostsMiddleware}/>
                    <Route path="/about" component={About}/>
                    <Route path="/:category" component={CategoriesMiddleware}/>
                    <Route path="/" component={Home}/>
                    <Route component={NotFound} />
            </Switch>
            </div>
        </Router>
    );
}

export default App