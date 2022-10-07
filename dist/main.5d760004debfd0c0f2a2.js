/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.png */ "./src/img/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This code remove margins from page \nand makes the body to take all the height available\nin the page */\nhtml, body {\n    height: 100%;\n    margin: 0;\n    overflow: hidden;\n}\n\n.body-back-ground {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: 20% 63%;\n    background-size: 175%;\n}\n\n#content {\n    /* BODY DISPLAY */\n    display: grid;\n    grid-template-columns: 80px 1fr 1fr .3fr;\n    grid-template-rows: 1fr 1fr 1fr;\n}   \n\n/* HEADER */\n#header-1 {\n    display: grid;\n    grid-template-columns: 30px;\n    gap: 240px;\n}\n\n#header-2 {\n    margin-top: 20px;\n}\n\n#logo-plus-brand {\n    display: grid;\n    grid-template-columns: 60px 40px;\n    gap: 42px;\n    /* align-content: space-between; */\n}\n\n#logo-plus-brand img {\n    width: 200%;\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    display: flex;\n    justify-items: flex-start;\n    align-items: flex-end;\n    font-size: 30px;\n}\n\n\nul {\n    writing-mode: vertical-lr;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    color: #215732;\n}\n\na {\n    cursor: pointer;\n}\n\na:hover {\n    text-decoration: line-through;\n}\n\n.nav-bar {\n    display: grid;\n    grid-template-columns: 51px;\n    grid-template-rows: 32px;\n    grid-auto-flow: column;\n    grid-gap: 15px\n}\n\n\n/* MAIN */\n\n#the-home {\n    display: flex;\n    flex-direction: column;\n    grid-row-start: 2;\n    grid-column-start: 2;\n    justify-content: flex-end;\n}\n\n#first-hero {\n    width: 610px;\n    display: flex;\n    align-self: center;\n    font-size: 48px;\n    color: #215732;\n    margin: 0;\n    padding: 0;\n    line-height: 40px;\n}\n\n#second-hero {\n    margin: 0;\n    padding: 0;\n    width: 600px;\n    align-self: center;\n}\n\n#second-hero span, \n#second-hero h1 {\n    font-size: 16px;\n    font-weight: 200;\n    color: #215732;\n}\n\n#second-hero h1 {\n    display: block;\n}\n\n#brand-name {\n    position: absolute;\n    left: 84%;\n    writing-mode: tb;\n    top: 70px;\n}\n\n#brand-name h1 {\n    font-size: 115px;\n}\n\n/* MENU */\n\n.menu-background {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#the-menu-first-div {\n    position: absolute;\n    top: 260px;\n    left: 100px;\n    width: 500px;\n    height: 240px;\n    background-color: #215732; \n    grid-column-start: 2;\n    align-content: center;\n    border-top-left-radius: 30% 24%;\n    border-top-right-radius: 70% 81%;\n    border-bottom-right-radius: 80% 19%;\n    border-bottom-left-radius: 20% 76%;\n}\n\n#the-menu-second-div {\n    position: absolute;\n    top: 205px;\n    left: 170px;\n    width: 314px;\n    height: 351px;\n    background-color: #B7CADB;\n    grid-column-start: 2;\n    align-content: center;\n    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n}\n\n.cup-container {\n    position: absolute;\n    top: 280px;\n    left: 220px;\n}\n\n.cup-container img {\n    width: 180%;\n}\n\n.the-menu {\n    display: grid;\n    grid-column-start: 3;\n    grid-row-start: 1;\n     grid-row-end: 3;\n    margin-top: 40px;\n    color: #215732;;\n}\n\n.rows {\n    border-top: 1px solid;\n    overflow: hidden;\n    height: 43px;\n}\n\n@keyframes moveToTop {\n    from {transform: translateY(0px);}\n    to {transform: translateY(-30px);}\n}\n\n@keyframes moveToBottom {\n    from {transform: translateY(-30px);}\n    to {transform: translateY(0px);}\n}\n\n/* Move each coffee to top on hover */\n.rows:hover .spans, .rows:hover .test {\n    /* first animation */\n    animation-name: moveToTop;\n    animation-duration: .2s;\n    animation-fill-mode: forwards;\n}\n\n/* Move each coffee to bottom when on hover\neffect is done */\n.rows .spans, .rows .test {\n    /* first animation */\n    animation-name: moveToBottom;\n    animation-duration: .2s;\n    animation-fill-mode: forwards;\n}\n\n.spans {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 12px;\n    cursor: pointer;\n    margin: 0;\n}\n\n.data3 {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    gap: 15px;\n}\n\n.sugar-free, .low-calories, .bio {\n    width: 15%;\n}\n\n.test {\n    font-size: 20px;\n    width: 3000px;\n    cursor: pointer;\n    color: #8b4513;\n}\n\n.runn-text-1, .runn-text-2, .runn-text-3 {\n    animation-duration: 10s;\n    animation-timing-function: linear;\n    animation-delay: 0s;\n    animation-iteration-count: infinite;\n    animation-direction: normal;\n    animation-fill-mode: none;\n    animation-play-state: running;\n    animation-name: scroll;\n    position: absolute;\n}\n\n.runn-text-2 {\n    left: 30%;\n}\n\n.runn-text-3 {\n    left: 50%;\n}\n\n@keyframes scroll {\n    0% {transform: translate(0,0);}\n    100% {transform: translate(-900px,0);}\n}\n\n/* IMAGE CUP EFFECT */\n\n.img-container {\n    position: absolute;\n    left: 232px;\n    top: -250px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\n.img-container div {\n    grid-column-start: 1;\n    grid-row-start: 1;\n}\n\n.img-container img {\n    width: 170%;\n}\n\n.show {\n    animation-name: cupDown;\n    animation-duration: .4s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes cupDown {\n    0%  {transform: translateY(0px);}\n    100% {transform: translateY(540px);}  \n}\n\n\n/* STEAM */\n.list-container {\n    grid-column-start: 2;\n    grid-row-start: 2;\n    width: min-content;\n    height: min-content;\n    position: relative;\n    left: 200px;\n    top:62px;\n}\n\n.list-container ul {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.show-steam {                                  /* .steam-list-item */\n    background-color: #a8a4a4;\n    width: 10px;\n    height: 10px;\n    border-radius: 10px;\n    box-shadow: 10px 10px 20px 20px #a8a4a4;\n    opacity: 0;\n\n}\n\n.list-container ul li {\n    animation-name: steam1;\n    animation-duration: 3s;\n    /* animation-delay: 20s; */\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    \n}\n\n@keyframes steam1 {\n    0% {transform: translateY(0); opacity: .7;}\n    50% {transform: translateY(-20px); opacity: 0;}\n}\n\n\n/* ABOUT PAGE */\n\n#about-text-container {\n    grid-column-start: 2;\n    grid-row-start: 2;\n    grid-column-end: 4;\n    display: flex;\n    flex-direction: column;\n    width: max-content;\n    justify-content: center;\n    position: relative;\n    left: 180px;\n}\n\n#about-text-container h1 {\n    padding: 0;\n    margin: 0;\n    font-size: 50px;\n    color: #215732;\n}\n\n/* TOOLTIP */\n.tooltip-container {\n    grid-column-start: 4;\n    grid-row-start: 3;\n    width: max-content;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: flex-end;\n    position: relative;\n    left: 90px;\n    top: 20px;\n}\n\n.tooltip-container img {\n    width: 8%;\n    cursor: pointer;\n}\n\n.tooltip-icon:hover + .tooltip-text {\n    visibility: visible;\n}\n\n.tooltip-text {\n    position: absolute;\n    width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color: white;\n    border-radius: 10px;\n    padding: 6px;\n    right: 160px;\n    top: 191px;\n    visibility: hidden;\n}\n\n.tooltip-container-menu {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 3;\n    width: max-content;\n    display: flex;\n    justify-content: end;\n    align-items: end;\n    position: relative;\n    left: 407px;\n    top: 3px;\n}\n\n.tooltip-container-menu img {\n    width: 8%;\n}\n\n.tooltip-text-menu {\n    position: absolute;\n    width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color: white;\n    border-radius: 10px;\n    padding: 6px;\n    right: 20px;\n    top: 125px;\n    visibility: hidden;\n}\n\n.tooltip-icon-menu:hover + .tooltip-text-menu {\n    visibility: visible;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* This code remove margins from page \nand makes the body to take all the height available\nin the page */\nhtml, body {\n    height: 100%;\n    margin: 0;\n    overflow: hidden;\n}\n\n.body-back-ground {\n    background-image: url('./img/background.jpg');\n    background-repeat: no-repeat;\n    background-position: 20% 63%;\n    background-size: 175%;\n}\n\n#content {\n    /* BODY DISPLAY */\n    display: grid;\n    grid-template-columns: 80px 1fr 1fr .3fr;\n    grid-template-rows: 1fr 1fr 1fr;\n}   \n\n/* HEADER */\n#header-1 {\n    display: grid;\n    grid-template-columns: 30px;\n    gap: 240px;\n}\n\n#header-2 {\n    margin-top: 20px;\n}\n\n#logo-plus-brand {\n    display: grid;\n    grid-template-columns: 60px 40px;\n    gap: 42px;\n    /* align-content: space-between; */\n}\n\n#logo-plus-brand img {\n    width: 200%;\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    display: flex;\n    justify-items: flex-start;\n    align-items: flex-end;\n    font-size: 30px;\n}\n\n\nul {\n    writing-mode: vertical-lr;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    color: #215732;\n}\n\na {\n    cursor: pointer;\n}\n\na:hover {\n    text-decoration: line-through;\n}\n\n.nav-bar {\n    display: grid;\n    grid-template-columns: 51px;\n    grid-template-rows: 32px;\n    grid-auto-flow: column;\n    grid-gap: 15px\n}\n\n\n/* MAIN */\n\n#the-home {\n    display: flex;\n    flex-direction: column;\n    grid-row-start: 2;\n    grid-column-start: 2;\n    justify-content: flex-end;\n}\n\n#first-hero {\n    width: 610px;\n    display: flex;\n    align-self: center;\n    font-size: 48px;\n    color: #215732;\n    margin: 0;\n    padding: 0;\n    line-height: 40px;\n}\n\n#second-hero {\n    margin: 0;\n    padding: 0;\n    width: 600px;\n    align-self: center;\n}\n\n#second-hero span, \n#second-hero h1 {\n    font-size: 16px;\n    font-weight: 200;\n    color: #215732;\n}\n\n#second-hero h1 {\n    display: block;\n}\n\n#brand-name {\n    position: absolute;\n    left: 84%;\n    writing-mode: tb;\n    top: 70px;\n}\n\n#brand-name h1 {\n    font-size: 115px;\n}\n\n/* MENU */\n\n.menu-background {\n    background-image: url('./img/background.png');\n}\n\n#the-menu-first-div {\n    position: absolute;\n    top: 260px;\n    left: 100px;\n    width: 500px;\n    height: 240px;\n    background-color: #215732; \n    grid-column-start: 2;\n    align-content: center;\n    border-top-left-radius: 30% 24%;\n    border-top-right-radius: 70% 81%;\n    border-bottom-right-radius: 80% 19%;\n    border-bottom-left-radius: 20% 76%;\n}\n\n#the-menu-second-div {\n    position: absolute;\n    top: 205px;\n    left: 170px;\n    width: 314px;\n    height: 351px;\n    background-color: #B7CADB;\n    grid-column-start: 2;\n    align-content: center;\n    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n}\n\n.cup-container {\n    position: absolute;\n    top: 280px;\n    left: 220px;\n}\n\n.cup-container img {\n    width: 180%;\n}\n\n.the-menu {\n    display: grid;\n    grid-column-start: 3;\n    grid-row-start: 1;\n     grid-row-end: 3;\n    margin-top: 40px;\n    color: #215732;;\n}\n\n.rows {\n    border-top: 1px solid;\n    overflow: hidden;\n    height: 43px;\n}\n\n@keyframes moveToTop {\n    from {transform: translateY(0px);}\n    to {transform: translateY(-30px);}\n}\n\n@keyframes moveToBottom {\n    from {transform: translateY(-30px);}\n    to {transform: translateY(0px);}\n}\n\n/* Move each coffee to top on hover */\n.rows:hover .spans, .rows:hover .test {\n    /* first animation */\n    animation-name: moveToTop;\n    animation-duration: .2s;\n    animation-fill-mode: forwards;\n}\n\n/* Move each coffee to bottom when on hover\neffect is done */\n.rows .spans, .rows .test {\n    /* first animation */\n    animation-name: moveToBottom;\n    animation-duration: .2s;\n    animation-fill-mode: forwards;\n}\n\n.spans {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 12px;\n    cursor: pointer;\n    margin: 0;\n}\n\n.data3 {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    gap: 15px;\n}\n\n.sugar-free, .low-calories, .bio {\n    width: 15%;\n}\n\n.test {\n    font-size: 20px;\n    width: 3000px;\n    cursor: pointer;\n    color: #8b4513;\n}\n\n.runn-text-1, .runn-text-2, .runn-text-3 {\n    animation-duration: 10s;\n    animation-timing-function: linear;\n    animation-delay: 0s;\n    animation-iteration-count: infinite;\n    animation-direction: normal;\n    animation-fill-mode: none;\n    animation-play-state: running;\n    animation-name: scroll;\n    position: absolute;\n}\n\n.runn-text-2 {\n    left: 30%;\n}\n\n.runn-text-3 {\n    left: 50%;\n}\n\n@keyframes scroll {\n    0% {transform: translate(0,0);}\n    100% {transform: translate(-900px,0);}\n}\n\n/* IMAGE CUP EFFECT */\n\n.img-container {\n    position: absolute;\n    left: 232px;\n    top: -250px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\n.img-container div {\n    grid-column-start: 1;\n    grid-row-start: 1;\n}\n\n.img-container img {\n    width: 170%;\n}\n\n.show {\n    animation-name: cupDown;\n    animation-duration: .4s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes cupDown {\n    0%  {transform: translateY(0px);}\n    100% {transform: translateY(540px);}  \n}\n\n\n/* STEAM */\n.list-container {\n    grid-column-start: 2;\n    grid-row-start: 2;\n    width: min-content;\n    height: min-content;\n    position: relative;\n    left: 200px;\n    top:62px;\n}\n\n.list-container ul {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.show-steam {                                  /* .steam-list-item */\n    background-color: #a8a4a4;\n    width: 10px;\n    height: 10px;\n    border-radius: 10px;\n    box-shadow: 10px 10px 20px 20px #a8a4a4;\n    opacity: 0;\n\n}\n\n.list-container ul li {\n    animation-name: steam1;\n    animation-duration: 3s;\n    /* animation-delay: 20s; */\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    \n}\n\n@keyframes steam1 {\n    0% {transform: translateY(0); opacity: .7;}\n    50% {transform: translateY(-20px); opacity: 0;}\n}\n\n\n/* ABOUT PAGE */\n\n#about-text-container {\n    grid-column-start: 2;\n    grid-row-start: 2;\n    grid-column-end: 4;\n    display: flex;\n    flex-direction: column;\n    width: max-content;\n    justify-content: center;\n    position: relative;\n    left: 180px;\n}\n\n#about-text-container h1 {\n    padding: 0;\n    margin: 0;\n    font-size: 50px;\n    color: #215732;\n}\n\n/* TOOLTIP */\n.tooltip-container {\n    grid-column-start: 4;\n    grid-row-start: 3;\n    width: max-content;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: flex-end;\n    position: relative;\n    left: 90px;\n    top: 20px;\n}\n\n.tooltip-container img {\n    width: 8%;\n    cursor: pointer;\n}\n\n.tooltip-icon:hover + .tooltip-text {\n    visibility: visible;\n}\n\n.tooltip-text {\n    position: absolute;\n    width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color: white;\n    border-radius: 10px;\n    padding: 6px;\n    right: 160px;\n    top: 191px;\n    visibility: hidden;\n}\n\n.tooltip-container-menu {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 3;\n    width: max-content;\n    display: flex;\n    justify-content: end;\n    align-items: end;\n    position: relative;\n    left: 407px;\n    top: 3px;\n}\n\n.tooltip-container-menu img {\n    width: 8%;\n}\n\n.tooltip-text-menu {\n    position: absolute;\n    width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color: white;\n    border-radius: 10px;\n    padding: 6px;\n    right: 20px;\n    top: 125px;\n    visibility: hidden;\n}\n\n.tooltip-icon-menu:hover + .tooltip-text-menu {\n    visibility: visible;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _pageState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageState.js */ "./src/pageState.js");
/* harmony import */ var _updatePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePage.js */ "./src/updatePage.js");
/* harmony import */ var _updateStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateStatus.js */ "./src/updateStatus.js");
/* harmony import */ var _img_info_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/info.svg */ "./src/img/info.svg");






