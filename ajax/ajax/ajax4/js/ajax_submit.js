function createXhr(){
	//判断浏览器
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else{
		return new ActiveXobject("Microsoft.XMLHttp");
	}
}

$(document).ready(function(){
	$("#txtLoginName").blur(function(){
		var xhr = createXhr();

		xhr.open("post","checkname.php",true);

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				$("#txtLoginNameTip").html(xhr.responseText);
			}
		}
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlcoded");
		xhr.send("loginName="+$(this).val());
	})
});