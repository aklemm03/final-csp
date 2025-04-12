/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/button-app.js":
/*!******************************!*\
  !*** ./src/js/button-app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var buttonShowCheck = document.querySelector('.upperMenu_button-app');
var buttonHideCheck = document.querySelector('.application_btn');
var windowAdept = window.matchMedia('(min-width:760px)');
var feedbackElement = document.querySelector('.application');
var mainElements = document.querySelector('.main');
var headerElements = document.querySelector('.upperMenu_mob-left');
var headersElement = document.querySelector('.upperMenu_mob-right');
var footerElements = document.querySelector('.footer');

if (windowAdept.matches === false) {
  buttonShowCheck.addEventListener('click', function () {
    mainElements.classList.add('hidden');
    footerElements.classList.add('hidden');
    headersElement.classList.add('hidden');
    headerElements.classList.add('hidden');
    feedbackElement.classList.remove('hidden');
  });
  buttonHideCheck.addEventListener('click', function () {
    mainElements.classList.remove('hidden');
    footerElements.classList.remove('hidden');
    headersElement.classList.remove('hidden');
    headerElements.classList.remove('hidden');
    feedbackElement.classList.add('hidden');
  });
} else {
  buttonShowCheck.addEventListener('click', function () {
    mainElements.classList.add('smooth');
    footerElements.classList.add('smooth');
    headersElement.classList.add('smooth');
    headerElements.classList.add('smooth');
    feedbackElement.classList.remove('hidden');
  });
  buttonHideCheck.addEventListener('click', function () {
    mainElements.classList.remove('smooth');
    footerElements.classList.remove('smooth');
    headersElement.classList.remove('smooth');
    headerElements.classList.remove('smooth');
    feedbackElement.classList.add('hidden');
  });
}

/***/ }),

/***/ "./src/js/button-feedback.js":
/*!***********************************!*\
  !*** ./src/js/button-feedback.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var buttonShowCheck = document.querySelector('.upperMenu_button-check');
var buttonHideCheck = document.querySelector('.feedback_btn');
var windowAdept = window.matchMedia('(min-width:760px)');
var feedbackElement = document.querySelector('.feedback');
var mainElements = document.querySelector('.main');
var headerElements = document.querySelector('.upperMenu_mob-left');
var headersElement = document.querySelector('.upperMenu_mob-right');
var footerElements = document.querySelector('.footer');

if (windowAdept.matches === false) {
  buttonShowCheck.addEventListener('click', function () {
    mainElements.classList.add('hidden');
    footerElements.classList.add('hidden');
    headersElement.classList.add('hidden');
    headerElements.classList.add('hidden');
    feedbackElement.classList.remove('hidden');
  });
  buttonHideCheck.addEventListener('click', function () {
    mainElements.classList.remove('hidden');
    footerElements.classList.remove('hidden');
    headersElement.classList.remove('hidden');
    headerElements.classList.remove('hidden');
    feedbackElement.classList.add('hidden');
  });
} else {
  buttonShowCheck.addEventListener('click', function () {
    mainElements.classList.add('smooth');
    footerElements.classList.add('smooth');
    headersElement.classList.add('smooth');
    headerElements.classList.add('smooth');
    feedbackElement.classList.remove('hidden');
  });
  buttonHideCheck.addEventListener('click', function () {
    mainElements.classList.remove('smooth');
    footerElements.classList.remove('smooth');
    headersElement.classList.remove('smooth');
    headerElements.classList.remove('smooth');
    feedbackElement.classList.add('hidden');
  });
}

/***/ }),

