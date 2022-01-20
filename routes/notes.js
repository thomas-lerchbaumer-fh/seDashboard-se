const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Note = require('../models/Note');

// @route     GET api/notes
// @desc      Get all user notes
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({user: req.user.id}).sort({date: -1});
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/notes
// @desc      Add new Note
// @access    Private
router.post('/',

 auth,

 async (req,res) => {
   const {note} = req.body;
  
   try {
   const newNote = new Note({
        note,
        user: req.user.id
       }); 
       const response = await newNote.save();
       res.json(response)
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');      
       
   }
});

// @route     DELETE api/note/:id
// @desc      Delete Note
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);


    // Make sure user owns Note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await Note.findByIdAndRemove(req.params.id);

    res.json({msg: 'Note removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
