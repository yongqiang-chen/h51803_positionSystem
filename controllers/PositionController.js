const PositionModel = require("../models/PositionModel");

const PositionController = {
	//添加职位信息
	add : function(req, res, next){
		//获取请求中传递的职位信息数据
		//get
		const {position, company, salary} = req.query;
		//post
		//const {position, company, salary} = req.body;
		//调用模型中的保存数据的方法
		PositionModel.save({position, company, salary}, (data)=>{
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
	}
};

module.exports = PositionController;
