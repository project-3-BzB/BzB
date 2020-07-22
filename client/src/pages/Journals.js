import React from 'react'
import './styles/Journals.css'
import NavTiles from '../components/NavTiles';
import FormHome from '../components/FormHome';
import TaskFolder from '../components/TaskFolder';
import {TileProvider} from '../utils/TileContext';


function Journals() {

  return (
    <div>
      <div className="wrapperPurple">

        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical is-12">
            <TileProvider>
              <NavTiles />
            </TileProvider>
          </div>
        </div>

        <FormHome />


        <div className="columns is-ancestor is-mobile is-centered">
          <div className="column is-two-thirds ">
            <TaskFolder />
            <TaskFolder />
            <TaskFolder />
            <TaskFolder />
            <TaskFolder />
            <TaskFolder />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Journals;