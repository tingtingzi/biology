$(function() {

	/* "更多" */
	$("body").on("click", ".o-more", function() {
		if($(this).hasClass("fold")) {
			$(this).removeClass("fold").html("<b></b>更多");	
			$(this).parents(".a-values").find(".v-fold").removeClass("v-unfold");
		}else {
			$(this).addClass("fold").html("<b></b>收起");	
			$(this).parents(".a-values").find(".v-fold").addClass("v-unfold");
		}
	})

	/* 勾选 */
	$("body").on("click", ".attr-select .f-list li", function(e) {
		$(this).toggleClass("selected");
		return false;
	})
	$("body").on("click", ".attr-select .f-list td", function(e) {
		$(this).toggleClass("selected");
		return false;
	})

	/* "多选" */
	$("body").on("click", ".o-multiple", function(e) {
		$(this).parents(".attr").addClass("attr-select");
		$(this).parents(".v-option").hide();
		$(this).parents(".a-values").find(".v-btns").show();
		return false;
	})

	/* "取消" */
	$("body").on("click", ".btn-gray", function(e) {
		$(this).parents(".attr").removeClass("attr-select");
		$(this).parents(".v-btns").hide();
		$(this).parents(".a-values").find(".v-option").show();
		return false;
	})
	/* 确认 */
	$("body").on("click", ".btn-red", function(e){
		e.preventDefault();
		var id = [];
		var ids = "";
		var type_id = $(this).data("type");
		$(this).parents(".a-values").find(".f-list .selected").each(function(){
			id.push($(this).data("id"));
		})
		ids = id.join(",");
		var href = "http://localhost/bio1/category.php?price_min=0&price_max=0&exps=59&studys=7&sort=sell_count&display=grid&"+type_id+"="+ids;
		alert(ids);
		alert(href);
	})
	/* 更多选项 */	
	$("body").on("click", "#advanced .attr-extra", function() {
		var leng = $(".mc").find(".prop-attrs").length,
			isOpen = $(this).find("b").hasClass("open"),
			num = 3;

		if(isOpen) {	
			$(this).html("<div>收起<b class='close'></b></div>");
			for(var i=num; i<leng; i++) {
				$(".mc").find(".prop-attrs").eq(i).show();
			}		
		}else {
			$(this).html("<div>更多选项<b class='open'></b></div>");
			for(var i=num; i<leng; i++) {
				$(".mc").find(".prop-attrs").eq(i).hide();
			}			
		}
	})
})