function createMenu() {
    const main = document.getElementById("main");
    main.textContent = "";

    const mainBox = document.createElement("div");
    mainBox.classList.add("main-box")

    const foodCont = document.createElement("div");
    foodCont.classList.add("food-cont");
    
    const saladTitle = document.createElement("h2");
    saladTitle.innerText = "Insalate"
    const dressingTitle = document.createElement("h2");
    dressingTitle.innerText = "Contorno del contorno"

    foodCont.appendChild(saladTitle);
    foodCont.appendChild(createItem("Lattuga Algebrica", "Gustosa lattuga con retrogusto di equazioni polinomiali"))
    foodCont.appendChild(createItem("Misticanza Geometrica", "Succulenta misticanza tagliata a piani cartesiani"))
    foodCont.appendChild(createItem("Rucola di statistica", "Rucola saporita con teorema di Bayes"))
    foodCont.appendChild(dressingTitle);
    foodCont.appendChild(createItem("Libro di cibernetica", "Il famoso libro La cibernetica di Norbert Wiener"))


    mainBox.appendChild(foodCont);
    main.appendChild(mainBox);

    return main;
}

function createItem(name, desc) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h3");
    foodName.innerText = name;
  
    const foodDesc = document.createElement("p");
    foodDesc.innerText = desc;
  
    // const foodPic = document.createElement("img");
    // foodPic.src = `images/${name.toLowerCase()}.png`;
    // foodPic.alt = `${name}`;
  
    // menuItem.appendChild(foodPic);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDesc);
  
    return menuItem;
  }

export default createMenu;