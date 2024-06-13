const express = require('express');
const activityController = require('../controller/activityController');
const authController = require('../controller/authController');

const router = express.Router();

router.get('/', activityController.getAllActivity);

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router.post('/', activityController.createNewActivity);
router
  .route('/:id') //
  .get(activityController.singleActivity) //
  .patch(activityController.editActivity)
  .delete(activityController.deleteActivity);

module.exports = router;
