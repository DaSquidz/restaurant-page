function createItem(name, desc) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h3');
  foodName.innerText = name;

  const foodDesc = document.createElement('p');
  foodDesc.innerText = desc;

  const foodPic = document.createElement('img');
  foodPic.src = `images/${name.toLowerCase().replace(/\s+/g, '')}.jpg`;
  foodPic.alt = `${name}`;

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDesc);
  menuItem.appendChild(foodPic);

  return menuItem;
}

function createMenu() {
  const main = document.getElementById('main');
  main.textContent = '';

  const mainBox = document.createElement('div');
  mainBox.classList.add('main-box');

  const foodCont = document.createElement('div');
  foodCont.classList.add('food-cont');

  const saladTitle = document.createElement('h2');
  saladTitle.innerText = 'Insalate';

  foodCont.appendChild(saladTitle);
  foodCont.appendChild(createItem('Lattuga Algebrica', 'Gustosa lattuga con retrogusto di equazioni polinomiali'));
  foodCont.appendChild(createItem('Misticanza Geometrica', 'Succulenta misticanza tagliata a piani cartesiani'));
  foodCont.appendChild(createItem('Rucola di statistica', 'Rucola saporita con teorema di Bayes'));

  mainBox.appendChild(foodCont);
  main.appendChild(mainBox);

  return main;
}

export default createMenu;
