function createContact() {
    const main = document.getElementById("main");
    main.textContent = "";

    const mainBox = document.createElement("div");
    mainBox.classList.add("main-box")
    
    const phoneHeader = document.createElement("h2");
    phoneHeader.innerText = "Telefono"
    const phoneParagraph = document.createElement("p");
    phoneParagraph.innerText = "05X 35Z39XW";

    const addressHeader = document.createElement("h2");
    addressHeader.innerText = "Indirizzo"
    const addressParagraph = document.createElement("p");
    addressParagraph.innerText = "Stella di Vega, Via Zuril 47Y";

    mainBox.appendChild(phoneHeader);
    mainBox.appendChild(phoneParagraph);
    mainBox.appendChild(addressHeader);
    mainBox.appendChild(addressParagraph);

    main.appendChild(mainBox);

    return main;
}

export default createContact;
