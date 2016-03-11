require('../css/index.scss');
require('./jquery.zclip.js');
var swf = require('./ZeroClipboard.swf');
$(function() {
	var clip = $('.zclip');
	$('.zero-clipboard').zclip({
		path:'../../'+swf,
		copy: function() { //复制内容   
			return $('.language-html').text();
		},
		afterCopy: function() { //复制成功   
			$('.zero-clipboard').find("span").css("color","#08a7ec").text("复制成功!");
			setTimeout(function(){
				$('.zero-clipboard').find("span").css("color","inherit").text("复制");
			},1000);
		}
	});
});