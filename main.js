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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialContent.js */ \"./src/initialContent.js\");\n\n\n(0,_initialContent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/initialContent.js":
/*!*******************************!*\
  !*** ./src/initialContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialContent)\n/* harmony export */ });\n/* harmony import */ var _image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.jpg */ \"./src/image.jpg\");\n\n\nfunction initialContent() {\n  const contentDiv = document.querySelector('#content');\n\n  const headline = document.createElement('h1');\n  headline.textContent = `Welcome to Bella's Bistro - Where Exquisite Flavors Meet Impeccable\n\tService!`;\n  const figure = document.createElement('figure');\n  const image = new Image();\n  image.src = _image_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  const attribution = document.createElement('figcaption');\n  const photographer = document.createElement('a');\n  photographer.href =\n    'https://unsplash.com/es/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\n  photographer.textContent = 'Louis Hansel';\n  const unsplash = document.createElement('a');\n  unsplash.href =\n    'https://unsplash.com/photos/u13IpYtZ9I8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';\n  unsplash.textContent = 'Unsplash';\n  const photoBy = document.createTextNode('Photo by ');\n  attribution.appendChild(photoBy);\n  attribution.appendChild(photographer);\n  const onText = document.createTextNode(' on ');\n  attribution.appendChild(onText);\n  attribution.appendChild(unsplash);\n  figure.appendChild(image);\n  figure.appendChild(attribution);\n  const copy = document.createElement('p');\n  copy.textContent = `At Bella's Bistro, we pride ourselves on offering a dining experience\n\tthat combines exquisite flavors with impeccable service. Our expert\n\tchefs use only the finest ingredients to create dishes that are packed\n\twith flavor, and our friendly staff is dedicated to providing you with\n\tan unforgettable dining experience.`;\n\n  contentDiv.appendChild(headline);\n  contentDiv.appendChild(figure);\n  contentDiv.appendChild(copy);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/initialContent.js?");

/***/ }),

/***/ "./src/image.jpg":
/*!***********************!*\
  !*** ./src/image.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a9e72c47f4571fc76a9.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/image.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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