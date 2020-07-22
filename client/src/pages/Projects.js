
import React, { useContext, useEffect, useState } from 'react'
import { FoldersContext } from '../utils/FolderContext'
import API from '../utils/API'
import { getIsLoggedIn } from '../utils/Auth'
import { ProjectsWrapper, ProjectsContent } from '../style/Projects'
import ProjectNav from '../components/projects/ProjectNav'
import img from '../img/bg_yellow.png'
import logo from '../img/logo_header.png'
import Project from '../components/projects/Project'
import ProjectModal from '../components/projects/ProjectModal'

const Projects = () => {
  const [folders, setFolders] = useContext(FoldersContext)
  const [newFolder, setNewFolder] = useState('')
  const [modalActive, setModalActive] = useState(false)
  const id = getIsLoggedIn()
  // const [search, setSearch] = useState('')
  // const [toDelete, setToDelete] = useState('')
  
  useEffect(() => {
    loadFolders()
  }, [])

  // useEffect(() => {
  //   if(search) {
      
  //   }
  // })

  function loadFolders() {
    API.get(`api/user/${id}`)
    .then(res => {
      // console.log(res.data[0])
      if(res.data) {
        setFolders({...folders, foldersList: res.data[0].foldersList})
      }
      // console.log(res.data[0].foldersList)
    })
  }

  const deleteFolder = async data => {
    try {
      API.delete(`api/folder/delete/${id}/${data}`)
      loadFolders()
    }
    catch (err) {
      console.log(err)
    }
  }

  // const confirmDelete = e => {}

  const createFolder = async () => {
    try {
      await API.post(`api/user/${id}/new_folder`, {name: newFolder})
      // console.log(res)
      loadFolders()
      setNewFolder('')
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleModal = e => {
    e.preventDefault()
    setNewFolder('')
    modalActive ? setModalActive(false) : setModalActive(true)
  }

  const handleChange = e => {
    e.preventDefault()
    const { value } = e.target
    setNewFolder(value.trim())
    // console.log(newFolder)
  }

  const handleCreate = e => {
    e.preventDefault()
    // setFolders({foldersList: []})
    createFolder()
    // loadFolders()
    setModalActive(false)
  }

  const handleDelete = e => {
    e.preventDefault()
    const { name } = e.target
    // console.log(name)
    deleteFolder(name)
  }


  return (
    <>
      <ProjectNav img={logo} onClick={handleModal}/>
      <ProjectsWrapper img={img}>
        <ProjectsContent>
        {folders.foldersList ? (
        <>
          {folders.foldersList.map(folder => (
            <Project 
              click={handleDelete}
              title={folder.name.toUpperCase()}
              link={folder._id}
              id={folder._id}
              date={folder.createdAt}
              key={folder._id}
              />
          ))}
        </>
      ) : <h2>No Folders Found</h2> }
        </ProjectsContent>
      </ProjectsWrapper>
      <ProjectModal 
        modal={handleModal}
        change={handleChange}
        create={handleCreate}
        active={modalActive}
      />
    </>
  )
}

export default Projects