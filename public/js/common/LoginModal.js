function LoginModal(){
	this.createDom();
}

LoginModal.template = `<div class="modal fade" id="loginModal">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="loginModalLabel">用户登录</h4>
	      </div>
	      <div class="modal-body">
	        <form>
	        	<div class="form-group">
				    <label for="loginUsername">用户名</label>
				    <input type="text" class="form-control" id="loginUsername" placeholder="输入用户名">
				  </div>
				  <div class="form-group">
				    <label for="loginPassword">密码</label>
				    <input type="password" class="form-control" id="loginPassword" placeholder="输入密码">
				  </div>
	        </form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	        <button type="button" class="btn btn-primary">登录</button>
	      </div>
	    </div>
	  </div>
	</div>`;

$.extend(LoginModal.prototype, {
	createDom : function(){
		$(LoginModal.template).appendTo("body");
	}
});
