const express = require('express');
const { sellerController } = require('../controller');

const router = express.Router();

router.get('/cay8642159', sellerController.allRegisterSeller);
router.post('/register', sellerController.newRegisterSeller);

module.exports = router;
