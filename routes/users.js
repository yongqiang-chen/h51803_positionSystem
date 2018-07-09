var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

router.get("/", function(req, res, next){
	res.send("respond with a resource");
});

router.get("/login", function(req, res, next){
	res.send("login");
});

//用户注册路由
router.post('/register', userController.register);

router.get("/check", function(req, res, next){
	res.send("check");
});

module.exports = router;
