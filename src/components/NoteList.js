import React from 'react'
import NoteItem from './NoteItem'

function NoteList({ notes, onDelete, onArchive, onRestore,}) {
    return (
        <div className='notes-list'>
            {
                notes.map((notes) => (
                    <NoteItem key={notes.id} id={notes.id} onDelete={onDelete} onArchive={onArchive} onRestore={onRestore} {...notes}/>
                ))
            }
        </div>
    )
}

export default NoteList;