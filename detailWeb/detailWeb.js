/* var _this = this;
$(".line #base ul li").click(function(){
    //$(this).find("ul").stop().delay(2000).slideDown(200);
    $(_this).find(".detailImg").show().html();
    console.log($(_this));
},function(){
    $(_this).find(".arguments").show().html();
}); */
//  console.log($(".line #base ul li")[0]);
// var _this = this;
// $(".line #base ul li")[0].click(function(){
//     // alert("1");
// // console.log($(".arguments"));
//     $(".detailImg").hidden();
//     $(".arguments").show();
//     alert("1");
// });

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var Img1 =document.getElementsByClassName("detailImg")[0];
var Img2 =document.getElementsByClassName("arguments")[0];
//点击商品详情
btn1.onclick = function(){
    Img1.style.display = "block";
    Img2.style.display = "none";
};
//点击规格参数
btn2.onclick = function(){
    Img1.style.display = "none";
    Img2.style.display = "block";
};
//点击小图片
var arrRed=[
    $(".conLeft img").eq(0).attr("src"),
    $(".conLeft img").eq(1).attr("src"),
    $(".conLeft img").eq(2).attr("src"),
    $(".conLeft img").eq(3).attr("src")
];
$(".littleImg li").click(function(){
    $(this).addClass("onborder").siblings().removeClass();
    var index = $(this).index();
    console.log($(".conLeft img").eq(index).attr("src"));
    $(".bigImg").attr("src",arrRed[index]);
});

//选择每个参数
var cb_prop = $('.selectColor li');
cb_prop.click(function () {
    $(this).addClass('choose');


    /* if ($(this).hasClass('choose')) {
        $(this).removeClass('choose');
    } else {
        var lis = $(this).siblings();
        if (lis.hasClass('choose')) {
            lis.removeClass('choose');
            $(this).addClass('choose');
        } else {
            $(this).addClass('choose');
        }
    } */
});
cb_prop.mouseenter(function(){
    
});