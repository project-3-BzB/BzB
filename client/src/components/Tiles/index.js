import React, { useContext} from 'react';
// import "./style.css";
import Tile from '../Tile';
import {TileContext} from '../../utils/TileContext';

function Tiles() {
  const [tiles, setTiles] = useContext(TileContext);
  
  // const homeTile = tiles.slice(0, 1);
  const tileGroup1 = tiles.slice(1, 3);
  const tileGroup2 = tiles.slice(3, 5);

  return (
    <div>
        {/* <div className="columns is-mobile">
        {homeTile.map(tile => (
        <Tile 
          image={tile.image}
          alt={tile.alt}
          page={tile.page}
          color={tile.color}
          key={tile.id}/>
        ))}
      </div> */}
      <div className="columns is-mobile">
        {tileGroup1.map(tile => (
        <Tile 
          image={tile.image}
          alt={tile.alt}
          page={tile.page}
          color={tile.color}
          key={tile.id}/>
        ))}
      </div>
      <div className="columns is-mobile">
        {tileGroup2.map(tile => (
        <Tile 
          image={tile.image}
          alt={tile.alt}
          page={tile.page}
          color={tile.color}
          width={tile.width}
          key={tile.id}/>
        ))}
      </div>
    </div>
  );
}

export default Tiles;