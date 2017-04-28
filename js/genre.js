
/*菜单分类显示与隐藏*/
$(".title-type-icon").click(function() {
    $("#type").toggle();
});
$("#container").click(function() {
    $("#type").hide();
});
$('#li-two').on('click','li',function(){
    $("#type").hide();
});


