import createSkeleton from './modules/skeleton';
import createHeader from './modules/header';
import createHome from './modules/home';
import createMenu from './modules/menu';
import createContact from './modules/contact';


const navButtons = document.getElementsByClassName("nav-button")
load();

navButtons[0].addEventListener("click", (e) => {
    if(e.target.classList.contains("active")) return;
    setActive(navButtons[0]);
    createHome();
})
navButtons[1].addEventListener("click", (e) => {
    if(e.target.classList.contains("active")) return;
    setActive(navButtons[1]);
    createMenu();
})
navButtons[2].addEventListener("click", (e) => {
    if(e.target.classList.contains("active")) return;
    setActive(navButtons[2]);
    createContact();
})

function load() {
    const content = document.getElementById("content");
    content.appendChild(createSkeleton());
    createHeader();
    createHome();
    navButtons[0].classList.add("active");
}

function setActive(btn) {
    navButtons[0].classList.remove("active");
    navButtons[1].classList.remove("active");
    navButtons[2].classList.remove("active");

    btn.classList.add("active");
}