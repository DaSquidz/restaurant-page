function createHeader() {
    const header = document.getElementById("header");
    const headerText = document.createElement("h1");

    headerText.innerText = "Ristorante Ufo Robot";

    header.appendChild(headerText);

    return header;
}

export default createHeader;