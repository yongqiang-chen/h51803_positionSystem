/* 用户相关的模型（主要处理数据库中的CRUD操作） */

//引入mongoose模块
const mongoose = require("mongoose");
//链接"position_project"数据库
mongoose.connect("mongodb://localhost:27017/position_project");
//数据库中集合结构
const schema = mongoose.Schema({
	username : String,
	password : String,
	email : String
});

//生成数据库中创建文档的模型
const User = mongoose.model("user", schema);

//保存用户数据
function save(userInfo, success, error){
	/*console.log("待保存的用户信息：" , userInfo);
	if (userInfo.username === "admin")
		success(userInfo);
	else
		error("用户注册失败");*/
	
	//将userInfo 的用户信息保存到数据库中
	//根据数据库文档模型创建当前待保存的用户文档
	const user = new User(userInfo);
	//调用save() 方法保存到数据库
	user.save((err, userInfo)=>{
		if (err){//如果有错误,则回调error()函数
			error(err);
			return;
		}
		//保存成功，回调success()函数
		success(userInfo);
	});
}

//查找用户数据
function find(userinfo, success, error){
	User.find(userinfo).then(success, error);
}

module.exports = {save, find};