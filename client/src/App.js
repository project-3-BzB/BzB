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
import Tasks2 from './pages/Tasks2'
import { NoteProvider } from './utils/NoteContext'
import { FoldersProvider } from './utils/FolderContext'
import Folders from './pages/Folders'
import Folder from './pages/Folder'
import Projects from './pages/Projects'
import Journals from './pages/Journals'
import Links from './pages/Links'

function App() {


// guards={[requireLogin]} loading={Loading} error={NotFound}

  return (
    <Router>
      <FoldersProvider>
        <GuardProvider guards={[requireLogin]}>
          <div className="App">
            <Switch>
              <GuardedRoute exact path={['/', '/login']}>
                <Login />
              </GuardedRoute>
              <GuardedRoute exact path={['/signup']}>
                <Signup />
              </GuardedRoute>
              {/* <GuardedRoute exact path={['/home']} meta={{auth: true}}> */}
              {/* <GuardedRoute exact path={['/home']} meta={{auth: true}} >
                <Home />
              </GuardedRoute> */}
              <GuardedRoute exact path ={['/projects']} meta={{auth: true}}>
                <Projects />
              </GuardedRoute>
              <GuardedRoute exact path={['/tasks/:id']} meta={{auth: true}}>
                <Tasks2 />
              </GuardedRoute>
              <GuardedRoute exact path={['/notes/:id']} meta={{auth: true}}>
                {/* <NoteProvider> */}
                  <Notes />
                {/* </NoteProvider> */}
              </GuardedRoute>
              <GuardedRoute exact path={['/folder/:id']} meta={{auth: true}}>
                <Folder />
              </GuardedRoute>
              <GuardedRoute exact path={['/links/:id']} meta={{auth: true}}>
                <Links />
              </GuardedRoute>
            </Switch>
          </div>
      </GuardProvider>
      </FoldersProvider>
      
    </Router>
  )
}

export default App
