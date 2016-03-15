require('../css/index.scss');
require('./jquery.zclip.js');
var Vue=require('vue');
var swf = require('./ZeroClipboard.swf');
$(function() {
	var clip = $('.zclip');
	$('.zero-clipboard').zclip({
		path:'../../'+swf,
		copy: function() { //复制内容   
			var _this=$(this);
			return $(this).siblings().find('.language-html').text();
		},
		afterCopy: function() { //复制成功   
			var _this=$(this);
			_this.find("span").css("color","#08a7ec").text("复制成功!");
			setTimeout(function(){
				_this.find("span").css("color","inherit").text("复制");
			},1000);
		}
	});
	new Vue({
		el:'#vueExample',
      	data:{
      		//下拉框
        	showHidden:false,        	
        	selectVal:['选项一','选项二','选项三'],
        	seI:0,
        	//单选多选
        	radioOpt:false,
        	radioI:-1
      	},
      	methods:{
      		//下拉框
        	dropdownFun:function(){
	          	var sh=this.showHidden;
	          	if(sh===false){
	            	this.showHidden=true;
	          	}else{
	            	this.showHidden=false;
	          	}
        	},
        	selectValFun:function(i){
            	this.seI=i;
            	this.showHidden=false;
        	},
        	radioClick:function(i){
        		this.radioOpt=true;
        		this.radioI=i;
        	},
        	checkboxClick:function(_this){
        		var c=_this.className;
        		if(c==="checkbox-knet"){
        			_this.setAttribute("class", "checkbox-knet checkboxAdd-knet");
        		}else{
        			_this.setAttribute("class", "checkbox-knet");
        		}
        		/*if(this.checkboxOpt==false){
        			this.checkboxOpt=true;
        			this.checkboxI=i;
        		}else{
        			this.checkboxOpt=false;
        			this.checkboxI=i;
        		}*/
        	}
      	}
	});
});