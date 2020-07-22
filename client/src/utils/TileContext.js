import React, {useState, createContext} from 'react';


export const TileContext = createContext();

export const TileProvider = props => {
  const [tiles, setTiles] = useState([
    {
      image: props.bee,
      alt: 'Home',
      page: props.bLink,
      color: 'gold',
      id: 1
    },
    {
      image: props.task,
      alt: 'Tasks',
      page: props.tLink,
      color: '#58afff',
      id: 2
    },
    {
      image: props.note,
      alt: 'Journals',
      page: props.jLink,
      color: '#A78EE6',
      id: 3
    },
    {
      image: props.link,
      alt: 'Links',
      page: props.lLink,
      color: '#ff4c50',
      id: 4
    },
    {
      image: props.img,
      alt: 'Photos',
      page: props.pLink,
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