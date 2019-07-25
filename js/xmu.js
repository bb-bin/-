var hjleft = document.querySelector('.hjhead-left span');
var hjnavb = document.querySelector('.hjnav-box');
var Hjna = hjnavb.children;
var hjnu = document.querySelector('.hjnum');
var hjrig = document.querySelector('.hjbox-right');
var hjrg = hjrig.firstElementChild.children[1];
var hjrg1 = hjrig.firstElementChild.children[2];
console.log(hjrg);
$('.hjhead-left span').click(function() {
    $('.hjnum').css('display', 'block');
    return false;
})
$('.hjnum-1 h3').click(function() {
    $('.hjnum').css('display', 'none');
    return false;
});


hjrg.onmouseenter = function() {
    hjrg1.innerHTML = "";
    hjrg1.innerHTML = "↑";
    hjnavb.style.display = 'block';
    return false;
};
hjnavb.onmouseleave = function() {
    hjrg1.innerHTML = "";
    hjrg1.innerHTML = "↓";
    hjnavb.style.display = 'none';
    return false;
};



var hjam = document.querySelector('.hjnav-bottom');
var lbao = document.querySelector('.lbao');
var Hjall = document.querySelector('.hjall-1');
var Hjam = lbao.children;
var jam = Hjall.children;
var index = 0;
var tiem = setInterval(lbotu, 2000);

function lbotu() {
    if (index == 3) {
        hjam.style.left = 0;
        index = 0;
    } else {
        index++;
    };
    for (var i = 0; i < Hjam.length; i++) {
        animate(Hjam[i], { opacity: 0 }, 20)
        jam[i].style.background = "";
    };
    animate(Hjam[index], { opacity: 100 }, 20)
    jam[index].style.background = "red";
};
hjam.onmouseover = function() {
    clearInterval(tiem);
    animate(Hjam[index], {
        opacity: 100
    }, 20);
};
hjam.onmouseout = function() {
    tiem = setInterval(lbotu, 2000);
    animate(Hjam[index], {
        opacity: 100
    }, 20);
};
// for (let j = 0; j < jam.length; j++) {
//     jam[j].onmousemove = function() {
//         index = j;
//         animate(Hjam[index], {
//             opacity: 100
//         }, 20);
//         for (var i = 0; i < jiam.length; i++) {
//             jam[i].style.background = "";
//         }
//         jam[index].style.background = "red";
//     }
// }



var Li = document.querySelectorAll(".hjall-left ul");
for (var i = 0; i < Li.length; i++) {
    Li[i].onmouseover = function() {
        var obj = {
            width: 230,
            height: 250,
            zIndex: 999,

        }
        animate(this, obj, 10);
    }
    Li[i].onmouseout = function() {
        var obj = {
            width: 210,
            height: 216,
            zIndex: 0,
        }
        animate(this, obj, 10);
    }
}

var Tbody = document.querySelectorAll('.tbody-1 ul');
for (let i = 0; i < Tbody.length; i++) {
    Tbody[i].onmouseover = function() {
        var Body = ($(this).children('p'));
        for (let i = 0; i < Tbody.length; i++) {
            Tbody[i].onmouseout = function() {
                Tbody[i].style.border = "";
                Body.animate({ opacity: 0, }, 1)
            }
        }
        Body.animate({ opacity: 100, }, 1)
        Tbody[i].style.border = "1px solid red";
    }
};
// 商品倒计时
var xgai = document.querySelectorAll(".xgai span")[0];
var Xgai = document.querySelectorAll(".xgai span")[1];
var gai = document.querySelectorAll(".xgai span")[2];
var nowDate = new Date();
var endDate = new Date("2019/9/24 11:49:40");

var s = getDiffTime(nowDate, endDate);

function playGame() {
    if (s < 0) {
        return;
    }
    var hours = s / 60 / 60;
    var d = parseInt(hours / 24);
    var h = parseInt((hours / 24 - d) * 24);
    var m = parseInt(((hours / 24 - d) * 24 - h) * 60);
    var miao = parseInt((((hours / 24 - d) * 24 - h) * 60 - m) * 60);
    xgai.innerHTML = h + "时";
    Xgai.innerHTML = m + "分";
    gai.innerHTML = miao + "秒"
}
playGame();


var timer = setInterval(function() {
    s--;
    playGame();
    if (s < 0) {
        // showTime.innerHTML = "商品活动已结束！！";
        clearInterval(timer)
    }
}, 1000);

// 商品写完

// 固定导航栏


