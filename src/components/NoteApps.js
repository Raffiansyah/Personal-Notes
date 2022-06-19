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
            filterText: ''
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onSearch = this.onSearch.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    onSearch(value){
        this.setState({
            filterText: value
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
        console.log('update from child', this.state.filterText)
        const note = this.state.notes.length;
        return(
            <>
            <Header filterText={this.state.filterText} onSearch={this.onSearch} />
            <div className="note-app__body">
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                {(note === 0)?<p className="notes-list__empty-message">Tidak ada catatan</p>:<NoteList notes={this.state.notes} onDelete={this.onDelete} onArchive={this.archiveHandler} filterText={this.state.filterText} />}    
            </div>
            </>
        )
    }
}

export default NoteApp;