
	//获取min-max之间的随机数
	function getRand(min,max){
		return parseInt(Math.random()*(max-min+1) + min);
	}
	// 随机验证码
	function getYZM(num) {
		var yzm = ""; //等于数字字母//数字字母从ASCII码表来
		for (var i = 0; i < num; i++) {
			var rand = getRand(48,122);
			//排除不需要的字符
			if ((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)) {
				i--;
			} else {
				yzm = yzm + String.fromCharCode(rand);
			}
		}
		return yzm;
	}
	
	// 验证码
	var l_change = document.querySelector('.l_change');
	
	l_change.onclick = function(){
		l_change.innerHTML = getYZM(4);
	}
	
	
	
	
	
	
	