const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Sign up
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);

// Log in
router.get('/user/login', userController.getLogin);
router.post('/user/login', userController.postLogin);

// Log out
router.get('/user/logout', userController.getLogout);

module.exports = router;
