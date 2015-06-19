jQuery(function(){

    $("body").on("click", ".order-coupon .toggle-title", function(){
        $(this).parents(".item").toggleClass("toggle-active");
    })

    $("body").on("click", "#step-1-show .update", function(){
        $("#step-1").show();
        $("#step-1-show").hide();
    })
    $("body").on("click", "#step-1 .update", function(){
        $("#step-1").hide();
        $("#step-1-show").show();
    })

    // 修改收货人信息tab切换
    $("body").on("click", ".receiver", function(e){
        e.preventDefault();
        $(this).removeClass("selected").siblings(".receiver").addClass("selected");
        $(".address-tab").toggleClass("selected");
        $(this).parents(".step").toggleClass("step-current")
        if(!$(this).hasClass("save-receiver")){
            $(".pay-btn").addClass("disabled");
        }
    });

    // 点击保存收货人信息，收货人信息显示
    $("body").on("click", ".save-receiver", function(e){
        e.preventDefault();
        var label = $(".edit-address").find("input[type=radio]:checked").parents("label");
        if(label.hasClass("add-address")){
            var id = $(".chooose-address").find("input[name=address_id]").val();
            $("#address-" + id).find("input[type=radio]").attr("checked", "checked");
            $(".add-form").hide();
        } else {
            $(".chooose-address").html($(templates.address(label.data())));
        }
        if($(".pay-btn").hasClass("disabled")){
            $(".pay-btn").removeClass("disabled");
        }
    });

    //鼠标经过收货地址，显示删除编辑
    $("body").on("click", ".address-tab .address-label", function() {
        if($(this).hasClass("add-address")) {
            $(".add-form").removeAttr("data-id").show();
            $(".pay-btn").addClass("disabled");
            $(".address-label-group").find(".func").removeClass("func-active");
        }else {
            $(".add-form").hide();
            $(this).find(".func").addClass("func-active");
            $(this).siblings(".address-label-group").find(".func").removeClass("func-active");
        }
    }).on("hover", ".address-tab .address-label-group", function() {
        var checked = $(this).find("input[type=radio]").attr("checked");
        if(!checked) {
            $(this).find(".func").toggleClass("func-active");
        }
    })


    //编辑地址
    $("body").on("click", ".func .update-address", function(event) {
        event.stopPropagation();
        var $parents = $(this).parents("label"),
              $updateForm = $(".add-form .form-horizontal"),
              id = $parents.data("id"),
              array = ['name', 'location', 'tel', 'mobile', 'postcode'];

        $(".add-form").show();

        $(".add-form").attr("data-id", id);
        for (var i in array) {
            $updateForm.find("#id_"+ array[i]).val($parents.data(array[i]));
        }

        $(".add-form .form-horizontal").cascade({
            countryValue: '1',
            stateValue: $parents.data("state"),
            cityValue: $parents.data("city"),
            regionValue: $parents.data("region")
        });
    })

    //删除地址
    $("body").on("click", ".func .delete-address", function(event) {
        event.stopPropagation();
        var $parents = $(this).parents("label"),
              id = $parents.data("id"),
              url = $parents.data("url"),
              isSelected = $parents.find("input[type='radio']").attr("checked"),
              firstLabel = $(".address-tab .address-label").eq(0).find("input[type='radio']");

        if(isSelected) {
            firstLabel.attr("checked", "checked");
        }

        $.post(url, {ids: id}, function(response){
            if(response.state){
                $parents.remove();
            } else {
            }
        });
    })

    // 添加新地址
    $("body").on("submit", ".form-horizontal", function(e){
        e.preventDefault();

        if($(this).hasClass("posting")) {
            return false;
        }

        if(isBlank($("#id_tel").val()) && isBlank($("#id_mobile").val())) {
            errorShow("div_id_tel", "固定电话与手机号码选填一项");
            return false;
        }
        if(!isTel($("#id_tel").val()) && !isBlank($("#id_tel").val())) {
            errorShow("div_id_tel", "联系电话格式不对");
            return false;
        }
        if(!isMobile($("#id_mobile").val())  && !isBlank($("#id_mobile").val())) {
            errorShow("div_id_mobile", "手机号格式不对");
            return false;
        }

        $(this).addClass("posting");

        var url = $(this).parents(".add-form").data("action"),
              array = ['name', 'state', 'city', "region", 'location', 'tel', 'mobile', 'postcode'],
              param = {};
        for (var i in array) {
            var val = $(".add-form").find("#id_"+ array[i]).val();
            param[array[i]]= val;
        }
        param.id = $(".add-form").data("id");
        var form = $(this);

        $(".error").remove();

        $.post(url, param, function(response){
            if(response.state){
                window.location.reload();
            } else {
                form.removeClass("posting");
                for(var key in response.error){
                    if(key in ["state", "city", "region"]){
                        $("#id_" + key).parents(".multiField").append("<span class='error'>" + response.error[key][0] + "</span>")
                    }
                    $("#id_" + key).parents(".controls").append("<span class='error'>" + response.error[key][0] + "</span>");
                }
            }
        });
    });

})