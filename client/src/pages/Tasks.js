import React from 'react'
import './styles/Tasks.css'
import NavTiles from '../components/NavTiles';
import FormHome from '../components/FormHome';
import CardHome from '../components/CardHome';
import {TileProvider} from '../utils/TileContext';
import { Login } from '../style/Tasks'

import TaskList from '../components/TaskList';

function Tasks() {

  return (
    <div>
      <div className="wrapperBlue">

        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical is-12">
            <TileProvider>
              <NavTiles />
            </TileProvider>
          </div>
        </div>

        <FormHome />

        <div class="columns is-mobile is-centered">
          <div class="column is-two-thirds">
          
            <div class="column ">
              
              <div class="notification is-link ">
                Left
              </div>
              </div>
              <div class="column">
              <div class="notification is-link ">
                Right
              </div>
            </div>
            <div class="column">
              <div class="notification is-link">
                This container is centered on desktop.
              </div>
            </div>
            <div class="column">
              <div class="notification is-link">
                This container is centered on desktop.
              </div>
            </div>
            <div class="column">
              <div class="notification is-link">
                This container is centered on desktop.
              </div>
            </div>
            <div class="column">
              <div class="notification is-link">
                This container is centered on desktop.
              </div>
            </div>
            <div class="column">
              <div class="notification is-link">
                This container is centered on desktop.
              </div>
            </div>
          </div>
        </div>


          
            </div>
      </div>
  );
}

export default Tasks;