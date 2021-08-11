import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch, useParams } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
  const name = 'John Doe'
  const isAuthenticated = true
  return (
    <Router>
      <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        {
        isAuthenticated ? 
        <>
        <Route path="/about/:name" component={About} />
        <Route path="/contact"  component={Contact} />
        </> : <Redirect to="/" />
        }
    </Switch>
      </main>
    </Router>
  );
}
export default App;
