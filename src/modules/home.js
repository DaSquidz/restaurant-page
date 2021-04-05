function createHome() {
    const main = document.getElementById("main");
    main.textContent = "";

    const mainBox = document.createElement("div");
    mainBox.classList.add("main-box")

    const picCont = document.createElement("div");
    picCont.classList.add("pic-cont");
    const goldrakePic = document.createElement("img");
    goldrakePic.src = "images/goldrake.png";
    goldrakePic.alt = "goldrake";
    picCont.appendChild(goldrakePic);

    const textParagraph = document.createElement("p");
    textParagraph.innerText = "Gusta le migliori insalate di matematica";

    mainBox.appendChild(picCont);
    mainBox.appendChild(textParagraph);

    main.appendChild(mainBox);

    return main;
}

export default createHome;