//704
//当浏览器滚动到168的距离时让导航nav固定定位，top为0
//否则 定位回到初始状态
var nav = document.querySelector(".xdin-1");
var nav1 = document.querySelector(".chelan");
window.onscroll = function() {
        //获取浏览器滚走的距离 
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;

        //与717比较
        if (sTop > 717) {
            //当浏览器滚动到717的距离时让导航nav固定定位，top为0
            nav.style.position = "fixed";
            nav.style.top = 0;
            nav.style.display = 'block';

        } else {
            //否则 定位回到初始状态
            nav.style.position = "static";
            nav.style.display = 'none';
        }
        if (sTop > 600) {
            nav1.style.position = "fixed";
            nav1.style.top = 100 + 'px';
            nav1.style.right = 0;
        } else {
            nav1.style.position = "absolute";
            // nav1.style.position = "static";
            nav1.style.top = 0;
            nav1.style.right = -100 + 'px';
        }
    }
    // 固定导航栏完成

// 固定右侧栏

// 固定右侧栏完成

$('.hjbox-11 ol li img').mouseenter(function() {
    $(this).animate({ left: 5 }, { queue: false, duration: 300, easing: 'swing' });

});
$('.hjbox-11 ol li img').mouseleave(function() {
    $(this).animate({ left: 15 }, { queue: false, duration: 300, easing: 'swing' });
});
$('.hjbox-111 ol li img').mouseenter(function() {
    $(this).animate({ left: 5 }, { queue: false, duration: 300, easing: 'swing' });
});
$('.hjbox-111 ol li img').mouseleave(function() {
    $(this).animate({ left: 15 }, { queue: false, duration: 300, easing: 'swing' });
});
$('.hjbox-111 ol li img').mouseenter(function() {
    $(this).animate({ left: 5 }, { queue: false, duration: 300, easing: 'swing' });
});
$('.hjbox-11 ul:nth-child(2) :nth-child(3)').mouseover(function() {
    $(this).css('background', 'red')


});
$('.hjbox-11 ul:nth-child(2) :nth-child(3)').mouseout(function() {
    $(this).css('background', '')


});
$('.hjbox-111 ul:nth-child(2) :nth-child(3)').mouseover(function() {
    $(this).css('background', '#ccc')

});
$('.hjbox-111 ul:nth-child(2) :nth-child(3)').mouseout(function() {
    $(this).css('background', '')


});
$('.hjbox-11 a img').mouseover(function() {
    $(this).animate({
        opacity: 0.9
    }, 10)
});
$('.hjbox-11 a img').mouseout(function() {
    $(this).animate({
        opacity: 1
    }, 10)
});
$('.hjbox-111 a img').mouseover(function() {
    $(this).animate({
        opacity: 0.9
    }, 10)
});
$('.hjbox-111 a img').mouseout(function() {
    $(this).animate({
        opacity: 1
    }, 10)
});
$('.pao p a').mouseover(function() {
    $(this).css('opacity', '0.5 ')
});
$('.pao p a').mouseout(function() {
    $(this).css('opacity', '1')

});
$('.pao-1 ol img').mouseover(function() {

    $(this).animate({ left: -15 }, { queue: false, duration: 300, easing: 'swing' });


});
$('.pao-1 ol img').mouseout(function() {

    $(this).animate({ left: 10 }, { queue: false, duration: 300, easing: 'swing' });


});
$('.pao-3 ul li:nth-child(3)').mouseover(function() {
    $(this).css('background', '#ccc ')
})
$('.pao-3 ul li:nth-child(3)').mouseout(function() {
    $(this).css('background', '')
});
var getIt = localStorage.key(0);
var $b_rhead = $('.b_rhead')
    if(getIt){
        $b_rhead.html(`<li>你好<a href="enroll.html">${getIt}</a></li>
        <li><a href="#" class='b_zhuce'>退出登录</a> </li>
        <li><a href="#"><em class="iconfont iconhuiyuan"></em> 会员俱乐部</a></li>
        <li><a href="#"><em class="iconfont icondingdan"></em> 我的订单</a></li>`)
    }

    var $b_zhuce = $('.b_zhuce');
    $b_zhuce.on('click',function(){
        localStorage.removeItem(getIt);
        $b_rhead.html(`<li>你好请:<a href="enroll.html">登录</a></li>
        <li><a href="login.html">注册</a> </li>
        <li><a href="#"><em class="iconfont iconhuiyuan"></em> 会员俱乐部</a></li>
        <li><a href="#"><em class="iconfont icondingdan"></em> 我的订单</a></li>`);
    })
