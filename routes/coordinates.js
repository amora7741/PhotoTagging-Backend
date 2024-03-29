const express = require('express');
const router = express.Router();

const coordinateController = require('../controllers/coordinateController');

router.get('/', coordinateController.sayHello);

module.exports = router;
