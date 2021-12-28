$(function(){
    $('.btn_menu').click(function(){
        $(this).toggleClass('active'); 
        $('.navigation').toggleClass('active').stop().slideToggle();
    });
    /*
    $('header .search input').keydown(function(){
        $(this).addClass('active');
    });
    $('header .search input').keyup(function(){
        var val = $(this).val();
        if(val == ""){
            $(this).removeClass('active');
        }
    })
    */
});