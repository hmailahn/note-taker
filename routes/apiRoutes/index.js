const router = require('express').Router();
const { notes } = require('../../data/notes');
const createNewNote = require('../../lib/notes');
const { 
    v1: uuidv1, //time based
    v4: uuidv4, // random
  } = require('uuid');


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});


router.post('/notes', (req, res) => {
req.body.id = uuidv4(); 

//add note to json file and animals array in this function
const note = createNewNote(req.body, notes);
res.json(note);
});



module.exports = router;
