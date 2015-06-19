$(function() {
    $('.content-intro').trunk8({
        fill:  '&hellip;&nbsp;<a class="open" href="javascript: void(0)">展开阅读<i></i></a>&nbsp; ',
        lines: 6,
        side: "right",
        tooltip: true,
        width: "auto",
        parseHTML: true
    }).on("click", ".open", function() {
        $(this).parents(".content-intro").trunk8("revert").append('<a class="close" href="javascript:;">收起<i></i></a>');
    })

    $("body").on("click", ".close", function() {
        $(this).parents(".content-intro").trunk8({
            fill:  '&hellip;&nbsp;<a class="open" href="javascript: void(0)">展开阅读<i></i></a>&nbsp; ',
            lines: 6,
            side: "right",
            tooltip: true,
            width: "auto",
            parseHTML: true
        }).on("click", ".open", function() {
            $(this).parents(".content-intro").trunk8("revert").append('<a class="close" href="javascript:;">收起<i></i></a>');
        })
    })
})