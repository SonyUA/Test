'use strict'
/* SLIDER */
let images = document.querySelectorAll(".slide__block-card");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
let count = 0;

function slide() {
    for (let i = 0; i < images.length; i++) {
        if (i === count) {
            images[i].classList.add("slide__block-card-active");
        } else {
            images[i].classList.remove(".slide__block-card-active");
        }
    }

    function right() {
        if (count === images.length - 1) {
            false
        } else {
            images[count].classList.remove("slide__block-card-active");
            count++;
            images[count].classList.add("slide__block-card-active");
        }
    }

    function left() {
        if (count <= 0) {
            false
        } else {
            images[count].classList.remove("slide__block-card-active");
            count--;
            images[count].classList.add("slide__block-card-active");
        }
    }
    arrowLeft.addEventListener('click', left);
    arrowRight.addEventListener('click', right);
}
slide();
/* MENU */
const menu = document.querySelector('.social__menu');
let shareItLink = document.querySelector('.produkt__link');
let cross = document.querySelector('.social__list-close');

function showMenu() {
    menu.classList.toggle("social__menu-show");
}
shareItLink.addEventListener('click', showMenu);
cross.addEventListener('click', showMenu);
/* STARS RATING */
let starsBlock = document.querySelector('.stars__block');
let stars = document.querySelectorAll('.produkt__star');

function starsActive(event) {
    let target = event.target;
    let countStars = 4
    for (let i = 0; i < stars.length; i++) {
        console.log(parseInt(target.dataset.rate))
        if (i <= parseInt(target.dataset.rate)) {
            stars[i].classList.add('produkt__star-red')
        } else {
            stars[i].classList.remove('produkt__star-red')
        }
    }
}
starsBlock.addEventListener('click', starsActive);
starsBlock.addEventListener('mouseover', starsActive);
