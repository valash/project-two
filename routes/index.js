const express = require('express');
const router = express.Router();
const { Item } = require('../models/index');
const authenticatedUser = require('../utils/authenticaedUser');

router.get('/', authenticatedUser, function(req, res) {
	Item.find({}).sort({ name: 'asc' }).then((items) => {
		res.render('index', { items, success: req.flash('sucess') });
	});
});

// adding the item router to this Master router
router.use('/item', require('./item'));
router.use('/user', require('./user'));

router.use(require('./user'));
router.use(require('./item'));

module.exports = router;
