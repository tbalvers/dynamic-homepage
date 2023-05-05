/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAbout": () => (/* binding */ createAbout)
/* harmony export */ });
function createAbout() {
  const main = document.querySelector('.main');
  const headline = document.createElement('h1');
  headline.textContent = 'European elegance in 77 vibrant colors';
  main.appendChild(headline);

  const container = document.createElement('div');
  container.classList.add('container');
  main.appendChild(container);

  const body1 = document.createElement('p');
  body1.textContent =
    "At 77velvet, we specialize in velvet fabrics, which allows us to offer a wide range of colors and finishes to choose from. Our collection includes classic hues like deep burgundy and midnight blue, as well as trendy shades like blush pink and emerald green. With so many options to choose from, you're sure to find the perfect velvet for your project.";
  container.appendChild(body1);
  const body2 = document.createElement('p');
  body2.textContent =
    'Our fabrics are made using only the finest materials sourced from the most reputable mills in Europe. We take pride in ensuring that our fabrics are of the highest quality, with a soft and sumptuous texture that feels as luxurious as it looks.';
  container.appendChild(body2);
  const body3 = document.createElement('p');
  body3.textContent =
    "Our commitment to quality doesn't stop at our fabrics. We also believe in providing exceptional customer service, with a team of experts available to help you with any questions you may have. Whether you're looking for advice on choosing the perfect color or need tips on caring for your velvet, we're here to help.";
  container.appendChild(body3);
  const body4 = document.createElement('p');
  body4.textContent =
    'In a world where fast fashion dominates, we stand out as a company that values quality, craftsmanship, and timeless elegance. We invite you to explore our collection of velvet fabrics and discover the beauty and luxury of 77velvet.';
  container.appendChild(body4);

  const products = document.getElementById('products');
  products.classList.remove('active');
  const aboutUs = document.getElementById('aboutUs');
  aboutUs.classList.add('active');
  const pricing = document.getElementById('pricing');
  pricing.classList.remove('active');

  main.classList.remove('fade');
  main.classList.add('fade');
}




/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearContent": () => (/* binding */ clearContent)
/* harmony export */ });
function clearContent() {
  const main = document.querySelector('.main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _77velvet_light_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./77velvet_light.svg */ "./src/77velvet_light.svg");


function createHome() {
  const content = document.querySelector('#content');
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  content.appendChild(sidebar);
  const logo = new Image();
  logo.src = _77velvet_light_svg__WEBPACK_IMPORTED_MODULE_0__;
  sidebar.appendChild(logo);

  const aboutUs = document.createElement('a');
  aboutUs.textContent = 'About Us';
  aboutUs.setAttribute('title', 'About Us');
  aboutUs.setAttribute('id', 'aboutUs');
  aboutUs.classList.add('active');
  sidebar.appendChild(aboutUs);

  const products = document.createElement('a');
  products.textContent = 'Products';
  products.setAttribute('title', 'About Us');
  products.setAttribute('id', 'products');
  sidebar.appendChild(products);

  const pricing = document.createElement('a');
  pricing.textContent = 'Pricing';
  pricing.setAttribute('title', 'About Us');
  pricing.setAttribute('id', 'pricing');
  sidebar.appendChild(pricing);

  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);
}




/***/ }),

/***/ "./src/listener.js":
/*!*************************!*\
  !*** ./src/listener.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInListener": () => (/* binding */ fadeInListener),
/* harmony export */   "sidebarLinkListener": () => (/* binding */ sidebarLinkListener)
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./src/products.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear */ "./src/clear.js");
/* harmony import */ var _pricing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricing */ "./src/pricing.js");





