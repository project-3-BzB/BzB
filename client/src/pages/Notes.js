import React, { useContext } from 'react'
import { NoteContext, NoteProvider } from '../utils/NoteContext'

const Notes = () => {
  const [notes, setNotes] = useContext(NoteContext)

  return (
    <div className='container'>
      {notes.map( (note, i) => (
        <div key={i}>
          <div className='column is-full'>
          <h4 className='title animate__animated animate__pulse'>{note.title}</h4>
        </div>
        <div className='column is-full'>
          <p>{note.content}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Notes