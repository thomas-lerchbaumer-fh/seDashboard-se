import React, {useState, useContext, useEffect, Fragment} from 'react'
import NoteContext from '../../context/notes/noteContext';





 const NotesForm = () => {
    const noteContext = useContext(NoteContext);

    const {addNote, current,clearCurrent} = noteContext

    useEffect(()=>{
        setNote({
            noteText: ''
        })
    },[noteContext, current])

    const [note, setNote] = useState({
        noteText :''
    })

    const {noteText} = note;

    const onChange = e =>{
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    
    const onSubmit = event => {
        event.preventDefault();
        addNote(noteText);
        clearAll()
    }

    const clearAll = ()=>{
        clearCurrent();

    }

    return (
        <div className="m form-group note-input-wrapper">
    
       
        <form onSubmit={onSubmit}>
                <textarea placeholder="*enter your note here...." rows="8" cols="50" name="noteText" value={noteText} onChange={onChange} required></textarea>
                <div>
                    <input type="submit" value="Add Note" name="note" className="btn btn-primary"></input>
                </div>
        </form>
        </div>
    )
}

export default NotesForm;
