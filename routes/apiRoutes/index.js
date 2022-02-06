const router = require('express').Router();
const { notes } = require('../../data/notes.json');
var uniqid = require('uniqid');


//works? needs to be tested when notes are added
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/api/notes', (req, res) => {
req.body.id = uniqid();
})

module.exports = router;
