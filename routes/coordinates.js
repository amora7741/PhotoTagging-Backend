const express = require('express');
const router = express.Router();

const coordinateController = require('../controllers/coordinateController');

router.get('/:character&:x&:y', coordinateController.getCoordinates);

module.exports = router;
