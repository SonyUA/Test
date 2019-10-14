'use strict'
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
