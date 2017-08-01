/*
**jQuery默认值
*/
jQuery.fn.shadow_default = function(option){
	var defaults = {
		slices:5,
		opacity:0.1,
		zIndex:-1
	};
	//将defaults与option进行合并
	var opts = $.extend(defaults,option);
	//this表示jQuery对象
	this.each(function(){
		$obj = $(this);//将遍历出来的DOM元素转换为JQUERY对象
		for(var i=0;i<opts.slices;i++){
			$obj.clone().css({
				position:"absolute",
				left:$obj.offset().left+i;
				top:$obj.offset().top+i;
			})
		}
	})
}