/**
 * Created by Administrator on 2016/9/27.
 */

$(function(){
    //更多弹出层
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
