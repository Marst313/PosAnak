const express = require('express');
const newsController = require('../controller/newsController');

const router = express.Router();

router
  .route('/') //
  .get(newsController.getAllNews)
  .post(newsController.createNews);

router
  .route('/:id') //
  .get(newsController.singleNews)
  .patch(newsController.editNews)
  .delete(newsController.deleteNews);

module.exports = router;
