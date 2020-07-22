import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import API from '../utils/API'
import { NoteContext, NoteProvider } from '../utils/NoteContext'
import Wrapper from '../style/Wrapper'
import img from '../img/bg_red.png'
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

const Links = props => {
  // const [links, setlinks] = useContext(NoteContext)
  const [contents, setContents] = useState({})
  const [field, setField] = useState({})
  // const userId = getIsLoggedIn()
  // const userId = getIsLoggedIn()

  const {id} = useParams()
  // console.log(id)

  useEffect(() => {
    loadContents()
  }, [])


  function loadContents() {
    API.get(`/api/folder/${id}`).then(res => {
      console.log(res.data)
      setContents(res.data)
    })
  }

  function createLink() {
    API.post(`/api/folder/${id}/new_link`, {
      title: field.title,
      content: field.content
    }).then(res=> {
      console.log(res)
      loadContents()
    })
  }


  function deleteLink(dId) {
    API.delete(`/api/link/delete/${id}/${dId}`)
    .then(res => {
      console.log(res)
      loadContents()
    })
  }


  const handleDelete = dId => {
    deleteLink(dId)
  }

  const handleChange = e => {
    const {name, value} = e.target
    setField({...field, [name]: value})
  }

  const handleCreate = e => {
    e.preventDefault()
    createLink()
  }


  return (
    <>
    <ProjectNav img={logo} />
      <Wrapper img={img}>
        {/* <ProjectsContent> */}
          {/* <div className='columns'> */}
            <div className='column is-one-third'>
              <input className="input mb-3"
              type="text" placeholder="NSFW" 
              name='title' onChange={handleChange}
              />
              <input className="input" 
              placeholder='big sexy link ------- (paste the full thing)' name='content'
              onChange={handleChange}>
              </input>
              <button className='button' onClick={handleCreate}>Add Link</button>
            </div>

            {/*SAVED links LIST */}

            <div className='column is-two-thirds'>
              {contents.linksList ? contents.linksList.map(link=> (
                  <div className='notification animate__animated animate__fadeInUpBig'>
                    <button name={link._id} className='delete'
                      onClick={()=> {handleDelete(link._id)}}
                      />
                  <article className='media'>
                    <div className='media-content'>
                      <div className='content'>
                        <h4 className='title is-size-3 is-capitalized'>{link.title}</h4>
                        <a href={`${link.content}`}
                          target={'_blank'} rel='noopener noreferrer' className='is-size-5'> 
                          {link.content}
                        </a>
                        <p className='subtitle is-6'>Created {link.createdAt} </p>
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

export default Links

