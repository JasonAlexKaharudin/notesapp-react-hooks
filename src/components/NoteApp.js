import React from 'react';
import { NotesProvider } from '../store';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () => {
	/**
	 *  the problem with setting state here is that whenever the page loads - it re renders the whole
	 * page after the note's data has been parsed and set from the local storage. this can be seen as
	 * inefficient as it causes the whole application to render again.
	 *
	 * */

	return (
		<NotesProvider>
			<header className='text-6xl italic text-center py-10 bg-blue-400 text-slate-200'>
				<h1>Notes App</h1>
			</header>
			<NoteList />
			<AddNoteForm />
		</NotesProvider>
	);
};

export default NoteApp;
