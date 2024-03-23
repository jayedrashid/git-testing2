
const options = document.querySelectorAll('.option');
const slide = document.querySelector('.slide');

options.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        slide.style.left = 100/options.length * index + "%"});
    });

