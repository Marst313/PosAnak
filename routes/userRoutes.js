const express = require('express');
const User = require('./../controller/userController');

const router = express.Router();

router.route('/login').post(User.loginUser);
router.route('/register').post(User.createUser);

module.exports = router;
