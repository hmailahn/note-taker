const router = require('express').Router();
const { notes } = require('../../data/notes');
const createNewNote = require('../../lib/notes');
var uniqid = require('uniqid');
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
req.body.id = notes.length.toString(); /// will need to change this

//add note to json file and animals array in this function
const note = createNewNote(req.body, notes);
res.json(note);

    // req.body.id = uniqid();
    // const note = createNewNote(req.body, notes);
    // res.json(note);



});

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
