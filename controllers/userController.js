//引入用户模型
const userModel = require("../models/userModel");

/* 用户注册 */
function register(req, res, next){
	//将请求主体中用户名，密码，邮箱解构到变量中
	const {username, password, email} = req.body;
	//调用用户
	userModel.save({username, password, email}, (data)=>{
		res.json({res_code:1, res_msg:"success", res_body:data});
	}, (err)=>{
		res.json({res_code:0, res_msg:err, res_body:{}});
	});
}

/* 检测用户名是否存在 */
function check(){

}

/* 用户登录 */
function login(){

}


module.exports = {register, check, login};