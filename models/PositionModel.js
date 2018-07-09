//引入mongoose模块
const mongoose = require("mongoose");
//链接数据库
mongoose.connect("mongodb://localhost:27017/position_project");
//保存职位时集合结构
const schema = mongoose.Schema({
	position : String,
	company : String,
	salary : Number
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
	}
}


module.exports = PositionModel;