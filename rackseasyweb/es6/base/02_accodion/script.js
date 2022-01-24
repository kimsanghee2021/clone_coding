let panelQuestion = document.querySelectorAll('.panel-question');
let btnCollapse = document.getElementById('btn-collapse');

function hideAll(){
    for(pq of panelQuestion){
        pq.classList.remove('active');
    }
}

//내용 클릭시 보여지게 해라
for(pq of panelQuestion){
    pq.addEventListener('click',function(){
        hideAll();
        this.classList.add('active');
    });
}
btnCollapse.addEventListener('click',function(){
    hideAll();
});