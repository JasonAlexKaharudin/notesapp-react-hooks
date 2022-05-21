import React, { useEffect, useState } from "react";
import NotesContext from "../context/NotesContext";
import NoteList from "./NoteList";
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {
    const [notes, setNotes] = useState([]) 

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes')); 
        if (notesData){
            setNotes(notesData);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <>
            <NotesContext.Provider value={{ notes, setNotes }}>
                <header className="text-6xl italic text-center py-10 bg-blue-400 text-slate-200">
                    <h1>Notes App</h1>        
                </header>                                            
                <NoteList/>
                <AddNoteForm/>
            </NotesContext.Provider>            
        </>
    )
}

export default NoteApp;