function about() {
    

    // get state of the page
    const thePage = _pageState_js__WEBPACK_IMPORTED_MODULE_0__.inPage.statePage.about;
    const currentPage = 'about'

    if (thePage === false) {

        // remove all content except headers
        (0,_updatePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

        // get content node reference
        const content = document.getElementById('content');
        
        // Change background if comming from home
        const body = document.getElementsByTagName('body');
        if (body[0].classList.contains('body-back-ground')) {
            document.body.classList.toggle('body-back-ground');
            body[0].classList.toggle('menu-background');
        }
        
        // create node for text
        const textContainer = document.createElement('div');
        textContainer.setAttribute('id', 'about-text-container')
        const text1 = document.createElement('h1');
        const text2 = document.createElement('h1');
        text1.textContent = 'DO NO SAY MORE';
        text2.textContent = 'GRAB ONE CUP AND GET TO WORK';
        textContainer.appendChild(text1)
        textContainer.appendChild(text2)
        content.appendChild(textContainer);

        // BIG BRAND NAME
        const bigBrandName = document.createElement('div');
        const brandNameText = document.createElement('h1');
        bigBrandName.setAttribute('id','brand-name');
        brandNameText.textContent = 'DTIERRA';
        bigBrandName.appendChild(brandNameText);
        content.appendChild(bigBrandName);

        // TOOLTIP PROJECT INFO
        const toolTipContainer = document.createElement('div');
        toolTipContainer.setAttribute('class', 'tooltip-container');
        const tooltipIcon = document.createElement('img');
        tooltipIcon.setAttribute('class', 'tooltip-icon');
        tooltipIcon.setAttribute('src', _img_info_svg__WEBPACK_IMPORTED_MODULE_3__);
        const tooltipText = document.createElement('span');
        tooltipText.setAttribute('class', 'tooltip-text');
        tooltipText.textContent = 'This is a project for TOP';
        toolTipContainer.appendChild(tooltipIcon);
        toolTipContainer.appendChild(tooltipText);
        content.appendChild(toolTipContainer);
        

        // Change the status of all pages according
        // to the clicked one
        (0,_updateStatus_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentPage);

        return content;
    }

}

/***/ }),

/***/ "./src/cupEffectIn.js":
/*!****************************!*\
  !*** ./src/cupEffectIn.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cupEffectIn)
/* harmony export */ });
// import AMERICANO from './img/americano.svg';
// import CAPPUCCINO from './img/cappuccino.svg';
// import MACCHIATO from './img/macchiato.svg';
// import EXPRESSO from './img/expresso.svg';
// import FLATWHITE from './img/flatWhite.svg';
// import MOCHA from './img/mocha.svg';
// import LATTE from './img/latte.svg';

// const images = {
//     'AMERICANO': AMERICANO,
//     'CAPPUCCINO': CAPPUCCINO,
//     'MACCHIATO': MACCHIATO,
//     'EXPRESSO': EXPRESSO,
//     'FLATWHITE': FLATWHITE,
//     'MOCHA': MOCHA, 
//     'LATTE': LATTE, 
// }

function cupEffectIn(e) {

    // get row class on hover
    const thisImage = e.currentTarget.className.split(' ')[0];

    // get image with the class 'thisImage' and toggle the
    // show class
    const toggleThis = document.querySelector(`.each-img-container${thisImage}`);
    toggleThis.classList.toggle('show');

    setTimeout(() =>{
        const toggleSteam = document.querySelectorAll('.steam-list-item');
        toggleSteam.forEach(item => {
            item.classList.toggle('show-steam');
        });
    }, 500)

}

/***/ }),

/***/ "./src/cupEffectOut.js":
/*!*****************************!*\
  !*** ./src/cupEffectOut.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cupEffectOut)
/* harmony export */ });

function cupEffectOut(e) {
    
    // get row class on hover
    const thisImage = e.currentTarget.className.split(' ')[0];

    const toggleThis = document.querySelector(`.each-img-container${thisImage}`);
    toggleThis.classList.toggle('show');

    const toggleSteam = document.querySelectorAll('.steam-list-item');
    console.log(toggleSteam);
    toggleSteam.forEach(item => {
        item.classList.toggle('show-steam');
    });
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _img_drop_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/drop.svg */ "./src/img/drop.svg");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");






function header() {
    
    const content = document.getElementById('content');

    // insert logo
    const theLogoPlusBrandContainer = document.createElement('div');
    theLogoPlusBrandContainer.setAttribute('id', 'logo-plus-brand')

    // Logo image container
    const logoImgContainer = document.createElement('img');
    logoImgContainer.setAttribute('src', _img_drop_svg__WEBPACK_IMPORTED_MODULE_1__);
    logoImgContainer.setAttribute('id', 'the-logo')

    // Brand name
    const theBrandName = document.createElement('h1');
    theBrandName.textContent = 'Dtierra';

    // Insert Logo and Brand
    theLogoPlusBrandContainer.appendChild(logoImgContainer);
    theLogoPlusBrandContainer.appendChild(theBrandName);


    // create header 1 for logo and brand
    const theHeader1 = document.createElement('header');
    theHeader1.setAttribute('id', 'header-1');
    theHeader1.appendChild(theLogoPlusBrandContainer);

    // create header 2 for menu
    const theHeader2 = document.createElement('header');
    theHeader2.setAttribute('id', 'header-2');
    const navContainer = document.createElement('div');
    navContainer.setAttribute('class', 'nav-bar-container');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'nav-bar');
    theHeader2.appendChild(navContainer);



    // Write..... 
    const NAVBAR = {
        'HOME': _index_js__WEBPACK_IMPORTED_MODULE_0__.index,
        'MENU': _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        'ABOUT': _about_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    };
    // Create li items and put them inside the ul
    for (const eachOption in NAVBAR) {
        let li = document.createElement('li');
        li.setAttribute('class', `nav-item ${eachOption}`);
        // li.textContent = NAVBAR[itemCount];
        let link = document.createElement('a');
        link.textContent = eachOption;
        link.onclick = NAVBAR[eachOption];
        li.appendChild(link);
        ul.appendChild(li);
    }

    navContainer.appendChild(ul);
    theHeader2.appendChild(navContainer);
    content.appendChild(theHeader1);
    content.appendChild(theHeader2);

    return content;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "index": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _pageState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageState.js */ "./src/pageState.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _updatePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updatePage.js */ "./src/updatePage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _updateStatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateStatus.js */ "./src/updateStatus.js");
