const router = require('express').Router();
const { notes } = require('../../data/notes.json');


//this doesn't work
router.get('/api/notes', (req, res) => {
    res.json(notes);
});

// router.post('/api/notes', (req, res) => {

// })

module.exports = router;
