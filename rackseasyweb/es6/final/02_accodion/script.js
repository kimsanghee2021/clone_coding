let collapseBtn = document.getElementById('btn-collapse');
let panelQuestion = document.querySelectorAll('.panel-question');


/*
대상.className = '클래스명';  //새로지정, 교체
대상.classList.add('클래스명, 클래스명');
대상.classList.remove('클래스명');
대상.classList.contains('클래스명'); 조건문 true, false
대상.classList.toggle('클래스명'); 없으면 추가, 있으면 제거

*/
function hideAll(){
    for(pq of panelQuestion){
        pq.classList.remove('active');
    }
}
for(pq of panelQuestion){
    pq.addEventListener('click', function(){
        hideAll();
        this.classList.add('active');
    });
}
collapseBtn.addEventListener('click',()=>{
    hideAll();
});