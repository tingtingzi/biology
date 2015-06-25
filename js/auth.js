$(function(){

    'use strict';

    if($(".login-form").length > 0) {
        var templates = Handlebars.templates = Handlebars.templates || {};
        templates.login = Handlebars.compile($("#login-template").html());    
    }

    /* 登录 */
    var createPop = null;
    $("body").on("click", ".login-btn.login-form", function() {
        $(templates.login({})).appendTo("body").bPopup({
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

    $("body").on("blur", "input", function() {
        $(this).removeClass("blur-input");
    }).on("focus", "input", function(){
        $(this).addClass("blur-input");
    })

    $("body").on("click", ".register-box .nav a", function() {
        var index = $(this).index();
        console.log(index)
        var $parents = $(this).parents(".register-box");
        $parents.find(".register-form").eq(index).show().siblings(".register-form").hide();
        $(this).addClass("active").siblings("a").removeClass("active");
    })

    $("body").on("submit", ".login-form", function(event) {
        event.preventDefault();
        var email = $(this).find("input[name='username']").val();
        var password = $(this).find("input[name='pwd']").val();
        $(".error").each(function() {
            $(this).html("");
        });
        if(isBlank(email)){
            $(this).find("input[name='username']").siblings('.error').append("<li>用户名不能为空</li>");
        }
        if(isBlank(password)){
            $(this).find("input[name='pwd']").siblings('.error').append("<li>密码不能为空</li>");
        }
        if($(".error").find('li').length > 0){
            return false;
        } else {
            var url = $(this).attr("action");
            var form = $(this);
            $.post(url, form.serializeArray(), function(response) {
                if(response.state){
                    window.location.reload();
                } else {
                    for(var key in response.errors){
                        $(self).find("input[name='" + key + "']").siblings('.error').html("<li>" + response.errors[key] + "</li>");
                    }
                }
            });
        }
    });

    // 验证是否为空
    function isBlank(str){
        str = $.trim(translate(str));
        if(str == ""){
            return true;
        } else {
            return false;
        }
    }
    // 将全角字符转化成半角字符
    function translate(str){
        var len = str.length;
        var result = "";
        for(var i = 0; i < len; i++){
            if(str.charCodeAt(i) == 12288){
                // 空格
                result += String.fromCharCode(str.charCodeAt(i) - 12256);
                continue;
            }
            if(str.charCodeAt(i) >= 65280 && str.charCodeAt(i) <= 65375){
                result += String.fromCharCode(str.charCodeAt(i) - 65248);
            } else {
                result += String.fromCharCode(str.charCodeAt(i));
            }
        }
        return result;
    }

    $("body").on("hover", "#settleup", function() {
        $(this).toggleClass("active");
    })
})