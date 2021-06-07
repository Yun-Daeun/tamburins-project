'use strict'

const datailsBtns = document.querySelector('.details-btns');
const details = document.querySelector('.details');
const detail = document.querySelectorAll('.detail')

datailsBtns.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    if(filter == null){
        return;
    }

const active = document.querySelector('.details-btns .selected');
active.classList.remove('selected');
e.target.classList.add('selected');

detail.forEach((d) => {
        if (filter === d.dataset.type) {
            d.classList.add('visible');    
        } else {
            d.classList.remove('visible');
            
        }
    });

const selected = document.querySelector('.details .active');
selected.classList.remove('active');

});