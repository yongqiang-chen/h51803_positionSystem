function AddPositionModal(){
	this.createDom();
}

AddPositionModal.template = `<div class="modal fade" id="AddPositionModal">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="loginModalLabel">职位信息</h4>
	      </div>
	      <div class="modal-body">
	        <form>
	        	<div class="form-group">
				    <label for="positionName">职位名称</label>
				    <input type="text" class="form-control" id="positionName" placeholder="输入职位名称">
				</div>
				<div class="form-group">
				    <label for="positionCompany">公司名称</label>
				    <input type="text" class="form-control" id="positionCompany" placeholder="输入公司名称">
				</div> 
				<div class="form-group">
				    <label for="positionSalary">岗位薪资</label>
				    <input type="text" class="form-control" id="positionSalary" placeholder="输入岗位薪资">
				</div> 
				<div class="form-group">
				    <label for="positionAddress">工作地点</label>
				    <input type="text" class="form-control" id="positionAddress" placeholder="输入工作地点">
				</div> 
				<div class="form-group">
				    <label for="positionExper">工作经验</label>
				    <input type="text" class="form-control" id="positionExper" placeholder="输入工作经验">
				</div> 
				<div class="form-group">
				    <label for="positionType">职位类型</label>
				    <input type="text" class="form-control" id="positionType" placeholder="输入职位类型">
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

$.extend(AddPositionModal.prototype, {
	createDom : function(){
		$(AddPositionModal.template).appendTo("body");
	}
});