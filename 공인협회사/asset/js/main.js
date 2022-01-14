$(function(){
    var menuBtn = $('.toggle_menu');
    var menu_list = $('.aside_menu_wrap .aside_menu_list');
    var menu_bg = $('.aside_menu_bg');
    
    menuBtn.click(function(){
        menu_list.addClass('show');
        menu_bg.fadeIn();
    });
});