$(function(){
	$("body").on("hover", ".content-r li", function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	})

/*
	$(document).ready(function() {
		var html = "";
		$("area").each(function () {
			var strall = [],
                strall = $(this).attr("coords").split(","),
				val = $(this).attr("alt");
				w = parseInt(strall[2]) - parseInt(strall[0]),
				h = parseInt(strall[3]) - parseInt(strall[1]),
				t	= parseInt(strall[1]);
				l = parseInt(strall[0]);
			html += '<span style="width:'+ w +'px; '+
						         'height:'+ h+'px; '+
						         'left:'+ l +'px; '+
						         'top:'+ t +'px; '+
						         'line-height:'+ h +'px; '+
						         '">'+ val +'</span>';
		})
		$(".section .content").append(html);
	})
*/
})

