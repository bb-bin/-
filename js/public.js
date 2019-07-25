//判断一个数是否是素数。
function isPrime(num){
	if(num == 1){
		return false;
	}
	for (var i = 2; i < num; i++) {
		if(num % i == 0){
			//只要来这里执行，说明这个数不是一个素数
			return false;
		}
	}
	return true;//以上循环中的代码执行不到，肯定会到这里来执行，说明这个数是一个素数。
}
//获取min-max之间的随机数
function getRand(min,max){
	return parseInt(Math.random()*(max-min+1) + min);
}
//通过id获取元素对象
function $id(id){
	return document.getElementById(id);
}
//随机获取六位十六进制颜色值
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		var rand = getRand(0,15);
		color += str.charAt(rand);
	}
	return color;
}
//获取随机验证码
function getYZM(num){
	var yzm = "";
	//yxm = 数字字母
	//数字字母从ASCII码表来
	for(var i = 0; i < num; i++){
		var rand = getRand(48,122);
		//排除不需要的 字符 
		if((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)){
			i--;
		}else{
			yzm += String.fromCharCode(rand);
		}
		
	}
	return yzm;
}
//自定义本地化时间
function dateToString(date){
	var str = "";
	var week = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]
	//2019年6月15日 10:44:23 星期六
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();//0-6 ["星期天","星期一"]
	
	str += y + "年" + db(m) + "月" + db(d) + "日 ";
	str += db(h) + ":" + db(mi) + ":" + db(s) + " ";
	str += week[w];
	
	return str;
}
function db(num){
	return num < 10 ? "0" + num : num;
}

//获取两个时间时间差秒数
function getDiffTime(startTime,endTime){
	return (endTime.getTime() - startTime.getTime())/1000;
}

//兼容ie8获取class命名的元素对象集合。
function getAllEleByClassName(className){
	var elements = [];//用于保存class命名的元素对象集合；
	//获取页面所有元素对象集合
	var all = document.getElementsByTagName("*");//
	//console.log(all);
	//在元素集合中查找所有以className命名的元素，
	for (var i = 0; i < all.length; i++) {
		if(all[i].className == className){
			//把这些元素push到elements中
			elements.push(all[i]);
		}
	}
	return elements;
}
//兼容ie8获取事件对象的button属性
function getButton(eve){
	if(eve){//现代浏览器
		return eve.button;
	}else{//eve == undefined说明是ie8浏览器下运行
		var button =  window.event.button;
		switch(button){
			case 1: 
				return 0;
			case 4: 
				return 1;
			case 2: 
				return 2;
			
		}
	}
}
//跨浏览器兼容ie8阻止事件冒泡
function stopProp(e){
	if(e.stopPropagation){//现代浏览器
		e.stopPropagation();
	}else{//ie8
		e.cancelBubble = true;
	}
}
//跨浏览器兼容ie8阻止事件默认行为。
function preventDef(e){
	//e.preventDefault ? e.preventDefault() : e.returnValue = false;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}