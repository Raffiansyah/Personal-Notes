import React from "react";
import DeleteBtn from "./DeleteBtn";
import ArchiveButton from "./ArchiveBtn";
import RestoreButton from "./restoreBtn";

function NoteAction({id, onDelete, onArchive, onRestore, archived}){
    return (
        <div className="note-item__action">
            <DeleteBtn id={id} onDelete={onDelete} />
            {(!archived)? <ArchiveButton onArchive={onArchive}/> : <RestoreButton onRestore={onRestore}/>}
        </div>
    )
}
export default NoteAction;