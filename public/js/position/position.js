function Position(){
	this.loadHeader();
	this.createAddPositionModal();
	this.addListener();
}

$.extend(Position.prototype, {
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
	}
});

new Position();
