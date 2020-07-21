import React, { useContext, useEffect, useState } from 'react'
import { FoldersContext } from '../utils/FolderContext'
import API from '../utils/API'
import { Link } from 'react-router-dom'
import { ul, li, div } from '../style/Folders'
import FormInput from '../components/FormInput'

const Folders = () => {
  const [folders, setFolders] = useContext(FoldersContext)
  const [newFolder, setNewFolder] = useState({})
  const [modalActive, setModalActive] = useState(false)
  // console.log(folders)
  
  useEffect(() => {
    loadFolders()
  }, [])

  function loadFolders() {
    API.get(`api/user/${folders.userId}`)
    .then(res => {
      console.log(res.data[0])
      if(res.data) {
        setFolders({...folders, foldersList: res.data[0].foldersList})
      }
      // console.log(res.data[0].foldersList)
    })
  }

  const deleteFolder = async data => {
    try {
      API.delete(`api/folder/delete/${folders.userId}/${data}`)
    }
    catch (err) {
      console.log(err)
    }
  }

  const createFolder = async () => {
    try {
      await API.post(`api/user/${folders.userId}/new_folder`, {name: newFolder.name})
      // console.log(res)
      loadFolders()
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleClick = e => {
    e.preventDefault()
    setNewFolder({})
    modalActive ? setModalActive(false) : setModalActive(true)
  }

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setNewFolder({[name]: value.trim()})
    // console.log(newFolder)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // setFolders({foldersList: []})
    createFolder()
    // loadFolders()
    setModalActive(false)
  }

  const handleDelete = e => {
    e.preventDefault()
    const { name } = e.target
    console.log(name)
    // deleteFolder(name)
  }

  return (

    <div>
      {folders.foldersList ? (
        <ul>
          {folders.foldersList.map(folder => (
            <li key={folder._id}>
              <div>
                <Link to={`/folder/${folder._id}`}>
                  <h2>{folder.name}</h2>
                </Link>
                <button name={folder._id} onClick={handleDelete}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : <h2>No Folders Found</h2> }

      <button onClick={handleClick}>New Folder</button>

      <div className={modalActive ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close" onClick={handleClick}></button>
          </header>
          <section className="modal-card-body">
            <FormInput
              name='name'
              type='name'
              placeholder='New Folder Name'
              onChange={handleChange}
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={handleSubmit}>Create Folder</button>
            <button className="button" onClick={handleClick}>Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Folders