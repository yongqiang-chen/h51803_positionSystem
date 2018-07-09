//保存用户数据
function save(userInfo, success, error){
	console.log("待保存的用户信息：" , userInfo);
	if (userInfo.username === "admin")
		success(userInfo);
	else
		error("用户注册失败");
}

//查找用户数据
function find(){

}

module.exports = {save, find};