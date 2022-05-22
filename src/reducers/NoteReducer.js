const NoteReducer = (state, action) => {
	let updatedNotes;
	switch (action.type) {
		case 'ADD_NOTE':
			updatedNotes = [
				...state,
				{ title: action.payload.title, body: action.payload.body },
			];
			localStorage.setItem('notes', JSON.stringify(updatedNotes));
			return updatedNotes;
		case 'REMOVE_NOTE':
			// don't think i should be removing item from local storage here but...

			updatedNotes = state.filter(
				(note) => note.title !== action.payload.title
			);
			localStorage.setItem('notes', JSON.stringify(updatedNotes));
			return updatedNotes;
		default:
			return state;
	}
};

export const addNoteAction = (note) => {
	console.log(note);
	return {
		type: 'ADD_NOTE',
		payload: note,
	};
};

export const removeNoteAction = (note) => {
	return {
		type: 'REMOVE_NOTE',
		payload: note,
	};
};

export default NoteReducer;
