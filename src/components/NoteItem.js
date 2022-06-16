import React from 'react'
import NoteContent from './NoteContent'
import NoteAction from './NoteAction';

function NoteItem({ title, body, createdAt, id, onDelete, onArchive, onRestore}){
    return (
        <div className='note-item'>
            <NoteContent title={title} body={body} createdAt={createdAt} />
            <NoteAction id={id} onDelete={onDelete} onArchive={onArchive} onRestore={onRestore}/>
        </div>
    )
}

export default NoteItem;