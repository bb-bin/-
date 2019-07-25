$(function(){


    var $b_cartCheck = $('.b_cartCheck');
    var $b_goodsList = $('.b_goodsList');
    var $b_empty = $('.b_empty');
    var $b_paybox = $('.b_paybox');
    var getIt = localStorage.key(0)
    
    
    if(localStorage.getItem(getIt) && localStorage.getItem('goods') && JSON.parse(localStorage.getItem('goods')).code != ''){
        $b_cartCheck.css('display','block');
        $b_goodsList.css('display','block');
        $b_paybox.css('display','block');
    }else if(localStorage.getItem(getIt)){
        $b_empty.eq('0').css('display','block');
    }else{
        $b_empty.eq('1').css('display','block');
    }


    if(localStorage.getItem('goods')){
        var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        if(codeArr.length == 0){
            return false;
        }
        var oCode = {};
        for (var i = 0; i < codeArr.length; i++) {
            var it = codeArr[i];
            oCode[it] = (oCode[it]+1)||1;
        }        
        var item = Object.keys(oCode);
        // console.log(oCode);
        
        $.ajax({
            url: 'data/goods.json',
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function(data){
                var result = '';
                $.each(item,function(i,ite){
                    $.each(data,function(index,obj){
                        
                        if(ite == obj.code){
                            
                            result += `<div class="b_goods" code="${obj.code}"><input type="checkbox" name="one" class="b_check"><img src="${obj.imgurl}" alt=""><div class="b_txt"><a href="#">${obj.title}</a><div><span>${obj.color}</span><span>${obj.size}</span><i class="iconfont iconfenlei"></i></div></div><p class="b_price">${obj.price}</p><div class="b_add"><a class="b_jian">-</a><input type="text" value="${oCode[ite]}" class="b_jisuan"><a  class="b_jia">+</a></div><p class="b_allPrice">${obj.price*oCode[ite]}</p><div class="b_dele"><i class="iconfont iconshoucang"></i><i class="iconfont iconshanchu"></i></div></div>`
                        }
                        
                    })
                })
                var results = `<h4><a href="#"></a>自营</h4>${result}`
                $b_goodsList.html(results);
            }
        })
    }


    $b_goodsList.on('click','.iconshanchu',function(){
        // $(this).parent().parent().siblings().remove();
        // $b_cartCheck.css('display','none');
        // $b_paybox.css('display','none');
        $(this).parent().parent().remove();

        var code = $(this).parent().parent().attr('code');

        for(var i = 0, len = codeArr.length; i < len;i++){
            $.each(codeArr,function(index,item){
                if(code == item){
                    codeArr.splice(index,1);
                }
            });
        }
        var jsonStr = JSON.stringify({'code':codeArr});
        localStorage.setItem('goods',jsonStr);
        alert('商品成功移除');
        
        if(codeArr.length == 0){
            $(this).parent().parent().siblings().remove();
            $b_cartCheck.css('display','none');
            $b_paybox.css('display','none');
            $b_goodsList.css('display','none');
            $b_empty.eq('0').css('display','block');
        };

        var tPrice = 0;
        var $b_aMount = $('.b_aMount');
        var $b_allPrice = $('.b_allPrice');
        $b_allPrice.each(function(index,ele){
            tPrice += Number($(ele).html());
        });
        
        $b_aMount.html('合计：<span>￥<b>'+tPrice+'</b></span>');




    });

    
    


    $b_goodsList.on('click','.b_jian',function(){
        var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        var $_this = $(this);
        var $b_jisuan = $_this.parent().find('.b_jisuan');
        var count = $b_jisuan.val();
        if(count > 1){
            count--;
        }
        $b_jisuan.attr('value',count);

        var code = $(this).parent().parent().attr("code");
        

        var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        if(codeArr.length == 0){
            return false;
        }
        var oCode = {};
        for (var i = 0; i < codeArr.length; i++) {
            var it = codeArr[i];
            oCode[it] = (oCode[it]+1)||1;
        }        
        var oCodeVal = oCode[code];

        
        
        $.each(codeArr,function (index,item){
            if (code == item) {
                if(oCodeVal > 1){
                    codeArr.splice(index,1);

                }
                return false;
            }
            

        });
        
        var jsonStr = JSON.stringify({"code":codeArr});
        
        localStorage.setItem('goods',jsonStr);

        var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        if(codeArr.length == 0){
            return false;
        }
        var oCode = {};
        for (var i = 0; i < codeArr.length; i++) {
            var it = codeArr[i];
            oCode[it] = (oCode[it]+1)||1;
        }        
        var oCodeVal = oCode[code];
        
        $.ajax({
            url: 'data/goods.json',
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function(data){
                $.each(data,function(index,obj){
                    
                    if($_this.parent().parent().attr('code') == obj.code){
                        
                        $_this.parent().parent().find('.b_allPrice').html(oCodeVal*obj.price);
                        
                        var $oneNm = $('input[name=one]');
                        var tPrice = 0;
                        var $b_aMount = $('.b_aMount');
                        $oneNm.each(function(index,ele){
                            if($(ele).prop("checked")){
                                tPrice += Number($(ele).parent().find(".b_allPrice").html());
                                console.log($(ele));
                            }
                        });
                        
                        $b_aMount.html('合计：<span>￥<b>'+tPrice+'</b></span>');

                    }
                    
                })
            }
        })

        return false;
    })



    var $content = $('.content')
    var $allNm = $('input[name=all]');
    
    $content.on('click','input[name=all]',function(){
        var $oneNm = $('input[name=one]');
        var $b_aMount = $('.b_aMount');
        // console.log($_this);
        var add = 0;


        for (var i = 0; i < $oneNm.length; i++) {
            $oneNm[i].checked = $(this).find('input[name=all]').context.checked;

            
        }
        for (var i = 0; i < $allNm.length; i++) {
            $allNm[i].checked = $(this).find('input[name=all]').context.checked;
        }


        
        if($allNm[0].checked){
            for(var q = 0; q < $oneNm.length; q++){
                add += parseFloat($($oneNm[q]).parent().find('.b_allPrice').html());
            
                $b_aMount.html('合计：<span>￥<b>'+add+'</b></span>');
            }
        }else{
            $b_aMount.html('合计：<span>￥<b>0</b></span>');
        }

    })


    $content.on('click','input[name=one]',function(){
        var $oneNm = $('input[name=one]');
        var sum = 0;
        var $b_aMount = $('.b_aMount');
        // console.log($_this);
        var add = 0;
        var cou = 0;


        for (var i = 0; i < $oneNm.length; i++) {
            if($oneNm[i].checked){
                
                sum++;
                if(sum == $oneNm.length){
                    for(var j = 0; j < $allNm.length; j++){
                        $allNm[j].checked = true;
                    }
                }
            }else {
                for(var j = 0; j < $allNm.length; j++){
                    $allNm[j].checked = false;
                }
            }
            
        }



        for (var y = 0; y < $oneNm.length; y++) {
            if($oneNm[y].checked){
                cou++;
                add += parseFloat($($oneNm[y]).parent().find('.b_allPrice').html());
                
                $b_aMount.html('合计：<span>￥<b>'+add+'</b></span>');
            }else if(cou == 0){
                $b_aMount.html('合计：<span>￥<b>0</b></span>');
            }
        }


        
        // if($_this.context.checked){
        //     $b_aMount.html('合计：<span>￥<b>'+$_this.parent().find('.b_allPrice').html()+'</b></span>')
        // }else{
        //     $b_aMount.html('合计：<span>￥<b>0</b></span>')
        // }




    })
    

    $b_goodsList.on('click','.b_jia',function(){
        var $_this = $(this);
        var $b_jisuan = $_this.parent().find('.b_jisuan');
        var count = $b_jisuan.val();

        if(count < 199){
            count++;
        }
        $b_jisuan.val(count);

        var code = $(this).parent().parent().attr("code");
        
        
        if(localStorage.getItem('goods')){
            var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        }else{
            var codeArr = [];
        }
        codeArr.push(code);
        
        // console.log(code);

        var jsonStr = JSON.stringify({"code":codeArr});
        localStorage.setItem('goods',jsonStr);



        var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        if(codeArr.length == 0){
            return false;
        }
        var oCode = {};
        for (var i = 0; i < codeArr.length; i++) {
            var it = codeArr[i];
            oCode[it] = (oCode[it]+1)||1;
        }        
        var oCodeVal = oCode[code];
        


        $.ajax({
            url: 'data/goods.json',
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function(data){
                
                $.each(data,function(index,obj){
                    
                    if($_this.parent().parent().attr('code') == obj.code){
                        $_this.parent().parent().find('.b_allPrice').html(oCodeVal*obj.price);

                        var $oneNm = $('input[name=one]');
                        var tPrice = 0;
                        var $b_aMount = $('.b_aMount');
                        $oneNm.each(function(index,ele){
                            if($(ele).prop("checked")){
                                tPrice += Number($(ele).parent().find(".b_allPrice").html());
                            }
                        });
                        
                        $b_aMount.html('合计：<span>￥<b>'+tPrice+'</b></span>');
                                        
                    }                        
                    
                })
                
            }
        })




        return false;
    })


    var $b_allDelete = $('.b_allDelete');
    $b_allDelete.click(function(){
        var $oneNm = $('input[name=one]');
        var tPrice = 0;
        var $b_aMount = $('.b_aMount');
        $oneNm.each(function(index,ele){
            if($(ele).prop("checked")){
                var code = $(ele).parent().attr('code');
                for(var i = 0, len = codeArr.length; i < len;i++){
                    $.each(codeArr,function(index,item){
                        if(code == item){
                            codeArr.splice(index,1);
                        }
                    });
                }

                var jsonStr = JSON.stringify({'code':codeArr});
                localStorage.setItem('goods',jsonStr);
                
                // var $b_goodsList = $('.b_goodsList');
                // $b_goodsList.find('.b_goods').remove();
                // console.log($b_goodsList.find('.b_goods'));
                location.reload();
            }
        });
        
        $b_aMount.html('合计：<span>￥<b>'+tPrice+'</b></span>');




    })



    var $checkout_btn = $('.checkout_btn');
    $checkout_btn.click(function(){
        alert('兄弟没钱别搞事!!');
    })



})