'use strict'
/*Change color of navbar when scrolling*/
const menu = document.querySelector('header');
const navbarHeight = menu.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        menu.classList.add('navbar-bk');
    } else {
        menu.classList.remove('navbar-bk');
    }
});

/*Best seller slider btn*/
function setslider(transform){
    const bestSeller = document.querySelectorAll('.best-seller li');
    let i = 0;
    while(i < bestSeller.length){
        bestSeller[i].style.transform = transform;
        i = i + 1;
    }
}

const barGauge = document.querySelector('.bar-gauge');

document.querySelector('.slide-btn-r').addEventListener('click', () => {
    setslider('translateX(-1100px)');
    barGauge.style.width = '100%';
});

document.querySelector('.slide-btn-l').addEventListener('click', () => {
    setslider('translateX(0px)');
    barGauge.style.width = '50%';
});



