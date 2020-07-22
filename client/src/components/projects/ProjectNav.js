import React from 'react'
import { Icon } from '../../style/Projects'
import LogoutBtn from '../LogoutBtn'
import { useLocation } from 'react-router-dom'

const ProjectNav = props => {

  const { pathname } = useLocation()
  return (
    <nav className='navbar fixed-top' role='navigation' aria-label='main-navigation'>
      <div className='navbar-item'>
        <LogoutBtn />
      </div>
      <div className='navbar-brand'>
        <a className='navbar-item'>
          <img src={props.img} />
        </a>
      </div>
      
      
      <div className={pathname === "/projects" ? 'navbar-start is-active mobileButton' : 'is-hidden'}>
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