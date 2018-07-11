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
function login(req, res, next){
	const {username, password} = req.body;
	userModel.find({username, password}, (data)=>{
		if(data.length === 1){//登录成功

			//在session中记录登录成功的用户名
			req.session.loginUser = data[0].username;

			res.json({
				res_code:1,
				res_error:"",
				res_body:{username: data[0].username, email:data[0].email}
			});
		}else{//登录失败
			res.json({
				res_code: -2,
				res_error: "用户名或密码错误",
				res_body: {}
			});
		}
	},(err)=>{
		res.json({
			res_code: 0,
			res_error: err,
			res_body: {}
		});
	});
}

//判断用户是否登录
function checkLogin(req, res, next){
	var user = req.session.loginUser;
	if(user){
		res.json({
			res_code:1,
			res_error:"",
			res_body:{
				username: user
			}
		});
	}else{
		res.json({
			res_code: 0,
			res_error:"用户登录失败",
			res_body: {}
		});
	}
}

//退出
function logout(req, res, next){
	req.session = null;
	res.json({
		res_code:1,
		res_error:"",
		res_body:{}
	});
}


module.exports = {register, check, login, checkLogin, logout};