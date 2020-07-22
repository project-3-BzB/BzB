import React from 'react'
import './styles/Tasks.css'
import NavTiles from '../components/NavTiles';
import FormHome from '../components/FormHome';
import ProjectName from '../components/ProjectName';
import TaskFolder from '../components/TaskFolder';
import {TileProvider} from '../utils/TileContext';


function Tasks() {

  return (
    <div>
      <div className="wrapperBlue">

        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical is-12">
            <TileProvider>
              <NavTiles />
            </TileProvider>
          </div>
        </div>
    
        {/* <FormHome /> */}
       <ProjectName />
      
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

export default Tasks;