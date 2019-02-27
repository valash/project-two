const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Sign up
router.get('/user/signup', userController.getSignup);
router.post('/user/signup', userController.postSignup);

// Log in
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);

// Log out
router.get('/logout', userController.getLogout);

module.exports = router;
