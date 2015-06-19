$(function(){

	$("body").on("hover", ".nav-title li", function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(this).parents(".nav-parent").find(".nav-content .item").hide();
		$(this).parents(".nav-parent").find(".nav-content .item").eq($(this).index()).show();
	})
})