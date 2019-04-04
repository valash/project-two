// router:
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item');

router.get('/new', itemController.new);
router.post('/', itemController.create);
router.get('/:id', itemController.show);
router.delete(
	'/:id/:commentId',
	itemController.commentDelete
);
router.put(`/:id/:commentId`, itemController.commentUpdate);
router.get('/:id/edit', itemController.edit);
router.put('/:id', itemController.update);
router.delete('/:id', itemController.delete);
router.put('/:id/comment', itemController.comment);

module.exports = router;
