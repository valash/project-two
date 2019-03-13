// router:
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

router.get('/:id/new', commentController.new);
router.post('/', commentController.create);
router.get('/:id', commentController.show);
router.get('/:id/edit', commentController.edit);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.delete);

module.exports = router;
