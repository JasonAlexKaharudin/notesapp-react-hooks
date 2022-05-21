import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";
import Note from "./Note";

const NoteList = () => {
    const { notes } = useContext(NotesContext);
    return(
        <>
            <h1 className="text-4xl underline ml-28 mt-14">My Notes</h1>
            {notes.map((note) => (
                <Note key={note.title} title={note.title} body={note.body}/>
            ))}                    
        </>        
    )
}

export default NoteList;