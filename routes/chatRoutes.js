const express = require('express');
const chatController = require('../controller/chatController');
const authController = require('../controller/authController');

const router = express.Router();

router.post('/', authController.protect, chatController.generateChatNew);

module.exports = router;
