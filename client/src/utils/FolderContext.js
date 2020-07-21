import React, { createContext, useState } from "react"

export const FoldersContext =createContext()

export const FoldersProvider = ({ children }) => {
  const [folders, setFolders] = useState({})
  
  return (
    <FoldersContext.Provider value={[folders, setFolders]}>
      { children }
    </FoldersContext.Provider>
  )
}