/* harmony import */ var _img_info_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/info.svg */ "./src/img/info.svg");







// The index function render the home page 
function index() {

    // get state of the page
    const thePage = _pageState_js__WEBPACK_IMPORTED_MODULE_0__.inPage.statePage.index;
    const currentPage = 'home'

    if (thePage === false) {


        const content = document.getElementById('content');
        document.body.setAttribute('class', 'body-back-ground');

        // remove all content except headers
        (0,_updatePage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

        const theHome = document.createElement('main');
        theHome.setAttribute('id', 'the-home');

        // 1 HERO TEXT
        const firstHeroText = document.createElement('h1');
        firstHeroText.setAttribute('id', 'first-hero');
        firstHeroText.textContent = 'ONE CUP FOR THE GO IN SEARCH OF DREAMS';

        // 2 HERO TEXT
        const secondHeroTextContainer = document.createElement('div');
        secondHeroTextContainer.setAttribute('id', 'second-hero');
        secondHeroTextContainer.innerHTML = '<h1><span>Dtierra</span>' + ' OFFERS ONE CUP TO GO. STAY JUST ENOUGH TIME BEFORE YOU GO IN SEARCH OF YOUR DREAMS.</h1>'


        // BIG BRAND NAME
        const bigBrandName = document.createElement('div');
        const brandNameText = document.createElement('h1');
        bigBrandName.setAttribute('id','brand-name');
        brandNameText.textContent = 'DTIERRA';
        bigBrandName.appendChild(brandNameText);

        // TOOLTIP PROJECT INFO
        const toolTipContainer = document.createElement('div');
        toolTipContainer.setAttribute('class', 'tooltip-container');
        const tooltipIcon = document.createElement('img');
        tooltipIcon.setAttribute('class', 'tooltip-icon');
        tooltipIcon.setAttribute('src', _img_info_svg__WEBPACK_IMPORTED_MODULE_5__);
        const tooltipText = document.createElement('span');
        tooltipText.setAttribute('class', 'tooltip-text');
        tooltipText.textContent = 'This is a project for TOP';
        toolTipContainer.appendChild(tooltipIcon);
        toolTipContainer.appendChild(tooltipText);
        content.appendChild(toolTipContainer);


        // Change the status of all pages according
        // to the clicked one
        (0,_updateStatus_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentPage);

        theHome.appendChild(firstHeroText);
        theHome.appendChild(secondHeroTextContainer);
        content.appendChild(theHome);
        content.appendChild(bigBrandName)

        return content;
    
    }
}



document.body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild(index());



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _pageState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageState.js */ "./src/pageState.js");
/* harmony import */ var _updatePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePage.js */ "./src/updatePage.js");
/* harmony import */ var _updateStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateStatus.js */ "./src/updateStatus.js");
/* harmony import */ var _cupEffectIn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cupEffectIn.js */ "./src/cupEffectIn.js");
/* harmony import */ var _cupEffectOut_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cupEffectOut.js */ "./src/cupEffectOut.js");
/* harmony import */ var _img_sugarFree_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/sugarFree.svg */ "./src/img/sugarFree.svg");
/* harmony import */ var _img_lowCalories_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/lowCalories.svg */ "./src/img/lowCalories.svg");
/* harmony import */ var _img_bio_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/bio.svg */ "./src/img/bio.svg");
/* harmony import */ var _img_image_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/image.svg */ "./src/img/image.svg");
/* harmony import */ var _img_americano_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/americano.svg */ "./src/img/americano.svg");
/* harmony import */ var _img_cappuccino_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/cappuccino.svg */ "./src/img/cappuccino.svg");
/* harmony import */ var _img_macchiato_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/macchiato.svg */ "./src/img/macchiato.svg");
/* harmony import */ var _img_expresso_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/expresso.svg */ "./src/img/expresso.svg");
/* harmony import */ var _img_flatWhite_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/flatWhite.svg */ "./src/img/flatWhite.svg");
/* harmony import */ var _img_mocha_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/mocha.svg */ "./src/img/mocha.svg");
/* harmony import */ var _img_latte_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/latte.svg */ "./src/img/latte.svg");











// import cups images










function menu() {

    // get state of the page
    const thePage = _pageState_js__WEBPACK_IMPORTED_MODULE_0__.inPage.statePage.menu;
    const currentPage = 'menu';

    if (thePage == false) {

        // get main node reference: content 
        const content = document.getElementById('content');

        // remove all content except headers
        (0,_updatePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

        // Change background if comming from home
        const body = document.getElementsByTagName('body');
        if (body[0].classList.contains('body-back-ground')) {
            document.body.classList.toggle('body-back-ground');
            body[0].classList.toggle('menu-background');
        }


        // Lets create the menu
        // Create border-radius effect: first
        const theMenuOne = document.createElement('div')
        theMenuOne.setAttribute('id', 'the-menu-first-div');
        const firstDiv = document.createElement('div');
        firstDiv.setAttribute('class', 'first-div-box');
        theMenuOne.appendChild(firstDiv)
        content.appendChild(theMenuOne);
        
        // Create border-radius effect: second
        const theMenuTwo = document.createElement('div');
        theMenuTwo.setAttribute('id', 'the-menu-second-div');
        const secondDiv = document.createElement('div');
        secondDiv.setAttribute('class', 'second-div-box');
        theMenuTwo.appendChild(secondDiv);
        content.appendChild(theMenuTwo);

        // the menu
        const COFFEES = {'AMERICANO': "SOME FRESH HOT WATER AND A DOUBLE EXPRESSO ON TOP. YOU'RE READY TO GO!",
                         'CAPPUCCINO':'A LAYER OF FOAM COMBINED WITH WARMING MILK AND A BREWED EXPRESSO. YUMMY!',
                         'EXPRESSO': 'A SMALL, STRONG DRINK MADE USING GROUND COFFEE UNDER HIGH WATER PRESSURE', 
                         'MACCHIATO': 'AN EXPRESSO WITH A SMALL AMOUNT OF FOAMED MILK. DELICIOUS, HMMM!', 
                         'FLATWHITE': 'A SMALL, STRONG LATTE WITH A TOUCH OF LATTE ART.  ART AND COFFEE',
                         'LATTE': 'MORE MILK, LESS FOAM AND COFFEE. MORE MILK, LESS FOAM AND COFFEE. READY? GO!', 
                         'MOCHA': 'A CHOCOLATE-FLAVOURED COFFEE. YES, A CHOCOLATE-FLAVOURED COFFEE. GO NOW!',};

        const images = {
            'AMERICANO': _img_americano_svg__WEBPACK_IMPORTED_MODULE_9__,
            'CAPPUCCINO': _img_cappuccino_svg__WEBPACK_IMPORTED_MODULE_10__,
            'MACCHIATO': _img_macchiato_svg__WEBPACK_IMPORTED_MODULE_11__,
            'EXPRESSO': _img_expresso_svg__WEBPACK_IMPORTED_MODULE_12__,
            'FLATWHITE': _img_flatWhite_svg__WEBPACK_IMPORTED_MODULE_13__,
            'MOCHA': _img_mocha_svg__WEBPACK_IMPORTED_MODULE_14__, 
            'LATTE': _img_latte_svg__WEBPACK_IMPORTED_MODULE_15__, 
        }

        // THE MENU
        const menu = document.createElement('div');
        menu.setAttribute('class', 'the-menu');

        for (const eachCoffe in COFFEES) {
            const row = document.createElement('div');
            row.setAttribute('class', `${eachCoffe} rows`);
            row.addEventListener('mouseenter', _cupEffectIn_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
            row.addEventListener('mouseleave', _cupEffectOut_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

            const spans = document.createElement('div');
            spans.setAttribute('class', 'spans');
            
            const data1 = document.createElement('span');
            data1.textContent = eachCoffe;
            const data2 = document.createElement('span');
            data2.textContent = 'DTIERRA';

            // badge images
            const data3 = document.createElement('div');
            data3.setAttribute('class', 'data3');
            const img1 = document.createElement('img');
            const img2 = document.createElement('img');
            const img3 = document.createElement('img');
            img1.setAttribute('src', _img_sugarFree_svg__WEBPACK_IMPORTED_MODULE_5__);
            img2.setAttribute('src', _img_lowCalories_svg__WEBPACK_IMPORTED_MODULE_6__);
            img3.setAttribute('src', _img_bio_svg__WEBPACK_IMPORTED_MODULE_7__);
            img1.setAttribute('class', 'sugar-free');
            img2.setAttribute('class', 'low-calories');
            img3.setAttribute('class', 'bio');
            data3.appendChild(img1);
            data3.appendChild(img2);
            data3.appendChild(img3);
            spans.appendChild(data1);
            spans.appendChild(data2);
            spans.appendChild(data3);
            row.appendChild(spans);

            // RUNNING TEXT
            const runningTextContainer = document.createElement('div');
            runningTextContainer.setAttribute('class', 'test');
            // runningTextContainer.addEventListener('mouseleave', cupEffectOut);

            const runnText1 = document.createElement('span');
            runnText1.setAttribute('class', 'runn-text-1');
            const runnText2 = document.createElement('span')
            runnText2.setAttribute('class', 'runn-text-2')
            runnText1.textContent = COFFEES[eachCoffe];
            runnText2.textContent = COFFEES[eachCoffe];
            runningTextContainer.appendChild(runnText1);
            runningTextContainer.appendChild(runnText2);

            row.appendChild(runningTextContainer);

            menu.appendChild(row);
        }
        content.appendChild(menu);


        // THE IMAGES FOR CUP EFFECT
        const imgBigContainer = document.createElement('div');
        imgBigContainer.setAttribute('class', 'img-container');
        for (const eachImage in images) {
            const imgEachContainer = document.createElement('div');
            imgEachContainer.setAttribute('class', `each-img-container${eachImage}`);
            const img = document.createElement('img');
            img.setAttribute('src', images[eachImage]);
            img.setAttribute('class', `the${eachImage}`);
            imgEachContainer.appendChild(img);
            imgBigContainer.appendChild(imgEachContainer);                              
        }
        content.appendChild(imgBigContainer);

        // the list for the steam
        const steamListContainer = document.createElement('div');
        steamListContainer.setAttribute('class', 'list-container');
        const steamList = document.createElement('ul')
        for (let counter = 0; counter < 2; counter++) {
            const listItem = document.createElement('li');
            listItem.setAttribute('class', 'steam-list-item')
            steamList.appendChild(listItem);
        } 
        steamListContainer.appendChild(steamList);
        content.appendChild(steamListContainer);

        // TOOLTIP PROJECT INFO
        const toolTipContainer = document.createElement('div');
        toolTipContainer.setAttribute('class', 'tooltip-container-menu');
        const tooltipIcon = document.createElement('img');
        tooltipIcon.setAttribute('class', 'tooltip-icon-menu');
        tooltipIcon.setAttribute('src', _img_image_svg__WEBPACK_IMPORTED_MODULE_8__);
        const tooltipText = document.createElement('span');
        tooltipText.setAttribute('class', 'tooltip-text-menu');
        tooltipText.textContent = 'Each one of the healthy food badge are Image by Freepik';
        toolTipContainer.appendChild(tooltipIcon);
        toolTipContainer.appendChild(tooltipText);
        content.appendChild(toolTipContainer);
        

        // Change the status of all pages according
        // to the clicked one
        (0,_updateStatus_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentPage);

        return content
    }
} 


/***/ }),

/***/ "./src/pageState.js":
/*!**************************!*\
  !*** ./src/pageState.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inPage": () => (/* binding */ inPage)
