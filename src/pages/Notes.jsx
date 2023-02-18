import React, { useEffect, useState } from 'react';
import "../index.css";
import NoteItem from '../components/NoteItem';
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'

const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearch = (e) => {
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text])


  return (
    <section>
      <header className="notes__header">
        <h2>Holm Notes</h2>
        { showSearch &&<input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autoFocus placeholder="Not Başlığı..." /> }
        <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose/> : <BsSearch/>}</button>
      </header>
      <div>

      </div>
      <div className="notes__container">
        {filteredNotes.length === 1 ? null :  <p className='empty__notes'>No note matching your search was found</p>}
        {
          filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
        }
      </div>
      <Link to="/create-note" className='btn add__btn'><AiOutlinePlus/></Link>
    </section>
  )
}

export default Notes