const express = require('express');
const { influencerController } = require('../controller');

const router = express.Router();

router.get('/cay8642159', influencerController.allRegisterInfluencer);
router.post('/register', influencerController.newRegisterInfluencer);

module.exports = router;
