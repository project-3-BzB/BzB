import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards'

import { getIsLoggedIn } from './utils/Auth'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Loading from './pages/Loading'
import NotFound from './pages/NotFound'

function App() {

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (getIsLoggedIn()) {
        next()
      }
      next.redirect('/login')
    } else {
      next()
    }
  }

// guards={[requireLogin]} loading={Loading} error={NotFound}

  return (
    <Router>
      <GuardProvider guards={[requireLogin]}>
          <div className="App">
            <Switch>
              <GuardedRoute exact path={['/', '/login']}>
                <Login />
              </GuardedRoute>
              <GuardedRoute exact path={['/signup']}>
                <Signup />
              </GuardedRoute>
            </Switch>
          </div>
      </GuardProvider>
    </Router>
  )
}

export default App
