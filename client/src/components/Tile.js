import React from 'react';

// https://www.youtube.com/watch?v=taMJct5oeoI
const Tile = ({ image, alt }) => {
  
  return (
    <div className="column is-half-mobile">
      <img src={image} alt={alt}/>
    </div>
  )
}

export default Tile;