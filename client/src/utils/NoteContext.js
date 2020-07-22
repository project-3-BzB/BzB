import React, { createContext, useState } from 'react'

export const NoteContext = createContext()

export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([
        {
          title: 'First Note',
          createdAt: '5/20/20',
          UpdatedAt: null,
          content: 'This is my first note. Yay!'
        },
        {
          title: 'Second Note',
          createdAt: '5/23/20',
          UpdatedAt: null,
          content: 'This is my second note. Yay!'
        },
        {
          title: 'Third Note',
          createdAt: '6/12/20',
          UpdatedAt: '6/17/20',
          content: 'This is my third note. Yay!'
        }
    ])

    return (
        <NoteContext.Provider value ={[notes, setNotes]}>
            {children}
        </NoteContext.Provider>
    )
}
