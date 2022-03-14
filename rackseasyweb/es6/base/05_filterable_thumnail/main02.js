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
const rangeInput = document.querySelector('input[type="range"]');
rangeInput.addEventListener('input',function(){
    document.documentElement.style.setProperty('--minRangeValue',`${this.value}px`);
    //선택자.style.css속성명 = 값
    //선택자.style.backgroundColor = 'blue';
    //선택자.style.setProperty('backgroudnColor','blue');
});