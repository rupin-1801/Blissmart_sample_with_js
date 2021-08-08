const carouselImage = document.querySelector('.banner-image');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const products = document.querySelectorAll('.link');
const background = document.getElementById('background');
const box = document.querySelector('.box');
const check = document.querySelector('#check');
const continueButton = document.querySelector("#continue");
const cancelButton = document.querySelector("#cancel");
const stars = document.getElementsByClassName('stars');

const ratings = [4.4, 3.5, 4.0, 4.6, 4.7, 3.6, 3.2, 3.8];
const images = ["./images/extra/banner-1.jpg", "./images/extra/banner-2.png", "./images/extra/banner-3.jpg"];
let ind = 0, eventRef;

function nextImage(){
    carouselImage.setAttribute('src', images[ind]);
    ind = (++ind)%3;
}

function preImage(){
    carouselImage.setAttribute("src", images[ind]);
    if(ind == 0) ind = 2;
    else --ind;
}

function show(event){
    event.preventDefault();
    if (window.confirm("This site is in development mode, so you can get this product from other shopping websites till then!!")) {
        window.open(event.target.getAttribute("href"), "Thanks for Visiting!");
    }
    hide();
}

setInterval(nextImage, 2000);

leftArrow.addEventListener('click', preImage);
rightArrow.addEventListener('click', nextImage);

for(i = 0; i < products.length; i++){
    products[i].addEventListener('click', show);
}

for(i = 0; i < stars.length; i++){
    stars[i].style.background=`linear-gradient(90deg, #ffff00 ${ratings[i]*100/5}%, #cdcdcd ${ratings[i]*100/5}%)`;
}

function hide(){
    for(i = 0; i < products.length; i++){
        products[i].removeEventListener('click', show);
    }
};