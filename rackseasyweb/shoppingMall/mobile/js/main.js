
    if($('.category_list').length > 0){
        $('.category_list').slick({
        arrows:false,
        variableWidth: true,
        infinite: true,
        speed: 300,
        slidesToShow : 1
        });
    }

    if($('.aside_categories > li').length > 0){
        let catList = $('.aside_categories > li');
        catList.click(function(){
            $(this).find('ul').slideToggle();
            $(this).siblings().find('ul').slideUp();
        });
    }
    let asideBtn = $('.aside_toggle');
    asideBtn.click(function(){
        $('body').toggleClass('open');
    });