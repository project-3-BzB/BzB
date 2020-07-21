import React, {useContext} from 'react';
import '../pages/styles/Tasks.css'
import { Nav } from '../style/Tasks'
import {TileContext} from '../utils/TileContext';
import NavTile from './NavTile';


function NavTiles() {
  const [tiles, setTiles] = useContext(TileContext);

  return (
    
      <Nav className="level is-mobile">
        <div className="level-item has-text-centered"></div>
    
        <div className="columns is-mobile">
          {tiles.map(tile => (
          <NavTile 
            image={tile.image}
            alt={tile.alt}
            page={tile.page}
            color={tile.color}
            key={tile.id}/>
          ))}
        </div>

        <div className="level-item has-text-centered"></div>
      </Nav>
  );
}

export default NavTiles;