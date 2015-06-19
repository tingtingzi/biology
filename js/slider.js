$(function(){
    
    addBtn($("#banner"), true);
    $(".banner-second").each(function() {
        addBtn($(this));
    });

    function addBtn(elem, isNumber){
        var length = $(elem).find('.banner_list a').length;
        var html = "";
        if(isNumber){
            for(var i = 0; i < length; i++){
                if(i == 0){
                    html += "<span class='active'>" + ( i + 1) + "</span>";
                } else {
                    html += "<span>" + (i + 1) + "</span>";
                }
            }
        } else {
            for(var i = 0; i < length ; i++){
                if(i == 0){
                    html += "<span class='active'></span>";
                } else {
                    html += "<span></span>";
                }
            }
        }
        $(elem).find('.foucs_point').html($(html));
        $(elem).find(".banner_list a").eq(0).siblings('a').hide();
        addAnimate(elem);
    }

    function addAnimate(elem){
        var length = $(elem).find('.banner_list a').length;
        elem.count = 0;
        elem.animateTime = setInterval(function(){
            elem.count = (elem.count + 1) % length;
            $(elem).find('.banner_list a').eq(elem.count).fadeIn(1000).siblings('a').fadeOut(500);
            $(elem).find('.foucs_point span').eq(elem.count).addClass('active').siblings().removeClass('active');
        }, 4000);

        $(elem).find('.foucs_point span').on("click", function(){

            if(elem.animateTime) {
                clearInterval(elem.animateTime);
            }
            
            elem.count = $(this).index();
            $(elem).find('.banner_list a').eq(elem.count).fadeIn(1000).siblings('a').fadeOut(500);
            $(elem).find('.foucs_point span').eq(elem.count).addClass('active').siblings().removeClass('active');
        }).on("mouseleave", function(){
            if(elem.animateTime) {
                clearInterval(elem.animateTime);
            }
            elem.animateTime = setInterval(function(){
                elem.count = (elem.count + 1) % length;
                $(elem).find('.banner_list a').eq(elem.count).fadeIn(1000).siblings('a').fadeOut(500);
                $(elem).find('.foucs_point span').eq(elem.count).addClass('active').siblings().removeClass('active');
            }, 4000);
        })
    }
})