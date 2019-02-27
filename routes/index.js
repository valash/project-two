const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

// adding the item router to this Master router
router.use('/item', require('./item'));

module.exports = router;
