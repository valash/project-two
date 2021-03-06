const express = require('express');
const router = express.Router();
const { Item } = require('../models/index');
const authenticatedUser = require('../utils/authenticatedUser');

router.get('/', authenticatedUser, function(req, res) {
    Item.find({ owner: req.user._id })
        .sort({ name: 'asc' })
        .then(items => {
            res.render('index', { items, success: req.flash('success') });
        });
});

router.use(require('./user'));

router.use('/item', authenticatedUser, require('./item.js'));
// router.use('/comment', require('./comment.js'));

module.exports = router;
