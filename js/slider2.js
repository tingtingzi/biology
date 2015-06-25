$(function(){
    "use strict";

    init();

    var offsetTop = [];
    var carouselTime = null;
    var carouselIndex = 0;
    var carouselLeaveTime = null;
    function carousel(len){
        carouselIndex = (carouselIndex + 1) % len;
        $(".carousel-btn span").eq(carouselIndex).addClass("selected").siblings().removeClass("selected");
        $(".carousel-img li").stop().eq(carouselIndex).fadeIn(400).siblings().fadeOut(200);
        $(".carousel-banner .scroll-pictures li").eq(carouselIndex).addClass("selected").siblings().removeClass("selected");
    }

    function init(){
        var len = $(".carousel-img li").length;
        carouselTime = setInterval(function(){
            carousel(len);
        },2000);
        initScroll();
    }

    // 图片轮播
    $(".carousel-banner .scroll-pictures li").on("mouseenter", function(){
        if(carouselTime){
            clearInterval(carouselTime);
        }
        var self  = $(this);
        carouselIndex = $(this).index();
        carouselLeaveTime = setTimeout(function(){
            self.addClass("selected").siblings().removeClass("selected");
            $(".carousel-img li").stop().eq(carouselIndex).fadeIn(400).siblings().fadeOut(200);
            $(".carousel-btn span").eq(carouselIndex).addClass("selected").siblings().removeClass("selected");
        }, 500);
    }).on("mouseleave", function(){
        if(carouselLeaveTime){
            clearTimeout(carouselLeaveTime);
        }
        var len = $(".carousel-img li").length;
        carouselTime = setInterval(function(){
            carousel(len);
        },2000);
    });
    $(".carousel-banner .carousel-btn span").on("mouseenter", function(){
        if(carouselTime){
            clearInterval(carouselTime);
        }
        var self  = $(this);
        carouselIndex = $(this).index();
        carouselLeaveTime = setTimeout(function(){
            self.addClass("selected").siblings().removeClass("selected");
            $(".carousel-img li").stop().eq(carouselIndex).fadeIn(400).siblings().fadeOut(200);
            $(".carousel-banner .scroll-pictures li").eq(carouselIndex).addClass("selected").siblings().removeClass("selected");
        }, 500);
    }).on("mouseleave", function(){
        if(carouselLeaveTime){
            clearTimeout(carouselLeaveTime);
        }
        var len = $(".carousel-img li").length;
        carouselTime = setInterval(function(){
            carousel(len);
        },2000);
    });
    // 图片滚动
    initScroll();
    function initScroll(){
        var len = $(".scroll-pictures").length;
        var liCount = 0;
        var liWidth = 0;
        for(var i = 0; i < len; i++){
            liCount = $(".scroll-pictures").eq(i).find("li").length;
            liWidth = $(".scroll-pictures").eq(i).find("li").eq(0).outerWidth(true);
            $(".scroll-pictures").eq(i).css("width", liCount * liWidth + "px")
        }
    }

    $("body").on("click", ".scroll-left-btn", function(e){console.log("aaaaa")
        e.preventDefault();
        var scroll = $(this).parents(".scroll");
        var scrollMain = scroll.find(".scroll-outer");
        var width = scrollMain.width();
        var allWidth = scroll.find(".scroll-pictures").width();
        var liWidth = scrollMain.find("li").eq(0).outerWidth(true);
        var left = Math.ceil(scrollMain.scrollLeft() / liWidth) * liWidth;
        if(left >= (allWidth - width)){
            scrollMain.stop().animate({"scrollLeft": 0}, 500);
        } else {
            scrollMain.stop().animate({"scrollLeft": left + width}, 500);
        }
    }).on("click", ".scroll-right-btn", function(e){
        e.preventDefault();
        var scroll = $(this).parents(".scroll");
        var scrollMain = scroll.find(".scroll-outer");
        var width = scrollMain.width();
        var allWidth = scroll.find(".scroll-pictures").width();
        var liWidth = scrollMain.find("li").outerWidth(true);
        var left = Math.ceil(scrollMain.scrollLeft() / liWidth) * liWidth;
        if(left == 0){
            scrollMain.stop().animate({"scrollLeft": allWidth - width}, 500);
        } else {
            scrollMain.stop().animate({"scrollLeft": left - width}, 500);
        }
    });
})