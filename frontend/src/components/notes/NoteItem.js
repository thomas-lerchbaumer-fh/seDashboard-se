import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext';
import PropType from 'prop-types';




const NoteItem = ({note}) => {
    const noteContext = useContext(NoteContext)

    const {setCurrent} = noteContext;
    const {noteText, _id} = note;

    const onDelete = () =>{
        noteContext.deleteNote(_id);
    }


    return (
        <div className="note-wrapper">
    
                <div className="note-text">
                    <p>{noteText}</p>
                </div>
               
                   
                <div className="note-remove">
                    <button className="btn badge badge-dark" onClick={() => setCurrent(note)}>
                        <i className="fas fa-pen"></i>
                    </button>
                    <button className="btn badge badge-dark" onClick={onDelete}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
        </div>
    )
}

NoteItem.propTypes = {
    note: PropType.object.isRequired
    
}

export default NoteItem
