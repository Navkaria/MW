checkEmailBtn = 0;
checkCAPTBtn = 0;
checkNameBtn = 0;
checkPassBtn = 0;
function bonuspay(sum) {
    let form = document.createElement('form');
    form.action = '/';
    form.method = 'POST';
    form.innerHTML = '<input type="hidden" name="sum" value="' + sum + '"><input type="hidden" name="addmoney" value="1">';
    document.body.append(form);
    form.submit();
}
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
function mif(mif) {
    mif = mif + '';
    var arr = new Array();
    arr[0] = "Мифов"
    arr[1] = "Миф"
    arr[2] = "Мифа"
    arr[3] = "Мифа"
    arr[4] = "Мифа"
    arr[5] = "Мифов"
    arr[6] = "Мифов"
    arr[7] = "Мифов"
    arr[8] = "Мифов"
    arr[9] = "Мифов"
    str = '.00';
    mif = mif.replace(str, '');
    if (mif.substr(-2) == 11 || mif.substr(-2) == 12 || mif.substr(-2) == 13 || mif.substr(-2) == 14)
        mif = arr[0];
    else
        mif = arr[mif.substr(-1)];
    return mif;
}
function chest(chest) {
    chest = chest + '';
    var arr = new Array();
    arr[0] = "Кейсов"
    arr[1] = "Кейс"
    arr[2] = "Кейса"
    arr[3] = "Кейса"
    arr[4] = "Кейса"
    arr[5] = "Кейсов"
    arr[6] = "Кейсов"
    arr[7] = "Кейсов"
    arr[8] = "Кейсов"
    arr[9] = "Кейсов"
    str = '.00';
    chest = chest.replace(str, '');
    if (chest.substr(-2) == 11 || chest.substr(-2) == 12 || chest.substr(-2) == 13 || chest.substr(-2) == 14)
        chest = arr[0];
    else
        chest = arr[chest.substr(-1)];
    return chest;
}
$(window).bind('popstate', function(event) {
    window.location = history.state.uri;
});
$('#monitoring').load('/monitoring.php').fadeIn("slow");
setInterval(function() {
    $('#monitoring').load('/monitoring.php').fadeIn("slow");
}, 15000);
$('body').on('click', '#modmoney', function(e) {
    e.preventDefault();
    $('#money-modal').modal().open();
    $('.themodal-overlay').customScroll({
        prefix: 'custom-scroll-tiny_',
        trackWidth: 5,
        trackHeight: 5
    });
});
$('body').on('click', '#close', function(e) {
    e.preventDefault();
    $.modal().close();
});
$('body').on('click', 'a.ajax', function(e) {
    e.preventDefault();
    tpl = $(this).attr('href').substr(1);
    if (tpl == '')
        tpl = 'main';
    if (tpl == 'shop')
        shop = new Array();
    if (tpl == 'shopkit')
        shopkit = new Array();
    if (tpl.substr(0, 4) == 'news')
        ti = 'Новости';
    if (tpl.substr(0, 7) == 'votetop')
        ti = 'Топ голосующих';
    else
        ti = ajax_ti[tpl];
    load_main();
});
setTimeout(function() {
    $('#msgbox').slideUp(800);
    setTimeout(function() {
        $("#msgbox").remove();
    }, 5000);
}, 10000);
function moneyshop() {
    id = $("#moneyshop_select").val();
    price = $('#moneyshop-' + id).val();
    amount = $('#amount').val();
    $('#moneyshop_total').val(price * amount);
}
;function auto_up(pix) {
    $inner.animate({
        'scrollTop': pix + 'px'
    }, 100);
}
;function prefix_view() {
    var code_prefix = new Array();
    code_prefix['0'] = '#000000';
    code_prefix['1'] = '#0000bf';
    code_prefix['2'] = '#00bf00';
    code_prefix['3'] = '#00bfbf';
    code_prefix['4'] = '#bf0000';
    code_prefix['5'] = '#bf00bf';
    code_prefix['6'] = '#f7c50e';
    code_prefix['7'] = '#bfbfbf';
    code_prefix['8'] = '#404040';
    code_prefix['9'] = '#4040ff';
    code_prefix['a'] = '#40ff40';
    code_prefix['b'] = '#40ffff';
    code_prefix['c'] = '#ff4040';
    code_prefix['d'] = '#ff40ff';
    code_prefix['e'] = '#ffff40';
    code_prefix['f'] = '#ffffff';
    color_prefix = $("#color_prefix").val();
    prefix = $("#prefix").val();
    color_name = $("#color_name").val();
    name = $("#name").val();
    pref = '<a style="color:#bfbfbf;">[</a><a style="color:' + code_prefix[color_prefix] + ';">' + prefix + '</a><a style="color:#bfbfbf;">]</a><a style="color:' + code_prefix[color_name] + ';">' + name + '</a>';
    $("#prefix_js").empty();
    $("#prefix_js").append(pref);
}
function BonusSwap() {
    bonus_num = $("#value").val() * 1;
    type = $("#type").val();
    if (bonus_num != 0 || bonus_num != '') {
        if (type == 1) {
            if (bonus_num % 5 == 0)
                $("#bonus_swap").text('Получите ' + bonus_num / 5 + ' ' + mif(bonus_num / 5));
            else
                $("#bonus_swap").text('Курс обмена 5 бонусов за 1 миф, укажите правильное кол-во бонусов для обмена');
        }
        if (type == 2) {
            if (bonus_num % 2 == 0)
                $("#bonus_swap").text('Получите ' + bonus_num / 2 + ' ' + chest(bonus_num / 2));
            else
                $("#bonus_swap").text('Курс обмена 2 бонуса за 1 кейс, укажите правильное кол-во бонусов для обмена');
        }
    }
}
;function PriceStatus() {
    status_id = $("#status").val();
    price_month = $("#price_month_" + status_id).val();
    price_forever = $("#price_forever_" + status_id).val();
    status_time = $("#time_status").val();
    if (status_time == 1)
        $("#price_status").text(price_month + ' ' + mif(price_month));
    else if (status_time == 2)
        $("#price_status").text(price_forever + ' ' + mif(price_forever));
}
;function PriceStatus2() {
    status_id = $("#status").val();
    price_forever = $("#price_forever_" + status_id).val();
    $("#price_status").text(price_forever + ' ' + mif(price_forever));
}
;function PriceService() {
    service_id = $("#service").val();
    price_service = $("#price_service_" + service_id).val();
    $("#price_service").text(price_service + ' ' + mif(price_service));
}
;function CheckPass() {
    var valueX = $("#password1").val();
    var valueY = $("#password2").val();
    if (valueX == valueY) {
        $("#result-registration2").text('');
        document.getElementById('password1').style.border = '1px solid #66ec21';
        document.getElementById('password2').style.border = '1px solid #66ec21';
        document.getElementById('password1').style.background = '#eefee0';
        document.getElementById('password2').style.background = '#eefee0';
        checkPassBtn = 1;
    }
    if ((valueX != valueY || valueX.length < 6 || valueX.length > 25) && (valueY != '')) {
        $("#result-registration2").text('Пароли не совпадают или длина пароля меньше 6 или больше 25 символов');
        document.getElementById('password1').style.border = '1px solid rgb(236, 33, 33)';
        document.getElementById('password2').style.border = '1px solid rgb(236, 33, 33)';
        document.getElementById('password1').style.background = 'rgb(254, 224, 224)';
        document.getElementById('password2').style.background = 'rgb(254, 224, 224)';
        checkPassBtn = 0;
    }
    checkBtn();
}
;function CheckName() {
    $.post("/ajax.php", {
        do: "CheckName",
        name: $("#name").val()
    }).done(function(data) {
        obj = jQuery.parseJSON(data);
        if (obj.check == 1) {
            $("#result-registration").text('');
            document.getElementById('name').style.border = '1px solid #66ec21';
            document.getElementById('name').style.background = '#eefee0';
            checkNameBtn = 1;
        } else {
            $("#result-registration").text(obj.error);
            document.getElementById('name').style.border = '1px solid rgb(236, 33, 33)';
            document.getElementById('name').style.background = 'rgb(254, 224, 224)';
            checkNameBtn = 0;
        }
    });
    checkBtn();
}
;function CheckEmail() {
    $.post("/ajax.php", {
        do: "CheckEmail",
        email: $("#email").val()
    }).done(function(data) {
        obj = jQuery.parseJSON(data);
        if (obj.check == 1) {
            $("#result-registration3").text('');
            document.getElementById('email').style.border = '1px solid #66ec21';
            document.getElementById('email').style.background = '#eefee0';
            checkEmailBtn = 1;
        } else {
            $("#result-registration3").text(obj.error);
            document.getElementById('email').style.border = '1px solid rgb(236, 33, 33)';
            document.getElementById('email').style.background = 'rgb(254, 224, 224)';
            checkEmailBtn = 0;
        }
    });
    checkBtn();
}
;function enableBtn() {
    checkCAPTBtn = 1;
    checkBtn();
}
function checkBtn() {
    if (checkEmailBtn == 1 && checkCAPTBtn == 1 && checkNameBtn == 1 && checkPassBtn == 1)
        document.getElementById("submit").disabled = false;
    else
        document.getElementById("submit").disabled = true;
}
function CheckChest() {
    chests = $("#chests").val() * 1;
    amt = $("#amt").val() * 1;
    if (chests < amt && amt < 65)
        document.getElementById("submit").disabled = true;
    else
        document.getElementById("submit").disabled = false;
}
function add_ip(ip) {
    if ($("#allowed_ip").val() == '')
        $("#allowed_ip").val(ip);
    else
        $("#allowed_ip").val($("#allowed_ip").val() + ',' + ip);
}
;$('body').on('click', ".shop-buy-product-amount-change-bt-minus", function() {
    num = $('#num').val();
    if (num > 1) {
        $('#num').val(num - 1);
        sum_ench();
    }
});
$('body').on('click', ".shop-buy-product-amount-change-bt-plus", function() {
    num = $('#num').val();
    if (num < 256) {
        $('#num').val(num * 1 + 1);
        sum_ench();
    }
});
$.ajaxSetup({
    cache: true
});
function load_main() {
    $("#main").empty();
    $("#main").append('<center><div class="cssload-container"><ul class="cssload-flex-container"><li><span class="cssload-loading cssload-one"></span><span class="cssload-loading cssload-two"></span><span class="cssload-loading-center"></span></li></div></div></center>');
    $.post("/ajax.php", {
        do: tpl
    }).done(function(data) {
        obj = jQuery.parseJSON(data);
        if (obj.check == 1) {
            $('meta[name="description"]').attr('content', obj.description);
            $('meta[name="keywords"]').attr('content', obj.keywords);
            $("#main").empty();
            $("#main").append(obj.tpl);
            if (obj.js) {
                setTimeout(function() {
                    $.getScript(obj.js);
                }, 500);
            }
        } else if (obj.check == 2)
            $("#main").append('<center>Ошибка! Необходимо авторизоваться на сайте!</center>');
        else if (obj.check == 3)
            $("#main").append('<center>' + obj.tpl + '</center>');
        else
            $("#main").append('<center>Ошибка! Обратитесь к Администратору!</center>');
    }).fail(function() {
        $("#main").append('<center>Ошибка AJAX! Обратитесь к Администратору!</center>');
    });
    if (tpl != "register")
        $("#reg").remove();
    if (tpl == 'main') {
        url = site;
        tit = title;
        $('#slider').slideDown(300);
    } else {
        tit = title + ' » ' + ti;
        url = site + tpl;
        $('#slider').hide();
    }
    $('title').text(tit);
    if (tpl != 'shop' || tpl != 'shopkit')
        history.pushState({
            uri: url
        }, tit, url);
}
;