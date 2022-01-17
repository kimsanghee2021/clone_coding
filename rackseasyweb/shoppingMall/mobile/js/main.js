
    if($('.category_list').length > 0){
        $('.category_list').slick({
        arrows:false,
        variableWidth: true,
        infinite: true,
        speed: 300,
        slidesToShow : 1
        });
    }
    //상세페이지
    if($('.thmb_imgs').length > 0){
        $('.thmb_imgs').slick({
            slidesToShow: 1.4,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
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
    
    let searchBtn = $('.header_top_links .search');
    let searchForm = $('.searchform');

    searchBtn.click(function(e){
        e.preventDefault();
        searchForm.toggleClass('active');

        if(searchForm.hasClass('active')){
            searchForm.find('input').focus();
        } else{
            searchForm.find('input').blur();
        }
    });
    //history 뒤로가기 버튼
    var currentUrl = location.href;
    var localhost = 'http://127.0.0.1:5500/';
    const history_back = $('.detail .history_back');
    console.log(currentUrl);
    var active = currentUrl.search(localhost);

    history_back.click(function(){
        if(window.history.length > 1 ){
            history.back();
        } else{
            location.href='./categories.html';
        }
    });