var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");


//用户注册路由
router.post('/register', userController.register);

module.exports = router;
