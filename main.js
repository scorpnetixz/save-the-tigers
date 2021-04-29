// hamburger menu

let hamMenu = document.querySelector('.hamburger');
let navHiddenList = document.querySelector('.nav-hidden-items');
let navItemsList = document.querySelector('.nav-items');
let navIHiddenList = document.querySelector('.nav-hidden-list');

hamMenu.addEventListener('click', (e)=>{
    navHiddenList.classList.toggle('active');
    navItemsList.classList.toggle('active');
    navIHiddenList.classList.toggle('active');
});

// slider
let  slideIndex, slides, dots;
slides = document.getElementsByClassName('slider-image-container');

function sliderGallery(){
    slideIndex = 0;
    slides[slideIndex].style.opacity = 1;
    dots = [];
    let dotContainer = document.querySelector('.dot-container');

    for(let i = 0; i < slides.length; i++){
        let dot = document.createElement('span');
        dot.classList.add('dots');
        dotContainer.appendChild(dot);
        dot.setAttribute("onclick", "moveSlides("+i+")");
        dots.push(dot);
    };
    dots[slideIndex].classList.add('active');
}

sliderGallery();

function clickSlides(n){
    moveSlides(slideIndex + n);
}

function moveSlides(n){
    let i, current, next;
    
    let moveSlidesAnimClass = {
        forCurrent : "" ,
        forNext : ""
    }
    if(n > slideIndex){
        if(n >= slides.length){n = 0}
        moveSlidesAnimClass.forCurrent = "move-left-current-slide";
        moveSlidesAnimClass.forNext = "move-left-next-slide";
    }else if(n < slideIndex){
        if(n < 0){n = slides.length - 1}
        moveSlidesAnimClass.forCurrent = "move-right-current-slide";
        moveSlidesAnimClass.forNext = "move-right-next-slide";
    }if(n != slideIndex){
        next = slides[n];
        current = slides[slideIndex];
        for(i = 0; i < slides.length; i++){
            slides[i].classList = 'slider-image-container';
            slides[i].style.opacity = 0;
            dots[i].classList.remove('active');
        }
        current.classList.add(moveSlidesAnimClass.forCurrent);
        next.classList.add(moveSlidesAnimClass.forNext);
        dots[n].classList.add('active');
        slideIndex = n;
    }
}

var timer = null;

function setTimer(){
    timer = setInterval(function(){
        clickSlides(1);
    }, 3000);
};


// scroll up 

let arrowContainer = document.querySelector('.arrow-container');

window.addEventListener('scroll', (e)=>{
    e.preventDefault();
    let top = document.documentElement.scrollTop;
    let body = document.body.scrollTop;
    
    if(top > 250 || body > 250){
        arrowContainer.style.opacity = "1";
        arrowContainer.style.visibility = "visible";    
    } else {
        arrowContainer.style.opacity = "0";
        arrowContainer.style.visibility = "hidden"; 
    }
});

arrowContainer.addEventListener('click', () =>{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// modal

let closeBtn = document.querySelector('#closeBtn');
let modalContainer = document.querySelector('.modal-container');


function modalDisplay(){
    modalContainer.style.display = "block";
}

setTimeout("modalDisplay()",3000);


closeBtn.addEventListener('click', ()=>{
    modalContainer.style.display = "none";
});

window.addEventListener('click', ()=>{
    modalContainer.style.display = "none";
});


// timeplan background color

let timeplanOne = document.querySelector('.timeplan.one');
let timeplanTwo = document.querySelector('.timeplan.two');
let timeplanThree = document.querySelector('.timeplan.three');

timeplanOne.addEventListener("click", ()=>{
    timeplanOne.classList.toggle('active');
    timeplanTwo.classList.remove('active');
    timeplanThree.classList.remove('active');
});

timeplanTwo.addEventListener("click", ()=>{
    timeplanTwo.classList.toggle('active');
    timeplanOne.classList.remove('active');
    timeplanThree.classList.remove('active');
});

timeplanThree.addEventListener("click", ()=>{
    timeplanThree.classList.toggle('active');
    timeplanTwo.classList.remove('active');
    timeplanThree.classList.remove('active');
});


