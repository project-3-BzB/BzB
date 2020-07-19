import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards'

import {  requireLogin  } from './utils/Auth'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import Loading from './pages/Loading'
// import NotFound from './pages/NotFound'
import Notes from './pages/Notes'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import { NoteProvider } from './utils/NoteContext'

function App() {


// guards={[requireLogin]} loading={Loading} error={NotFound}

  return (
    <Router>
      <GuardProvider guards={[requireLogin]}>
          <div className="App">
            <Switch>
              {/* <GuardedRoute exact path={['/', '/login']}>
                <Login />
              </GuardedRoute>
              <GuardedRoute exact path={['/signup']}>
                <Signup />
              </GuardedRoute> */}
              {/* <GuardedRoute exact path={['/home']} meta={{auth: true}}> */}
              <GuardedRoute exact path={['/home']} >
                <Home />
              </GuardedRoute>
              <GuardedRoute exact path={['/Tasks']} >
                <Tasks />
              </GuardedRoute>
              <GuardedRoute exact path={['/notes']}>
                <NoteProvider>
                  <Notes />
                </NoteProvider>
              </GuardedRoute>
              {/* <GuardedRoute exact path={['/Journals']} >
                <Journals />
              </GuardedRoute>
              <GuardedRoute exact path={['/Links']} >
                <Links />
              </GuardedRoute>
              <GuardedRoute exact path={['/Photos']} >
                <Photos />
              </GuardedRoute> */}
            </Switch>
          </div>
      </GuardProvider>
    </Router>
  )
}

export default App
