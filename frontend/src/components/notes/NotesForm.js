import React, { useState, useContext, useEffect, Fragment } from 'react'
import NoteContext from '../../context/notes/noteContext';





const NotesForm = () => {
    const noteContext = useContext(NoteContext);

    const { addNote, current, clearCurrent, updateNote } = noteContext

    useEffect(() => {
        if (current !== null) {
            setNote(current);
        } else {
            setNote({
                noteText: '',
            })

        }

    }, [noteContext, current])

    const [note, setNote] = useState({
        noteText: '',
    })
    const { noteText } = note;


    const onChange = e => {
        setNote({ ...note, [e.target.name]: e.target.value });

    }

    const onSubmit = event => {
        event.preventDefault();
        if (current === null) {
            addNote(note);
        } else {
            updateNote(note)
        }
        clearAll()
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <Fragment>


            <form onSubmit={onSubmit}>
                <textarea placeholder="*enter your note here...." type="text" rows="7" cols="50" name="noteText" value={noteText} onChange={onChange} required></textarea>
                <div className="btn-note">
                    <input type="submit" value={current ? 'Update Note' : 'Add Note'} name="note" className="btn btn-note btn-dark"></input>
                </div>
            </form>
        </Fragment>
    )
}

export default NotesForm;
