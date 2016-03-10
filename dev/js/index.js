require('../css/index.scss');
require('./jquery.zclip.js');
var swf = require('./ZeroClipboard.swf');
$(function() {
	var clip = $('.zclip');
	$('.zclip').zclip({
		path:'../../'+swf,
		copy: function() { //复制内容   
			return $('#mytext').html();
		},
		afterCopy: function() { //复制成功   
			alert("");
			/*$("<span id='msg'/>").insertAfter($('#copy_input')).text('复制成功');*/
		}
	});
});