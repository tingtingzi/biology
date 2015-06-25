$(function() {
	$("body").on("click", ".item h3", function() {
		$(this).parents(".item").toggleClass("hover");
	})

	$("body").on("click", ".extra .more", function() {
		var leng = $(".mc").find(".item").length,
			isOpen = $(this).find("b").hasClass("open"),
			num = 2;

		if(isOpen) {
			$(this).find("b").removeClass("open").addClass("close");
			for(var i=num; i<leng; i++) {
				$(".mc").find(".item").eq(i).removeClass("hide");
			}			
		}else {
			$(this).find("b").removeClass("close").addClass("open");
			for(var i=num; i<leng; i++) {
				$(".mc").find(".item").eq(i).addClass("hide");
			}			
		}
	})
})