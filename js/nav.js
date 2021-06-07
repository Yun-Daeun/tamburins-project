'use strict'

const filter = document.querySelector('.filter');
const perfumeBtn = document.querySelector('.perfume-btn');
const perfumeNabar = document.querySelector('.perfume-navbar');
const skinNabar = document.querySelector('.skin-navbar');

perfumeBtn.addEventListener('click', () => { 
    perfumeNabar.classList.toggle('open');
    filter.classList.toggle('active');
});

const skinBtn = document.querySelector('.skin-btn');
skinBtn.addEventListener('click', () => {
    skinNabar.classList.toggle('open');
    filter.classList.toggle('active');
});

const perfumeCloseBtn = document.querySelector('.close-btn1');
perfumeCloseBtn.addEventListener('click', () => {
    perfumeNabar.classList.remove('open');
    filter.classList.remove('active');
});

const skinCloseBtn = document.querySelector('.close-btn2');
skinCloseBtn.addEventListener('click', () => {
    skinNabar.classList.remove('open');
    filter.classList.remove('active');
});
