function createHeader() {
    const header = document.getElementById("header");

    const headerText = document.createElement("h1");
    headerText.innerText = "Ristorante Ufo Robot";
    header.appendChild(headerText);

    const navbarCont = document.createElement("div");
    navbarCont.classList.add("navbar-cont")

    const navbar = document.createElement("ul");
    navbar.classList.add("navbar");

    const homeNav = document.createElement("li");
    const menuNav = document.createElement("li");
    const contactNav = document.createElement("li");

    const homeNavButton = document.createElement("button");
    homeNavButton.innerText = "Home";
    const menuNavButton = document.createElement("button");
    menuNavButton.innerText = "Menu";
    const contactNavButton = document.createElement("button");
    contactNavButton.innerText = "Contact";


    homeNav.appendChild(homeNavButton);
    menuNav.appendChild(menuNavButton);
    contactNav.appendChild(contactNavButton);
    navbar.appendChild(homeNav);
    navbar.appendChild(menuNav);
    navbar.appendChild(contactNav);
    navbarCont.appendChild(navbar);
    header.appendChild(navbarCont);

    return header;
}

export default createHeader;