import React from 'react'
import './styles/Tasks.css'
import NavTiles from '../components/NavTiles';
import FormHome from '../components/FormHome';
import CardHome from '../components/CardHome';
import {TileProvider} from '../utils/TileContext';
import { BoxTask, Login } from '../style/Tasks'

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
          <div class="column is-four-fifths">
       
          <BoxTask class="column">
            <div class="notification is-link">
              This container is centered on desktop.
            </div>
          </BoxTask>
          <BoxTask class="column">
            <div class="notification is-link">
              This container is centered on desktop.
            </div>
          </BoxTask>
          <BoxTask class="column">
            <div class="notification is-link">
              This container is centered on desktop.
            </div>
          </BoxTask>
          <BoxTask class="column">
            <div class="notification is-link">
              This container is centered on desktop.
            </div>
          </BoxTask>
          <BoxTask class="column">
            <div class="notification is-link">
              This container is centered on desktop.
            </div>
          </BoxTask>
          <BoxTask class="column">
            <div class="notification is-link">
              This container is centered on desktop.
            </div>
          </BoxTask>
        </div>
        </div>


      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png"/>
                </figure>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
          
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
      
              </div>
            </div>
          </article>
        </div>
      </div>

      <TileProvider>
              {/* <div className="columns is-desktop is-mobile"> */}
              <TaskList />
              {/* </div> */}
            </TileProvider>


          
            </div>
      </div>
  );
}

export default Tasks;