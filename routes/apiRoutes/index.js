const router = require('express').Router();
const { notes } = require('../../data/notes.json');
var uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');

//works? needs to be tested when notes are added
router.get('/notes', (req, res) => {
    let results = notes;
    res.send('lets go');
});


//works
router.post('/notes', (req, res) => {
console.log(req.body);
res.json(req.body);


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
