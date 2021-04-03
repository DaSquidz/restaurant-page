function createHome() {
    const main = document.createElement("main");

    const mainBox = document.createElement("div");
    mainBox.classList.add("main-box")

    const goldrakePic = document.createElement("img");
    goldrakePic.src = "images/goldrake.png";
    goldrakePic.alt = "goldrake";

    const textParagraph = document.createElement("p");
    textParagraph.innerText = "Gusta le migliori insalate di matematica";

    mainBox.appendChild(goldrakePic);
    mainBox.appendChild(textParagraph);

    main.appendChild(mainBox);

    return main
}

export default createHome;