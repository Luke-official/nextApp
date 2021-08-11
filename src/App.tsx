import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useParams } from "react-router-dom";
import Home from './Containers/Home';
import About from './Containers/About';
import Contact from './Containers/Contact';
import NavigationBar from './Components/NavigationBar';

const App = () => {
  const isAuthenticated = true
  return (
    <Router>
      <div className="container-page">
        <NavigationBar/>
          <Switch>
            <Route path="/" exact component={Home} />
            {
              isAuthenticated ?
                <>
                  <Route path="/about/:name" component={About} />
                  <Route path="/contact" component={Contact} />
                </> : <Redirect to="/" />
            }
          </Switch>
      </div>
    </Router>
  );
}
export default App;
