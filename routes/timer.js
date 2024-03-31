const express = require('express');
const router = express.Router();

const timerController = require('../controllers/timerController');

router.post('/starttimer', timerController.startTimer);
router.post('/stoptimer', timerController.stopTimer);

module.exports = router;