function sidebarLinkListener() {
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.target.id === 'aboutUs') {
        (0,_clear__WEBPACK_IMPORTED_MODULE_2__.clearContent)();
        (0,_about__WEBPACK_IMPORTED_MODULE_0__.createAbout)();
      } else if (event.target.id === 'products') {
        (0,_clear__WEBPACK_IMPORTED_MODULE_2__.clearContent)();
        (0,_products__WEBPACK_IMPORTED_MODULE_1__.createProducts)();
      } else if (event.target.id === 'pricing') {
        (0,_clear__WEBPACK_IMPORTED_MODULE_2__.clearContent)();
        (0,_pricing__WEBPACK_IMPORTED_MODULE_3__.createPricing)();
      }
    });
  });
}
function fadeInListener() {
  const main = document.querySelector('.main');
  main.addEventListener('animationend', () => {
    main.classList.remove('fade');
  });
}



/***/ }),

/***/ "./src/pricing.js":
/*!************************!*\
  !*** ./src/pricing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPricing": () => (/* binding */ createPricing)
/* harmony export */ });
function createPricing() {
  const main = document.querySelector('.main');
  const headline = document.createElement('h1');
  headline.textContent = 'Pricing Information';
  main.appendChild(headline);

  const container = document.createElement('div');
  container.classList.add('container');
  main.appendChild(container);

  const products = document.getElementById('products');
  products.classList.remove('active');
  const aboutUs = document.getElementById('aboutUs');
  aboutUs.classList.remove('active');
  const pricing = document.getElementById('pricing');
  pricing.classList.add('active');

  const body1 = document.createElement('p');
  body1.textContent =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est amet minima quis veritatis quas excepturi iste eum quae esse ea, sed autem voluptates consequuntur at sapiente et maiores expedita. Nemo!';
  container.appendChild(body1);
  const body2 = document.createElement('p');
  body2.textContent =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
  container.appendChild(body2);
  const body3 = document.createElement('p');
  body3.textContent =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est amet minima quis veritatis quas excepturi iste eum quae esse ea, sed autem voluptates.';
  container.appendChild(body3);

  main.classList.remove('fade');
  main.classList.add('fade');
}




/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProducts": () => (/* binding */ createProducts)
/* harmony export */ });
/* harmony import */ var _black_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./black.jpg */ "./src/black.jpg");
/* harmony import */ var _purple_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purple.jpg */ "./src/purple.jpg");
/* harmony import */ var _moss_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moss.jpg */ "./src/moss.jpg");
/* harmony import */ var _navy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navy.jpg */ "./src/navy.jpg");





function createProducts() {
  const main = document.querySelector('.main');
  const headline = document.createElement('h1');
  headline.textContent = 'Our Velvets';
  main.appendChild(headline);
  const container = document.createElement('div');
  container.classList.add('container');
  container.classList.add('products');
  main.appendChild(container);
  let card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
  let velvet = new Image();
  velvet.src = _black_jpg__WEBPACK_IMPORTED_MODULE_0__;
  card.appendChild(velvet);
  let description = document.createElement('p');
  description.textContent = 'Midnight Black';
  card.appendChild(description);

  card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
  velvet = new Image();
  velvet.src = _purple_jpg__WEBPACK_IMPORTED_MODULE_1__;
  card.appendChild(velvet);
  description = document.createElement('p');
  description.textContent = 'Imperial Purple';
  card.appendChild(description);

  card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
  velvet = new Image();
  velvet.src = _moss_jpg__WEBPACK_IMPORTED_MODULE_2__;
  card.appendChild(velvet);
  description = document.createElement('p');
  description.textContent = 'Lime Green';
  card.appendChild(description);

  card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
  velvet = new Image();
  velvet.src = _navy_jpg__WEBPACK_IMPORTED_MODULE_3__;
  card.appendChild(velvet);
  description = document.createElement('p');
  description.textContent = 'Navy Blue';
  card.appendChild(description);

  const products = document.getElementById('products');
  products.classList.add('active');
  const aboutUs = document.getElementById('aboutUs');
  aboutUs.classList.remove('active');
  const pricing = document.getElementById('pricing');
  pricing.classList.remove('active');

  main.classList.remove('fade');
  main.classList.add('fade');
}




/***/ }),

