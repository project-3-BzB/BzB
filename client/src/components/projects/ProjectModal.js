import React, { useState, useContext } from 'react'
import FormInput from '../FormInput'
import { FoldersContext } from '../../utils/FolderContext'
import { getIsLoggedIn } from '../../utils/Auth'

const ProjectModal = props => {

  return (
    <div className={props.active ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">New Project</p>
            <button className="delete" aria-label="close" onClick={props.modal}></button>
          </header>
          <section className="modal-card-body">
            <input className='input is-medium is-rounded'
              onChange={props.change}
              name='name'
              type='name'
              placeholder='Project Name'>
            </input>
          </section>
          <footer className="modal-card-foot">
            <button 
              className="button is-success" 
              onClick={props.create}>
              Create Folder
            </button>
            <button className="button" onClick={props.modal}>Cancel</button>
          </footer>
        </div>
      </div>
  )
}

export default ProjectModal
