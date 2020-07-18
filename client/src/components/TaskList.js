import React, {useContext} from 'react';
// import "./style.css";
import Tile from './Tile';
import {TileContext} from '../utils/TileContext';

function TaskList() {
  const [tiles, setTiles] = useContext(TileContext);
  return (
    <div>
      <section class="columns is-desktop is-mobile">
        {tiles.map(tile => (
        <Tile 
          image={tile.image}
          alt={tile.alt}
          page={tile.page}
          key={tile.id}/>
        ))}
      </section>
    </div>

  );
}

export default TaskList;