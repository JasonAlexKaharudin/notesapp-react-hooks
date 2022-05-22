import React, { useContext } from 'react';
import NotesContext from '../context/NotesContext';
import Note from './Note';

const NoteList = () => {
	const { notes } = useContext(NotesContext);
	// can combine title with index to create unique key. cause will cause error should anyone use the same title name
	return (
		<>
			<h1 className='text-4xl underline ml-28 mt-14'>My Notes</h1>
			{notes.map((note, idx) => (
				<Note
					key={`${note.title}-${idx}`}
					title={note.title}
					body={note.body}
				/>
			))}
		</>
	);
};

export default NoteList;
