import React from 'react';
// import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
          <div className="App">
            <Switch>
              <Route exact path={['/', '/login']}>
                <Login />
              </Route>
              <Route exact path={['/signup']}>
                <Signup />
              </Route>
            </Switch>
          </div>
    </Router>
  );
}

export default App;
