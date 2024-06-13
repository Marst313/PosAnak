const express = require('express');
const userController = require('./../controller/userController');
const auth = require('../controller/authController');

const router = express.Router();

router.route('/register').post(auth.register);
router.route('/login').post(auth.login);
router.route('/logout').post(auth.logout);

module.exports = router;
