/**
 * Created by Administrator on 2016/10/26.
 */
$(function(){

    function ksort(obj) {
        var timestamp = Date.parse(new Date()) / 1000;
        var keys = Object.keys(obj);
        keys.sort();
        var len = keys.length;
        var s = '';
        for (i in keys) {
            s += obj[keys[i]];
        }
        var sign = md5(s + timestamp + 'xixa.me');
        obj.sign = sign;
        obj.time = timestamp;
        return obj;
    }



    var sid3 = localStorage.enterid
    var obj = {'sid': sid3};
    var new_obj = ksort(obj);
    console.log(new_obj);
    if(sid3==""||sid3==undefined||sid3==null){
        alert("请登录");
    }else{
        $.post("http://xixa.me/Api/cart/cartList", new_obj, function (data) {
            //var data = JSON.stringify(data);
            //$('#val').val(getFormatJsonStrFromString(data));
            /* if(status==1){
             console.log(JSON.parse(data));
             }else{
             alert("登录超时,请重新登录")
             }*/
            var data = JSON.parse(data);
            console.log(data);
            var data_list = doT.template($("#data_list").text());
            $("#car_list").html(data_list(data.result.cartList));
            //if(){}else{}
            //alert(111)
            var idlength  = data.result.cartList.length;
            for(var i in idlength){
                for(var id in data.result.cartList[i].goods_id){

                }
            }

        });
    }
    $(".back").click(function(){
        api.closeWin();
    });
    $(".home").click(
        function(){
            window.location.href="te.html";
        }
    );
    $(".mycenter").click(
        function(){
            window.location.href="merchant.html";
        }
    );
    $(".bed-more").click(function(){
        $(".masking").show();
        $(".swiper-container").show();
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true
        })
    });
    $(".masking").click(function(){
        $(".masking").hide();
        $(".swiper-container").hide();
        $(".goods_all").hide();
    });
    $(".buy-now").click(
        function(){
            var sid = localStorage.enterid;
            var bool = $("input[name='checkbox1']").is(':checked');
            if(sid==""||sid==undefined||sid==null){
                window.location.href="index.html";
                alert(bool)
                alert(sid);
            }else{
                if(bool==false){
                    alert("请选择结算商品")
                }else{
                    window.location.href="data.html";
                    alert(sid);
                }
            }

        }
    );


    /*$("#addcar").click(function(){
        $(".goods_all").toggle();
        $(".masking").toggle();
    });*/
    $(".goods_sure").click(function(){
        $(".goods_all").hide();
        $(".masking").hide();
    });
    $(".icon-close").click(function(){
        $(".goods_all").hide();
        $(".masking").hide();
    });
    $(".check").click(function(){
        $("input[name='checkbox1']").each(function(){
            $(this).attr("checked",true);
        });
    });

    $(".nav-more").click(function(){
        $(".more-nav").toggle();
    });

    //添加下划线
    $(".shop-nav div").each(function(index){
        $(this).click(function(){
            $(".shop-nav div").css("border-bottom","none");
            $(".shop-nav div").eq(index).css("border-bottom","1px solid #fff");
        });
    });
});