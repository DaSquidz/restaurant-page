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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/skeleton */ \"./src/modules/skeleton.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n\n\n\n\n\nload();\n\nfunction load() {\n    const content = document.getElementById(\"content\");\n    content.appendChild((0,_modules_skeleton__WEBPACK_IMPORTED_MODULE_0__.default)());\n    (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.default)();\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n    const header = document.getElementById(\"header\");\n\n    const headerText = document.createElement(\"h1\");\n    headerText.innerText = \"Ristorante Ufo Robot\";\n    header.appendChild(headerText);\n\n    const navbarCont = document.createElement(\"div\");\n    navbarCont.classList.add(\"navbar-cont\")\n\n    const navbar = document.createElement(\"ul\");\n    navbar.classList.add(\"navbar\");\n\n    const homeNav = document.createElement(\"li\");\n    const menuNav = document.createElement(\"li\");\n    const contactNav = document.createElement(\"li\");\n\n    const homeNavButton = document.createElement(\"button\");\n    homeNavButton.innerText = \"Home\";\n    const menuNavButton = document.createElement(\"button\");\n    menuNavButton.innerText = \"Menu\";\n    const contactNavButton = document.createElement(\"button\");\n    contactNavButton.innerText = \"Contact\";\n\n\n    homeNav.appendChild(homeNavButton);\n    menuNav.appendChild(menuNavButton);\n    contactNav.appendChild(contactNavButton);\n    navbar.appendChild(homeNav);\n    navbar.appendChild(menuNav);\n    navbar.appendChild(contactNav);\n    navbarCont.appendChild(navbar);\n    header.appendChild(navbarCont);\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const main = document.getElementById(\"main\");\n\n    const mainBox = document.createElement(\"div\");\n    mainBox.classList.add(\"main-box\")\n\n    const goldrakePic = document.createElement(\"img\");\n    goldrakePic.src = \"images/goldrake.png\";\n    goldrakePic.alt = \"goldrake\";\n\n    const textParagraph = document.createElement(\"p\");\n    textParagraph.innerText = \"Gusta le migliori insalate di matematica\";\n\n    mainBox.appendChild(goldrakePic);\n    mainBox.appendChild(textParagraph);\n\n    main.appendChild(mainBox);\n\n    return main\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

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