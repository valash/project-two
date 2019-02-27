const express = require('express');

const router = express.Router();
const userController = require('../controllers/user');

router.get('/user/login', userController.getLogin);
router.post('/user/login', userController.postLogin);
router.get('/user/logout', userController.getLogout);

module.exports = router;
