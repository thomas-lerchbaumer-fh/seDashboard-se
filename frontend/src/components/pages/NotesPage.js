import React from 'react'
import Notes from '../notes/Notes'
import NotesForm from '../notes/NotesForm';

const NotesPage = () => {


    if (localStorage.token) {

    }
    return (
        <div className='grid-2'>
            <div>
                <NotesForm></NotesForm>
            </div>
            <div className='notes-page-wrapper'>
                <Notes></Notes>
            </div>

        </div>
    )
}

export default NotesPage