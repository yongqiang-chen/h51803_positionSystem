const PositionModel = require("../models/PositionModel");

const PositionController = {
	//添加职位信息
	add : function(req, res, next){
		//获取请求中传递的职位信息数据
		//get
		//const {position, company, salary} = req.query;
		//post
		const {position, company, salary, address, experience, type} = req.body;

		//console.log("上传文件：" + req.file.filename);
		let logo = "";
		if (req.file) //有上传的文件
			logo = "/upload/" + req.file.filename;

		//调用模型中的保存数据的方法
		PositionModel.save({position, company, salary, logo, address, experience, type}, (data)=>{
			//success回调函数
			res.json({
				res_code:1,
				res_error:"",
				res_body:data
			});
		}, (err)=>{
			//error回调函数
			res.json({
				res_code:0,
				res_error:err,
				res_body:{}
			});
		});
		
		//res.send("在控制器中打印添加职位信息");
		//res.json({position, company, salary});
	},

	//查询职位
	list : function(req, res, next){
		//从请求中获取查询的页码
		const {pageIndex} = req.query;

		PositionModel.findByPage(pageIndex, (data)=>{
			//data中放的是查询成功的数据
			res.json({
				res_code : 1,
				res_error : "",
				res_body: data
			});
		}, (err)=>{
			res.json({
				res_code: 0,
				res_error : err,
				res_body : {}
			});
		});
	}
};

module.exports = PositionController;
