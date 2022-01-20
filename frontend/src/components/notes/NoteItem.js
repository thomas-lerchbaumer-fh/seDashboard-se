import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext';
import PropType from 'prop-types';

//import contactContext from '../../context/contact/contactContext';



const NoteItem = (propNote) => {
    const noteContext = useContext(NoteContext)

    const data = propNote.note;

    const onDelete = () =>{
        noteContext.deleteNote(data._id);
    }


    return (
        <div className="note-wrapper">
    
                <div className="note-text">
                    <p>{data.note}</p>
                </div>
                <div className="note-remove">
                    <button class="btn badge badge-dark" onClick={onDelete}>x</button>
                </div>
        </div>
    )
}

NoteItem.propTypes = {
    //contact: PropType.object.isRequired
    
}

export default NoteItem
