const fs = require('fs');
const path = require('path');


//function to take data from req.body and add to notes.json
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}


//think about adding
// function validateNote(note) {
//     if (!note.)
// }

module.exports = createNewNote;