let galleryLink = document.querySelectorAll('.gallery a');
let lightBox = document.getElementById('lightbox-overlay');
let target = lightBox.querySelector('img');
//console.log(target);
galleryLink.forEach(function(ele){
   // console.log(ele);
    ele.addEventListener('click',function(){
        let targetImgSrc = this.children[0].getAttribute('data-lightbox');
        target.setAttribute('src',targetImgSrc);
        console.log(target);
        lightBox.classList.add('visible');
    });
});
lightBox.addEventListener('click',function(){
    lightBox.classList.remove('visible');
    target.setAttribute('src','');
});