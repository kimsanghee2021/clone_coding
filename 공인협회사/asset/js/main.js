$(function(){
    var menuBtn = $('.toggle_menu'),
    menu_list = $('.aside_menu_wrap .aside_menu_list'),
    menu_bg = $('.aside_menu_bg'),
    menu_close = $('.aside_menu_list .close');

    //토글메뉴 노출 - open
    menuBtn.click(function(){
        menu_list.addClass('show');
        menu_bg.fadeIn();
        $('#wrapper').css({position:'fixed'});
    });

    //토글메뉴 닫기 - close
    menu_close.click(function(){
        menu_list.removeClass('show');
        menu_bg.fadeOut();
        $('#wrapper').css({position:'relative'});
    });

});
function goBack(){
    window.history.back();
}
