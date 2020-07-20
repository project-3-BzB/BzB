import React, { createContext, useState } from "react"

export const FoldersContext =createContext()

export const FoldersProvider = ({ children }) => {
  const [folders, setFolders] = useState({
    foldersList : [
      {name : 'first folder', _id: 1},
      {name : 'second folder', _id: 2},
      {name : 'third folder', _id: 3},
      {name : 'fourth folder', _id: 4},
      {name : 'fifth folder', _id: 5},
      {name : 'sixth folder', _id: 6},
      {name : 'seventh folder', _id: 7},
      {name : 'eigth folder', _id: 8}
    ]
  })

  return (
    <FoldersContext.Provider value={[folders, setFolders]}>
      { children }
    </FoldersContext.Provider>
  )
}