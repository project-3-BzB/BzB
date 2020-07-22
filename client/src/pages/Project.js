import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import './styles/Tasks.css'
import NavTiles from '../components/NavTiles';
import FormHome from '../components/FormHome';
import TaskFolder from '../components/TaskFolder';
import { FoldersContext } from '../utils/FolderContext'
import {TileProvider} from '../utils/TileContext'
import API from '../utils/API'
import { getIsLoggedIn } from '../utils/Auth';


const Project = () => {
  // const [folders, setFolders] = useContext(FoldersContext)
  const [contents, setContents] = useState({})
  // const userId = getIsLoggedIn()

  const {id} = useParams()
  // console.log(id)

  useEffect(() => {
    loadContents()
  }, [])


  function loadContents() {
    API.get(`/api/folder/${id}`).then(res => {
      console.log(res.data)
    }).then(res => {
      setContents({...contents, fileContents: res})
    })
  }


  return (
   <div>
   {/* {contents.map(file => )} */}
  </div>
  )
}

export default Project;

 {/* {folders.foldersList ? 
      folders.foldersList.filter(folder => folder._id === parseInt(id)).map(folder => (
      <h1>{folder.name}</h1>
    )) : <h1>No Folders Found</h1>} */}
    
    {/* {folders.foldersList
   .filter(folder => folder._id === parseInt(id))
   .map(folder => (
   <h1>{folder.name}</h1>
   ))} */}