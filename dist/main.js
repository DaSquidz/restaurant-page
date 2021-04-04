/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/skeleton */ \"./src/modules/skeleton.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\n\n\nload();\nconst navButtons = document.getElementsByClassName(\"nav-button\")\n\nnavButtons[0].addEventListener(\"click\", (e) => {\n    if(e.target.classList.contains(\"active\")) return;\n    setActive(navButtons[0]);\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.default)();\n})\nnavButtons[1].addEventListener(\"click\", (e) => {\n    if(e.target.classList.contains(\"active\")) return;\n    setActive(navButtons[1]);\n    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__.default)();\n})\nnavButtons[2].addEventListener(\"click\", (e) => {\n    if(e.target.classList.contains(\"active\")) return;\n    setActive(navButtons[2]);\n    (0,_modules_contact__WEBPACK_IMPORTED_MODULE_4__.default)();\n})\n\nfunction load() {\n    const content = document.getElementById(\"content\");\n    content.appendChild((0,_modules_skeleton__WEBPACK_IMPORTED_MODULE_0__.default)());\n    (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.default)();\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\nfunction setActive(btn) {\n    navButtons[0].classList.remove(\"active\");\n    navButtons[1].classList.remove(\"active\");\n    navButtons[2].classList.remove(\"active\");\n\n    btn.classList.add(\"active\");\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n\n    const mainBox = document.createElement(\"div\");\n    mainBox.classList.add(\"main-box\")\n    \n    const phoneHeader = document.createElement(\"h2\");\n    phoneHeader.innerText = \"Telefono\"\n    const phoneParagraph = document.createElement(\"p\");\n    phoneParagraph.innerText = \"05X 35Z39XW\";\n\n    const addressHeader = document.createElement(\"h2\");\n    addressHeader.innerText = \"Indirizzo\"\n    const addressParagraph = document.createElement(\"p\");\n    addressParagraph.innerText = \"Stella di Vega, Via Zuril 47Y\";\n\n    mainBox.appendChild(phoneHeader);\n    mainBox.appendChild(phoneParagraph);\n    mainBox.appendChild(addressHeader);\n    mainBox.appendChild(addressParagraph);\n\n    main.appendChild(mainBox);\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n    const header = document.getElementById(\"header\");\n\n    const headerText = document.createElement(\"h1\");\n    headerText.innerText = \"Ristorante Ufo Robot\";\n    header.appendChild(headerText);\n\n    const navbarCont = document.createElement(\"div\");\n    navbarCont.classList.add(\"navbar-cont\")\n\n    const navbar = document.createElement(\"ul\");\n    navbar.classList.add(\"navbar\");\n\n    const homeNav = document.createElement(\"li\");\n    const menuNav = document.createElement(\"li\");\n    const contactNav = document.createElement(\"li\");\n\n    const homeNavButton = document.createElement(\"button\");\n    homeNavButton.classList.add(\"nav-button\");\n    homeNavButton.innerText = \"Home\";\n    const menuNavButton = document.createElement(\"button\");\n    menuNavButton.classList.add(\"nav-button\");\n    menuNavButton.innerText = \"Menù\";\n    const contactNavButton = document.createElement(\"button\");\n    contactNavButton.classList.add(\"nav-button\");\n    contactNavButton.innerText = \"Contatti\";\n\n\n    homeNav.appendChild(homeNavButton);\n    menuNav.appendChild(menuNavButton);\n    contactNav.appendChild(contactNavButton);\n    navbar.appendChild(homeNav);\n    navbar.appendChild(menuNav);\n    navbar.appendChild(contactNav);\n    navbarCont.appendChild(navbar);\n    header.appendChild(navbarCont);\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n\n    const mainBox = document.createElement(\"div\");\n    mainBox.classList.add(\"main-box\")\n\n    const goldrakePic = document.createElement(\"img\");\n    goldrakePic.src = \"images/goldrake.png\";\n    goldrakePic.alt = \"goldrake\";\n\n    const textParagraph = document.createElement(\"p\");\n    textParagraph.innerText = \"Gusta le migliori insalate di matematica\";\n\n    mainBox.appendChild(goldrakePic);\n    mainBox.appendChild(textParagraph);\n\n    main.appendChild(mainBox);\n\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n\n    const mainBox = document.createElement(\"div\");\n    mainBox.classList.add(\"main-box\")\n\n    const foodCont = document.createElement(\"div\");\n    foodCont.classList.add(\"food-cont\");\n    \n    const saladTitle = document.createElement(\"h2\");\n    saladTitle.innerText = \"Insalate\"\n    const dressingTitle = document.createElement(\"h2\");\n    dressingTitle.innerText = \"Contorno del contorno\"\n\n    foodCont.appendChild(saladTitle);\n    foodCont.appendChild(createItem(\"Lattuga Algebrica\", \"Gustosa lattuga con retrogusto di equazioni polinomiali\"))\n    foodCont.appendChild(createItem(\"Misticanza Geometrica\", \"Succulenta misticanza tagliata a piani cartesiani\"))\n    foodCont.appendChild(createItem(\"Rucola di statistica\", \"Rucola saporita con teorema di Bayes\"))\n    foodCont.appendChild(dressingTitle);\n    foodCont.appendChild(createItem(\"Libro di cibernetica\", \"Il famoso libro La cibernetica di Norbert Wiener\"))\n\n\n    mainBox.appendChild(foodCont);\n    main.appendChild(mainBox);\n\n    return main;\n}\n\nfunction createItem(name, desc) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n  \n    const foodName = document.createElement(\"h3\");\n    foodName.innerText = name;\n  \n    const foodDesc = document.createElement(\"p\");\n    foodDesc.innerText = desc;\n  \n    // const foodPic = document.createElement(\"img\");\n    // foodPic.src = `images/${name.toLowerCase()}.png`;\n    // foodPic.alt = `${name}`;\n  \n    // menuItem.appendChild(foodPic);\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDesc);\n  \n    return menuItem;\n  }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/skeleton.js":
/*!*********************************!*\
  !*** ./src/modules/skeleton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createSkeleton() {\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const header = document.createElement(\"header\");\n    header.id = \"header\";\n\n    const main = document.createElement(\"main\");\n    main.id = \"main\";\n\n    container.appendChild(header);\n    container.appendChild(main);\n\n    return container;\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSkeleton);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/skeleton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;