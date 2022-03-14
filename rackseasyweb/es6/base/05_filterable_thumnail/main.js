const imgList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imgListItem = imgList.querySelectorAll('li');
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dNone = 'd-none';

//해야할 일 
//버튼활성화 스크립트 짜기 


//버튼을 클릭하면 그 버튼에게만 active가 들어오게 해라.

// btns.forEach(function(btn,idx){
//     btn.addEventListener('click',function(){
//         for(const el of btns){
//             el.parentElement.classList.remove(active);
//             btns[idx].parentElement.classList.add(active);
//             console.log(btns[idx]);
//         }
//     });
// });

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