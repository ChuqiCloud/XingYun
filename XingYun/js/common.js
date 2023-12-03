$(function () {
    // wow初始化
    new WOW().init();
    ys.phNavInit(1);
    navFixed();
});

// 导航不在顶部时加类名isfixed
function navFixed() {
    ys.isFixed(".ys_hd_pc");
}
// 底部分享
ys.shareInit();
// 微信
if ($(window).width() > 1199) {
    $('.mftr_con_icon_wx').hover(
        function () {
            $(this).find('.mciw_img').stop().fadeIn();
        },
        function () {
            $(this).find('.mciw_img').stop().fadeOut();
        }
    )
} else {
    $('.mftr_con_icon_wx').click(function (e) {
        e.stopPropagation();
        $(this).find('.mciw_img').stop().fadeIn();
    })
    $("body").click(function () {
        $('.mciw_img').stop().fadeOut();
    })
}

// 鼠标经过一级栏目
$(".mod_nav_list_li").hover(
    function () {
        $(this).addClass("yxnav_active1").siblings().removeClass("yxnav_active1");
    },
    function () {
        $(this).removeClass("yxnav_active1");
        $(".mod_nav_list_li.on").addClass("yxnav_active1");
    }
)

// 侧边显示
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 500) {
        $('.mod_side').addClass('on');
    } else {
        $(".mod_side").stop().removeClass('on');
    }
});
// 二级下拉
$(".mod_nav_list_li").hover(
    function () {
        $(this).find(".mnll_pd").stop().slideDown();
    },
    function () {
        $(this).find(".mnll_pd").stop().slideUp();
    },
)
// 解决方案下拉
$(".mpcl_list_li").hover(function () {
    $(this).addClass("on").siblings().removeClass("on");
    var num = $(this).attr("data-num");
    $('.mpcm_list_ul_li[data-num=' + num + ']').stop().show().siblings().stop().hide();
    $('.mpcm_list_ul_li[data-num=' + num + ']').addClass("on").siblings().removeClass("on");
})
$(".mod_side li").hover(
    function () {
        $(this).find(".mod_side_code").addClass("act")
    },
    function () {
        $(this).find(".mod_side_code").removeClass("act")
    }
)

ys.mCustomScrollbarInit(".mnll_pd_cont_mid");
// ys.mCustomScrollbarInit(".mnll_sol");


