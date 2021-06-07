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

/* */
    var i = 0; // Start point
    var images = [];
    var time = 4000;

    //Image List
    images[0] = 'imgs/store_1.jpg';
    images[1] = 'imgs/store_2.jpg';
    images[2] = 'imgs/store_3.jpg';

    // Change Image
    function changeImg(){
        document.slide.src = images[i];

        if(i < images.length - 1){
            i++;
        } else {
            i = 0;
        }

       setTimeout(changeImg, time); 
    }

    window.onload = changeImg;