var express = require('express');
var router = express.Router();
const user_controller = require('../controllers/userController');

router.get('/', user_controller.getAllUsers);
router.post('/', user_controller.addUser);

module.exports = router;
