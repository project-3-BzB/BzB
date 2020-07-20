import React from 'react'
import './styles/Home.css'
import CardHome from '../components/CardHome';
import {TileProvider} from '../utils/TileContext';
import { HeroBody, Login } from '../style/Home'
import TaskList from '../components/TaskList';

function Tasks() {

  return (
    <div>

      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <CardHome />
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
  );
}

export default Tasks;