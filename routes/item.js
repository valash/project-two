// router:
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item');

router.get('/new', itemController.new);
router.post('/', itemController.create);
router.get('/:id', itemController.show);
router.get('/:id/edit', itemController.edit);
router.put('/:id', itemController.update);
router.delete('/:id', itemController.delete);

// router.get('/', function(req, res) {
// 	res.send('index');
// });

// router.get('/new', function(req, res) {
// 	res.send('new');
// });

// router.post('/', function(req, res) {
// 	res.redirect('/');
// });

// router.get('/:id', function(req, res) {
// 	res.send(`Welcome ${req.params.id}`);
// });

// router.get('/:id/edit', function(req, res) {
// 	res.send(`edit ${req.params.id}`);
// });

// router.put('/:id', function(req, res) {
// 	res.redirect('/');
// });

// router.delete('/:id', function(req, res) {
// 	res.redirect('/');
// });

module.exports = router;
