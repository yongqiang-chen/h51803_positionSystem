function Position(){
	
}

$.extend(Position.prototype, {
	loadHeader : function(){
		//创建头部对象，加载DOM结构
		new Header();
		//让“职位”导航选中
		$("#position-nav ul:first li:last").addClass("active").siblings().removeClass("active");
	}
});

new Position().loadHeader();
