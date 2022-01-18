
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

    if($('.people_like_this').length > 0){
        let likeList = $('.people_like_this ul li');
        let likeListItem = likeList.find('li');
        let likListCount = likeList.length;
        /* 리스트의 개수가 4개이상이면 5번째부터 리스트는 안보이게 하고 after에 공간을 만들어서 넣어라 */
        /* .people_like_this ul li:nth-child(n+5){display: none;} */
        if(likListCount > 4){
            likeListItem.filter(':nth-child(n+5)').css({display:'none'});
        }
    }