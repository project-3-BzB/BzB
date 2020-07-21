import React, {useState, createContext} from 'react';

export const TileContext = createContext();

export const TileProvider = props => {
  const [tiles, setTiles] = useState([
    {
      image: 'images/icon_bee.png',
      alt: 'Home',
      page: '/home',
      color: 'gold',
      id: 1
    },
    {
      image: 'images/button_tasks.png',
      alt: 'Tasks',
      page: '/Tasks',
      color: '#58afff',
      id: 2
    },
    {
      image: 'images/button_journals.png',
      alt: 'Journals',
      page: '/Journals',
      color: '#A78EE6',
      id: 3
    },
    {
      image: 'images/button_links.png',
      alt: 'Links',
      page: '/Links',
      color: '#ff4c50',
      id: 4
    },
    {
      image: 'images/button_photos.png',
      alt: 'Photos',
      page: '/Photos',
      color: '#ff7e4c',
      id: 5
    }
  ]);
  return(
    <TileContext.Provider value={[tiles, setTiles]}>
      {props.children}
    </TileContext.Provider>
  );
}