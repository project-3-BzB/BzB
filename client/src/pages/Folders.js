import React, { useContext, useEffect } from 'react'
import { FoldersContext } from '../utils/FolderContext'
import API from '../utils/API'
import { Link } from 'react-router-dom'
import { ul, li, div } from '../style/Folders'

const Folders = () => {
  const [folder, setFolder] = useContext(FoldersContext)

  // useEffect(() => {
  //   API.get(`api/folder/get${folder.userId}`)
  //   .then(res => setFolder({...folder, foldersList: res.foldersList}))
  // }, [newFolder()])

  const newFolder = async () => {
    try {
      await API.post('api/folder/create', {name: folder.newFolderName})
      
    }
    catch (err) {
      console.log(err)
    }
  }

  return (

    <div>
      {folder.foldersList.length ? (
        <ul>
          {folder.foldersList.map(folder => (
            <li key={folder._id}>
              <div>
                <Link to={`/folder/${folder._id}`}>
                  <h2>{folder.name}</h2>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : <h2>No Folders Found</h2> }

    </div>
  )
}

export default Folders