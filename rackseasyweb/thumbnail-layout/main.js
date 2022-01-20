const imageList = document.querySelector('.image-list'),
    imageListItem = imageList.querySelectorAll('li'),
    btns = document.querySelectorAll('.view-options button'),
    active = 'active',
    listView = 'list-view',
    gridView = 'grid-view',
    dNone = 'd-none';

    /*
    btn을 클릭하면 테두리가 색상이 나타나도록~
    대상.prev()   jQuery
    대상.previousElementSibling   이전요소형제  javascript
    */
    for(let btn of btns){
        btn.addEventListener('click',function(){
            document.querySelector('.view-options .active').classList.remove('active');
            this.parentElement.classList.add('active');

            if(this.parentElement.classList.contains('show-list')){
                this.parentElement.previousElementSibling.previousElementSibling.classList.add(dNone);
                imageList.classList.remove(gridView);
                imageList.classList.add(listView);
            }else{
                this.parentElement.previousElementSibling.classList.remove(dNone);
                imageList.classList.remove(listView);
                imageList.classList.add(gridView);
            }

        });       
            
    }

    //그리드 range 변경
    /*
    input(text, checkbox, radio), select, textarea --> change 이벤트 이름
    input, textarea -> input 이벤트 이름, 값이 입력되면 할일.
    */
   const rangeInput = document.querySelector('input[type="range"]');

   // 나만의 css 속성을 지정(추가)하는 방법 대상.style.setProperty('속성명','값');
   // 대상.setAtrribute('src', '값');
    // input, select, textarea 값이 변경되 그 값을 반환. 대상.value 300
    // 300px
   /*
   rangeInput의 값이 변경(input)되면 할일
    문서자체 document.documentElement의 css 속성중
   */
    rangeInput.addEventListener('input',function(){
        document.documentElement.style.setProperty('--minRangeValue',`${this.value}px`);
        
    });

    /*
    자바스크립트 요소의 스타일 변경
    대상.style.속성명 = 값;  logo.style.color = 'red';
    대상.style.setProperty('속성명', '값); logo.style.setProperty('color','red');

    ['green leafed trees','landscape photography of brown mountain','.....]

    [{id:0, text:'green leafed trees'}, {id:1, text:'landscape photography...'}]
    */

    const captions = imageList.querySelectorAll('figcaption p:first-child');
    const myArray = [];
    let counter = 1;
    
    for(const cp of captions){
        myArray.push({id:counter++, text:cp.textContent});
    }

   const searchInput = document.querySelector('.search-wrapper input');
   const matchCount = document.querySelector('.counter span');

   /*
   keyup : 키보드에서 손을 때면 발생
   keydown : 키보드를 눌렀을 때 - 누르고 있어도 한번만 실행, 모든 키(ctrl, alt, shift)
   keypress : 키보드를 눌렀을 때 - 누르고 있으면 계속 실행, (ctrl, alt, shift 제외)

    e.key    
   */
  /*
  자바스크립트 
  배열의 값중에서 조건에 맞는 요소를 추출할 때, 조건 = 함수
  대상은 반드시 배열이여야 가능.
  대상.filter(조건);

   var arr = [3,15,9,20,25];
   var newarr = arr.filter(function(x){ return x %5 == 0;})
    console.log(newarr);  

    대상.indexOf('a'); 없다면 -1
    대상.search('a'); 없다면 -1
    대상.includes('a');
  */
   searchInput.addEventListener('keyup', myfilter);

   function myfilter(){
       for(const listItem of imageListItem){
            listItem.classList.add(dNone); //모두 안보이도록

            const keywords = this.value; //키워드 저장

            const filteredArray = myArray.filter(function(x){ 
                return x.text.includes(keywords);
            }); //매치된 리스트 배열생성

            if(filteredArray.length > 0){
                for(const el of filteredArray){
                    document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);
                }
            }
            matchCount.innerText = filteredArray.length;
       }
   }

    /*
    document.addEventListener('keypress', (e)=>{
        console.log(e.key);        
   });    
   */