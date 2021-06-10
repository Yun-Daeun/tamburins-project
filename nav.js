'use strict'

const filter = document.querySelector('.filter');


const perfumeBtn = document.querySelector('.perfume-btn');
const perfumeNavBar = document.querySelector('.perfume-navbar');
perfumeBtn.addEventListener('click', () => { 
    perfumeNavBar.classList.toggle('open');
    filter.classList.toggle('active');
});


const skinNavBar = document.querySelector('.skin-navbar');
const skinBtn = document.querySelector('.skin-btn');
skinBtn.addEventListener('click', () => {
    skinNavBar.classList.toggle('open');
    filter.classList.toggle('active');
});

const perfumeCloseBtn = document.querySelector('.close-btn1');
perfumeCloseBtn.addEventListener('click', () => {
    perfumeNavBar.classList.remove('open');
    filter.classList.remove('active');
});

const skinCloseBtn = document.querySelector('.close-btn2');
skinCloseBtn.addEventListener('click', () => {
    skinNavBar.classList.remove('open');
    filter.classList.remove('active');
});

const mobileMenuBtn = document.querySelector('.moblie-menu-btn');
const mobileNavBar = document.querySelector('.mobile-navbar');
mobileMenuBtn.addEventListener('click', () => {
    mobileNavBar.classList.toggle('open');
});

const mobileMenuClose = document.querySelector('.close-btn3');
mobileMenuClose.addEventListener('click', () => {
    mobileNavBar.classList.remove('open');
});