/***/ "./src/77velvet_light.svg":
/*!********************************!*\
  !*** ./src/77velvet_light.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "195dc39777e074e4c351.svg";

/***/ }),

/***/ "./src/black.jpg":
/*!***********************!*\
  !*** ./src/black.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cd7cf54005a09eb0b59.jpg";

/***/ }),

/***/ "./src/moss.jpg":
/*!**********************!*\
  !*** ./src/moss.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c595ff1a021034792af.jpg";

/***/ }),

/***/ "./src/navy.jpg":
/*!**********************!*\
  !*** ./src/navy.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f21f0543a50da8fd438a.jpg";

/***/ }),

/***/ "./src/purple.jpg":
/*!************************!*\
  !*** ./src/purple.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcb572e93443036051a7.jpg";

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener */ "./src/listener.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
(0,_about__WEBPACK_IMPORTED_MODULE_2__.createAbout)();
(0,_listener__WEBPACK_IMPORTED_MODULE_1__.sidebarLinkListener)();
(0,_listener__WEBPACK_IMPORTED_MODULE_1__.fadeInListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmFtaWMtaG9tZXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob21lcGFnZS8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLWhvbWVwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob21lcGFnZS8uL3NyYy9saXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLWhvbWVwYWdlLy4vc3JjL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob21lcGFnZS8uL3NyYy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWMtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9keW5hbWljLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnRXVyb3BlYW4gZWxlZ2FuY2UgaW4gNzcgdmlicmFudCBjb2xvcnMnO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgYm9keTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJvZHkxLnRleHRDb250ZW50ID1cbiAgICBcIkF0IDc3dmVsdmV0LCB3ZSBzcGVjaWFsaXplIGluIHZlbHZldCBmYWJyaWNzLCB3aGljaCBhbGxvd3MgdXMgdG8gb2ZmZXIgYSB3aWRlIHJhbmdlIG9mIGNvbG9ycyBhbmQgZmluaXNoZXMgdG8gY2hvb3NlIGZyb20uIE91ciBjb2xsZWN0aW9uIGluY2x1ZGVzIGNsYXNzaWMgaHVlcyBsaWtlIGRlZXAgYnVyZ3VuZHkgYW5kIG1pZG5pZ2h0IGJsdWUsIGFzIHdlbGwgYXMgdHJlbmR5IHNoYWRlcyBsaWtlIGJsdXNoIHBpbmsgYW5kIGVtZXJhbGQgZ3JlZW4uIFdpdGggc28gbWFueSBvcHRpb25zIHRvIGNob29zZSBmcm9tLCB5b3UncmUgc3VyZSB0byBmaW5kIHRoZSBwZXJmZWN0IHZlbHZldCBmb3IgeW91ciBwcm9qZWN0LlwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keTEpO1xuICBjb25zdCBib2R5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYm9keTIudGV4dENvbnRlbnQgPVxuICAgICdPdXIgZmFicmljcyBhcmUgbWFkZSB1c2luZyBvbmx5IHRoZSBmaW5lc3QgbWF0ZXJpYWxzIHNvdXJjZWQgZnJvbSB0aGUgbW9zdCByZXB1dGFibGUgbWlsbHMgaW4gRXVyb3BlLiBXZSB0YWtlIHByaWRlIGluIGVuc3VyaW5nIHRoYXQgb3VyIGZhYnJpY3MgYXJlIG9mIHRoZSBoaWdoZXN0IHF1YWxpdHksIHdpdGggYSBzb2Z0IGFuZCBzdW1wdHVvdXMgdGV4dHVyZSB0aGF0IGZlZWxzIGFzIGx1eHVyaW91cyBhcyBpdCBsb29rcy4nO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keTIpO1xuICBjb25zdCBib2R5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYm9keTMudGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBkb2Vzbid0IHN0b3AgYXQgb3VyIGZhYnJpY3MuIFdlIGFsc28gYmVsaWV2ZSBpbiBwcm92aWRpbmcgZXhjZXB0aW9uYWwgY3VzdG9tZXIgc2VydmljZSwgd2l0aCBhIHRlYW0gb2YgZXhwZXJ0cyBhdmFpbGFibGUgdG8gaGVscCB5b3Ugd2l0aCBhbnkgcXVlc3Rpb25zIHlvdSBtYXkgaGF2ZS4gV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYWR2aWNlIG9uIGNob29zaW5nIHRoZSBwZXJmZWN0IGNvbG9yIG9yIG5lZWQgdGlwcyBvbiBjYXJpbmcgZm9yIHlvdXIgdmVsdmV0LCB3ZSdyZSBoZXJlIHRvIGhlbHAuXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5Myk7XG4gIGNvbnN0IGJvZHk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBib2R5NC50ZXh0Q29udGVudCA9XG4gICAgJ0luIGEgd29ybGQgd2hlcmUgZmFzdCBmYXNoaW9uIGRvbWluYXRlcywgd2Ugc3RhbmQgb3V0IGFzIGEgY29tcGFueSB0aGF0IHZhbHVlcyBxdWFsaXR5LCBjcmFmdHNtYW5zaGlwLCBhbmQgdGltZWxlc3MgZWxlZ2FuY2UuIFdlIGludml0ZSB5b3UgdG8gZXhwbG9yZSBvdXIgY29sbGVjdGlvbiBvZiB2ZWx2ZXQgZmFicmljcyBhbmQgZGlzY292ZXIgdGhlIGJlYXV0eSBhbmQgbHV4dXJ5IG9mIDc3dmVsdmV0Lic7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5NCk7XG5cbiAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdHMnKTtcbiAgcHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRVcycpO1xuICBhYm91dFVzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBjb25zdCBwcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNpbmcnKTtcbiAgcHJpY2luZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUFib3V0IH07XG4iLCJmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCB7IGNsZWFyQ29udGVudCB9O1xuIiwiaW1wb3J0IG15TG9nbyBmcm9tICcuLzc3dmVsdmV0X2xpZ2h0LnN2Zyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gbXlMb2dvO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFib3V0VXMudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICBhYm91dFVzLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQWJvdXQgVXMnKTtcbiAgYWJvdXRVcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0VXMnKTtcbiAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhYm91dFVzKTtcblxuICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcHJvZHVjdHMudGV4dENvbnRlbnQgPSAnUHJvZHVjdHMnO1xuICBwcm9kdWN0cy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0Fib3V0IFVzJyk7XG4gIHByb2R1Y3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvZHVjdHMnKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9kdWN0cyk7XG5cbiAgY29uc3QgcHJpY2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcHJpY2luZy50ZXh0Q29udGVudCA9ICdQcmljaW5nJztcbiAgcHJpY2luZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0Fib3V0IFVzJyk7XG4gIHByaWNpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdwcmljaW5nJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJpY2luZyk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQWJvdXQgfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IGNyZWF0ZVByb2R1Y3RzIH0gZnJvbSAnLi9wcm9kdWN0cyc7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQgfSBmcm9tICcuL2NsZWFyJztcbmltcG9ydCB7IGNyZWF0ZVByaWNpbmcgfSBmcm9tICcuL3ByaWNpbmcnO1xuXG5mdW5jdGlvbiBzaWRlYmFyTGlua0xpc3RlbmVyKCkge1xuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdhYm91dFVzJykge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY3JlYXRlQWJvdXQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAncHJvZHVjdHMnKSB7XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICBjcmVhdGVQcm9kdWN0cygpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdwcmljaW5nJykge1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY3JlYXRlUHJpY2luZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZhZGVJbkxpc3RlbmVyKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gIH0pO1xufVxuZXhwb3J0IHsgc2lkZWJhckxpbmtMaXN0ZW5lciwgZmFkZUluTGlzdGVuZXIgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVByaWNpbmcoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1ByaWNpbmcgSW5mb3JtYXRpb24nO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdHMnKTtcbiAgcHJvZHVjdHMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRVcycpO1xuICBhYm91dFVzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBjb25zdCBwcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNpbmcnKTtcbiAgcHJpY2luZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBjb25zdCBib2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYm9keTEudGV4dENvbnRlbnQgPVxuICAgICdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXN0IGFtZXQgbWluaW1hIHF1aXMgdmVyaXRhdGlzIHF1YXMgZXhjZXB0dXJpIGlzdGUgZXVtIHF1YWUgZXNzZSBlYSwgc2VkIGF1dGVtIHZvbHVwdGF0ZXMgY29uc2VxdXVudHVyIGF0IHNhcGllbnRlIGV0IG1haW9yZXMgZXhwZWRpdGEuIE5lbW8hJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkxKTtcbiAgY29uc3QgYm9keTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJvZHkyLnRleHRDb250ZW50ID1cbiAgICAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkyKTtcbiAgY29uc3QgYm9keTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJvZHkzLnRleHRDb250ZW50ID1cbiAgICAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVzdCBhbWV0IG1pbmltYSBxdWlzIHZlcml0YXRpcyBxdWFzIGV4Y2VwdHVyaSBpc3RlIGV1bSBxdWFlIGVzc2UgZWEsIHNlZCBhdXRlbSB2b2x1cHRhdGVzLic7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5Myk7XG5cbiAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcmljaW5nIH07XG4iLCJpbXBvcnQgcGljMSBmcm9tICcuL2JsYWNrLmpwZyc7XG5pbXBvcnQgcGljMiBmcm9tICcuL3B1cnBsZS5qcGcnO1xuaW1wb3J0IHBpYzMgZnJvbSAnLi9tb3NzLmpwZyc7XG5pbXBvcnQgcGljNCBmcm9tICcuL25hdnkuanBnJztcblxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdHMoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ091ciBWZWx2ZXRzJztcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0cycpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIGxldCB2ZWx2ZXQgPSBuZXcgSW1hZ2UoKTtcbiAgdmVsdmV0LnNyYyA9IHBpYzE7XG4gIGNhcmQuYXBwZW5kQ2hpbGQodmVsdmV0KTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdNaWRuaWdodCBCbGFjayc7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgdmVsdmV0ID0gbmV3IEltYWdlKCk7XG4gIHZlbHZldC5zcmMgPSBwaWMyO1xuICBjYXJkLmFwcGVuZENoaWxkKHZlbHZldCk7XG4gIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdJbXBlcmlhbCBQdXJwbGUnO1xuICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIHZlbHZldCA9IG5ldyBJbWFnZSgpO1xuICB2ZWx2ZXQuc3JjID0gcGljMztcbiAgY2FyZC5hcHBlbmRDaGlsZCh2ZWx2ZXQpO1xuICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnTGltZSBHcmVlbic7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgdmVsdmV0ID0gbmV3IEltYWdlKCk7XG4gIHZlbHZldC5zcmMgPSBwaWM0O1xuICBjYXJkLmFwcGVuZENoaWxkKHZlbHZldCk7XG4gIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdOYXZ5IEJsdWUnO1xuICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0cycpO1xuICBwcm9kdWN0cy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dFVzJyk7XG4gIGFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGNvbnN0IHByaWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpY2luZycpO1xuICBwcmljaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvZHVjdHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IGZhZGVJbkxpc3RlbmVyLCBzaWRlYmFyTGlua0xpc3RlbmVyIH0gZnJvbSAnLi9saXN0ZW5lcic7XG5pbXBvcnQgeyBjcmVhdGVBYm91dCB9IGZyb20gJy4vYWJvdXQnO1xuXG5jcmVhdGVIb21lKCk7XG5jcmVhdGVBYm91dCgpO1xuc2lkZWJhckxpbmtMaXN0ZW5lcigpO1xuZmFkZUluTGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==