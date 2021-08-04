const carouselImage = document.querySelector('.banner-image');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

const images = ["./images/extra/banner-1.jpg", "./images/extra/banner-2.png", "./images/extra/banner-3.jpg"];
let ind = 0;

function nextImage(){
    carouselImage.setAttribute('src', images[ind]);
    ind = (++ind)%3;
}

function preImage(){
    carouselImage.setAttribute("src", images[ind]);
    if(ind == 0) ind = 2;
    else --ind;
}

setInterval(nextImage, 2000);

leftArrow.addEventListener('click', preImage);
rightArrow.addEventListener('click', nextImage);