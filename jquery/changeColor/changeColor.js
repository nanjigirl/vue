//添加对象方法jQurey.fn.method = function()
jQuery.fn.changeBgColor = function(){
	//this表示当前jQuery对象
	this.css("background-color","red");
}

//添加对象方法swapClass
jQuery.fn.swapClass = function(c1,c2){

	// if(this.hasClass(c1)){
	// 	this.removeClass(c1).addClass(c2);
	// }else{
	// 	this.removeClass(c2).addClass(c1);
	// }出问题，所有的添加和删除class

	//this表示当前jQuery对象(c1,c2)是一个数组
	return this.each(function(){
		//this表示当前的DOM元素
		var $elem = $(this);
		if($elem.hasClass(c1)){
			$elem.removeClass(c1).addClass(c2);
		}else{
			$elem.removeClass(c2).addClass(c1);
		}		
	});
	//return $obj;//return之后可实现连缀
}