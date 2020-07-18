import React, {useState, createContext} from 'react';

export const TileContext = createContext();

export const TileProvider = props => {
  const [tiles, setTiles] = useState([
    {
      image: 'images/button_tasks.png',
      alt: 'Tasks',
      id: 1
    },
    {
      image: 'images/button_journals.png',
      alt: 'Journals',
      id: 2
    },
    {
      image: 'images/button_links.png',
      alt: 'Links',
      id: 3
    },
    {
      image: 'images/button_photos.png',
      alt: 'Photos',
      id: 4
    }
  ]);
  return(
    <TileContext.Provider value={[tiles, setTiles]}>
      {props.children}
    </TileContext.Provider>
  );
}