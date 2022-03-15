const imgList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imgListItem = imgList.querySelectorAll('li');
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dNone = 'd-none';

//버튼활성화 스크립트 짜기 
btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        const parent = this.parentElement;
        document.querySelector('.view-options .active').classList.remove(active);
        parent.classList.add(active);

        if(parent.classList.contains('show-list')){
            parent.previousElementSibling.previousElementSibling.classList.add(dNone);
            imgList.classList.remove(gridView);
            imgList.classList.add(listView);
        } else{
            parent.previousElementSibling.classList.remove(dNone);
            imgList.classList.remove(listView);
            imgList.classList.add(gridView);
        }
    });
});

//input range를 변할때마다 갤러리 넓이가 변하게 짜기
const rangeInput = document.querySelector('.toolbar input[type="range"]');

rangeInput.addEventListener('input',function(){
    document.documentElement.style.setProperty('--minRangeValue',`${this.value}px`);
});

//검색키워드 필터 적용방법
const titles = imgList.querySelectorAll('figcaption p:first-child');
const myArr = [];
let count = 1;


//for of 반복문으로 제목과 인덱스 번호를 배열로 담기
for(const title of titles){
    myArr.push({id : count ++, text : title.textContent});
}

//인풋박스에 텍스트 입력시 해당 텍스트 노출하기 
const searchInput = document.querySelector('.toolbar input[type="search"]');
const totalCount = document.querySelector('.toolbar .counter span');

searchInput.addEventListener('keyup',keyupHandler);

function keyupHandler(){
    //모든 사진을 다 안보이게 한다.
    for(const item of imgListItem){
        item.classList.add(dNone);
    }
    //현재 인풋에 담기는 값과 인풋에 담기는 값에 맞는 필터를 만들어라
    const keywords = this.value;
    const filterArr = myArr.filter(function(el){
        return el.text.includes(keywords);
        
    });
    //필터어레이에 0개 이상 즉 1개라도 나오면 해당하는 값을 노출시켜라
    if(filterArr.length > 0){
        for(const el of filterArr){
            document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);
        }
    }
    totalCount.innerText = filterArr.length;
}

