import createSkeleton from './modules/skeleton';
import createHeader from './modules/header';
import createHome from './modules/home';


load();

function load() {
    const content = document.getElementById("content");
    content.appendChild(createSkeleton());
    createHeader();
    createHome();
}