const imgList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imgListItems = imgList.querySelectorAll('li');
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dNone = 'd-none';

//해야할 일 
//버튼활성화 스크립트 짜기 


//버튼을 클릭하면 그 버튼에게만 active가 들어오게 해라.
for(const btn of btns){
    btn.addEventListener('click',function(){
        const parent = this.parentElement;
        document.querySelector('.view-options .active').classList.remove(active);
        parent.classList.add(active);
        // parent에 'show-list'가 있다면 input[type='range']숨김처리 하기
        if(parent.classList.contains('show-list')){
            parent.previousElementSibling.previousElementSibling.classList.add(dNone);
            imgList.classList.remove(gridView);
            imgList.classList.add(listView);
        }else{
            parent.previousElementSibling.classList.remove(dNone);
            imgList.classList.remove(listView);
            imgList.classList.add(gridView);
        }
    });
}
//input range를 변할때마다 갤러리 넓이가 변하게 짜기
const rangeInput = document.querySelector('input[type="range"]');
rangeInput.addEventListener('input',function(){
    document.documentElement.style.setProperty('--minRangeValue',`${this.value}px`);
    //선택자.style.css속성명 = 값
    //선택자.style.backgroundColor = 'blue';
    //선택자.style.setProperty('backgroudnColor','blue');
});

//검색키워드 필터적용하기
const captions = imgList.querySelectorAll('figcaption p:first-child');
const myArray = [];
let counter = 1;

for(const caption of captions){
    myArray.push({
        id : counter++,
        text : caption.textContent
    });
}


const searchInput = document.querySelector('input[type="search"]');
const phptpsCounter = document.querySelector('.toolbar .counter span');

searchInput.addEventListener('keyup',keupHandler);

function keupHandler(){
    for(const item of imgListItems){
        item.classList.add(dNone);
    }
    const keywords = this.value;
    const filteredArray = myArray.filter(el=>{
        return el.text.includes(keywords);
    });
    console.log(filteredArray);
    if(filteredArray.length > 0){
        for(const el of filteredArray){
            document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);
        }
    }
    phptpsCounter.textContent = filteredArray.length;
}

//filter
/*
var arr1 = [1,4,567,8,5,10,35];
var arr2 = arr1.filter(function(el){
    return el % 5 == 0;
});
console.log(arr2);

var arr1 = [1,4,567,8,5,10,35];
var arr2 = arr1.filter(el=> el % 5 == 0);
console.log(arr2);

*/