const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user');

//SIGN UP STUFF
router.get('/user/signup', userController.getSignup);
router.post('/user/signup', userController.postSignup);

//logIN!!!
router.get('/user/login', userController.getLogin);
router.post('/user/logout', userController.postLogin);

//log out!!
router.get('/user/logout', userController.getLogout);

module.exports = router;
