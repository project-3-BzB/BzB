import React, {useState, createContext} from 'react';

export const TileContext = createContext();

export const TileProvider = props => {
  const [tiles, setTiles] = useState([
    {
      image: 'images/button_tasks.png',
      alt: 'Tasks',
      page: '/Tasks',
      id: 1
    },
    {
      image: 'images/button_journals.png',
      alt: 'Journals',
      page: '/Journals',
      id: 2
    },
    {
      image: 'images/button_links.png',
      alt: 'Links',
      page: '/Links',
      id: 3
    },
    {
      image: 'images/button_photos.png',
      alt: 'Photos',
      page: '/Photos',
      id: 4
    }
  ]);
  return(
    <TileContext.Provider value={[tiles, setTiles]}>
      {props.children}
    </TileContext.Provider>
  );
}