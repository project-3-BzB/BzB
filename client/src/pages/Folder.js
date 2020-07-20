import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FoldersContext } from '../utils/FolderContext'

const Folder = () => {
  const [folders, setFolders] = useContext(FoldersContext)
  const [folder, setFolder] = useState()
  const {id} = useParams()

  console.log(folders.foldersList.filter(folder => folder._id === parseInt(id)))
  
  return (
    // <div>
    //   <h1>folder page!</h1>
    // </div>
    
    <div>
      {folders.foldersList.filter(folder => folder._id === parseInt(id)).map(folder => (
        <h1>{folder.name}</h1>
      ))}
    </div>
  )
}

export default Folder