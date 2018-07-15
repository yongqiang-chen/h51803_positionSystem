//引入mongoose模块
const mongoose = require("mongoose");
//链接数据库
mongoose.connect("mongodb://localhost:27017/position_project");
//保存职位时集合结构
const schema = mongoose.Schema({
	position : String,
	company : String,
	salary : Number,
	logo : String,
	address : String,
	experience : String,
	type : String
});
//生成数据库中创建文档的模型
const Position = mongoose.model("position", schema);

const PositionModel = {
	//保存职位数据到数据库
	save:function(positionInfo, success, error){
		//文档
		const pos = new Position(positionInfo);
		//保存
		pos.save((err, data)=>{
			if(err){
				error(err);
				return;
			}
			
			success(data);
		});
	},
	//查询所有职位数据
	query : function(success, error){
		Position.find().then(success, error);
	},
	//按页查询
	findByPage :function(pageIndex, success, error){
		//pageSize 中保存每页显示文档数量
		const pageSize = 5;
		//跳过(pageIndex - 1)*pageSize条文档数据
		Position.find()
				.limit(pageSize)
				.skip((pageIndex - 1) * pageSize)
				.then(success, error);
	},
	//按页删除
	deleteById : function(id, success, error){
		Position.deleteOne({_id:id})
				.then(success, error);
	},
	//按id查询
	findById : function(id, success, error){
		Position.find({_id:id})
				.then(success, error)
	},
	update : function(positionInfo, success, error){
		const id = positionInfo.id,
				position = positionInfo.position,
				company = positionInfo.company,
				salary = positionInfo.salary,
				address = positionInfo.address,
				experience = positionInfo.experience,
				type = positionInfo.type,
				logo = positionInfo.logo;
		// console.log(id,position,company,salary,address,experience,type);
		Position.where({_id:id}).update({id,position,company,salary,address,experience,type,logo}).then(success,error);
		
	}
}


module.exports = PositionModel;