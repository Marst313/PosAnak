const express = require('express');
const newsController = require('../controller/newsController');
const authController = require('../controller/authController');

const router = express.Router();

router.get('/', newsController.getAllNews);

router.use(authController.protect);
router.post('/', newsController.createNews);

router.use(authController.restrictTo('admin'));

router
  .route('/:id') //
  .get(newsController.singleNews)
  .patch(newsController.editNews)
  .delete(newsController.deleteNews);

module.exports = router;
