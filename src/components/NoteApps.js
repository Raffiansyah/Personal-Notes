import React from "react";
import NoteInput from "./NoteInput";
import { getInitialData } from '../utils/index'
import NoteList from "./NoteList";
import Header from "./header";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            search: ''
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.filterUpdate = this.filterUpdate.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    filterUpdate(value){
        this.setState({
            search: value
        })
    }

    onAddNoteHandler({title, body, archived}) {
        this.setState((prevState)=> {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived,
                        createdAt: +new Date(),
                    }
                ]
            }
        })
    }

    onDelete(id){
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({notes})
    }

    render(){
        const note = this.state.notes.length;
            if (note === 0) {
                return(
                    <>
                    <Header onSearch={this.filterUpdate}/>
                    <div className="note-app__body">
                        <NoteInput addNote={this.onAddNoteHandler} />
                        <h2>Catatan Aktif</h2>
                        <p className="notes-list__empty-message">Tidak ada catatan</p>
                    </div>
                    </>
                )
            } else {
                return(
                    <>
                    <Header onSearch={this.filterUpdate}/>
                    <div className="note-app__body">
                        <NoteInput addNote={this.onAddNoteHandler} />
                        <h2>Catatan Aktif</h2>
                        <NoteList notes={this.state.notes} onDelete={this.onDelete} onArchive={this.archiveHandler}/>
                    </div>
                    </>
                )
            }
    }
}

export default NoteApp;