var card = document.querySelector('.card');
var open1 = document.querySelector('#open');
var story = document.querySelector('.story');
var fScreen = document.querySelector('#full-screen');
var close1 = document.querySelector('.close')

open1.addEventListener('click', () => {
    card.classList.add("slow1");
    open1.style.display = "none";
    close1.style.transform = "scale(1)";
    card.style.transform = "scale(1)";
})

close1.addEventListener('click', () => {
    card.classList.add("slowC");
    card.style.transform = "scale(0)";
    close1.style.transform = "scale(0)";
    open1.style.display = "block";
})