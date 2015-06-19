$(function(){
	$("body").on("mouseover", ".slider li", function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	})
	$("body").on("mouseout", ".slider", function(){
		$(".slider li").removeClass("active");
	})

	$("body").on("hover", ".nav-title li", function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(this).parents(".nav-parent").find(".nav-content .item").hide();
		$(this).parents(".nav-parent").find(".nav-content .item").eq($(this).index()).show();
	})

	$("body").on("hover", ".content-r li", function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	})

	$("body").on("hover", ".main-nav .all", function() {
		$(".left-side-bar").toggleClass("show");
	})
	$("body").on("hover", ".left-side-bar", function() {
		$(".left-side-bar").toggleClass("show");
	})
})