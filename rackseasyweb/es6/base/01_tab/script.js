const tabMenu = document.querySelectorAll('.tab-menu li');
const tabCont = document.querySelectorAll('#tab-content > div');
const highlight = document.querySelector('.highlight');

tabMenu.forEach(function(menu, idx){
    menu.addEventListener('click',function(e){
        e.preventDefault();
        showContent(idx);
        moveHightLight(idx);
    });
});

function showContent(idx){
    tabCont.forEach(function(cont){
        cont.style .display = 'none';
        tabCont[idx].style.display = 'block'; 
    });
}
function moveHightLight(idx){
    const newLeft = tabMenu[idx].offsetLeft;
    const newWidth = tabMenu[idx].offsetWidth;
    console.log(newLeft,newWidth);
    highlight.style.left = newLeft+'px';
    highlight.style.width = newWidth+'px';

}   