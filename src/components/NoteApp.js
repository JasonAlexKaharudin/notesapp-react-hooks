import { NotesProvider } from "../store/NotesStore";
import NoteList from "./NoteList";
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {
    return (
        <>
            <NotesProvider>
                <header className="text-6xl italic text-center py-10 bg-blue-400 text-slate-200">
                    <h1>Notes App</h1>        
                </header>                                            
                <NoteList/>
                <AddNoteForm/>
            </NotesProvider>
        </>
    )
}

export default NoteApp;