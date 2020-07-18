import React, {useContext} from 'react';
// import "./style.css";
import Tile from '../Tile';
import {TileContext} from '../../utils/TileContext';

function Tiles() {
  const [tiles, setTiles] = useContext(TileContext);
  return (
      <div className="columns is-desktop is-mobile">
        {tiles.map(tile => (
        <Tile 
          image={tile.image}
          alt={tile.alt}
          page={tile.page}
          color={tile.color}
          key={tile.id}/>
        ))}
      </div>
  );
}

export default Tiles;