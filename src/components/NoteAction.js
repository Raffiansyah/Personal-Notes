import React from "react";
import DeleteBtn from "./DeleteBtn";

function NoteAction({id, onDelete}){
    return (
        <div className="note-item__action">
            <DeleteBtn id={id} onDelete={onDelete} />
        </div>
    )
}
export default NoteAction;