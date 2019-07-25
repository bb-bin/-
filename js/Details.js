
$(function(){
    var $b_bigImg = $('.b_bigImg');
    var $b_smallImg = $('.b_smallImg');
    var $b_mask = $('.b_mask');
    var $b_bigbig = $('.b_bigbig');
    var $b_bigbigImg = $('.b_bigbigImg');
    var $bImg = $('.b_bImg');

    

    $b_smallImg.on('mouseenter','li',function(){
        $bImg.attr('src',"img/b_datu"+$(this).index()+".jpg");        
        $b_bigbigImg.attr('src',"img/b_datu"+$(this).index()+".jpg");
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
        
        if(localStorage.getItem('goods')){
            var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        }else{
            var codeArr = [];
        }
        for(var i = 0; i < $b_CalculateVal; i++){
            codeArr.push(code);
        }
        // console.log(code);

        var jsonStr = JSON.stringify({"code":codeArr});
        localStorage.setItem('goods',jsonStr);
        alert('加入购物车成功');

    })



})




