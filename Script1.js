// JavaScript source code

window.onscroll = function () { myFunction() };
function myFunction() {
    x = window.scrollY;
    if (x >= 400) {
        navbar.classList.add("bg-dark");
        navbar.classList.remove("sticky")
    } else {
        navbar.classList.remove("bg-dark");
        navbar.classList.add("sticky")
    }
}