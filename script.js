const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("active");
    document.querySelector(".announcement").classList.toggle("disabled");
});