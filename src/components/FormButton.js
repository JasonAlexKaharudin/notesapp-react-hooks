import React, { useState } from 'react'

const FormButton = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [buttonText, setButtonText] = useState("Add New Note");

    const toggleForm = () => {
        const form = document.getElementById("addForm");
        setIsHidden(!isHidden);

        isHidden ? form.classList.add('hidden') : form.classList.remove('hidden');
        isHidden ? setButtonText("Add New Note") : setButtonText("X"); 
    }

    return(
        <>
            <button 
                className="bg-slate-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                                
                onClick={toggleForm}
            >
                {buttonText}
            </button> 
        </>
    )
}

export default FormButton;