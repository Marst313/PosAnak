const express = require('express');
const kidsController = require('../controller/kidsController');

const router = express.Router();

router
  .route('/') //
  .get(kidsController.getAllKids)
  .post(kidsController.createNewKids);

router
  .route('/:id') //
  .get(kidsController.singleKid) //
  .patch(kidsController.editKid)
  .delete(kidsController.deleteKid);

module.exports = router;
