/*
document.addEventListener('DOMContentLoaded',()=>{

    let btt = document.querySelector('#go-top');

});
*/
/*
스크롤양 확인
document.documentElement.scrollTop
window.pageYOffset
*/
let btt = document.querySelector('#go-top');

window.addEventListener('scroll',()=>{
    //console.log(document.documentElement.scrollTop, window.pageYOffset);

    (window.pageYOffset > 300)? 
    btt.classList.add('active'): 
    btt.classList.remove('active');
    
});
btt.addEventListener('click', (e)=>{
    e.preventDefault();
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth' //ie x
    });
});
/*
    window.scrollTo(0,0);
    window.scrollBy(0,-50);
    window.scrollTo(x,y);
    window.scrollBy(x,-50);
    시간
    시간을 한번재서 할일
    setTimeout(할일, 시간);   clearTimeout(대상의이름);

    일정 시간마다 할일, 시간 1000 1s
    setInterval(할일, 시간); clearInterval(대상이름);

 
    var autoScroll = setInterval(()=>{

        if(window.pageYOffset != 0){
            window.scrollBy(0,-20);
            console.log('작동중');
        }else{
            clearInterval(autoScroll);
            console.log('멈춤');
        }
        
    }, 100);


*/