/***/ "./src/js/button.js":
/*!**************************!*\
  !*** ./src/js/button.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var burgerElements = document.querySelector('.burger_menu');
var windowAdept = window.matchMedia('(min-width:760px)');
var mainElements = document.querySelector('.main');
var headerElements = document.querySelector('.upperMenu_mob-left');
var headersElement = document.querySelector('.upperMenu_mob-right');
var footerElements = document.querySelector('.footer');
var buttonShowBurger = document.querySelector('.upperMenu_burger-button');
var buttonHideBurger = document.querySelector('.head_btn');
var buttonShowApp = document.querySelector('.upperMenu_button-app');

if (windowAdept.matches === false) {
  buttonShowBurger.addEventListener('click', function () {
    mainElements.classList.add('hidden');
    footerElements.classList.add('hidden');
    headersElement.classList.add('hidden');
    headerElements.classList.add('hidden');
    burgerElements.classList.remove('hidden');
  });
  buttonHideBurger.addEventListener('click', function () {
    mainElements.classList.remove('hidden');
    footerElements.classList.remove('hidden');
    headersElement.classList.remove('hidden');
    headerElements.classList.remove('hidden');
    burgerElements.classList.add('hidden');
  });
} else {
  buttonShowBurger.addEventListener('click', function () {
    mainElements.classList.add('smooth');
    footerElements.classList.add('smooth');
    headersElement.classList.add('smooth');
    headerElements.classList.add('smooth');
    burgerElements.classList.remove('hidden');
  });
  buttonHideBurger.addEventListener('click', function () {
    mainElements.classList.remove('smooth');
    footerElements.classList.remove('smooth');
    headersElement.classList.remove('smooth');
    headerElements.classList.remove('smooth');
    burgerElements.classList.add('hidden');
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_more_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-more.js */ "./src/js/show-more.js");
/* harmony import */ var _show_more_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_show_more_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swiper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.js */ "./src/js/button.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_feedback_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button-feedback.js */ "./src/js/button-feedback.js");
/* harmony import */ var _button_feedback_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_button_feedback_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _button_app_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button-app.js */ "./src/js/button-app.js");
/* harmony import */ var _button_app_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_button_app_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation.js */ "./src/js/animation.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_animation_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _show_more_biggest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-more-biggest.js */ "./src/js/show-more-biggest.js");
/* harmony import */ var _show_more_biggest_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_show_more_biggest_js__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/show-more-biggest.js":
/*!*************************************!*\
  !*** ./src/js/show-more-biggest.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cardsBig = document.querySelectorAll('.swiper_biggest');
var mediaQuery = window.matchMedia('(min-width:975px)'); // const button = document.querySelector('.button')
// const btnShowMore = document.querySelector('.main_show')

var btnShowMoreBig = document.querySelector('.main_show-biggest');
var hiddenCardsBig = document.querySelectorAll('.cardBig');
var rotateBig = document.querySelector('.main_expand-biggest');
var HIDE = 'Скрыть';
var SHOW_ALL = 'Показать все';

function resizePage() {
  if (mediaQuery.matches === true) {
    cardsBig[6].classList.remove('cardBig', 'hide-element');
    cardsBig[7].classList.remove('cardBig', 'hide-element');
  } else {
    cardsBig[6].classList.add('cardBig', 'hide-element');
    cardsBig[7].classList.add('cardBig', 'hide-element');
  }
}

window.addEventListener('resize', resizePage);
btnShowMoreBig.addEventListener('click', function () {
  console.log('hi event');

  for (var i = 0; i < hiddenCardsBig.length; i++) {
    hiddenCardsBig[i].classList.toggle('hide-element');

    if (hiddenCardsBig[i].classList.contains('hide-element')) {
      btnShowMoreBig.textContent = 'Показать все';
      hiddenCardsBig.value = SHOW_ALL;
    } else {
      btnShowMoreBig.textContent = 'Скрыть';
      hiddenCardsBig.value = HIDE;
    }
  }

  if (hiddenCardsBig.value === HIDE) {
    rotateBig.style.transform = 'rotate(' + 180 + 'deg)';
  } else {
    rotateBig.style.transform = null;
  }
});
console.log(cardsBig);

/***/ }),

/***/ "./src/js/show-more.js":
/*!*****************************!*\
  !*** ./src/js/show-more.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cards = document.querySelectorAll('.swiper-slide');
var cardsBig = document.querySelectorAll('.swiper-slide-biggest');
var mediaQuery = window.matchMedia('(min-width:975px)');
var button = document.querySelector('.button');
var btnShowMore = document.querySelector('.main_show');
var btnShowMoreBig = document.querySelector('.main_show-biggest');
var hiddenCards = document.querySelectorAll('.card');
var hiddenCardsBig = document.querySelectorAll('.cardBig');
var rotate = document.querySelector('.main_expand');
var HIDE = 'Скрыть';
var SHOW_ALL = 'Показать все';

function resizePage() {
  if (mediaQuery.matches === true) {
    cards[6].classList.remove('card', 'hide-element');
    cards[7].classList.remove('card', 'hide-element');
  } else {
    cards[6].classList.add('card', 'hide-element');
    cards[7].classList.add('card', 'hide-element');
  }
}

window.addEventListener('resize', resizePage);
btnShowMore.addEventListener('click', function () {
  console.log('hi event');

  for (var i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].classList.toggle('hide-element');

    if (hiddenCards[i].classList.contains('hide-element')) {
      btnShowMore.textContent = 'Показать все';
      hiddenCards.value = SHOW_ALL;
    } else {
      btnShowMore.textContent = 'Скрыть';
      hiddenCards.value = HIDE;
    }
  }

  if (hiddenCards.value === HIDE) {
    rotate.style.transform = 'rotate(' + 180 + 'deg)';
  } else {
    rotate.style.transform = null;
  }
});

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mediaQuerys = window.matchMedia('(max-width:700px)');

if (mediaQuerys.matches === true) {
  mySwiper = new Swiper('.swiper', {
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto'
  });
} else {}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map