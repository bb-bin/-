
$(function(){
    var $b_bigImg = $('.b_bigImg');
    var $b_smallImg = $('.b_smallImg');
    var $b_mask = $('.b_mask');
    var $b_bigbig = $('.b_bigbig');
    var $b_bigbigImg = $('.b_bigbigImg');
    var $bImg = $('.b_bImg');

    

    $b_smallImg.on('mouseenter','li',function(){
        $bImg.attr('src',"img/b_datu"+($(this).index()+6)+".jpg");        
        $b_bigbigImg.attr('src',"img/b_datu"+($(this).index()+6)+".jpg");
        $(this).css('border-color','#999');
        $(this).siblings().css('border-color','#fff')
        
    })

    $b_bigImg.on('mouseenter',function(e){
        $b_mask.css('display','block');
        $b_bigbig.css('display','block');

        $b_bigImg.on('mousemove',function(ev){
            var x = ev.pageX - $(this).offset().left - $b_mask.width()/2;
            var y = ev.pageY - $(this).offset().top - $b_mask.height()/2;
            var maxL = $(this).width() - $b_mask.width();
            var maxT = $(this).height() - $b_mask.height();
            x = x < 0 ? 0 : (x > maxL ? maxL : x);
            y = y < 0 ? 0 : (y > maxT ? maxT : y);
            $b_mask.css('left',x);
            $b_mask.css('top',y);
            var X = -x*($b_bigbigImg.width()/$(this).width());
            var Y = -y*($b_bigbigImg.height()/$(this).height());
            $b_bigbigImg.css('left',X);
            $b_bigbigImg.css('top',Y);
            
        })
    })
    $b_bigImg.on('mouseleave',function(){
        $b_mask.css('display','none');
        $b_bigbig.css('display','none');
    })



    var $plus = $('.iconshang');
    var $b_Calculate = $('.b_Calculate');
    var $reduce = $('.iconweibiaoti35');


    $plus.on({
        click: function(){
            var count = $b_Calculate.attr('value');
            if(count < 199){
                count++;
            }
            $b_Calculate.attr('value',count);
        }
    })

    $reduce.on({
        click: function(){
            var count = $b_Calculate.attr('value');
            if(count>1){
                count--;
            }
            $b_Calculate.attr('value',count);
        }
    })

    $b_Calculate.on('keyup',function(){
        var count = $b_Calculate.attr('value');
        if(count > 199){
            $b_Calculate.attr('value','199');
        }else if(count < 1){
            $b_Calculate.attr('value','1');
        }else{
            $b_Calculate.attr('value',count);
        }
    })







    var b_price = $('.b_price');
    var getIt = localStorage.key(0)

    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data){
            var results = '';
            $.each(data,function (index,item){
                results = '<p>价格</p><span>'+item.price+'</span>';
            });
            
            b_price.html('<p>价格</p><span>139.00</span>');
        }
    });

    var $b_join = $('.b_join');

    $b_join.on('click',function(){
        var code = $(this).attr("code");
        var $b_CalculateVal = $b_Calculate.attr('value');
        
        if(JSON.parse(localStorage.getItem(getIt)).code){
            var codeArr = JSON.parse(localStorage.getItem(getIt)).code;
        }else{
            var codeArr = [];
        }
        for(var i = 0; i < $b_CalculateVal; i++){
            codeArr.push(code);
        }
        // console.log(code);

        var jsonStr = JSON.stringify({"code":codeArr});
        localStorage.setItem(getIt,jsonStr);
        alert('加入购物车成功');

    })



    var $b_rhead = $('.b_rhead')
    if(getIt){
        $b_rhead.html(`<p>你好,<a href="enroll.html" class="b_login">${getIt}</a></p><a href="" class="b_zhuce">退出登录</a><a href="vip.html"><i class="iconfont iconhuiyuan"></i><span>会员俱乐部</span></a><a href="#"><i class="iconfont icondingdan"></i><span>我的订单</span></a><a href="#"><i class="iconfont iconphone"></i><span>下载APP</span></a>`)
    }

    var $b_zhuce = $('.b_zhuce');
    $b_zhuce.on('click',function(){
        localStorage.removeItem(getIt);
        $b_rhead.html(`<p>你好,请
        <a href="enroll.html" class="b_login">登录</a></p><a href="login.html" class="b_zhuce">注册</a><a href="vip.html"><i class="iconfont iconhuiyuan"></i><span>会员俱乐部</span></a><a href="#"><i class="iconfont icondingdan"></i><span>我的订单</span></a><a href="#"><i class="iconfont iconphone"></i><span>下载APP</span></a>`)
    })


})




