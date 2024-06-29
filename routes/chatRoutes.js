const express = require('express');
const chatController = require('../controller/chatController');
const authController = require('../controller/authController');

const router = express.Router();

router
  .route('/') //
  .get(chatController.getAllChat)
  .post(authController.protect, chatController.generateChatNew);

router
  .route('/:id') //
  .post(authController.protect, chatController.generateNextChat)
  .delete(authController.protect, chatController.deleteChat);

module.exports = router;
