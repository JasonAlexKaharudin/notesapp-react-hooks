import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NoteApp from './components/NoteApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
//  Normal practice to use the App.js file that was created with CRA rather than creating your own new `NoteApp`
root.render(
	<>
		<NoteApp />
	</>
);
