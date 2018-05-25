// Dependencies 
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

// Components 
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/Page404';

const AppRoutes = () => 
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Page404} />
    </Switch>
  </App>


export default AppRoutes;