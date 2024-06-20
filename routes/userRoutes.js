const express = require('express');
const userController = require('./../controller/userController');
const authController = require('../controller/authController');

const router = express.Router();

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/logout').post(authController.logout);

router.use(authController.protect);
router.route('/').get(authController.restrictTo('admin'), userController.getAllUser);
router.route('/:id').get(userController.getSingleUser);

module.exports = router;
