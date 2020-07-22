import React, { useContext, useEffect, useState } from 'react'
import { FoldersContext } from '../utils/FolderContext'
import API from '../utils/API'
import { Link } from 'react-router-dom'
import { ul, li, div } from '../style/Folder'
import FormInput from '../components/FormInput'
import { getIsLoggedIn } from '../utils/Auth'

const Folders = () => {
  const [folders, setFolders] = useContext(FoldersContext)
  const [newFolder, setNewFolder] = useState('')
  const [modalActive, setModalActive] = useState(false)
  const [search, setSearch] = useState('')
  const id = getIsLoggedIn()

  
  useEffect(() => {
    loadFolders()
  }, [])

  // useEffect(() => {
  //   if(search) {}
  // })

  function loadFolders() {
    API.get(`api/user/${id}`)
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
      API.delete(`api/folder/delete/${id}/${data}`)
      loadFolders()
    }
    catch (err) {
      console.log(err)
    }
  }

  // const confirmDelete = () => {

  // }

  const createFolder = async () => {
    try {
      const res = await API.post(`api/user/${id}/new_folder`, {name: newFolder})
      console.log(res.data.foldersList)
      // loadFolders()
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

    <div>
      {/* <FormInput name='search' placeholder='search projects' value={search} onChange={handleSearch}/> */}
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

      <button onClick={handleModal}>New Folder</button>

      <div className={modalActive ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close" onClick={handleModal}></button>
          </header>
          <section className="modal-card-body">
            <FormInput
              value={newFolder}
              name='name'
              type='name'
              placeholder='New Folder Name'
              onChange={handleChange}
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={handleCreate}>Create Folder</button>
            <button className="button" onClick={handleModal}>Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Folders