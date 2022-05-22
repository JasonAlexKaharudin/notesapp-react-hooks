import React, { useState, useContext } from 'react';
import NotesContext from '../context/NotesContext';
import FormButton from './FormButton';

import { addNoteAction } from '../reducers/NoteReducer';

const AddNoteForm = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [isHidden, setHidden] = useState(true); // true because we don't show the form intially when the page loads

	const { dispatch } = useContext(NotesContext);

	const addNote = (e) => {
		e.preventDefault();

		dispatch(addNoteAction({ title, body }));

		setTitle('');
		setBody('');
	};

	// i think its ok to have the toggling logic here as whenever we add or remove the hidden class from
	// the form we are still re rendering the component into the dom
	console.log(isHidden);
	return (
		<div className='mx-28 mt-10 mb-24'>
			<FormButton isHidden={isHidden} setHidden={setHidden} />
			{!isHidden && (
				<form>
					<div className='flex flex-col'>
						<label className='mt-8'>Note Title:</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
						<label className='mt-8'>Note Content:</label>
						<textarea
							className='mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							value={body}
							onChange={(e) => {
								setBody(e.target.value);
							}}></textarea>
					</div>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						onClick={addNote}>
						Add
					</button>
				</form>
			)}
		</div>
	);
};

export default AddNoteForm;
