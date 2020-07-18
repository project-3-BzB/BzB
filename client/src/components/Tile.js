import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Tile = ({ image, alt, page }) => {
  
  const location = useLocation();

    function List() {
        window.location.assign(page)
      return
    }

    return (
    <div className="column is-half-mobile">
      <Link onClick={List}>
        <img className="animate__animated animate__rotateIn" src={image} alt={alt}/>
      </Link>
    </div>
  )
}

export default Tile;