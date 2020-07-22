import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import API from '../utils/API'
// import { taskContext, taskProvider } from '../utils/taskContext'
import Wrapper from '../style/Wrapper'
import img from '../img/bg_blue.png'
import bee from '../img/icon_bee.png'
// import task from '../img/button_journals.png'
import task from '../img/button_tasks.png'
import link from '../img/button_links.png'
import photo from '../img/button_photos.png'
import ProjectNav from '../components/projects/ProjectNav'
import { ProjectsContent } from '../style/Projects'
import logo from '../img/logo_header.png'
import { Icon } from '../style/Projects'
import { getIsLoggedIn } from '../utils/Auth'

const Task2 = props => {
  // const [tasks, settasks] = useContext(taskContext)
  const [contents, setContents] = useState({})
  const [field, setField] = useState({})
  // const userId = getIsLoggedIn()
  // const userId = getIsLoggedIn()
  const history = useHistory()

  const {id} = useParams()
  // console.log(id)

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
      // console.log(res.data)
      
    })
  }

  function createTask() {
    API.post(`/api/folder/${id}/new_task`, {
      title: field.title,
      content: field.content
    }).then(res=> {
      // console.log(res)
      loadContents()
    })
  }

  function updateTask(nId) {
    API.put(`/api/task/${nId}`, {content: field.content})
    .then(res => {
      console.log(res)
      loadContents()
    })
  }

  function deleteTask(nId) {
    API.delete(`/api/task/delete/${id}/${nId}`)
    .then(res => {
      console.log(res)
      loadContents()
    })
  }

  const handleUpdate = dId => {
    document.getElementById(dId).setAttribute('class', 'is-hidden')
    updateTask(dId)
  }

  const handleDelete = nId => {
    deleteTask(nId)
  }

  const handleChange = e => {
    const {name, value} = e.target
    setField({...field, [name]: value})
  }

  const handleCreate = e => {
    e.preventDefault()
    createTask()
  }

  function back() {
    history.push('/folder/' + id)
  }

  return (
    <>
    <ProjectNav img={logo} go={back}/>
      <Wrapper img={img}>
        {/* <ProjectsContent> */}
          {/* <div className='columns'> */}
            <div className='column is-one-third'>
              <input className="input mb-3"
              type="text" placeholder="task Title" 
              name='title' onChange={handleChange}
              /> 
              
              <div className='columns mb-2 mt-2'>

                      <input placeholder='2020' className='input is-small'></input>
                      <input placeholder='12' className='input is-small'></input>
                      <input placeholder='3' className='input is-small'></input>
                      <input placeholder='14?' className='input is-small'></input>
                      <input placeholder='28.....' className='input is-small'></input>

              </div>
              <textarea className="textarea" 
              placeholder="I can't wait for you to do me!" name='content'
              onChange={handleChange}>
              </textarea>
              <button className='button is-warning is-light mt-4' onClick={handleCreate}>Set Task</button>
            </div>

            {/*SAVED taskS LIST */}

            <div className='column is-two-thirds'>
              {contents.tasksList ? contents.tasksList.map(task=> (
                  <div key={task._id} className='notification animate__animated animate__fadeInUpBig'>
                    <button name={task._id} className='delete'
                      onClick={()=> {handleDelete(task._id)}}
                      />
                  <article className='media'>
                    <div className='media-content'>
                      <div className='content'>
                        <Link to={`folder/`} style={{textDecoration: 'none'}}>
                          <h4 className='title is-size-5 is-capitalized'>{task.title}</h4>
                        </Link>
                        <textarea className="textarea" rows='1' name='content' defaultValue={task.content}
                            onChange={e => {
                            e.preventDefault()
                            const {name, value} = e.target
                            document.getElementById(task._id).setAttribute('class', 'button')
                            setField({...field, [name]: value})}}>                            
                        </textarea>
                        <button className='button is-hidden' id={task._id} 
                        onClick={()=>{handleUpdate(task._id)}}>Save</button>
                        <p className='subtitle'>Created {task.createdAt} </p>
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

export default Task2

