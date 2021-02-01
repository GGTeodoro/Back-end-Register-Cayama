const express = require('express');
const { influencerController } = require('../controller');

const router = express.Router();

router.get('/', influencerController.allRegisterInfluencer);
router.post('/register', influencerController.newRegisterInfluencer);

module.exports = router;
