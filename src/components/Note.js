import React, { useContext } from 'react';
import NotesContext from '../context/NotesContext';
import { removeNoteAction } from '../reducers/NoteReducer';

const Note = ({ title, body }) => {
	const { dispatch } = useContext(NotesContext);

	return (
		<div className='mx-28 my-12 border-b-2 flex justify-between items-start'>
			<div>
				<h1 className='text-2xl mb-4 pt-6 font-bold'>{title}</h1>
				<p className=''>{body}</p>
			</div>

			<div className='mx-28 my-12'>
				<button
					className='bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline'
					onClick={() => dispatch(removeNoteAction({ title, body }))}>
					X
				</button>
			</div>
		</div>
	);
};

export default Note;
