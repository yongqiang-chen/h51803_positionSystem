function LoginModal(){
	this.createDom();
	this.addListener();
}

LoginModal.template = `<div class="modal fade" id="loginModal">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="loginModalLabel">用户登录</h4>
	      </div>
	      <div class="modal-body">
	      	<div class="alert alert-danger hide login_error" role="alert">用户登录失败，用户名或密码错误</div>
	        <form class="login_form">
	        	<div class="form-group">
				    <label for="loginUsername">用户名</label>
				    <input type="text" class="form-control" name="username" id="loginUsername" placeholder="输入用户名">
				  </div>
				  <div class="form-group">
				    <label for="loginPassword">密码</label>
				    <input type="password" class="form-control" name="password" id="loginPassword" placeholder="输入密码">
				  </div>
	        </form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	        <button type="button" class="btn btn-primary btn_login">登录</button>
	      </div>
	    </div>
	  </div>
	</div>`;

$.extend(LoginModal.prototype, {
	createDom : function(){
		$(LoginModal.template).appendTo("body");
	},
	addListener : function(){
		$(".btn_login").on("click", this.handleLogin);
	},
	handleLogin : function(){
		$.post("/api/users/login", $(".login_form").serialize(),function(data){
			if(data.res_code === 1){//登录成功
				$(".login_success").removeClass("hide").prev("ul").hide();
				$(".login_success a:first").text("欢迎您：" + data.res_body.username);
				$("#loginModal").modal("hide");
			}else{
				$(".login_error").removeClass("hide");
			}
		}, "json");
	}
});