/* harmony export */ });
//  Keep track of the current page
const inPage = (() => {

    return {
        statePage: {
            'index': false,
            'menu': false,
            'about': false,
        }
    }
})();

// Export inPage IIFE 


/***/ }),

/***/ "./src/updatePage.js":
/*!***************************!*\
  !*** ./src/updatePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updatePage)
/* harmony export */ });
function updatePage() {

    const content = document.getElementById('content');
    for (const eachChild of Array.from(content.children)) {
        // remove children not header
        if (eachChild.id.includes('header') == false) {
            eachChild.remove();
        }
    }
}

/***/ }),

/***/ "./src/updateStatus.js":
/*!*****************************!*\
  !*** ./src/updateStatus.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateStatus)
/* harmony export */ });
/* harmony import */ var _pageState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageState.js */ "./src/pageState.js");


function updateStatus(currentPage) {
    for (const eachState in _pageState_js__WEBPACK_IMPORTED_MODULE_0__.inPage.statePage) {
        if (eachState == currentPage) {
            _pageState_js__WEBPACK_IMPORTED_MODULE_0__.inPage.statePage[eachState] = true;
        } else {
            _pageState_js__WEBPACK_IMPORTED_MODULE_0__.inPage.statePage[eachState] = false;
        }
    }
}

/***/ }),

/***/ "./src/img/americano.svg":
/*!*******************************!*\
  !*** ./src/img/americano.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf871d4a062bdc8f5eb0.svg";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a13f95a6fca5bcd1f20a.jpg";

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a1b9b41b9d83693d1c9.png";

/***/ }),

/***/ "./src/img/bio.svg":
/*!*************************!*\
  !*** ./src/img/bio.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0626fabfc5687ce1bcb.svg";

/***/ }),

/***/ "./src/img/cappuccino.svg":
/*!********************************!*\
  !*** ./src/img/cappuccino.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad032b3eff9d03d998e7.svg";

/***/ }),

/***/ "./src/img/drop.svg":
/*!**************************!*\
  !*** ./src/img/drop.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f160a98b0b509f673dd.svg";

/***/ }),

/***/ "./src/img/expresso.svg":
/*!******************************!*\
  !*** ./src/img/expresso.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b494f34f20a4d41ef26b.svg";

/***/ }),

/***/ "./src/img/flatWhite.svg":
/*!*******************************!*\
  !*** ./src/img/flatWhite.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5383e1f9da3e76ae9615.svg";

/***/ }),

/***/ "./src/img/image.svg":
/*!***************************!*\
  !*** ./src/img/image.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e2a1a0f65a545a4a573.svg";

/***/ }),

/***/ "./src/img/info.svg":
/*!**************************!*\
  !*** ./src/img/info.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b694dfa2923095bbbba5.svg";

/***/ }),

/***/ "./src/img/latte.svg":
/*!***************************!*\
  !*** ./src/img/latte.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11cdbe5e8734b166012f.svg";

/***/ }),

/***/ "./src/img/lowCalories.svg":
/*!*********************************!*\
  !*** ./src/img/lowCalories.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67287efb261905c9895c.svg";

/***/ }),

/***/ "./src/img/macchiato.svg":
/*!*******************************!*\
  !*** ./src/img/macchiato.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e9a568de9ba86032a53.svg";

/***/ }),

/***/ "./src/img/mocha.svg":
/*!***************************!*\
  !*** ./src/img/mocha.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "beee2d3d9e039b0b3a7c.svg";

/***/ }),

