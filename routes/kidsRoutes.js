const express = require('express');
const kidsController = require('../controller/kidsController');
const authController = require('../controller/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/') //
  .get(kidsController.getAllKids)
  .post(authController.restrictTo('admin'), kidsController.createNewKids);

router
  .route('/:id') //
  .get(kidsController.singleKid) //
  .patch(authController.restrictTo('admin'), kidsController.editKid)
  .delete(authController.restrictTo('admin'), kidsController.deleteKid);

module.exports = router;
