import React ,{Fragment, useContext, useEffect} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import NoteItem from './NoteItem';

import NoteContext from '../../context/notes/noteContext';



 const Notes = () => {
     const noteContext = useContext(NoteContext);

     const {notes, getNotes} = noteContext;


    useEffect(()=>{
         getNotes();
           // eslint-disable-next-line
     },[]); 

     if (notes == null ) {
        return <h4>Please add a Note</h4>;
      }

    return (
        <Fragment>
            
            <TransitionGroup>
          {notes.map(note =>(
             <CSSTransition
             key ={note._id}
             timeout={500}
             classNames='item'
             >
             <NoteItem note={note}></NoteItem>
             </CSSTransition>
          )        
        )} 
        </TransitionGroup>
        </Fragment>
            
        
    )
}

export default Notes
