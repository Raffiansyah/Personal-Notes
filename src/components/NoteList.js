import React from 'react'
import NoteItem from './NoteItem'

function NoteList({ notes, onDelete, onArchive, onRestore, filterText}) {
    return (
        <div className='notes-list'>
            {
                notes.filter((note) => {
                    if(filterText){
                        return note.title.toLowerCase().includes(filterText.toLowerCase());
                    }
                    return true
                }).map((notes) => (
                    <NoteItem key={notes.id} id={notes.id} onDelete={onDelete} onArchive={onArchive} onRestore={onRestore} {...notes}/>
                ))
            }
        </div>
    )
}

export default NoteList;