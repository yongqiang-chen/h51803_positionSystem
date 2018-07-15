function Position(){
	this.loadHeader();
	this.createAddPositionModal();
	this.byDataLoadPage();
	this.addListener();

	
	this.check();
}

$.extend(Position.prototype, {
	//判断用户是否登录，如果未登录，则跳转到首页
	check: function(){
		$.get("/api/users/check", (data) => {
			if(data.res_code === 0){//登录失败
				location = "/index.html";
			}else{
				//默认查询第一页职位数据
				this.listByPage(1);
			}
		}, "json")
	},

	loadHeader : function(){
		//创建头部对象，加载DOM结构
		new Header();
		//让“职位”导航选中
		$("#position-nav ul:first li:last").addClass("active").siblings().removeClass("active");
	},
	createAddPositionModal : function(){
		new AddPositionModal();
	},
	//注册事件监听
	addListener : function(){
		//添加职位
		$(".btn_add_pos").on("click", this.handleAddPosition);
		//点击页码查询该页信息
		const that = this;
		$(".pagination").on("click", "li", function(){
			//获取当前点击页码
			const currentPage = $(this).find("a").text();
			//调用listByPage()查询
			that.listByPage(currentPage);
		});
		$(".pos_tab").on("click", ".delete", function(e){
			const src = e.target;
			const logo_src = $(this).parents("tr").find("img")[0].src;
			//console.log(logo_src);
			const logo = logo_src.slice(logo_src.indexOf("/upload"));
			// console.log(logo);
			const _id = src.dataset.id;
			//console.log(_id);
			that.deleteById({_id, logo});
		});
		$(".pos_tab").on("click", ".modify", function(e){
			const src = e.target;
			const _id = src.dataset.id;
			// console.log(_id);
			that.findById(_id);
		});
		$(".btn_modify_pos").on("click", this.handleUpdatePosition);
	},
	//处理添加职位的方法
	handleAddPosition : function(){
		//创建FormData对象
		var formData = new FormData($(".add_pos_form").get(0));

		//利用ajax向服务器传递数据，包括图像资源
		$.ajax({
			type : "post",//要上传资源，必须使用post请求
			url : "/api/positions/add",
			data : formData, //向服务器传递的数据
			processData : false, //不需要将data转换为查询字符串
			contentType : false, //不设置content-type头
			dataType : "json",
			success : function(data){
				console.log(data);
				if (data.res_code === 1){//成功
					$("#AddPositionModal").modal("hide");
					location.reload();
				}else{
					$(".add_pos_error").removeClass("hide");
				}
			}
		});

		/*$.post("/api/positions/add", $(".add_pos_form").serialize(), function(data){
			if(data.res_code === 1){//成功
				$("#AddPositionModal").modal("hide");
			}else{//失败
				$(".add_pos_error").removeClass("hide");
			}
		}, "json");*/
	},
	
	//查询数据条数来渲染页码
	byDataLoadPage : function(){
		$.get("/api/positions/query", function(data){
			const len = data.res_body.length;
			const n = Math.ceil(len/5);
			const html = `<li><a href="#">1</a></li>`;
			//console.log(data);
			//console.log(len);
			console.log(n);
			for(var i=1; i<=n; i++){
				
			}
		});
	},
	
	//按页查询职位数据并渲染
	listByPage : function(currentPage){
		//如果没有页码，默认查询第一页
		currentPage = currentPage || 1;
		//ajax查询
		$.get("/api/positions/list", {pageIndex : currentPage}, function(data){
			if(data.res_code === 1){
				//利用artTemplate模板引擎
				// console.log(data.res_body);
				const html = template("position_list_temp", {list: data.res_body});
				$(".pos_tab tbody").html(html);
			}
		}, "json");
	},
	//按职位Id删除数据库数据
	deleteById : function({_id, logo}){
		//通过ajax删除数据
		$.get("/api/positions/delete", {id : _id, logo : logo}, function(data){
			// console.log(data);
			if(data.res_code === 1){
				location.reload();
			}
		});
	},
	//按照id查找当前职位信息
	findById : function(_id){
		//通过ajax查询数据
		$.post("/api/positions/find", {id : _id}, function(data){
			// console.log(data);
			if(data.res_code === 1){
				const infos = data.res_body[0];
				// console.log(infos.logo);
				const historyLogoName = infos.logo.slice(1);
				// console.log(historyLogoName);

				$("#historyLogo").val(historyLogoName);
				$("#modifyPositionName").val(infos.position);
				$("#modifyPositionCompany").val(infos.company);
				$("#modifyPositionSalary").val(infos.salary);
				$("#modifyPositionAddress").val(infos.address);
				$("#modifyPositionExper").val(infos.experience);
				$("#modifyPositionType").val(infos.type);
				$("#modifyPositionId").val(infos._id);
			}
		}, "json");
	},
	//处理修改（跟新）职位的方法
	handleUpdatePosition: function(){

		//创建FormData对象
		var formData = new FormData($(".modify_pos_form").get(0));
		//利用ajax向服务器传递数据，包括图像资源
		$.ajax({
			type : "post",//要上传资源，必须使用post请求
			url : "/api/positions/update",
			data : formData, //向服务器传递的数据
			processData : false, //不需要将data转换为查询字符串
			contentType : false, //不设置content-type头
			dataType : "json",
			success : function(data){
				console.log(data);
				if (data.res_code === 1){//成功
					$("#modifyPositionModal").modal("hide");
					location.reload();
				}else{
					$(".modify_pos_error").removeClass("hide");
				}
			}
		});
	}
});

new Position();
