var express = require('express');
var router = express.Router();
const PositionController = require("../controllers/PositionController");


/* 配置文件上传 */
var multer  = require('multer');
//配置磁盘存储
var storage = multer.diskStorage({
	//保存到自盘的目标位置
  destination: function (req, file, cb) {
    cb(null, './public/upload');//将上传文件保存到public下的upload子目录中
  },
  //配置保存文件的文件名规则
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname.slice(file.originalname.lastIndexOf(".")));
  }
})
 //创建上传实例
var upload = multer({ storage: storage })

//router.get("/add", PositionController.add);
//路由：post方式请求/add资源，添加职位
//实现文件上传
router.post("/add", upload.single("logo"), PositionController.add);


//路由 ：查询职位
router.get("/list", PositionController.list);

module.exports = router;
