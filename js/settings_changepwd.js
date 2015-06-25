function CharMode(iN) {
    if(iN >= 48 && iN <= 57)
        return 1;
    if(iN >= 65 && iN <= 90)
        return 2;
    if(iN >= 97 && iN <= 122)
        return 4;
    else
        return 8;
}

function bitTotal(num) {
    modes = 0;
    for( i = 0; i < 4; i++) {
        if(num & 1)
            modes++;
        num >>>= 1;
    }
    return modes;
}

function checkStrong(sPW) {
    if(sPW.length <= 4)
        return 0;
    Modes = 0;
    for( i = 0; i < sPW.length; i++) {
        Modes |= CharMode(sPW.charCodeAt(i));
    }
    return bitTotal(Modes);
}

function pwStrength(obj, pwd) {
    O_color = "#ccc";
    L_color = "#f79100";
    M_color = "#f79100";
    H_color = "#f79100";
    if(pwd == null || pwd == '') {
        Lcolor = Mcolor = Hcolor = O_color;
    } else {
        S_level = checkStrong(pwd);
        switch(S_level) {
            case 0:
                Lcolor = Mcolor = Hcolor = O_color;
            case 1:
                Lcolor = L_color;
                Mcolor = Hcolor = O_color;
                break;
            case 2:
                Lcolor = Mcolor = M_color;
                Hcolor = O_color;
                break;
            default:
                Lcolor = Mcolor = Hcolor = H_color;
        }
    }
    var obj = obj.parents(".control-group").siblings(".safe-box");console.log(obj)
    obj.find(".strength_L").css({"background":Lcolor});
    obj.find(".strength_M").css({"background":Mcolor});
    obj.find(".strength_H").css({"background":Hcolor});
    return;
}
    
jQuery(function(){
    
    $(document).ready(function(){
        pwStrength( $(".password"), $(this).val() );
        pwStrength( $(".email-password"), $(this).val() );
    }).on("keyup", ".password", function(){
        pwStrength( $(".password"), $(this).val() );
    }).on("blur", ".password", function(){
        pwStrength( $(".password"), $(this).val() );
    }).on("keyup", ".email-password", function(){
        pwStrength( $(".email-password"), $(this).val() );
    }).on("blur", ".email-password", function(){
        pwStrength( $(".email-password"), $(this).val() );
    })
})

/* 密码不足6位阻止提交 */
function checkPwd(){
    var length = $("input[type='password']").val().length;
    if (length<6) {
        return false;
    }       
} 