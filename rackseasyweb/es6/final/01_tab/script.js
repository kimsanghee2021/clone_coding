/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
id,tag,class,selector
document.getElementById('logo')
document.getElementsByTagName('태그명')
document.getElementsByClassName('클래스명') //유사배열

document.querySelector('#logo') //단일요소 반환
document.querySelectorAll('.tab-menu li') //유사배열, slice, search

배열의 원소를 선택 배열명[숫자]
스타일 변경
대상.style.css속성명 = 값;
*/
let tabMenu = document.querySelectorAll('.tab-menu li');
let tabContent = document.querySelectorAll('#tab-content > div');
let highlight = document.querySelector('.highlight');
console.log(tabContent);

//showContent
/*
모든 내용을 안보이도록하고, 숫자에 해당하는 내용을 보이도록

for(시작;조건;증감){
    반복할일
}
*/
function showContent(num){  
    for(tc of tabContent){
        tc.style.display = 'none';
    }
    tabContent[num].style.display = 'block';    
}
showContent(0);

// 이벤트 적용
/*
대상.addEventListener('종류', function(){...});

인덱스 번호, 반복
forEach
대상.forEach(function(변수명,인덱스){...});
*/
tabMenu.forEach((menu,idx)=>{
    menu.addEventListener('click',()=>{
        showContent(idx);
        moveHighlight(idx);
    });
});

//기준위치에서 대상.offsetLeft, 대상.offsetWidth
//대상.style.css속성명 = 값;

function moveHighlight(num){
    let newLeft = tabMenu[num].offsetLeft;
    let newWidth = tabMenu[num].offsetWidth;

    highlight.style.left = `${newLeft}px`;
    highlight.style.width = `${newWidth}px`;
    console.log(newLeft, newWidth);
}