$(".mlul_cont_tab li").click(function () {
    var num = $(this).parents(".mpcm_list_ul_li").attr("data-num");
    var index = $(this).index();
    $(this).stop().addClass('on').siblings().stop().removeClass('on');
    $('.mpcm_list_ul_li[data-num="' + num + '"] .mlul_cont_list_lis').eq(index).stop().fadeIn().siblings().stop().hide();
});
$(".mlul_cont_tab li").hover(
    function () {
        $(this).addClass("act").siblings().removeClass("act")
    },
    function () {
        $(this).removeClass("act");
        $(".mlul_cont_tab li.on").addClass("act");
    },
)
function replaceAll(targetStr, oldStr, newStr) {
    var endStr = targetStr;
    var index = targetStr.indexOf(oldStr);

    var i = 0;

    while (index != -1) {
        endStr = endStr.replace(oldStr, newStr);

        index = endStr.indexOf(oldStr, index + 1);
    }

    return endStr;
}
function encodeData(data) {
    temp = data;

    temp = temp.replace(/\'/g, "**!1**");
    temp = temp.replace(/\(/g, "**!2**");
    temp = temp.replace(/\)/g, "**!3**");
    temp = replaceAll(temp, '..', "**!4**");
    temp = replaceAll(temp, '"', "**!6**");
    temp = replaceAll(temp, '<', "**!8**");
    temp = replaceAll(temp, '>', "**!9**");
    temp = replaceAll(temp, '|', "**!10**");
    temp = replaceAll(temp, '\\', "**!11**");
    temp = temp.replace(/\+/g, "**!12**");
    temp = temp.replace(/\@/g, "**!14**");
    temp = replaceAll(temp, '$', "**!15**");
    temp = replaceAll(temp, ':', "**!16**");
    temp = replaceAll(temp, '/', "**!17**");
    temp = replaceAll(temp, ' a', "**!18**");
    temp = replaceAll(temp, ' A', "**!19**");
    return temp
}
function injectChk(oField) {
    re = /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
    if (re.test(oField)) {
        return false;
    } else {
        return true;
    }
}
checkForm = {
    isEmpty: function (name, field, formId) {
        if ($('#' + formId).find('input[name="' + name + '"],textarea[name="' + name + '"]').val().length == 0 || injectChk($('#' + formId).find('input[name="' + name + '"],textarea[name="' + name + '"]').val()) == false) {
            layer.alert(field + "不得为空");
            return true;
        } else {
            return false;
        }
    },
    notEmail: function (name, field, formId) {
        if (!/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test($('#' + formId).find('input[name="' + name + '"]').val())) {
            layer.alert(field + "格式不正确");
            return true;
        } else {
            return false;
        }
    },
    notPhone: function (name, field, formId) {
        if (!/^1[\d]{10}$/.test($('#' + formId).find('input[name="' + name + '"]').val())) {
            layer.alert(field + "格式不正确");
            return true;
        } else {
            return false;
        }
    }
};
function changeCode() {
    $('#checkCodeImg').attr('src', basePath + 'common/authImg.do?count=4&line=2&point=160&width=90&height=24&jump=4&ra=' + Math.random());
}
function replaceUrlParam(loc, targetNameValueStr) {
    var targetName;
    var value;

    var splitCharPos;

    var tmpKey;
    var tmpVal;

    var params = loc.search;

    targetNameValueStr = encodeURI(targetNameValueStr);

    if (targetNameValueStr == null || targetNameValueStr == '') {
        loc.href = href;
    }

    if (params.indexOf("?") != -1)//已有参数
    {
        var href = loc.href.substring(0, loc.href.indexOf("?"));
        var nvArray = targetNameValueStr.split('&');
        for (var j = 0; j < nvArray.length; j++) {
            splitCharPos = nvArray[j].indexOf('=');

            tmpKey = nvArray[j].substring(0, splitCharPos);
            tmpVal = nvArray[j].substring((splitCharPos + 1), nvArray[j].length);

            targetName = tmpKey;
            value = tmpVal;

            if (targetName != 'undefined') {
                if (params.indexOf('&' + targetName + '=') != -1 || params.indexOf('?' + targetName + '=') != -1)//已存在当前参数
                {
                    //alert(params+'     &'+targetName+'=');
                    var searchStrArray = params.substring(1, params.length).split('&');
                    var targetP;
                    var targetV;
                    for (var i = 0; i < searchStrArray.length; i++) {
                        splitCharPos = searchStrArray[i].indexOf('=');

                        tmpKey = searchStrArray[i].substring(0, splitCharPos);
                        tmpVal = searchStrArray[i].substring((splitCharPos + 1), searchStrArray[i].length);

                        if (tmpKey == targetName) {
                            targetP = tmpKey;
                            targetV = tmpVal;
                            break;
                        }
                    }
                    //alert( "     -------     "+targetP+'='+targetV+'  ----    '+targetName+'='+value);
                    if (params.indexOf('?' + targetName + '=') != -1) {
                        params = replaceAll(params, '?' + targetP + '=' + targetV, '?' + targetName + '=' + value);//替换
                    }
                    else {
                        params = replaceAll(params, '&' + targetP + '=' + targetV, '&' + targetName + '=' + value);//替换
                    }

                    //alert(params);
                    //loc.href=href+params;
                }
                else//不存在当前参数
                {
                    params += "&" + targetName + "=" + value;
                }
            }
        }
        //alert(params);
        loc.href = href + params;
    }
    else//没有参数
    { //alert("?"+targetNameValueStr);
        loc.href += "?" + targetNameValueStr;
        ;
    }
}
basePath = '/';
//表单
function submitGBInfo() {
    if (checkForm.isEmpty('jt_types', '咨询类型', 'gbForm')) {
        return false;
    }
    if (checkForm.notPhone('jt_contact_phone', '手机号码', 'gbForm')) {
        return false;
    }
    if (checkForm.notEmail('jt_contact_email', '邮箱', 'gbForm')) {
        return false;
    }
    if (checkForm.isEmpty('jt_contact_industry', '行业', 'gbForm')) {
        return false;
    }
    if (!$('#gbForm').find('.mfca_cont').hasClass('act')) {
        layer.alert('请先同意隐私政策');
        return false;
    }

    var url = basePath + 'japi/form-data/push';
    var postData = encodeURI($("#gbForm").serialize());
    var index = layer.msg('正在发送...', { icon: 16, shade: [0.5, '#f5f5f5'], scrollbar: false, offset: '0px', time: 0 });
    postData = postData.replace(/\+/g, " ");
    postData = encodeData(postData);
    $.ajax({
        type: "POST",
        url: url,
        // async : false,
        data: postData,
        success: function (msg) {
            layer.close(index);
            if ('true' == msg.success) {
                // layer.alert('您的留言成功!');
                $('.mess_form_content').addClass('on');
                // setTimeout('window.location.reload()',1500);
            } else if ('vercode-wrong' == msg.error) {
                changeCode();
                layer.alert('验证码错误!');
            }
        }
    });
}

// 2022.11.22-start
// 下拉搜索滚动条
ys.mCustomScrollbarInit(".mpcm_info_sech_bot ul");
ys.mCustomScrollbarInit(".mod_nav_sech_cont ul");
$(".mpcm_info_search_input").click(function (e) {
    e.stopPropagation();
    $(this).parents(".mpcm_info_search").find(".mpcm_info_sech_bot").stop().fadeIn();
})
$("body").click(function () {
    $(".mpcm_info_sech_bot").stop().fadeOut();
})
$(".mnsb_input").click(function (e) {
    e.stopPropagation();
    $(this).parents(".mod_nav_search").find(".mod_nav_sech_cont").stop().fadeIn();
})
$("body").click(function () {
    $(".mod_nav_sech_cont").stop().fadeOut();
})
// 2022.11.22-end
// 2022.11.23-start
// 导航搜索
$(function () {
    var $data = $(".mod_nav_sech_cont li");
    var timer = null;
    var emptyEle = '<li>' +
        '    <p>没有找到结果，请重新输入</p>' +
        ' </li>';

    $(".mnsb_input input").on("input", function () {
        var _this = this;
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            var val = $(_this).val();
            var resultArr = [];
            var resultIndex = 0;

            $data.each(function (index, item) {
                var itemText = $(item).find("a").text();
                if (itemText.indexOf(val) != -1) {
                    resultArr[resultIndex] = $(item);
                    resultIndex++;
                }
            });
            if (resultArr.length == 0) {
                resultArr[0] = $(emptyEle);
            }
            var $selectBd = $(".mod_nav_sech_cont ul .mCSB_container").length > 0 ? $(".mod_nav_sech_cont ul .mCSB_container") : $(".mod_nav_sech_cont ul");
            $selectBd.empty().append(resultArr);

        }, 500)
    });
});
// 导航下拉搜素
$(function () {
    var $data = $(".mpcm_info_sech_bot li");
    var timer = null;
    var emptyEle = '<li>' +
        '    <p>没有找到结果，请重新输入</p>' +
        ' </li>';

    $(".mpcm_info_search_input input").on("input", function () {
        var _this = this;
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            var val = $(_this).val();
            var resultArr = [];
            var resultIndex = 0;

            $data.each(function (index, item) {
                var itemText = $(item).find("a").text();
                if (itemText.indexOf(val) != -1) {
                    resultArr[resultIndex] = $(item);
                    resultIndex++;
                }
            });
            if (resultArr.length == 0) {
                resultArr[0] = $(emptyEle);
            }
            var $selectBd = $(".mpcm_info_sech_bot ul .mCSB_container").length > 0 ? $(".mpcm_info_sech_bot ul .mCSB_container") : $(".mpcm_info_sech_bot ul");
            $selectBd.empty().append(resultArr);

        }, 500)
    });
});
// 2022.11.23-end
// 2022.11.29修改
// 登录之后的状态
// $(".mod_nav_info_login.act").hover(function(){
//     $(this).find(".mnil_pull").fadeToggle();
// })
// // 控制台
// $(".mod_nav_info_cons.uact").hover(function(){
//     $(this).find("#u_console_pop").fadeToggle();
// })
// $(".mod_nav_info_cons.iact").hover(function(){
//     $(this).find("#i_console_pop").fadeToggle();
// })
// $(".mod_nav_info_cons.uiact").hover(function(){
//     $(this).find("#ui_console_pop").fadeToggle();
// })

