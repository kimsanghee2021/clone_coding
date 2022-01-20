let galleryLink = document.querySelectorAll('.gallery a'),
    lightbox = document.querySelector('#lightbox-overlay'),
    target = lightbox.querySelector('img');

galleryLink.forEach(function(item){
    item.addEventListener('click',function(e){
        e.preventDefault();
        let targetImgSrc = this.children[0].getAttribute('data-lightbox');

        target.setAttribute('src',targetImgSrc); 
        lightbox.classList.add('visible');
    });
});
lightbox.addEventListener('click',()=>{
    lightbox.classList.remove('visible');
    target.setAttribute('src','');
});



/*
jqeury
대상.attr('속성명'); 반환,확인
대상.attr('속서명','새값'); 지정

javascript
대상.getAttribute('속성명'); 반환,확인
대상.setAttribute('속성명','새값'); 지정
대상.removeAttribute('속성명'); 속성 자체를 제거.
*/