import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import API from '../utils/API'
import { NoteContext, NoteProvider } from '../utils/NoteContext'
import Wrapper from '../style/Wrapper'
import img from '../img/bg_purple.png'
import bee from '../img/icon_bee.png'
import note from '../img/button_journals.png'
import task from '../img/button_tasks.png'
import link from '../img/button_links.png'
import photo from '../img/button_photos.png'
import ProjectNav from '../components/projects/ProjectNav'
import { ProjectsContent } from '../style/Projects'
import logo from '../img/logo_header.png'
import { Icon } from '../style/Projects'
import { getIsLoggedIn } from '../utils/Auth'

const Notes = props => {
  // const [notes, setNotes] = useContext(NoteContext)
  const [contents, setContents] = useState({})
  const [field, setField] = useState({})
  // const userId = getIsLoggedIn()
  // const userId = getIsLoggedIn()

  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    if(id) {
      loadContents()
    }
    
  }, [])


  function loadContents() {
    API.get(`/api/folder/${id}`).then(res => {
      if(res.data){
        setContents(res.data)
      }
      console.log(res.data)
      
    })
  }

  function createNote() {
    API.post(`/api/folder/${id}/new_note`, {
      title: field.title,
      content: field.content
    }).then(res=> {
      console.log(res)
      loadContents()
    })
  }

  function updateNote(nId) {
    API.put(`/api/note/${nId}`, {content: field.content})
    .then(res => {
      console.log(res)
      loadContents()
    })
  }

  function deleteNote(nId) {
    API.delete(`/api/note/delete/${id}/${nId}`)
    .then(res => {
      console.log(res)
      loadContents()
    })
  }

  const handleUpdate = dId => {
    document.getElementById(dId).setAttribute('class', 'is-hidden')
    updateNote(dId)
  }

  const handleDelete = nId => {
    deleteNote(nId)
  }

  const handleChange = e => {
    const {name, value} = e.target
    setField({...field, [name]: value})
  }

  const handleCreate = e => {
    e.preventDefault()
    createNote()
  }


  return (
    <>
    <ProjectNav img={logo} />
      <Wrapper img={img}>
        {/* <ProjectsContent> */}
          {/* <div className='columns'> */}
            <div className='column is-one-third'>
              <input className="input mb-3"
              type="text" placeholder="Note Title" 
              name='title' onChange={handleChange}
              />
              <textarea className="textarea" 
              placeholder="Hi! I'm your newest, FUNNEST note ;p" name='content'
              onChange={handleChange}>
              </textarea>
              <button className='button' onClick={handleCreate}>Create Note</button>
            </div>

            {/*SAVED NOTES LIST */}

            <div className='column is-two-thirds'>
              {contents.notesList ? contents.notesList.map(note=> (
                  <div key={note._id} className='notification animate__animated animate__fadeInUpBig'>
                    <button name={note._id} className='delete'
                      onClick={()=> {handleDelete(note._id)}}
                      />
                  <article className='media'>
                    <div className='media-content'>
                      <div className='content'>
                        <Link to={`folder/`} style={{textDecoration: 'none'}}>
                          <h4 className='title is-size-5 is-capitalized'>{note.title}</h4>
                        </Link>
                        <textarea className="textarea" rows='1' name='content' defaultValue={note.content}
                            onChange={e => {
                            e.preventDefault()
                            const {name, value} = e.target
                            document.getElementById(note._id).setAttribute('class', 'button')
                            setField({...field, [name]: value})}}>                            
                        </textarea>
                        <button className='button is-hidden' id={note._id} 
                        onClick={()=>{handleUpdate(note._id)}}>Save</button>
                        <p className='subtitle'>Created {note.createdAt} </p>
                      </div>
                    </div>
                  </article>
                </div>
              )) : <h1>'Loading'</h1>}
            </div>
          {/* </div> */}
        {/* </ProjectsContent> */}
      </Wrapper>
    </>
  )
}

export default Notes

