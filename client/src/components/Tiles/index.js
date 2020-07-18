import React, {useContext} from 'react';
// import "./style.css";
import Tile from '../Tile';
import {TileContext} from '../../utils/TileContext';

function Tiles() {
  const [tiles, ] = useContext(TileContext);
  return (
    <div>
      <section class="columns is-desktop is-mobile">
        {tiles.map(tile => (
        <Tile 
          image={tile.image}
          alt={tile.link}
          key={tile.id}/>
        ))}
      </section>
    </div>

  );
}

export default Tiles;