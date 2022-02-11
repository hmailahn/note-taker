const router = require('express').Router();
const { notes } = require('../../data/notes');
const createNewNote = require('../../lib/notes');
const { 
    v1: uuidv1, //time based
    v4: uuidv4, // random
  } = require('uuid');
const fs = require('fs');
const path = require('path');

//works? needs to be tested when notes are added
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});


//works
router.post('/notes', (req, res) => {
    // will need to change this
    //setting id based on the next index of the array
req.body.id = uuidv4(); /// will need to change this

//add note to json file and animals array in this function
const note = createNewNote(req.body, notes);
res.json(note);

    // req.body.id = uniqid();
    // res.json(note);

});

router.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    
    const notesIndex = notes.findIndex(p => p.id == id);
    notes.splice(notesIndex, 1);
    res.send()
  })

// function createNewNote(body, notesArray) {
//     const note = body;
//     notesArray.push(note);
//     fs.writeFileSync(
//         path.join(__dirname, '../data/notes.json'),
//         JSON.stringify({ notesArray }, null, 2)
//     );
//     return note;
// }

module.exports = router;
