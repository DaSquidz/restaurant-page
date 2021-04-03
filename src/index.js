import createHeader from './modules/header';
import createHome from './modules/home';



load();

function load() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createHome());
}