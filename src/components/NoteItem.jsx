import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
  return (
    <Link to={`/edit-note/${note.id}`} state={{note}} className="note">
        <h5>{note.title.length > 40 ? (note.title.substr(0, 60)) + '...'
        : note.title}</h5>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem