jQuery(function(){

    'use strict';

    var templates = Handlebars.templates = Handlebars.templates || {};
    templates.addAddress = Handlebars.compile($("#add-address-template").html());       
    templates.editAddress = Handlebars.compile($("#edit-address-template").html());       


    /* 新增地址 */
    var createPop = null;
    $("body").on("click", ".add-address-btn", function() {
        $(templates.addAddress({})).appendTo("body").bPopup({
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

    /* 编辑地址 */
    var createPop = null;
    $("body").on("click", ".edit-address-btn", function() {
        $(templates.editAddress({})).appendTo("body").bPopup({
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
})