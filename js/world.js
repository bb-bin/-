// 用来计数点击加入次数
var totalBtn1 = 0,
    totalBtn2 = 0;
//点击事件 
function clickBtn() {
    // 在button上绑定点击事件
    $('button').on('click', function () {
        // 获得到当前点击的图片
        var img = $(this).parent().parent().parent().find('img');
        // 或得到点击的btn按钮
        var btn = $(this).attr('class');
        // 克隆出一张要飞出来的图片
        var flyImg = img.clone().css({ 'opacity': '0.6' });
        // 将这张图片插入到父级中
        $('.wrapper').append(flyImg);
        // 设置样式
        flyImg.css({
            'z-index': 999,
            'border': '3px solid #fff',
            'position': 'absolute',
            'height': img.height() + 'px',
            'width': img.width() + 'px',
            'top': img.offset().top + 'px',
            'left': img.offset().left + 'px',
        })
        // 设置动画
        flyImg.animate({
            'width': 50 + 'px',
            'height': 50 + 'px',
            'border-radius': 100 + '%'
            // 当动画结束后设置动画飞到右侧对应区域  同时相应计数加一
        }, function () {
            var t;
            if (btn == 'btn1') {
                t = $('#btn1-add').offset().top;
                totalBtn1 ++;
            } else if (btn == 'btn2') {
                t = $('#btn2-add').offset().top + 'px';
                totalBtn2 ++;
            }
            flyImg.animate({
                'top': t,
                'left': ($(document).width() - $('.rightBox').width()) + 'px',
                'height': 0 + 'px',
                'width': 0 + 'px',
                // 飞到右侧区域后 在页面上删除新增元素  同时更新计数区域内容
            }, 1500, function () {
                flyImg.remove();
                $('#btn2-add').html(totalBtn2);
                $('#btn1-add').html(totalBtn1);
            })
        })
    })
}

// 鼠标覆盖显示动画
function mouseCover(){
    $('.rightBox-ul li').on('mouseenter',function(){
        $(this).find('.leftBox').animate({
            'left':-90 + 'px',
        }).addClass('show');
        $(this).find('.fir-leftBox').addClass('show');
        $(this).find('.sev-leftBox').addClass('show');
    })
    $('.rightBox-ul li').on('mouseleave',function(){
        $(this).find('.leftBox').animate({
            'left':-121 + 'px',
        }).add('.fir-leftBox').removeClass('show');
        $(this).find('.fir-leftBox').removeClass('show');
        $(this).find('.sev-leftBox').removeClass('show');        
    }) 
}
mouseCover();
clickBtn();



var inside = document.querySelector(".inside");
var hbox = document.querySelector(".hjnav-box");
inside.onmouseover = function(){
    hbox.style.display = "block";
}
hbox.onmouseover = function(){
    hbox.style.display = "none";
}


// if(hbox.style.display == "block"){
//     hbox.onmouseover = function(){
//         hbox.style.display = "block";
//     }
// }
// if(hbox.style.display == "block"){
//     hbox.onmouseout = function(){
//         hbox.style.display = "none";
//     }
// }
// 移入移出



