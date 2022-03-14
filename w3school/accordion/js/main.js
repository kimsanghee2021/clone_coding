const panelQuestion = document.querySelectorAll('.panel-question');


panelQuestion.forEach(function(pq,idx){
    pq.addEventListener('click',function(){
        accodion(panelQuestion,idx);
    });
});


function accodion(arr,idx){
    for(const el of arr){
        el.classList.remove('active');
        arr[idx].classList.add('active');
    }
}