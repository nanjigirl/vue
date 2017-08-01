//创建带有命名空间的函数(创建属于某一对象的函数)
jQuery.array_option = {
	myFunction:function(){
		console.log("array_option");
	},
	myFunction1:function(msg){
		console.log(msg);
	}
}
jQuery.sum = {
	arraySum:function(arr){
		var s = 0;
		for(var i = 0;i<arr.length;i++){
			s += arr[i];
		}
		console.log(s);
		return s;
	},
	sum:function(array){
		var sum = 0;
		/*$.each(array,function(i,value){
			sum += value;
		});*/
		/*$.each(array,function(i){
			sum += array[i];
		});*/
		/*$.each(array,function(i){
			sum += this;
		});*/
		$(array).each(function(i){
			sum += $(array).get(i);
		});
		return sum;
	}
}