/***/ "./src/img/sugarFree.svg":
/*!*******************************!*\
  !*** ./src/img/sugarFree.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87254d69caa9c0191958.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZDc2MDAwNGRlYmZkMGMwZjJhMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsbUtBQW1LLG1CQUFtQixnQkFBZ0IsdUJBQXVCLEdBQUcsdUJBQXVCLHdFQUF3RSxtQ0FBbUMsbUNBQW1DLDRCQUE0QixHQUFHLGNBQWMsNENBQTRDLCtDQUErQyxzQ0FBc0MsTUFBTSw2QkFBNkIsb0JBQW9CLGtDQUFrQyxpQkFBaUIsR0FBRyxlQUFlLHVCQUF1QixHQUFHLHNCQUFzQixvQkFBb0IsdUNBQXVDLGdCQUFnQix1Q0FBdUMsS0FBSywwQkFBMEIsa0JBQWtCLGdCQUFnQixpQkFBaUIsR0FBRyxRQUFRLG9CQUFvQixnQ0FBZ0MsNEJBQTRCLHNCQUFzQixHQUFHLFVBQVUsZ0NBQWdDLGdCQUFnQixpQkFBaUIsdUJBQXVCLHFCQUFxQixHQUFHLE9BQU8sc0JBQXNCLEdBQUcsYUFBYSxvQ0FBb0MsR0FBRyxjQUFjLG9CQUFvQixrQ0FBa0MsK0JBQStCLDZCQUE2Qix1QkFBdUIsK0JBQStCLG9CQUFvQiw2QkFBNkIsd0JBQXdCLDJCQUEyQixnQ0FBZ0MsR0FBRyxpQkFBaUIsbUJBQW1CLG9CQUFvQix5QkFBeUIsc0JBQXNCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLHdCQUF3QixHQUFHLGtCQUFrQixnQkFBZ0IsaUJBQWlCLG1CQUFtQix5QkFBeUIsR0FBRywwQ0FBMEMsc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsaUJBQWlCLHlCQUF5QixnQkFBZ0IsdUJBQXVCLGdCQUFnQixHQUFHLG9CQUFvQix1QkFBdUIsR0FBRyxvQ0FBb0Msd0VBQXdFLEdBQUcseUJBQXlCLHlCQUF5QixpQkFBaUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsaUNBQWlDLDJCQUEyQiw0QkFBNEIsc0NBQXNDLHVDQUF1QywwQ0FBMEMseUNBQXlDLEdBQUcsMEJBQTBCLHlCQUF5QixpQkFBaUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsZ0NBQWdDLDJCQUEyQiw0QkFBNEIsdURBQXVELEdBQUcsb0JBQW9CLHlCQUF5QixpQkFBaUIsa0JBQWtCLEdBQUcsd0JBQXdCLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLDJCQUEyQix3QkFBd0IsdUJBQXVCLHVCQUF1QixzQkFBc0IsR0FBRyxXQUFXLDRCQUE0Qix1QkFBdUIsbUJBQW1CLEdBQUcsMEJBQTBCLFlBQVksNEJBQTRCLFVBQVUsOEJBQThCLEdBQUcsNkJBQTZCLFlBQVksOEJBQThCLFVBQVUsNEJBQTRCLEdBQUcsbUZBQW1GLDJEQUEyRCw4QkFBOEIsb0NBQW9DLEdBQUcsK0ZBQStGLDhEQUE4RCw4QkFBOEIsb0NBQW9DLEdBQUcsWUFBWSxvQkFBb0IsNENBQTRDLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsWUFBWSxvQkFBb0IsNEJBQTRCLDhCQUE4QixnQkFBZ0IsR0FBRyxzQ0FBc0MsaUJBQWlCLEdBQUcsV0FBVyxzQkFBc0Isb0JBQW9CLHNCQUFzQixxQkFBcUIsR0FBRyw4Q0FBOEMsOEJBQThCLHdDQUF3QywwQkFBMEIsMENBQTBDLGtDQUFrQyxnQ0FBZ0Msb0NBQW9DLDZCQUE2Qix5QkFBeUIsR0FBRyxrQkFBa0IsZ0JBQWdCLEdBQUcsa0JBQWtCLGdCQUFnQixHQUFHLHVCQUF1QixVQUFVLDJCQUEyQixZQUFZLGdDQUFnQyxHQUFHLDhDQUE4Qyx5QkFBeUIsa0JBQWtCLGtCQUFrQixvQkFBb0IsaUNBQWlDLDhCQUE4QixHQUFHLHdCQUF3QiwyQkFBMkIsd0JBQXdCLEdBQUcsd0JBQXdCLGtCQUFrQixHQUFHLFdBQVcsOEJBQThCLDhCQUE4QixvQ0FBb0MsR0FBRyx3QkFBd0IsV0FBVyw0QkFBNEIsWUFBWSxnQ0FBZ0MsR0FBRyxvQ0FBb0MsMkJBQTJCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLHlCQUF5QixrQkFBa0IsZUFBZSxHQUFHLHdCQUF3QixvQkFBb0IsOEJBQThCLDRCQUE0Qiw2QkFBNkIsZ0JBQWdCLEdBQUcsbURBQW1ELHNEQUFzRCxrQkFBa0IsbUJBQW1CLDBCQUEwQiw4Q0FBOEMsaUJBQWlCLEtBQUssMkJBQTJCLDZCQUE2Qiw2QkFBNkIsK0JBQStCLDRDQUE0Qyw2Q0FBNkMsU0FBUyx1QkFBdUIsVUFBVSwwQkFBMEIsYUFBYSxXQUFXLDhCQUE4QixZQUFZLEdBQUcsaURBQWlELDJCQUEyQix3QkFBd0IseUJBQXlCLG9CQUFvQiw2QkFBNkIseUJBQXlCLDhCQUE4Qix5QkFBeUIsa0JBQWtCLEdBQUcsOEJBQThCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHFCQUFxQixHQUFHLHVDQUF1QywyQkFBMkIsd0JBQXdCLHlCQUF5QixvQkFBb0Isb0NBQW9DLDRCQUE0Qix5QkFBeUIsaUJBQWlCLGdCQUFnQixHQUFHLDRCQUE0QixnQkFBZ0Isc0JBQXNCLEdBQUcseUNBQXlDLDBCQUEwQixHQUFHLG1CQUFtQix5QkFBeUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDhCQUE4QixtQkFBbUIsMEJBQTBCLG1CQUFtQixtQkFBbUIsaUJBQWlCLHlCQUF5QixHQUFHLDZCQUE2QiwyQkFBMkIseUJBQXlCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDJCQUEyQix1QkFBdUIseUJBQXlCLGtCQUFrQixlQUFlLEdBQUcsaUNBQWlDLGdCQUFnQixHQUFHLHdCQUF3Qix5QkFBeUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDhCQUE4QixtQkFBbUIsMEJBQTBCLG1CQUFtQixrQkFBa0IsaUJBQWlCLHlCQUF5QixHQUFHLG1EQUFtRCwwQkFBMEIsR0FBRyxTQUFTLGlGQUFpRixLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxV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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3VwRWZmZWN0SW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2N1cEVmZmVjdE91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZVN0YXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91cGRhdGVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91cGRhdGVTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhpcyBjb2RlIHJlbW92ZSBtYXJnaW5zIGZyb20gcGFnZSBcXG5hbmQgbWFrZXMgdGhlIGJvZHkgdG8gdGFrZSBhbGwgdGhlIGhlaWdodCBhdmFpbGFibGVcXG5pbiB0aGUgcGFnZSAqL1xcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJvZHktYmFjay1ncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgNjMlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE3NSU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgLyogQk9EWSBESVNQTEFZICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxZnIgMWZyIC4zZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxufSAgIFxcblxcbi8qIEhFQURFUiAqL1xcbiNoZWFkZXItMSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweDtcXG4gICAgZ2FwOiAyNDBweDtcXG59XFxuXFxuI2hlYWRlci0yIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2xvZ28tcGx1cy1icmFuZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCA0MHB4O1xcbiAgICBnYXA6IDQycHg7XFxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxufVxcblxcbiNsb2dvLXBsdXMtYnJhbmQgaW1nIHtcXG4gICAgd2lkdGg6IDIwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuXFxudWwge1xcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiAjMjE1NzMyO1xcbn1cXG5cXG5hIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMycHg7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtZ2FwOiAxNXB4XFxufVxcblxcblxcbi8qIE1BSU4gKi9cXG5cXG4jdGhlLWhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNmaXJzdC1oZXJvIHtcXG4gICAgd2lkdGg6IDYxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY29sb3I6ICMyMTU3MzI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbiNzZWNvbmQtaGVybyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNzZWNvbmQtaGVybyBzcGFuLCBcXG4jc2Vjb25kLWhlcm8gaDEge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiAjMjE1NzMyO1xcbn1cXG5cXG4jc2Vjb25kLWhlcm8gaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2JyYW5kLW5hbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDg0JTtcXG4gICAgd3JpdGluZy1tb2RlOiB0YjtcXG4gICAgdG9wOiA3MHB4O1xcbn1cXG5cXG4jYnJhbmQtbmFtZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTE1cHg7XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4ubWVudS1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuI3RoZS1tZW51LWZpcnN0LWRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNjBweDtcXG4gICAgbGVmdDogMTAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNTczMjsgXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwJSAyNCU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3MCUgODElO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODAlIDE5JTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjAlIDc2JTtcXG59XFxuXFxuI3RoZS1tZW51LXNlY29uZC1kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjA1cHg7XFxuICAgIGxlZnQ6IDE3MHB4O1xcbiAgICB3aWR0aDogMzE0cHg7XFxuICAgIGhlaWdodDogMzUxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCN0NBREI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJSA3MCUgNzAlIDMwJSAvIDMwJSAzMCUgNzAlIDcwJTtcXG59XFxuXFxuLmN1cC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjgwcHg7XFxuICAgIGxlZnQ6IDIyMHB4O1xcbn1cXG5cXG4uY3VwLWNvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogMTgwJTtcXG59XFxuXFxuLnRoZS1tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBjb2xvcjogIzIxNTczMjs7XFxufVxcblxcbi5yb3dzIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDQzcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVRvVG9wIHtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7fVxcbiAgICB0byB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTt9XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVRvQm90dG9tIHtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTt9XFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTt9XFxufVxcblxcbi8qIE1vdmUgZWFjaCBjb2ZmZWUgdG8gdG9wIG9uIGhvdmVyICovXFxuLnJvd3M6aG92ZXIgLnNwYW5zLCAucm93czpob3ZlciAudGVzdCB7XFxuICAgIC8qIGZpcnN0IGFuaW1hdGlvbiAqL1xcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZVRvVG9wO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC4ycztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi8qIE1vdmUgZWFjaCBjb2ZmZWUgdG8gYm90dG9tIHdoZW4gb24gaG92ZXJcXG5lZmZlY3QgaXMgZG9uZSAqL1xcbi5yb3dzIC5zcGFucywgLnJvd3MgLnRlc3Qge1xcbiAgICAvKiBmaXJzdCBhbmltYXRpb24gKi9cXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVUb0JvdHRvbTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuMnM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uc3BhbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmRhdGEzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc3VnYXItZnJlZSwgLmxvdy1jYWxvcmllcywgLmJpbyB7XFxuICAgIHdpZHRoOiAxNSU7XFxufVxcblxcbi50ZXN0IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB3aWR0aDogMzAwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjOGI0NTEzO1xcbn1cXG5cXG4ucnVubi10ZXh0LTEsIC5ydW5uLXRleHQtMiwgLnJ1bm4tdGV4dC0zIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzY3JvbGw7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJ1bm4tdGV4dC0yIHtcXG4gICAgbGVmdDogMzAlO1xcbn1cXG5cXG4ucnVubi10ZXh0LTMge1xcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2Nyb2xsIHtcXG4gICAgMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTAwcHgsMCk7fVxcbn1cXG5cXG4vKiBJTUFHRSBDVVAgRUZGRUNUICovXFxuXFxuLmltZy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDIzMnB4O1xcbiAgICB0b3A6IC0yNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciBkaXYge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxufVxcblxcbi5pbWctY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiAxNzAlO1xcbn1cXG5cXG4uc2hvdyB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjdXBEb3duO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC40cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgY3VwRG93biB7XFxuICAgIDAlICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTQwcHgpO30gIFxcbn1cXG5cXG5cXG4vKiBTVEVBTSAqL1xcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDIwMHB4O1xcbiAgICB0b3A6NjJweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2hvdy1zdGVhbSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIC5zdGVhbS1saXN0LWl0ZW0gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4YTRhNDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggMjBweCAjYThhNGE0O1xcbiAgICBvcGFjaXR5OiAwO1xcblxcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgdWwgbGkge1xcbiAgICBhbmltYXRpb24tbmFtZTogc3RlYW0xO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbiAgICAvKiBhbmltYXRpb24tZGVsYXk6IDIwczsgKi9cXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBcXG59XFxuXFxuQGtleWZyYW1lcyBzdGVhbTEge1xcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAuNzt9XFxuICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgb3BhY2l0eTogMDt9XFxufVxcblxcblxcbi8qIEFCT1VUIFBBR0UgKi9cXG5cXG4jYWJvdXQtdGV4dC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxODBweDtcXG59XFxuXFxuI2Fib3V0LXRleHQtY29udGFpbmVyIGgxIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiAjMjE1NzMyO1xcbn1cXG5cXG4vKiBUT09MVElQICovXFxuLnRvb2x0aXAtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogOTBweDtcXG4gICAgdG9wOiAyMHB4O1xcbn1cXG5cXG4udG9vbHRpcC1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDglO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b29sdGlwLWljb246aG92ZXIgKyAudG9vbHRpcC10ZXh0IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvb2x0aXAtdGV4dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICByaWdodDogMTYwcHg7XFxuICAgIHRvcDogMTkxcHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRvb2x0aXAtY29udGFpbmVyLW1lbnUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA0MDdweDtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi50b29sdGlwLWNvbnRhaW5lci1tZW51IGltZyB7XFxuICAgIHdpZHRoOiA4JTtcXG59XFxuXFxuLnRvb2x0aXAtdGV4dC1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICB0b3A6IDEyNXB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50b29sdGlwLWljb24tbWVudTpob3ZlciArIC50b29sdGlwLXRleHQtbWVudSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFB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Q3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoaXMgY29kZSByZW1vdmUgbWFyZ2lucyBmcm9tIHBhZ2UgXFxuYW5kIG1ha2VzIHRoZSBib2R5IHRvIHRha2UgYWxsIHRoZSBoZWlnaHQgYXZhaWxhYmxlXFxuaW4gdGhlIHBhZ2UgKi9cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5ib2R5LWJhY2stZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMCUgNjMlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE3NSU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgLyogQk9EWSBESVNQTEFZICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxZnIgMWZyIC4zZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxufSAgIFxcblxcbi8qIEhFQURFUiAqL1xcbiNoZWFkZXItMSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweDtcXG4gICAgZ2FwOiAyNDBweDtcXG59XFxuXFxuI2hlYWRlci0yIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2xvZ28tcGx1cy1icmFuZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCA0MHB4O1xcbiAgICBnYXA6IDQycHg7XFxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxufVxcblxcbiNsb2dvLXBsdXMtYnJhbmQgaW1nIHtcXG4gICAgd2lkdGg6IDIwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuXFxudWwge1xcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiAjMjE1NzMyO1xcbn1cXG5cXG5hIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMycHg7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtZ2FwOiAxNXB4XFxufVxcblxcblxcbi8qIE1BSU4gKi9cXG5cXG4jdGhlLWhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNmaXJzdC1oZXJvIHtcXG4gICAgd2lkdGg6IDYxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY29sb3I6ICMyMTU3MzI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbiNzZWNvbmQtaGVybyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNzZWNvbmQtaGVybyBzcGFuLCBcXG4jc2Vjb25kLWhlcm8gaDEge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiAjMjE1NzMyO1xcbn1cXG5cXG4jc2Vjb25kLWhlcm8gaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2JyYW5kLW5hbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDg0JTtcXG4gICAgd3JpdGluZy1tb2RlOiB0YjtcXG4gICAgdG9wOiA3MHB4O1xcbn1cXG5cXG4jYnJhbmQtbmFtZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTE1cHg7XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4ubWVudS1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9iYWNrZ3JvdW5kLnBuZycpO1xcbn1cXG5cXG4jdGhlLW1lbnUtZmlyc3QtZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI2MHB4O1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDI0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1NzMyOyBcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzAlIDI0JTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDcwJSA4MSU7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MCUgMTklO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMCUgNzYlO1xcbn1cXG5cXG4jdGhlLW1lbnUtc2Vjb25kLWRpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMDVweDtcXG4gICAgbGVmdDogMTcwcHg7XFxuICAgIHdpZHRoOiAzMTRweDtcXG4gICAgaGVpZ2h0OiAzNTFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I3Q0FEQjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlIDcwJSA3MCUgMzAlIC8gMzAlIDMwJSA3MCUgNzAlO1xcbn1cXG5cXG4uY3VwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyODBweDtcXG4gICAgbGVmdDogMjIwcHg7XFxufVxcblxcbi5jdXAtY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiAxODAlO1xcbn1cXG5cXG4udGhlLW1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgICBncmlkLXJvdy1lbmQ6IDM7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGNvbG9yOiAjMjE1NzMyOztcXG59XFxuXFxuLnJvd3Mge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogNDNweDtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlVG9Ub3Age1xcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTt9XFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO31cXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlVG9Cb3R0b20ge1xcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO31cXG4gICAgdG8ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO31cXG59XFxuXFxuLyogTW92ZSBlYWNoIGNvZmZlZSB0byB0b3Agb24gaG92ZXIgKi9cXG4ucm93czpob3ZlciAuc3BhbnMsIC5yb3dzOmhvdmVyIC50ZXN0IHtcXG4gICAgLyogZmlyc3QgYW5pbWF0aW9uICovXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlVG9Ub3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjJzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLyogTW92ZSBlYWNoIGNvZmZlZSB0byBib3R0b20gd2hlbiBvbiBob3ZlclxcbmVmZmVjdCBpcyBkb25lICovXFxuLnJvd3MgLnNwYW5zLCAucm93cyAudGVzdCB7XFxuICAgIC8qIGZpcnN0IGFuaW1hdGlvbiAqL1xcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZVRvQm90dG9tO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC4ycztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5zcGFucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGF0YTMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5zdWdhci1mcmVlLCAubG93LWNhbG9yaWVzLCAuYmlvIHtcXG4gICAgd2lkdGg6IDE1JTtcXG59XFxuXFxuLnRlc3Qge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICM4YjQ1MTM7XFxufVxcblxcbi5ydW5uLXRleHQtMSwgLnJ1bm4tdGV4dC0yLCAucnVubi10ZXh0LTMge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBub25lO1xcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNjcm9sbDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucnVubi10ZXh0LTIge1xcbiAgICBsZWZ0OiAzMCU7XFxufVxcblxcbi5ydW5uLXRleHQtMyB7XFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBzY3JvbGwge1xcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKC05MDBweCwwKTt9XFxufVxcblxcbi8qIElNQUdFIENVUCBFRkZFQ1QgKi9cXG5cXG4uaW1nLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjMycHg7XFxuICAgIHRvcDogLTI1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5pbWctY29udGFpbmVyIGRpdiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG59XFxuXFxuLmltZy1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDE3MCU7XFxufVxcblxcbi5zaG93IHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGN1cERvd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjRzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBjdXBEb3duIHtcXG4gICAgMCUgIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTt9XFxuICAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSg1NDBweCk7fSAgXFxufVxcblxcblxcbi8qIFNURUFNICovXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMjAwcHg7XFxuICAgIHRvcDo2MnB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaG93LXN0ZWFtIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogLnN0ZWFtLWxpc3QtaXRlbSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThhNGE0O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCAyMHB4ICNhOGE0YTQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuXFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB1bCBsaSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzdGVhbTE7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxuICAgIC8qIGFuaW1hdGlvbi1kZWxheTogMjBzOyAqL1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIFxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN0ZWFtMSB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IC43O31cXG4gICAgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyBvcGFjaXR5OiAwO31cXG59XFxuXFxuXFxuLyogQUJPVVQgUEFHRSAqL1xcblxcbiNhYm91dC10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDE4MHB4O1xcbn1cXG5cXG4jYWJvdXQtdGV4dC1jb250YWluZXIgaDEge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgY29sb3I6ICMyMTU3MzI7XFxufVxcblxcbi8qIFRPT0xUSVAgKi9cXG4udG9vbHRpcC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA5MHB4O1xcbiAgICB0b3A6IDIwcHg7XFxufVxcblxcbi50b29sdGlwLWNvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogOCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvb2x0aXAtaWNvbjpob3ZlciArIC50b29sdGlwLXRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG9vbHRpcC10ZXh0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIHJpZ2h0OiAxNjBweDtcXG4gICAgdG9wOiAxOTFweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udG9vbHRpcC1jb250YWluZXItbWVudSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDQwN3B4O1xcbiAgICB0b3A6IDNweDtcXG59XFxuXFxuLnRvb2x0aXAtY29udGFpbmVyLW1lbnUgaW1nIHtcXG4gICAgd2lkdGg6IDglO1xcbn1cXG5cXG4udG9vbHRpcC10ZXh0LW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIHRvcDogMTI1cHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRvb2x0aXAtaWNvbi1tZW51OmhvdmVyICsgLnRvb2x0aXAtdGV4dC1tZW51IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7aW5QYWdlfSBmcm9tICcuL3BhZ2VTdGF0ZS5qcyc7XG5pbXBvcnQgdXBkYXRlUGFnZSBmcm9tICcuL3VwZGF0ZVBhZ2UuanMnO1xuaW1wb3J0IHVwZGF0ZVN0YXR1cyBmcm9tICcuL3VwZGF0ZVN0YXR1cy5qcyc7XG5pbXBvcnQgaW5mbyBmcm9tICcuL2ltZy9pbmZvLnN2Zyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgXG5cbiAgICAvLyBnZXQgc3RhdGUgb2YgdGhlIHBhZ2VcbiAgICBjb25zdCB0aGVQYWdlID0gaW5QYWdlLnN0YXRlUGFnZS5hYm91dDtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9ICdhYm91dCdcblxuICAgIGlmICh0aGVQYWdlID09PSBmYWxzZSkge1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbGwgY29udGVudCBleGNlcHQgaGVhZGVyc1xuICAgICAgICB1cGRhdGVQYWdlKCk7XG5cbiAgICAgICAgLy8gZ2V0IGNvbnRlbnQgbm9kZSByZWZlcmVuY2VcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGFuZ2UgYmFja2dyb3VuZCBpZiBjb21taW5nIGZyb20gaG9tZVxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICAgICAgaWYgKGJvZHlbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdib2R5LWJhY2stZ3JvdW5kJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYm9keS1iYWNrLWdyb3VuZCcpO1xuICAgICAgICAgICAgYm9keVswXS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWJhY2tncm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIG5vZGUgZm9yIHRleHRcbiAgICAgICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtdGV4dC1jb250YWluZXInKVxuICAgICAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSAnRE8gTk8gU0FZIE1PUkUnO1xuICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdHUkFCIE9ORSBDVVAgQU5EIEdFVCBUTyBXT1JLJztcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0MSlcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0MilcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICAgICAgICAvLyBCSUcgQlJBTkQgTkFNRVxuICAgICAgICBjb25zdCBiaWdCcmFuZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYnJhbmROYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGJpZ0JyYW5kTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywnYnJhbmQtbmFtZScpO1xuICAgICAgICBicmFuZE5hbWVUZXh0LnRleHRDb250ZW50ID0gJ0RUSUVSUkEnO1xuICAgICAgICBiaWdCcmFuZE5hbWUuYXBwZW5kQ2hpbGQoYnJhbmROYW1lVGV4dCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmlnQnJhbmROYW1lKTtcblxuICAgICAgICAvLyBUT09MVElQIFBST0pFQ1QgSU5GT1xuICAgICAgICBjb25zdCB0b29sVGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvb2xUaXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b29sdGlwLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0b29sdGlwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0b29sdGlwSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rvb2x0aXAtaWNvbicpO1xuICAgICAgICB0b29sdGlwSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGluZm8pO1xuICAgICAgICBjb25zdCB0b29sdGlwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9vbHRpcFRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b29sdGlwLXRleHQnKTtcbiAgICAgICAgdG9vbHRpcFRleHQudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBhIHByb2plY3QgZm9yIFRPUCc7XG4gICAgICAgIHRvb2xUaXBDb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbHRpcEljb24pO1xuICAgICAgICB0b29sVGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBUZXh0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b29sVGlwQ29udGFpbmVyKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBzdGF0dXMgb2YgYWxsIHBhZ2VzIGFjY29yZGluZ1xuICAgICAgICAvLyB0byB0aGUgY2xpY2tlZCBvbmVcbiAgICAgICAgdXBkYXRlU3RhdHVzKGN1cnJlbnRQYWdlKTtcblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbn0iLCIvLyBpbXBvcnQgQU1FUklDQU5PIGZyb20gJy4vaW1nL2FtZXJpY2Fuby5zdmcnO1xuLy8gaW1wb3J0IENBUFBVQ0NJTk8gZnJvbSAnLi9pbWcvY2FwcHVjY2luby5zdmcnO1xuLy8gaW1wb3J0IE1BQ0NISUFUTyBmcm9tICcuL2ltZy9tYWNjaGlhdG8uc3ZnJztcbi8vIGltcG9ydCBFWFBSRVNTTyBmcm9tICcuL2ltZy9leHByZXNzby5zdmcnO1xuLy8gaW1wb3J0IEZMQVRXSElURSBmcm9tICcuL2ltZy9mbGF0V2hpdGUuc3ZnJztcbi8vIGltcG9ydCBNT0NIQSBmcm9tICcuL2ltZy9tb2NoYS5zdmcnO1xuLy8gaW1wb3J0IExBVFRFIGZyb20gJy4vaW1nL2xhdHRlLnN2Zyc7XG5cbi8vIGNvbnN0IGltYWdlcyA9IHtcbi8vICAgICAnQU1FUklDQU5PJzogQU1FUklDQU5PLFxuLy8gICAgICdDQVBQVUNDSU5PJzogQ0FQUFVDQ0lOTyxcbi8vICAgICAnTUFDQ0hJQVRPJzogTUFDQ0hJQVRPLFxuLy8gICAgICdFWFBSRVNTTyc6IEVYUFJFU1NPLFxuLy8gICAgICdGTEFUV0hJVEUnOiBGTEFUV0hJVEUsXG4vLyAgICAgJ01PQ0hBJzogTU9DSEEsIFxuLy8gICAgICdMQVRURSc6IExBVFRFLCBcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VwRWZmZWN0SW4oZSkge1xuXG4gICAgLy8gZ2V0IHJvdyBjbGFzcyBvbiBob3ZlclxuICAgIGNvbnN0IHRoaXNJbWFnZSA9IGUuY3VycmVudFRhcmdldC5jbGFzc05hbWUuc3BsaXQoJyAnKVswXTtcblxuICAgIC8vIGdldCBpbWFnZSB3aXRoIHRoZSBjbGFzcyAndGhpc0ltYWdlJyBhbmQgdG9nZ2xlIHRoZVxuICAgIC8vIHNob3cgY2xhc3NcbiAgICBjb25zdCB0b2dnbGVUaGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVhY2gtaW1nLWNvbnRhaW5lciR7dGhpc0ltYWdlfWApO1xuICAgIHRvZ2dsZVRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgY29uc3QgdG9nZ2xlU3RlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RlYW0tbGlzdC1pdGVtJyk7XG4gICAgICAgIHRvZ2dsZVN0ZWFtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctc3RlYW0nKTtcbiAgICAgICAgfSk7XG4gICAgfSwgNTAwKVxuXG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXBFZmZlY3RPdXQoZSkge1xuICAgIFxuICAgIC8vIGdldCByb3cgY2xhc3Mgb24gaG92ZXJcbiAgICBjb25zdCB0aGlzSW1hZ2UgPSBlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJylbMF07XG5cbiAgICBjb25zdCB0b2dnbGVUaGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVhY2gtaW1nLWNvbnRhaW5lciR7dGhpc0ltYWdlfWApO1xuICAgIHRvZ2dsZVRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXG4gICAgY29uc3QgdG9nZ2xlU3RlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RlYW0tbGlzdC1pdGVtJyk7XG4gICAgY29uc29sZS5sb2codG9nZ2xlU3RlYW0pO1xuICAgIHRvZ2dsZVN0ZWFtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1zdGVhbScpO1xuICAgIH0pO1xufSIsImltcG9ydCB7IGluZGV4IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBkcm9wIGZyb20gJy4vaW1nL2Ryb3Auc3ZnJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0LmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvLyBpbnNlcnQgbG9nb1xuICAgIGNvbnN0IHRoZUxvZ29QbHVzQnJhbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGVMb2dvUGx1c0JyYW5kQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nby1wbHVzLWJyYW5kJylcblxuICAgIC8vIExvZ28gaW1hZ2UgY29udGFpbmVyXG4gICAgY29uc3QgbG9nb0ltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ29JbWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdzcmMnLCBkcm9wKTtcbiAgICBsb2dvSW1nQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhlLWxvZ28nKVxuXG4gICAgLy8gQnJhbmQgbmFtZVxuICAgIGNvbnN0IHRoZUJyYW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGhlQnJhbmROYW1lLnRleHRDb250ZW50ID0gJ0R0aWVycmEnO1xuXG4gICAgLy8gSW5zZXJ0IExvZ28gYW5kIEJyYW5kXG4gICAgdGhlTG9nb1BsdXNCcmFuZENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1nQ29udGFpbmVyKTtcbiAgICB0aGVMb2dvUGx1c0JyYW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoZUJyYW5kTmFtZSk7XG5cblxuICAgIC8vIGNyZWF0ZSBoZWFkZXIgMSBmb3IgbG9nbyBhbmQgYnJhbmRcbiAgICBjb25zdCB0aGVIZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgdGhlSGVhZGVyMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci0xJyk7XG4gICAgdGhlSGVhZGVyMS5hcHBlbmRDaGlsZCh0aGVMb2dvUGx1c0JyYW5kQ29udGFpbmVyKTtcblxuICAgIC8vIGNyZWF0ZSBoZWFkZXIgMiBmb3IgbWVudVxuICAgIGNvbnN0IHRoZUhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICB0aGVIZWFkZXIyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLTInKTtcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtYmFyLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1iYXInKTtcbiAgICB0aGVIZWFkZXIyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG5cblxuXG4gICAgLy8gV3JpdGUuLi4uLiBcbiAgICBjb25zdCBOQVZCQVIgPSB7XG4gICAgICAgICdIT01FJzogaW5kZXgsXG4gICAgICAgICdNRU5VJzogbWVudSxcbiAgICAgICAgJ0FCT1VUJzogYWJvdXQsXG4gICAgfTtcbiAgICAvLyBDcmVhdGUgbGkgaXRlbXMgYW5kIHB1dCB0aGVtIGluc2lkZSB0aGUgdWxcbiAgICBmb3IgKGNvbnN0IGVhY2hPcHRpb24gaW4gTkFWQkFSKSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgbmF2LWl0ZW0gJHtlYWNoT3B0aW9ufWApO1xuICAgICAgICAvLyBsaS50ZXh0Q29udGVudCA9IE5BVkJBUltpdGVtQ291bnRdO1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGVhY2hPcHRpb247XG4gICAgICAgIGxpbmsub25jbGljayA9IE5BVkJBUltlYWNoT3B0aW9uXTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG5cbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpO1xuICAgIHRoZUhlYWRlcjIuYXBwZW5kQ2hpbGQobmF2Q29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoZUhlYWRlcjEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhlSGVhZGVyMik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cbiIsImltcG9ydCB7aW5QYWdlfSBmcm9tICcuL3BhZ2VTdGF0ZS5qcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB1cGRhdGVQYWdlIGZyb20gJy4vdXBkYXRlUGFnZS5qcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHVwZGF0ZVN0YXR1cyBmcm9tICcuL3VwZGF0ZVN0YXR1cy5qcyc7XG5pbXBvcnQgaW5mbyBmcm9tICcuL2ltZy9pbmZvLnN2Zyc7XG5cbi8vIFRoZSBpbmRleCBmdW5jdGlvbiByZW5kZXIgdGhlIGhvbWUgcGFnZSBcbmZ1bmN0aW9uIGluZGV4KCkge1xuXG4gICAgLy8gZ2V0IHN0YXRlIG9mIHRoZSBwYWdlXG4gICAgY29uc3QgdGhlUGFnZSA9IGluUGFnZS5zdGF0ZVBhZ2UuaW5kZXg7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSAnaG9tZSdcblxuICAgIGlmICh0aGVQYWdlID09PSBmYWxzZSkge1xuXG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdib2R5LWJhY2stZ3JvdW5kJyk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBjb250ZW50IGV4Y2VwdCBoZWFkZXJzXG4gICAgICAgIHVwZGF0ZVBhZ2UoKTtcblxuICAgICAgICBjb25zdCB0aGVIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICB0aGVIb21lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhlLWhvbWUnKTtcblxuICAgICAgICAvLyAxIEhFUk8gVEVYVFxuICAgICAgICBjb25zdCBmaXJzdEhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgZmlyc3RIZXJvVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZpcnN0LWhlcm8nKTtcbiAgICAgICAgZmlyc3RIZXJvVGV4dC50ZXh0Q29udGVudCA9ICdPTkUgQ1VQIEZPUiBUSEUgR08gSU4gU0VBUkNIIE9GIERSRUFNUyc7XG5cbiAgICAgICAgLy8gMiBIRVJPIFRFWFRcbiAgICAgICAgY29uc3Qgc2Vjb25kSGVyb1RleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2Vjb25kSGVyb1RleHRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzZWNvbmQtaGVybycpO1xuICAgICAgICBzZWNvbmRIZXJvVGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSAnPGgxPjxzcGFuPkR0aWVycmE8L3NwYW4+JyArICcgT0ZGRVJTIE9ORSBDVVAgVE8gR08uIFNUQVkgSlVTVCBFTk9VR0ggVElNRSBCRUZPUkUgWU9VIEdPIElOIFNFQVJDSCBPRiBZT1VSIERSRUFNUy48L2gxPidcblxuXG4gICAgICAgIC8vIEJJRyBCUkFORCBOQU1FXG4gICAgICAgIGNvbnN0IGJpZ0JyYW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBicmFuZE5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgYmlnQnJhbmROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCdicmFuZC1uYW1lJyk7XG4gICAgICAgIGJyYW5kTmFtZVRleHQudGV4dENvbnRlbnQgPSAnRFRJRVJSQSc7XG4gICAgICAgIGJpZ0JyYW5kTmFtZS5hcHBlbmRDaGlsZChicmFuZE5hbWVUZXh0KTtcblxuICAgICAgICAvLyBUT09MVElQIFBST0pFQ1QgSU5GT1xuICAgICAgICBjb25zdCB0b29sVGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvb2xUaXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b29sdGlwLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0b29sdGlwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0b29sdGlwSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rvb2x0aXAtaWNvbicpO1xuICAgICAgICB0b29sdGlwSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGluZm8pO1xuICAgICAgICBjb25zdCB0b29sdGlwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9vbHRpcFRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b29sdGlwLXRleHQnKTtcbiAgICAgICAgdG9vbHRpcFRleHQudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBhIHByb2plY3QgZm9yIFRPUCc7XG4gICAgICAgIHRvb2xUaXBDb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbHRpcEljb24pO1xuICAgICAgICB0b29sVGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBUZXh0KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b29sVGlwQ29udGFpbmVyKTtcblxuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgc3RhdHVzIG9mIGFsbCBwYWdlcyBhY2NvcmRpbmdcbiAgICAgICAgLy8gdG8gdGhlIGNsaWNrZWQgb25lXG4gICAgICAgIHVwZGF0ZVN0YXR1cyhjdXJyZW50UGFnZSk7XG5cbiAgICAgICAgdGhlSG9tZS5hcHBlbmRDaGlsZChmaXJzdEhlcm9UZXh0KTtcbiAgICAgICAgdGhlSG9tZS5hcHBlbmRDaGlsZChzZWNvbmRIZXJvVGV4dENvbnRhaW5lcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhlSG9tZSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmlnQnJhbmROYW1lKVxuXG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBpbmRleCxcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZGV4KCkpO1xuXG4iLCJpbXBvcnQgeyBpblBhZ2UgfSBmcm9tICcuL3BhZ2VTdGF0ZS5qcyc7XG5pbXBvcnQgdXBkYXRlUGFnZSBmcm9tICcuL3VwZGF0ZVBhZ2UuanMnO1xuaW1wb3J0IHVwZGF0ZVN0YXR1cyBmcm9tICcuL3VwZGF0ZVN0YXR1cy5qcyc7XG5pbXBvcnQgY3VwRWZmZWN0SW4gZnJvbSAnLi9jdXBFZmZlY3RJbi5qcyc7XG5pbXBvcnQgY3VwRWZmZWN0T3V0IGZyb20gJy4vY3VwRWZmZWN0T3V0LmpzJ1xuaW1wb3J0IHN1Z2FyRnJlZSBmcm9tICcuL2ltZy9zdWdhckZyZWUuc3ZnJztcbmltcG9ydCBsb3dDYWxvcmllcyBmcm9tICcuL2ltZy9sb3dDYWxvcmllcy5zdmcnO1xuaW1wb3J0IGJpbyBmcm9tICcuL2ltZy9iaW8uc3ZnJztcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltZy9pbWFnZS5zdmcnO1xuXG5cbi8vIGltcG9ydCBjdXBzIGltYWdlc1xuaW1wb3J0IEFNRVJJQ0FOTyBmcm9tICcuL2ltZy9hbWVyaWNhbm8uc3ZnJztcbmltcG9ydCBDQVBQVUNDSU5PIGZyb20gJy4vaW1nL2NhcHB1Y2Npbm8uc3ZnJztcbmltcG9ydCBNQUNDSElBVE8gZnJvbSAnLi9pbWcvbWFjY2hpYXRvLnN2Zyc7XG5pbXBvcnQgRVhQUkVTU08gZnJvbSAnLi9pbWcvZXhwcmVzc28uc3ZnJztcbmltcG9ydCBGTEFUV0hJVEUgZnJvbSAnLi9pbWcvZmxhdFdoaXRlLnN2Zyc7XG5pbXBvcnQgTU9DSEEgZnJvbSAnLi9pbWcvbW9jaGEuc3ZnJztcbmltcG9ydCBMQVRURSBmcm9tICcuL2ltZy9sYXR0ZS5zdmcnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcblxuICAgIC8vIGdldCBzdGF0ZSBvZiB0aGUgcGFnZVxuICAgIGNvbnN0IHRoZVBhZ2UgPSBpblBhZ2Uuc3RhdGVQYWdlLm1lbnU7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSAnbWVudSc7XG5cbiAgICBpZiAodGhlUGFnZSA9PSBmYWxzZSkge1xuXG4gICAgICAgIC8vIGdldCBtYWluIG5vZGUgcmVmZXJlbmNlOiBjb250ZW50IFxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICAgICAvLyByZW1vdmUgYWxsIGNvbnRlbnQgZXhjZXB0IGhlYWRlcnNcbiAgICAgICAgdXBkYXRlUGFnZSgpO1xuXG4gICAgICAgIC8vIENoYW5nZSBiYWNrZ3JvdW5kIGlmIGNvbW1pbmcgZnJvbSBob21lXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgICAgICBpZiAoYm9keVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2JvZHktYmFjay1ncm91bmQnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdib2R5LWJhY2stZ3JvdW5kJyk7XG4gICAgICAgICAgICBib2R5WzBdLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtYmFja2dyb3VuZCcpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBMZXRzIGNyZWF0ZSB0aGUgbWVudVxuICAgICAgICAvLyBDcmVhdGUgYm9yZGVyLXJhZGl1cyBlZmZlY3Q6IGZpcnN0XG4gICAgICAgIGNvbnN0IHRoZU1lbnVPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGVNZW51T25lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhlLW1lbnUtZmlyc3QtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpcnN0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmlyc3QtZGl2LWJveCcpO1xuICAgICAgICB0aGVNZW51T25lLmFwcGVuZENoaWxkKGZpcnN0RGl2KVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoZU1lbnVPbmUpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIGJvcmRlci1yYWRpdXMgZWZmZWN0OiBzZWNvbmRcbiAgICAgICAgY29uc3QgdGhlTWVudVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGVNZW51VHdvLnNldEF0dHJpYnV0ZSgnaWQnLCAndGhlLW1lbnUtc2Vjb25kLWRpdicpO1xuICAgICAgICBjb25zdCBzZWNvbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2Vjb25kRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2Vjb25kLWRpdi1ib3gnKTtcbiAgICAgICAgdGhlTWVudVR3by5hcHBlbmRDaGlsZChzZWNvbmREaXYpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoZU1lbnVUd28pO1xuXG4gICAgICAgIC8vIHRoZSBtZW51XG4gICAgICAgIGNvbnN0IENPRkZFRVMgPSB7J0FNRVJJQ0FOTyc6IFwiU09NRSBGUkVTSCBIT1QgV0FURVIgQU5EIEEgRE9VQkxFIEVYUFJFU1NPIE9OIFRPUC4gWU9VJ1JFIFJFQURZIFRPIEdPIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICdDQVBQVUNDSU5PJzonQSBMQVlFUiBPRiBGT0FNIENPTUJJTkVEIFdJVEggV0FSTUlORyBNSUxLIEFORCBBIEJSRVdFRCBFWFBSRVNTTy4gWVVNTVkhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnRVhQUkVTU08nOiAnQSBTTUFMTCwgU1RST05HIERSSU5LIE1BREUgVVNJTkcgR1JPVU5EIENPRkZFRSBVTkRFUiBISUdIIFdBVEVSIFBSRVNTVVJFJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ01BQ0NISUFUTyc6ICdBTiBFWFBSRVNTTyBXSVRIIEEgU01BTEwgQU1PVU5UIE9GIEZPQU1FRCBNSUxLLiBERUxJQ0lPVVMsIEhNTU0hJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ0ZMQVRXSElURSc6ICdBIFNNQUxMLCBTVFJPTkcgTEFUVEUgV0lUSCBBIFRPVUNIIE9GIExBVFRFIEFSVC4gIEFSVCBBTkQgQ09GRkVFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAnTEFUVEUnOiAnTU9SRSBNSUxLLCBMRVNTIEZPQU0gQU5EIENPRkZFRS4gTU9SRSBNSUxLLCBMRVNTIEZPQU0gQU5EIENPRkZFRS4gUkVBRFk/IEdPIScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICdNT0NIQSc6ICdBIENIT0NPTEFURS1GTEFWT1VSRUQgQ09GRkVFLiBZRVMsIEEgQ0hPQ09MQVRFLUZMQVZPVVJFRCBDT0ZGRUUuIEdPIE5PVyEnLH07XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge1xuICAgICAgICAgICAgJ0FNRVJJQ0FOTyc6IEFNRVJJQ0FOTyxcbiAgICAgICAgICAgICdDQVBQVUNDSU5PJzogQ0FQUFVDQ0lOTyxcbiAgICAgICAgICAgICdNQUNDSElBVE8nOiBNQUNDSElBVE8sXG4gICAgICAgICAgICAnRVhQUkVTU08nOiBFWFBSRVNTTyxcbiAgICAgICAgICAgICdGTEFUV0hJVEUnOiBGTEFUV0hJVEUsXG4gICAgICAgICAgICAnTU9DSEEnOiBNT0NIQSwgXG4gICAgICAgICAgICAnTEFUVEUnOiBMQVRURSwgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUSEUgTUVOVVxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aGUtbWVudScpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZWFjaENvZmZlIGluIENPRkZFRVMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtlYWNoQ29mZmV9IHJvd3NgKTtcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgY3VwRWZmZWN0SW4pO1xuICAgICAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBjdXBFZmZlY3RPdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBzcGFucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3BhbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzcGFucycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkYXRhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGRhdGExLnRleHRDb250ZW50ID0gZWFjaENvZmZlO1xuICAgICAgICAgICAgY29uc3QgZGF0YTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBkYXRhMi50ZXh0Q29udGVudCA9ICdEVElFUlJBJztcblxuICAgICAgICAgICAgLy8gYmFkZ2UgaW1hZ2VzXG4gICAgICAgICAgICBjb25zdCBkYXRhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGF0YTMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRhMycpO1xuICAgICAgICAgICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN1Z2FyRnJlZSk7XG4gICAgICAgICAgICBpbWcyLnNldEF0dHJpYnV0ZSgnc3JjJywgbG93Q2Fsb3JpZXMpO1xuICAgICAgICAgICAgaW1nMy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGJpbyk7XG4gICAgICAgICAgICBpbWcxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VnYXItZnJlZScpO1xuICAgICAgICAgICAgaW1nMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvdy1jYWxvcmllcycpO1xuICAgICAgICAgICAgaW1nMy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JpbycpO1xuICAgICAgICAgICAgZGF0YTMuYXBwZW5kQ2hpbGQoaW1nMSk7XG4gICAgICAgICAgICBkYXRhMy5hcHBlbmRDaGlsZChpbWcyKTtcbiAgICAgICAgICAgIGRhdGEzLmFwcGVuZENoaWxkKGltZzMpO1xuICAgICAgICAgICAgc3BhbnMuYXBwZW5kQ2hpbGQoZGF0YTEpO1xuICAgICAgICAgICAgc3BhbnMuYXBwZW5kQ2hpbGQoZGF0YTIpO1xuICAgICAgICAgICAgc3BhbnMuYXBwZW5kQ2hpbGQoZGF0YTMpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNwYW5zKTtcblxuICAgICAgICAgICAgLy8gUlVOTklORyBURVhUXG4gICAgICAgICAgICBjb25zdCBydW5uaW5nVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcnVubmluZ1RleHRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXN0Jyk7XG4gICAgICAgICAgICAvLyBydW5uaW5nVGV4dENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgY3VwRWZmZWN0T3V0KTtcblxuICAgICAgICAgICAgY29uc3QgcnVublRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcnVublRleHQxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncnVubi10ZXh0LTEnKTtcbiAgICAgICAgICAgIGNvbnN0IHJ1bm5UZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICAgICAgcnVublRleHQyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncnVubi10ZXh0LTInKVxuICAgICAgICAgICAgcnVublRleHQxLnRleHRDb250ZW50ID0gQ09GRkVFU1tlYWNoQ29mZmVdO1xuICAgICAgICAgICAgcnVublRleHQyLnRleHRDb250ZW50ID0gQ09GRkVFU1tlYWNoQ29mZmVdO1xuICAgICAgICAgICAgcnVubmluZ1RleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocnVublRleHQxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJ1bm5UZXh0Mik7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChydW5uaW5nVGV4dENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuXG5cbiAgICAgICAgLy8gVEhFIElNQUdFUyBGT1IgQ1VQIEVGRkVDVFxuICAgICAgICBjb25zdCBpbWdCaWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1nQmlnQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1nLWNvbnRhaW5lcicpO1xuICAgICAgICBmb3IgKGNvbnN0IGVhY2hJbWFnZSBpbiBpbWFnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZ0VhY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGltZ0VhY2hDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBlYWNoLWltZy1jb250YWluZXIke2VhY2hJbWFnZX1gKTtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VzW2VhY2hJbWFnZV0pO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGhlJHtlYWNoSW1hZ2V9YCk7XG4gICAgICAgICAgICBpbWdFYWNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBpbWdCaWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRWFjaENvbnRhaW5lcik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbWdCaWdDb250YWluZXIpO1xuXG4gICAgICAgIC8vIHRoZSBsaXN0IGZvciB0aGUgc3RlYW1cbiAgICAgICAgY29uc3Qgc3RlYW1MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHN0ZWFtTGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHN0ZWFtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgZm9yIChsZXQgY291bnRlciA9IDA7IGNvdW50ZXIgPCAyOyBjb3VudGVyKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3RlYW0tbGlzdC1pdGVtJylcbiAgICAgICAgICAgIHN0ZWFtTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIH0gXG4gICAgICAgIHN0ZWFtTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVhbUxpc3QpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHN0ZWFtTGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gVE9PTFRJUCBQUk9KRUNUIElORk9cbiAgICAgICAgY29uc3QgdG9vbFRpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b29sVGlwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9vbHRpcC1jb250YWluZXItbWVudScpO1xuICAgICAgICBjb25zdCB0b29sdGlwSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0b29sdGlwSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rvb2x0aXAtaWNvbi1tZW51Jyk7XG4gICAgICAgIHRvb2x0aXBJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2UpO1xuICAgICAgICBjb25zdCB0b29sdGlwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdG9vbHRpcFRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b29sdGlwLXRleHQtbWVudScpO1xuICAgICAgICB0b29sdGlwVGV4dC50ZXh0Q29udGVudCA9ICdFYWNoIG9uZSBvZiB0aGUgaGVhbHRoeSBmb29kIGJhZGdlIGFyZSBJbWFnZSBieSBGcmVlcGlrJztcbiAgICAgICAgdG9vbFRpcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwSWNvbik7XG4gICAgICAgIHRvb2xUaXBDb250YWluZXIuYXBwZW5kQ2hpbGQodG9vbHRpcFRleHQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvb2xUaXBDb250YWluZXIpO1xuICAgICAgICBcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHN0YXR1cyBvZiBhbGwgcGFnZXMgYWNjb3JkaW5nXG4gICAgICAgIC8vIHRvIHRoZSBjbGlja2VkIG9uZVxuICAgICAgICB1cGRhdGVTdGF0dXMoY3VycmVudFBhZ2UpO1xuXG4gICAgICAgIHJldHVybiBjb250ZW50XG4gICAgfVxufSBcbiIsIi8vICBLZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHBhZ2VcbmNvbnN0IGluUGFnZSA9ICgoKSA9PiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZVBhZ2U6IHtcbiAgICAgICAgICAgICdpbmRleCc6IGZhbHNlLFxuICAgICAgICAgICAgJ21lbnUnOiBmYWxzZSxcbiAgICAgICAgICAgICdhYm91dCc6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxufSkoKTtcblxuLy8gRXhwb3J0IGluUGFnZSBJSUZFIFxuZXhwb3J0IHtcbiAgICBpblBhZ2Vcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVQYWdlKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgZm9yIChjb25zdCBlYWNoQ2hpbGQgb2YgQXJyYXkuZnJvbShjb250ZW50LmNoaWxkcmVuKSkge1xuICAgICAgICAvLyByZW1vdmUgY2hpbGRyZW4gbm90IGhlYWRlclxuICAgICAgICBpZiAoZWFjaENoaWxkLmlkLmluY2x1ZGVzKCdoZWFkZXInKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZWFjaENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGluUGFnZSB9IGZyb20gXCIuL3BhZ2VTdGF0ZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTdGF0dXMoY3VycmVudFBhZ2UpIHtcbiAgICBmb3IgKGNvbnN0IGVhY2hTdGF0ZSBpbiBpblBhZ2Uuc3RhdGVQYWdlKSB7XG4gICAgICAgIGlmIChlYWNoU3RhdGUgPT0gY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICAgIGluUGFnZS5zdGF0ZVBhZ2VbZWFjaFN0YXRlXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpblBhZ2Uuc3RhdGVQYWdlW2VhY2hTdGF0ZV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=