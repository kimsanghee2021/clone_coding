//각 해당하는 탭 영역으로 가기
let tabMenu = document.querySelectorAll('.tab-menu > li');
let tabContent = document.querySelectorAll('#tab-content > div');
let highlight = document.querySelector('.highlight');
console.log(highlight);

//첫번째 컨텐츠 내용만 보이고 나머지 안보이게하기
/* show content - 모든 내용을 안보이도록 하고 숫자에 해당하는 내용을 보이도록 해라 */

function showContent(i){
    for(tc of tabContent){
        tc.style.display = 'none';
    }
    tabContent[i].style.display = 'block';
}
showContent(0);

//탭메뉴를 클릭하면 할 일
tabMenu.forEach(function(ele, idx){
    //console.log(ele, idx);
    ele.addEventListener('click', function(){
        showContent(idx);
        moveHighligt(idx);
    });
});

//highlight는 각각의 탭메뉴 넓이와 거리에 맞춰서 이동해라
function moveHighligt(z){
    let offsetWdith = tabMenu[z].offsetWidth;
    let offsetLeft = tabMenu[z].offsetLeft;
    console.log(offsetWdith,offsetLeft);
    highlight.style.left = `${offsetLeft}px`;
    highlight.style.width = `${offsetWdith}px`;
}

