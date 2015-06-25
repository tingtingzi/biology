+$(function(){
    'use strict';

    var templates = Handlebars.templates = Handlebars.templates || {};
    templates.university = Handlebars.compile($("#university-template").html());           


    /* 点击大学输入框时 */
    var createPop = null;
    $("body").on("click", ".university", function() {
        $(templates.university({})).appendTo("body").bPopup({
            opacity: 0.3,
            modalColor: 'black',
            followSpeed: 200,
            onOpen: function() {
                createPop = this;
            },
            onClose: function() {
                $(this).remove();
            }
        },function() {
            var self = $(this);
            $(".pop-close").on("click", function() {
                self.remove();
                $(".b-modal").remove();
            })
        })
    }) 

	$("body").on("click", ".profession-nav li", function() {
		var index = $(this).index();
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".profession-content").find("li").eq(index).addClass("active").siblings("li").removeClass("active");
	})
})