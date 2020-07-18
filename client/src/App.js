import React from 'react';
// import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Login from './pages/login/Login'
// import Signup from './pages/signup/Signup'
import Home from './pages/Home'

function App() {
  return (
    <Router>
          <div className="App">
            <Switch>
              {/* <Route exact path={['/', '/login']}>
                <Login />
              </Route>
              <Route exact path={['/signup']}>
                <Signup />
              </Route> */}
              <Route exact path={['/Home']}>
                <Home />
              </Route>
            </Switch>
          </div>
    </Router>
  );
}

export default App;
