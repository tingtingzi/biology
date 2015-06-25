$(function(){			
   $(".jqzoom").jqueryzoom({
		xzoom:400,
		yzoom:400,
		offset:10,
		position:"right",
		preload:1,
		lens:1
	});
	$("#spec-list").jdMarquee({
		deriction:"left",
		width:308,
		height:56,
		step:2,
		speed:4,
		delay:10,
		control:true,
		_front:"#spec-right",
		_back:"#spec-left"
	});
	$("#spec-list img").bind("mouseover",function(){
		var src=$(this).attr("src");
		$("#spec-n1 img").eq(0).attr({
			src:src.replace("\/n5\/","\/n1\/"),
			jqimg:src.replace("\/n5\/","\/n0\/")
		});
		$(this).css({
			"border":"2px solid #ff6600"
		});
	}).bind("mouseout",function(){
		$(this).css({
			"border":"1px solid #ccc"
		});
	});		


	/* 排行 */
	$("body").on("hover", ".content-r li", function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	})	

	/* 套装 */
	$("body").on("hover", ".suit-nav a", function(){
		var index = $(this).index();
		$(this).addClass("active")
		       .siblings("a")
		       .removeClass("active");
       $(".suit-items .item").removeClass("active");
		$(this).parents(".suit")
		       .find(".suit-items .item")
		       .eq(index)
		       .addClass("active")
		       .siblings("item");
	})	

	/* 套装显示个数  自适应宽度 */
	$(document).ready(function(){
		var $obj = $(".suit-items .item");
		var width = 0;
		for(var i=0; i<$obj.length; i++) {
			var $li = $obj.eq(i).find(".middle li");
			width = $li.length*160;
			$li.parent("ul").width(width);
		}
	})	

	/* 实验步骤 */
	$("body").on("click", ".process-nav a", function(){
		var index = $(this).index();
		$(this).addClass("active")
		       .siblings("a")
		       .removeClass("active");
       $(".process-items .item").removeClass("active");
		$(this).parents(".process-box")
		       .find(".process-items .item")
		       .eq(index)
		       .addClass("active")
		       .siblings("item");
	})

	/* 商家列表、评价等 */
	$("body").on("click", ".product-infor .infor-nav a", function(){
		var index = $(this).index();
		$(this).addClass("active")
		       .siblings("a")
		       .removeClass("active");
       $(".infor-items .item").removeClass("active");
		$(this).parents(".product-infor")
		       .find(".infor-items .item")
		       .eq(index)
		       .addClass("active")
		       .siblings("item");
	})	
	/* 评价切换 */
	$("body").on("click", ".comment-infor .comment-nav a", function(){
		var index = $(this).index();
		$(this).addClass("active")
		       .siblings("a")
		       .removeClass("active");
       $(".comment-items .details-list").removeClass("active");
		$(this).parents(".comment-infor")
		       .find(".comment-items .details-list")
		       .eq(index)
		       .addClass("active")
		       .siblings("details-list");
	})	


    //加减商品数量
    $("body").on("click", ".wrap-input .act", function() {
        var $container = $(this).parents(".wrap-input"),
              $num = $container.find("input.number"),
              numBefore = parseInt($num.val()),
              numDelta = parseInt($(this).data("delta")),
              numAfter = numBefore + numDelta,
              id = $container.data('id');
console.log($num.html()+"ccccccc"+numBefore+"aaaaaaaaa"+numDelta+"bbbbbbbbb"+numAfter)
        if(numAfter > 0 && numAfter <=1000) {
            numAfter = numAfter;console.log("ssssssss")
        } else {
            if(numAfter >= 1000){
                numAfter = 1000;
            }else{
                numAfter = 1;
            }
            return false;
        }

        $num.val(numAfter);
        return false;
    })

})