$( function () {

/*	var templates = Handlebars.templates || {};
        templates.model = Handlebars.compile($("#model-template").html());
	//对比清空特效
	$( "body" ).on( "click", ".diff-operate .del-items", function () {
		var html = "";
		for ( var i = 1; i <= 4; i++ ) {
			html += '<dl class="item-empty">' +
					'<dt>' + i + '</dt>' +
					'<dd>您还可以继续添加</dd>' +
					'</dl>';
		}
		$( "#diff-items" ).html( html );
	})

	//切换对比栏和最近浏览
	$( "body" ).on( "click", ".tab-btns li", function () {
		$( this ).addClass( "current" ).siblings( "li" ).removeClass( "current" );
		$( this ).parents( ".pop-inner" ).find( ".tab-con" ).eq( $( this ).index() ).show().siblings( ".tab-con" ).hide();
	})

	//对比展开&关闭特效 
	$( "body" ).on( "click", ".operate .hide-me", function () {
		$( this ).parents( "#pop-compare" ).hide();
	})

	//对比展开&关闭特效 
	$( "body" ).on( "click", ".btn-compare-s", function () {
		$( this ).toggleClass( "btn-compare-s-active" );
		$("#pop-compare").show();
		if($(this).hasClass("btn-compare-s-active")){
			if($("#diff-items .item-empty").length > 0){
				var param = {};
				param.id = $(this).data("id");
				param.url = $(this).parents("li").find(".p-img").attr("href");
				param.src = $(this).parents("li").find(".p-img img").attr("src");
				param.name = $(this).parents("li").find(".p-name a").text();
				param.price = $(this).parents("li").find(".p-price").text();
				$("#diff-items .item-empty").eq(0).html($(templates.model(param))).removeClass("item-empty").addClass("hasItem");
			} else {
				$(".pop-compare-tips").show().stop(true).delay(5000).fadeOut(300);
				$(this).removeClass("btn-compare-s-active");
			}
		} else {
			var id = $(this).data("id");
			$("#diff-items .hasItem dt").each(function(){
				if(id == $(this).data("id")){
					$(this).parents(".item").remove();
					var num = 4 - $(".item-empty").length;
					var html = '<dl class="item item-empty">' +
									'<dt>' + ( num ) + '</dt>' +
									'<dd>您还可以继续添加</dd>' +
								'</dl>';
					if($("#diff-items .item-empty").length > 0) {
						$("#diff-items .item-empty").eq(0).before($(html));
					} else {
						$("#diff-items").append($(html));
					}
				}
			})
		}
		console.log($(".hasItem").length)
		if($("#diff-items .hasItem").length >= 2){
			$("#goto-contrast").addClass("compare-active");
		} else {
			$("#goto-contrast").removeClass("compare-active");
		}
	})

	//点击对比，放入对比栏
	$( "body" ).on( "hover", ".diff-items .hasItem", function () {
		$( this ).find( ".del-comp-item" ).toggle();
	})

	//删除单个对比商品
	$( "body" ).on( "click", ".del-comp-item", function () {
		$( this ).find( ".del-comp-item" ).toggle();
		var dl = $( this ).parents( "dl" ),
			index = dl.index(),
			html = "";

		html += '<dl class="item item-empty">' +
			'<dt>' + (index + 1 ) + '</dt>' +
			'<dd>您还可以继续添加</dd>' +
			'</dl>';
		dl.replaceWith( html );
	})

	// 关注
	$("body").on("click", ".btn-coll", function(e){
		e.preventDefault();
		$("#care-confirm").bPopup({
			closeClass: "confirm-close"
		});
	})

	$("#fixed").on("click", ".contrast", function(e){
		e.preventDefault();
		$("#pop-compare").show();
	})*/


    //对比清空特效
    $("body").on("click", ".diff-operate .del-items", function() {
        for (var i = 0; i <= 4; i++) {
        	var html = "";
        	html += '<dl class="item-empty">'+
	        			'<dt>'+ i +'</dt>'+
	        			'<dd>您还可以继续添加</dd>'+
        			'</dl>';
            $("#diff-items").prepend(html);
        }
    })

    //切换对比栏和最近浏览
    $("body").on("click", ".tab-btns li", function() {
        $(this).addClass("current").siblings("li").removeClass("current");
        $(this).parents(".pop-inner").
        		find(".tab-con").
        		eq($(this).index()).
        		show().
        		siblings(".tab-con").
        		hide();
    })
	
	//对比展开&关闭特效 
    $("body").on("click", ".operate .hide-me", function() {
        $(this).parents("#pop-compare").hide();
    })
	
	//对比展开&关闭特效 
    $("body").on("click", ".btn-compare-s", function() {
        if($(this).hasClass("btn-compare-s-active")) {
        	$(this).removeClass("btn-compare-s-active");
        	$.post("http://123.57.36.186/bio1/ajax.php", {act: "del_from_compare", goods_id: "393"}, function(result) {
        		if(result.error) {
        			console.log(result.message="BBBBB");
        		}else {
        			console.log(result+"AAAAA")
        		}
        	})
        }else {
        	$(this).addClass("btn-compare-s-active");
        	$.post("http://123.57.36.186/bio1/ajax.php", {act: "add_to_compare", goods_id: "393"}, function(result) {
        		if(result.error) {
        			console.log(result.message="bbbbbbbb");
        		}else {
        			console.log(result+"aaaaaaaa")
        		}
        	})
        }
    })	

	//关注、取消关注
/*    $("body").on("click", ".attend-btn", function() {
    	var id = $(this).data("id");
    	var type_id = $(this).data("type");

        if($(this).hasClass("attend-active")) {
        	$(this).removeClass("attend-active");
        	$.post("http://123.57.36.186/bio1/ajax.php", {act: "add_notice", id: id, type_id: type_id}, function(result) {
        		if(result.error) {
        			alert(result.message);
        		}else {
        			$(this).html("关注");
        		}
        	})
        }else {
        	$(this).addClass("btn-compare-s-active");
        	$.post("http://123.57.36.186/bio1/ajax.php", {act: "cancel_notice", id: id, type_id: type_id}, function(result) {
        		if(result.error) {
        			alert(result.message);
        		}else {
        			$(this).html("取关");
        		}
        	})
        }
    })*/
    // 加入购物车
    var templates = Handlebars.templates = Handlebars.templates || {};
    templates.attend = Handlebars.compile($('#attend-template').html());
    $(".attend-btn").on("click", function(e){
        e.preventDefault();
        var quantity = $("#buy-num").val();
        var id = $(this).data("id");
                $(templates.attend()).appendTo("body").bPopup({
                    closeClass:'close',
                    modalClose: false,
                    onOpen: function(){
                        if(pop){
                            pop.remove();
                        }
                        pop = this;
                    },
                    onClose: function(){
                        this.remove();
                    }
                });
/*        $(this).addCart({"data" : {"id": id, "quantity": quantity}}, function(response){
            if(response.state){
                $(templates.addCart()).appendTo("body").bPopup({
                    closeClass:'close',
                    modalClose: false,
                    onOpen: function(){
                        if(pop){
                            pop.remove();
                        }
                        pop = this;
                    },
                    onClose: function(){
                        this.remove();
                    }
                });
            }else{
                $(templates.failureSuccess({"error":response.error})).appendTo("body").bPopup({
                    closeClass:'close',
                    onOpen: function(){
                        if(pop){
                            pop.remove();
                        }
                        pop = this;
                    },
                    onClose: function(){
                        this.remove();
                    }
                });
            }
        });*/
    });

	//点击对比，放入对比栏
    $("body").on("hover", ".diff-items .hasItem", function() {
        $(this).find(".del-comp-item").toggle();
    })

	//删除单个对比商品
    $("body").on("click", ".del-comp-item", function() {
        $(this).find(".del-comp-item").toggle();
        var dl = $(this).parents("dl"),
        	index = dl.index(),     
    	    html = "";

    	html += '<dl class="item-empty">'+
        			'<dt>'+ index +'</dt>'+
        			'<dd>您还可以继续添加</dd>'+
    			'</dl>';
        dl.replaceWith(html);
    })

    $("body").on("click", "#compare-holder", function() {
    	$("#pop-compare").toggle();
    })
})