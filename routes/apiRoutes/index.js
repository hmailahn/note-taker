const router = require('express').Router();
const { notes } = require('../../data/notes.json');

router.get('/api/notes', (req, res) => {
let results = notes;
res.json(results);
});

router.post('/api/notes', (req, res) => {
    
})

module.exports = router;
