$(function(){	
	$("body").on("click", ".comment-btn", function(){
		$(this).parents("ul").siblings(".comment-box").toggleClass("show");
	})	
	$("body").on("click", ".select-comm a", function(){
		$(this).toggleClass("active");
	})

	//评分
	$("body").on("click", ".commstar a", function() {
		var val = $(this).data("val");
		var $a = $(this).parent().find("a"); 
		$a.removeClass("active");
		for(var i=0; i<val; i++) {
			$a.eq(i).addClass("active");
		}
	})
})