const express = require('express');
const activityController = require('../controller/activityController');

const router = express.Router();

router
  .route('/') //
  .get(activityController.getAllActivity)
  .post(activityController.createNewActivity);

router
  .route('/:id') //
  .get(activityController.singleActivity) //
  .patch(activityController.editActivity)
  .delete(activityController.deleteActivity);

module.exports = router;
