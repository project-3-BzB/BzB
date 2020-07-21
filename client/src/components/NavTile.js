import React from 'react';
import '../pages/styles/Home.css'
import { Link, useLocation } from "react-router-dom";
import { ContainerTile, Overlay, Text } from '../style/Home'

const NavTile = ({ image, alt, page, color }) => {

  const location = useLocation();

      function List() {
        window.location.assign(page)
      return
    }
    
  return (
    <ContainerTile className="container">
      <div className="column">
      <Link onClick={List}>
        <img className="animate__animated animate__rotateIn" src={image} width="96px" alt={alt}/>
        <Overlay className="overlay" color={color}>
          <Text className="text">{alt}</Text>
        </Overlay>
      </Link>
      </div>
    </ContainerTile>
  )
}

export default NavTile; 