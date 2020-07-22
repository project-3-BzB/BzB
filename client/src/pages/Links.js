import React from 'react'
import './styles/Links.css'
import NavTiles from '../components/NavTiles';
import FormHome from '../components/FormHome';
import ProjectName from '../components/ProjectName';
import LinksFolder from '../components/LinksFolder';
import {TileProvider} from '../utils/TileContext';


function Links() {

  return (
    <div>
      <div className="wrapperRed">

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
            <LinksFolder />
            <LinksFolder />
            <LinksFolder />
            <LinksFolder />
            <LinksFolder />
            <LinksFolder />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Links;