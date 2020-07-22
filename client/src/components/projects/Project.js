import React from 'react'
import { Icon } from '../../style/Projects'
import { Link } from 'react-router-dom'

const Project = props => {


  return (
    <div className='notification animate__animated animate__fadeInUpBig'>
      <button name={props.id} className='delete' onClick={props.click}/>
      <article className='media'>
        <div className='media-left'>
          <Icon className='fas fa-folder fa-3x'/>
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={props.link} style={{textDecoration: 'none'}}>
              <h4 className='title is-5'>{props.title}</h4>
            </Link>
            <p className='subtitle is-6'>Created {props.date}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Project