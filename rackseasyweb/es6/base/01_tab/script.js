/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/
let tabMenu =  document.querySelectorAll('.tab-menu li');
let tabContent = document.querySelectorAll('#tab-content > div');
let highlight = document.querySelector('.highlight');

//첫번째 먼저 해야할일 
/* show content - 모든 내용을 안보이도록 하고 숫자에 해당하는 내용을 보이도록 해라 */
function showContent(num){
    // for(var i= 0; i < tabContent.length; i++){
    //     tabContent[i].style.display = 'none';
    // }
    for(tc of tabContent){
        tc.style.display = 'none';
    }
    tabContent[num].style.display = 'block';
}
showContent(0);

//탭메뉴를 클릭하면 할 일
//대상.forEach(function(변수명,인덱스){...});
tabMenu.forEach(function(ele, idx){
    ele.addEventListener('click',()=>{
        showContent(idx);
        moveHightLight(idx);
    });
});

//기준 위치에서 대상.offsetLeft(), 대상의 넓이 offsetWidth
function moveHightLight(num){
    let newLeft = tabMenu[num].offsetLeft;
    let newWidth = tabMenu[num].offsetWidth;
    console.log(newLeft,newWidth);
    
    highlight.style.left = `${newLeft}px`;
    highlight.style.width = `${newWidth}px`;
};