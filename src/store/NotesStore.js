import { useReducer } from "react";
import NotesContext from "../context/NotesContext";
import NoteReducer from "../reducers/NoteReducer";

console.log(localStorage.getItem('notes'));
const initState = JSON.parse(localStorage.getItem('notes')) || [];

export const NotesProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(NoteReducer, initState);

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            { children }
        </NotesContext.Provider>

    )
}