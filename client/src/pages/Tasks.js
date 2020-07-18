import React from 'react'
import './styles/Home.css'
import Tiles from '../components/Tiles';
import {TileProvider} from '../utils/TileContext';
import { HeroBody, Login } from '../style/Home'
import TaskList from '../components/TaskList';

function Tasks() {

  return (
    <div>
      <TileProvider>
              {/* <div className="columns is-desktop is-mobile"> */}
              <TaskList />
              {/* </div> */}
            </TileProvider>


          

    </div>
  );
}

export default Tasks;