import { useReducer } from 'react';
import NotesContext from './context/NotesContext';
import NoteReducer from './reducers/NoteReducer';
console.log(localStorage.getItem('notes'));
const initialState = JSON.parse(localStorage.getItem('notes')) || []; //empty notes array

export const NotesProvider = ({ children }) => {
	const [notes, dispatch] = useReducer(NoteReducer, initialState);

	return (
		<NotesContext.Provider value={{ notes, dispatch }}>
			{children}
		</NotesContext.Provider>
	);
};
