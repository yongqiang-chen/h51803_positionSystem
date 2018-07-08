function RegisterModal(){
	this.createDom();
}

RegisterModal.template = `<div class="modal fade" id="regModal">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="regModalLabel">用户注册</h4>
	      </div>
	      <div class="modal-body">
	         <form>
				  <div class="form-group">
				    <label for="regUsername">用户名</label>
				    <input type="text" class="form-control" id="regUsername" placeholder="输入用户名">
				  </div>
				  <div class="form-group">
				    <label for="regPassword">密码</label>
				    <input type="password" class="form-control" id="regPassword" placeholder="输入密码">
				  </div>
				  <div class="form-group">
				    <label for="regConfPassword">确认密码</label>
				    <input type="password" class="form-control" id="regConfPassword" placeholder="再次输入密码">
				  </div>
				  <div class="form-group">
				    <label for="regEmail">邮箱</label>
				    <input type="email" class="form-control" id="regEmail" placeholder="输入E-mail地址">
				  </div>
			 </form>
	      </div>
	      <div class="modal-footer">
	      	<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	        <button type="button" class="btn btn-primary">注册</button>
	      </div>
	    </div>
	  </div>
	</div>`;

$.extend(RegisterModal.prototype, {
	createDom : function(){
		$(RegisterModal.template).appendTo("body");
	}
});
