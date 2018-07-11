var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

router.get("/", function(req, res, next){
	res.send("respond with a resource");
});

//用户是否登录的路由
router.get("/check", userController.checkLogin);

//用户登录路由
router.post("/login", userController.login);

router.get("/logout", userController.logout);

//用户注册路由
router.post('/register', userController.register);



module.exports = router;
