import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { ContainerTile, Overlay, Text } from '../style/Home'

const Tile = ({ image, alt, page, color }) => {
  
  const location = useLocation();

    function List() {
        window.location.assign(page)
      return
    }

    return (
      <ContainerTile className="container">
        <div className="column hexagon">
          <Link onClick={List}>
            <img className="animate__animated animate__flip" src={image} width="100px" alt={alt}/>
            <Overlay className="overlay" color={color}>
              <Text className="text">{alt}</Text>
            </Overlay>
          </Link>
        </div>
    </ContainerTile>
  )
}

export default Tile;