import React, { useState } from 'react';

const FormButton = ({ isHidden, setHidden }) => {
	return (
		<>
			<button
				className='bg-slate-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
				onClick={() => setHidden(!isHidden)}>
				{isHidden ? 'Add New Note' : 'X'}
			</button>
		</>
	);
};

export default FormButton;
