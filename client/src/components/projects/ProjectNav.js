import React from 'react'
import { Icon } from '../../style/Projects'

const ProjectNav = props => {

  return (
    <nav className='navbar fixed-top' role='navigation' aria-label='main-navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item'>
          <img src={props.img} />
        </a>
      </div>
      <div className='navbar-start is-active mobileButton'>
        <div className='navbar-item'>
          <button type='button' 
            className='button is-primary is-rounded is-active'
            onClick={props.onClick}>
              <Icon className='fas fa-plus-square'/>
              Add a Project
          </button>
        </div>
      </div>
      <div className='navbar-end'>
        <div className='navbar-item'>
          <input className='input is-rounded' 
            type='text' 
            placeholder='Search Projects'
            onChange={props.onChange}
          />
        </div>
      </div>
    </nav>
  )
}

export default ProjectNav