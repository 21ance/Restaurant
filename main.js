/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/pizza.jpg */ "./src/img/pizza.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pasta-bg.avif */ "./src/img/pasta-bg.avif"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pizza-bg.avif */ "./src/img/pizza-bg.avif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Itim&family=Raleway&family=Roboto&family=Sedgwick+Ave&family=Shadows+Into+Light&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-color: #fafafa;\n    --body-color: #f5f5f5;\n    --main-font-color: #1c1917;\n    --header-height: 50px;\n    --100vh: calc(100vh - var(--header-height));\n}\n\nbody {\n    background-color: var(--body-color);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    border: 0;\n    box-sizing: border-box;\n    font-family: 'Itim', cursive;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: var(--header-height) auto;\n    background-color: var(--body-color);\n}\n\nheader {\n    grid-column: 1 / -1;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 30px;\n    padding: 0px 30px;\n    background-color: var(--body-color);\n}\n\nheader a {\n    text-decoration: none;\n    color: var(--main-font-color);\n    font-weight: bold;\n    cursor: pointer;\n}\n\nheader a:hover {\n    scale: 1.1;\n    text-decoration: underline;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 50px;\n    background-color: var(--main-color);\n}\n\nmain p {\n    font-size: 1.5rem;\n}\n\nh1 {\n    font-size: 7rem;\n    letter-spacing: 10px;\n}\n\n.button-menu {\n    margin-top: 40px;\n    padding: 20px 40px;\n    border-radius: 8px;\n    background-color: var(--main-font-color);\n    color: var(--main-color);\n}\n\n.image {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    height: calc(100vh - 50px);\n}\n\n.social {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    gap: 10px;\n    padding: 20px;\n}\n\n.icons {\n    display: flex;\n    gap: 20px;\n}\n\nion-icon {\n    font-size: 1.5rem;\n}\n\n@media only screen and (max-width: 768px) {\n    body {\n        display: grid;\n        grid-template-columns: 1fr;\n        height: fit-content;\n        grid-auto-rows: auto;\n    }\n\n    header {\n        grid-row: 1 / 2;\n        justify-content: center;\n    }\n\n    main {\n        color: var(--main-font-color);\n        grid-column: 1 / -1;\n        padding: 10px 30px;\n    }\n\n    main p {\n        font-size: 1.3rem;\n    }\n\n    h1 {\n        font-size: 3.5rem;\n        letter-spacing: 3px;\n    }\n\n    .button-menu {\n        margin-top: 20px;\n    }\n\n    .image {\n        grid-column: 1 / -1;\n        height: 300px;\n    }\n\n    .social {\n        grid-row: 5 / 6;\n    }\n}\n\n/* menu page */\n.menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 80vw;\n    gap: 4px;\n    grid-column: 1 / -1;\n    justify-self: center;\n    height: var(--100vh);\n}\n\n.pasta-bg {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    margin-left: 10px;\n    margin-bottom: 10vh;\n}\n\n.pizza-bg {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    margin-right: 10px;\n}\n\n.menu-item {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    background-color: var(--main-color);\n    margin: 10px;\n    padding: 10px;\n    border-radius: 4px;\n    gap: 10px;\n}\n\n.menu-name {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.menu-item p {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.price {\n    grid-column: 2 / 3;\n    grid-row: 1 / -1;\n    justify-self: end;\n    display: flex;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n@media only screen and (max-width: 750px) {\n    .menu {\n        grid-template-columns: 1fr;\n        width: 100%;\n    }\n\n    .pizza-bg {\n        grid-row: 1 / 2;\n        height: 150px;\n        margin-right: 0px;\n    }\n\n    .pizza-list {\n        grid-row: 2 / 3;\n    }\n\n    .pasta-bg {\n        grid-row: 3 / 4;\n        height: 150px;\n        margin: 0px;\n    }\n}\n\n/* contact  */\nform {\n    padding: 100px;\n    background-color: var(--main-color);\n    border-radius: 4px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    grid-column: 1 / 2;\n}\n\nform label {\n    font-size: 1.2rem;\n}\n\nform input,\nform textarea {\n    padding: 5px;\n}\n\n.form-entry {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.text-block {\n    grid-column: 1 / -1;\n}\n\n.contact-us {\n    grid-column: 1 / -1;\n    justify-self: center;\n    font-size: 3rem;\n    padding: 10px;\n}\n\n.submit-inquiry {\n    grid-column: 2 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    justify-self: end;\n    height: 40px;\n    width: 120px;\n    border-radius: 8px;\n    background-color: var(--main-font-color);\n    color: var(--main-color);\n}\n\n@media only screen and (max-width: 750px) {\n    #content {\n        grid-template-columns: 1fr;\n    }\n\n    form {\n        padding: 10px;\n        width: 100%;\n    }\n\n    form label {\n        font-size: 1rem;\n    }\n\n    form input {\n        width: 45vw;\n    }\n\n    .form-entry {\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n    }\n\n    .text-block {\n        grid-column: 1 / -1;\n    }\n\n    .contact-us {\n        font-size: 2.5rem;\n    }\n}\n\nbutton {\n    transition: scale .5s;\n}\n\nbutton:hover {\n    scale: 1.1;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Itim&family=Raleway&family=Roboto&family=Sedgwick+Ave&family=Shadows+Into+Light&display=swap');\n\n:root {\n    --main-color: #fafafa;\n    --body-color: #f5f5f5;\n    --main-font-color: #1c1917;\n    --header-height: 50px;\n    --100vh: calc(100vh - var(--header-height));\n}\n\nbody {\n    background-color: var(--body-color);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    border: 0;\n    box-sizing: border-box;\n    font-family: 'Itim', cursive;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: var(--header-height) auto;\n    background-color: var(--body-color);\n}\n\nheader {\n    grid-column: 1 / -1;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 30px;\n    padding: 0px 30px;\n    background-color: var(--body-color);\n}\n\nheader a {\n    text-decoration: none;\n    color: var(--main-font-color);\n    font-weight: bold;\n    cursor: pointer;\n}\n\nheader a:hover {\n    scale: 1.1;\n    text-decoration: underline;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 50px;\n    background-color: var(--main-color);\n}\n\nmain p {\n    font-size: 1.5rem;\n}\n\nh1 {\n    font-size: 7rem;\n    letter-spacing: 10px;\n}\n\n.button-menu {\n    margin-top: 40px;\n    padding: 20px 40px;\n    border-radius: 8px;\n    background-color: var(--main-font-color);\n    color: var(--main-color);\n}\n\n.image {\n    background-image: url(img/pizza.jpg);\n    background-size: cover;\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    height: calc(100vh - 50px);\n}\n\n.social {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    gap: 10px;\n    padding: 20px;\n}\n\n.icons {\n    display: flex;\n    gap: 20px;\n}\n\nion-icon {\n    font-size: 1.5rem;\n}\n\n@media only screen and (max-width: 768px) {\n    body {\n        display: grid;\n        grid-template-columns: 1fr;\n        height: fit-content;\n        grid-auto-rows: auto;\n    }\n\n    header {\n        grid-row: 1 / 2;\n        justify-content: center;\n    }\n\n    main {\n        color: var(--main-font-color);\n        grid-column: 1 / -1;\n        padding: 10px 30px;\n    }\n\n    main p {\n        font-size: 1.3rem;\n    }\n\n    h1 {\n        font-size: 3.5rem;\n        letter-spacing: 3px;\n    }\n\n    .button-menu {\n        margin-top: 20px;\n    }\n\n    .image {\n        grid-column: 1 / -1;\n        height: 300px;\n    }\n\n    .social {\n        grid-row: 5 / 6;\n    }\n}\n\n/* menu page */\n.menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 80vw;\n    gap: 4px;\n    grid-column: 1 / -1;\n    justify-self: center;\n    height: var(--100vh);\n}\n\n.pasta-bg {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-image: url(./img/pasta-bg.avif);\n    background-size: cover;\n    margin-left: 10px;\n    margin-bottom: 10vh;\n}\n\n.pizza-bg {\n    background-image: url(./img/pizza-bg.avif);\n    background-size: cover;\n    margin-right: 10px;\n}\n\n.menu-item {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    background-color: var(--main-color);\n    margin: 10px;\n    padding: 10px;\n    border-radius: 4px;\n    gap: 10px;\n}\n\n.menu-name {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.menu-item p {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.price {\n    grid-column: 2 / 3;\n    grid-row: 1 / -1;\n    justify-self: end;\n    display: flex;\n    align-items: center;\n    font-size: 1.3rem;\n}\n\n@media only screen and (max-width: 750px) {\n    .menu {\n        grid-template-columns: 1fr;\n        width: 100%;\n    }\n\n    .pizza-bg {\n        grid-row: 1 / 2;\n        height: 150px;\n        margin-right: 0px;\n    }\n\n    .pizza-list {\n        grid-row: 2 / 3;\n    }\n\n    .pasta-bg {\n        grid-row: 3 / 4;\n        height: 150px;\n        margin: 0px;\n    }\n}\n\n/* contact  */\nform {\n    padding: 100px;\n    background-color: var(--main-color);\n    border-radius: 4px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    grid-column: 1 / 2;\n}\n\nform label {\n    font-size: 1.2rem;\n}\n\nform input,\nform textarea {\n    padding: 5px;\n}\n\n.form-entry {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.text-block {\n    grid-column: 1 / -1;\n}\n\n.contact-us {\n    grid-column: 1 / -1;\n    justify-self: center;\n    font-size: 3rem;\n    padding: 10px;\n}\n\n.submit-inquiry {\n    grid-column: 2 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    justify-self: end;\n    height: 40px;\n    width: 120px;\n    border-radius: 8px;\n    background-color: var(--main-font-color);\n    color: var(--main-color);\n}\n\n@media only screen and (max-width: 750px) {\n    #content {\n        grid-template-columns: 1fr;\n    }\n\n    form {\n        padding: 10px;\n        width: 100%;\n    }\n\n    form label {\n        font-size: 1rem;\n    }\n\n    form input {\n        width: 45vw;\n    }\n\n    .form-entry {\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n    }\n\n    .text-block {\n        grid-column: 1 / -1;\n    }\n\n    .contact-us {\n        font-size: 2.5rem;\n    }\n}\n\nbutton {\n    transition: scale .5s;\n}\n\nbutton:hover {\n    scale: 1.1;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageHeader": () => (/* binding */ pageHeader)
/* harmony export */ });
const pageHeader = (() => {
  const header = document.createElement("header");
  const homeLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");

  homeLink.textContent = "HOME";
  menuLink.textContent = "MENU";
  contactLink.textContent = "CONTACT US";

  header.append(homeLink, menuLink, contactLink);
  content.append(header);

  return { homeLink, menuLink, contactLink };
})();


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContactPage": () => (/* binding */ loadContactPage)
/* harmony export */ });
function newFormItem(name, placeholder, inputType) {
  const formEntry = document.createElement("div");
  const formLabel = document.createElement(`label`);
  const formInput = document.createElement(`${inputType}`);

  if (inputType == "textarea") {
    formInput.rows = 5;
    formEntry.classList.add("text-block");
  }

  formEntry.classList.add("form-entry");

  formLabel.textContent = `${name}`;
  formInput.placeholder = `${placeholder}`;

  formEntry.append(formLabel, formInput);
  return formEntry;
}

function loadContactBox() {
  const form = document.createElement("form");
  const formTitle = document.createElement("span");
  const btnSubmit = document.createElement("button");

  formTitle.classList.add("contact-us");
  btnSubmit.classList.add("submit-inquiry");

  formTitle.textContent = "Contact Us";
  btnSubmit.textContent = "Submit";

  form.append(
    formTitle,
    newFormItem("Name", "Enter your name", "input"),
    newFormItem("Email", "Enter your email", "input"),
    newFormItem("Inquiry", "What's your inquiry?", "textarea"),
    btnSubmit
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  return form;
}

function loadContactPage() {
  content.append(loadContactBox());
  console.log("contact");
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
function loadMainText() {
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  const h1Subtext = document.createElement("p");
  const btnMenu = document.createElement("button");

  btnMenu.classList.add("button-menu");

  h1.textContent = "Pizza";
  h1Subtext.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum autem rem beatae nemo dignissimos consequatur explicabo dolor, amet iusto voluptatum ratione vero, repudiandae tenetur est incidunt animi harum non?";
  btnMenu.textContent = "Check our menu";

  main.append(h1, h1Subtext, btnMenu);

  return main;
}

function loadMainImage() {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image");

  return imageContainer;
}

function loadSocials() {
  const socialContainer = document.createElement("div");
  const span = document.createElement("span");
  const icons = document.createElement("div");
  const facebook = document.createElement("ion-icon");
  const twitter = document.createElement("ion-icon");
  const instagram = document.createElement("ion-icon");
  const youtube = document.createElement("ion-icon");

  facebook.setAttribute("name", "logo-facebook");
  twitter.setAttribute("name", "logo-twitter");
  instagram.setAttribute("name", "logo-instagram");
  youtube.setAttribute("name", "logo-youtube");

  icons.classList.add("icons");
  socialContainer.classList.add("social");

  span.textContent = "Follow us on socials:";

  icons.append(facebook, twitter, instagram, youtube);
  socialContainer.append(span, icons);

  return socialContainer;
}

function loadHomePage() {
  content.append(loadMainText(), loadMainImage(), loadSocials());
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenuPage": () => (/* binding */ loadMenuPage)
/* harmony export */ });
function newMenu(name, description, price) {
  const menuItems = document.createElement("div");
  const menuName = document.createElement("span");
  const menuDesc = document.createElement("p");
  const menuPrice = document.createElement("span");

  menuItems.classList.add("menu-item");
  menuName.classList.add("menu-name");
  menuPrice.classList.add("price");

  menuName.textContent = name;
  menuDesc.textContent = description;
  menuPrice.textContent = price;

  menuItems.append(menuName, menuDesc, menuPrice);
  return menuItems;
}

function createMenu() {
  const menu = document.createElement("div");
  const pizzaList = document.createElement("div");
  const pastaList = document.createElement("div");

  const pizzaBg = document.createElement("div");
  const pastaBg = document.createElement("div");

  menu.classList.add("menu");
  pizzaList.classList.add("pizza-list");
  pastaList.classList.add("pasta-list");

  pizzaBg.classList.add("pizza-bg");
  pastaBg.classList.add("pasta-bg");

  // https://www.southernliving.com/food/dish/pizza/most-popular-pizza-toppings
  pizzaList.append(
    newMenu(
      "Pepperoni",
      "Poll after poll, pepperoni always tops the list of America's favorite pizza toppings. When it doubt, you can't go wrong with a classic.",
      "$20.00"
    ),
    newMenu(
      "Mushrooms",
      "This earthy topping can be divisive in the kitchen, but many agree that it fits right in on a pizza, and this breakfast recipe is a perfect excuse to try eggs on a pizza. Spoiler: You're going to love it.",
      "$22.00"
    ),
    newMenu(
      "Extra Cheese",
      "Who doesn't love a little extra cheese for the perfect cheese-pull picture? We sure do. You might want to check with your local pizza joint to see how much cheese actually comes with an 'extra cheese' order, because apparently, it's hotly debated.",
      "$25.00"
    ),
    newMenu(
      "Spinach",
      "Spinach is a delicious way to add a little green to your pizza. Another popular green found on pizzas is arugula. Unlike spinach, which is usually cooked with the pizza, arugula is placed fresh on top of the pizza for a fresh, peppery pop.",
      "$18.00"
    )
  );

  //https://www.southernliving.com/food/pasta/pasta-casserole-recipes
  pastaList.append(
    newMenu(
      "Heavenly Chicken Lasagna",
      "Get ready to delight in the creamy finish, with four cheeses melting into the dish with rich Alfredo sauce, sautéed onions, sliced mushrooms, chopped spinach, and chicken.",
      "$15.00"
    ),
    newMenu(
      "Creamy Kale and Pasta Bake",
      "Who knew kale could taste this good? Put your lush greens from the farmers' market to use this season with this creamy bake with loads of gooey cheese and tender kale.",
      "$10.00"
    ),
    newMenu(
      "Mac and Cheese with Ham",
      "Set any supper or potluck up for success with this mouthwateringly smoky recipe full of a creamy smoked Gouda and Cheddar sauce, corkscrew pasta, and chopped smoked ham.",
      "$13.00"
    )
  );

  menu.append(pizzaList, pizzaBg, pastaList, pastaBg);
  return menu;
}

function loadMenuPage() {
  content.append(createMenu());
}


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function initialize() {
  (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();
}

_common__WEBPACK_IMPORTED_MODULE_0__.pageHeader.homeLink.addEventListener("click", (e) => {
  emptyPage();
  (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();
});

_common__WEBPACK_IMPORTED_MODULE_0__.pageHeader.menuLink.addEventListener("click", (e) => {
  emptyPage();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();
});

_common__WEBPACK_IMPORTED_MODULE_0__.pageHeader.contactLink.addEventListener("click", (e) => {
  emptyPage();
  (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContactPage)();
});

function emptyPage() {
  let children = content.childElementCount;
  for (let i = 0; i < children - 1; i++) {
    content.removeChild(content.lastChild);
  }
}


/***/ }),

/***/ "./src/img/pasta-bg.avif":
/*!*******************************!*\
  !*** ./src/img/pasta-bg.avif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bf8dacbddfcf0e4f32c.avif";

/***/ }),

/***/ "./src/img/pizza-bg.avif":
/*!*******************************!*\
  !*** ./src/img/pizza-bg.avif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fd759d05c671692ec3a.avif";

/***/ }),

/***/ "./src/img/pizza.jpg":
/*!***************************!*\
  !*** ./src/img/pizza.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "506e55cdb895f0486540.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");



(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.initialize)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFVBQVU7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZCQUE2QixLQUFLO0FBQ2xDLDZCQUE2QixZQUFZOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGc0M7QUFDQTtBQUNBO0FBQ007O0FBRXJDO0FBQ1AsRUFBRSxtREFBWTtBQUNkOztBQUVBLHlFQUFvQztBQUNwQztBQUNBLEVBQUUsbURBQVk7QUFDZCxDQUFDOztBQUVELHlFQUFvQztBQUNwQztBQUNBLEVBQUUsbURBQVk7QUFDZCxDQUFDOztBQUVELDRFQUF1QztBQUN2QztBQUNBLEVBQUUseURBQWU7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ21COztBQUV6QyxzREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltZy9waXp6YS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wYXN0YS1iZy5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGl6emEtYmcuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRpbSZmYW1pbHk9UmFsZXdheSZmYW1pbHk9Um9ib3RvJmZhbWlseT1TZWRnd2ljaytBdmUmZmFtaWx5PVNoYWRvd3MrSW50bytMaWdodCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogI2ZhZmFmYTtcXG4gICAgLS1ib2R5LWNvbG9yOiAjZjVmNWY1O1xcbiAgICAtLW1haW4tZm9udC1jb2xvcjogIzFjMTkxNztcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA1MHB4O1xcbiAgICAtLTEwMHZoOiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1oZWFkZXItaGVpZ2h0KSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBhOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxubWFpbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA3cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG59XFxuXFxuLmJ1dHRvbi1tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLmltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbn1cXG5cXG4uc29jaWFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmlvbi1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICB9XFxuXFxuICAgIG1haW4gcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbi1tZW51IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLmltYWdlIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zb2NpYWwge1xcbiAgICAgICAgZ3JpZC1yb3c6IDUgLyA2O1xcbiAgICB9XFxufVxcblxcbi8qIG1lbnUgcGFnZSAqL1xcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLTEwMHZoKTtcXG59XFxuXFxuLnBhc3RhLWJnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4ucGl6emEtYmcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1pdGVtIHAge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnByaWNlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm1lbnUge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAucGl6emEtYmcge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICB9XFxuXFxuICAgIC5waXp6YS1saXN0IHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgfVxcblxcbiAgICAucGFzdGEtYmcge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICB9XFxufVxcblxcbi8qIGNvbnRhY3QgICovXFxuZm9ybSB7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmZvcm0tZW50cnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRleHQtYmxvY2sge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4uY29udGFjdC11cyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQtaW5xdWlyeSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgZm9ybSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgZm9ybSBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgZm9ybSBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogNDV2dztcXG4gICAgfVxcblxcbiAgICAuZm9ybS1lbnRyeSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LWJsb2NrIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtdXMge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgLjVzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNkNBQTZDO0lBQzdDLG1DQUFtQztBQUN2Qzs7QUFF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ZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsUUFBUTtJQUNaOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SXRpbSZmYW1pbHk9UmFsZXdheSZmYW1pbHk9Um9ib3RvJmZhbWlseT1TZWRnd2ljaytBdmUmZmFtaWx5PVNoYWRvd3MrSW50bytMaWdodCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogI2ZhZmFmYTtcXG4gICAgLS1ib2R5LWNvbG9yOiAjZjVmNWY1O1xcbiAgICAtLW1haW4tZm9udC1jb2xvcjogIzFjMTkxNztcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA1MHB4O1xcbiAgICAtLTEwMHZoOiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1oZWFkZXItaGVpZ2h0KSBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xcbn1cXG5cXG5oZWFkZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBhOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxubWFpbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA3cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG59XFxuXFxuLmJ1dHRvbi1tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLmltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltZy9waXp6YS5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxufVxcblxcbi5zb2NpYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuaW9uLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gICAgfVxcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgbWFpbiBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLW1lbnUge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAuaW1hZ2Uge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNvY2lhbCB7XFxuICAgICAgICBncmlkLXJvdzogNSAvIDY7XFxuICAgIH1cXG59XFxuXFxuLyogbWVudSBwYWdlICovXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBnYXA6IDRweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogdmFyKC0tMTAwdmgpO1xcbn1cXG5cXG4ucGFzdGEtYmcge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL3Bhc3RhLWJnLmF2aWYpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcXG59XFxuXFxuLnBpenphLWJnIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL3BpenphLWJnLmF2aWYpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1pdGVtIHAge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnByaWNlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgLm1lbnUge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAucGl6emEtYmcge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICB9XFxuXFxuICAgIC5waXp6YS1saXN0IHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgfVxcblxcbiAgICAucGFzdGEtYmcge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICB9XFxufVxcblxcbi8qIGNvbnRhY3QgICovXFxuZm9ybSB7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmZvcm0tZW50cnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRleHQtYmxvY2sge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4uY29udGFjdC11cyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQtaW5xdWlyeSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgZm9ybSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgZm9ybSBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgZm9ybSBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogNDV2dztcXG4gICAgfVxcblxcbiAgICAuZm9ybS1lbnRyeSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuXFxuICAgIC50ZXh0LWJsb2NrIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtdXMge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgLjVzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgcGFnZUhlYWRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcblxuICBoZWFkZXIuYXBwZW5kKGhvbWVMaW5rLCBtZW51TGluaywgY29udGFjdExpbmspO1xuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xuXG4gIHJldHVybiB7IGhvbWVMaW5rLCBtZW51TGluaywgY29udGFjdExpbmsgfTtcbn0pKCk7XG4iLCJmdW5jdGlvbiBuZXdGb3JtSXRlbShuYW1lLCBwbGFjZWhvbGRlciwgaW5wdXRUeXBlKSB7XG4gIGNvbnN0IGZvcm1FbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGxhYmVsYCk7XG4gIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7aW5wdXRUeXBlfWApO1xuXG4gIGlmIChpbnB1dFR5cGUgPT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgZm9ybUlucHV0LnJvd3MgPSA1O1xuICAgIGZvcm1FbnRyeS5jbGFzc0xpc3QuYWRkKFwidGV4dC1ibG9ja1wiKTtcbiAgfVxuXG4gIGZvcm1FbnRyeS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbnRyeVwiKTtcblxuICBmb3JtTGFiZWwudGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XG4gIGZvcm1JbnB1dC5wbGFjZWhvbGRlciA9IGAke3BsYWNlaG9sZGVyfWA7XG5cbiAgZm9ybUVudHJ5LmFwcGVuZChmb3JtTGFiZWwsIGZvcm1JbnB1dCk7XG4gIHJldHVybiBmb3JtRW50cnk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0Qm94KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC11c1wiKTtcbiAgYnRuU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtaW5xdWlyeVwiKTtcblxuICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgYnRuU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICBmb3JtLmFwcGVuZChcbiAgICBmb3JtVGl0bGUsXG4gICAgbmV3Rm9ybUl0ZW0oXCJOYW1lXCIsIFwiRW50ZXIgeW91ciBuYW1lXCIsIFwiaW5wdXRcIiksXG4gICAgbmV3Rm9ybUl0ZW0oXCJFbWFpbFwiLCBcIkVudGVyIHlvdXIgZW1haWxcIiwgXCJpbnB1dFwiKSxcbiAgICBuZXdGb3JtSXRlbShcIklucXVpcnlcIiwgXCJXaGF0J3MgeW91ciBpbnF1aXJ5P1wiLCBcInRleHRhcmVhXCIpLFxuICAgIGJ0blN1Ym1pdFxuICApO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnRlbnQuYXBwZW5kKGxvYWRDb250YWN0Qm94KCkpO1xuICBjb25zb2xlLmxvZyhcImNvbnRhY3RcIik7XG59XG4iLCJmdW5jdGlvbiBsb2FkTWFpblRleHQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGgxU3VidGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBidG5NZW51LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbWVudVwiKTtcblxuICBoMS50ZXh0Q29udGVudCA9IFwiUGl6emFcIjtcbiAgaDFTdWJ0ZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBsYWNlYXQgZG9sb3J1bSBhdXRlbSByZW0gYmVhdGFlIG5lbW8gZGlnbmlzc2ltb3MgY29uc2VxdWF0dXIgZXhwbGljYWJvIGRvbG9yLCBhbWV0IGl1c3RvIHZvbHVwdGF0dW0gcmF0aW9uZSB2ZXJvLCByZXB1ZGlhbmRhZSB0ZW5ldHVyIGVzdCBpbmNpZHVudCBhbmltaSBoYXJ1bSBub24/XCI7XG4gIGJ0bk1lbnUudGV4dENvbnRlbnQgPSBcIkNoZWNrIG91ciBtZW51XCI7XG5cbiAgbWFpbi5hcHBlbmQoaDEsIGgxU3VidGV4dCwgYnRuTWVudSk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGxvYWRNYWluSW1hZ2UoKSB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuXG4gIHJldHVybiBpbWFnZUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbG9hZFNvY2lhbHMoKSB7XG4gIGNvbnN0IHNvY2lhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgY29uc3QgdHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBjb25zdCB5b3V0dWJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuXG4gIGZhY2Vib29rLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsb2dvLWZhY2Vib29rXCIpO1xuICB0d2l0dGVyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsb2dvLXR3aXR0ZXJcIik7XG4gIGluc3RhZ3JhbS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibG9nby1pbnN0YWdyYW1cIik7XG4gIHlvdXR1YmUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImxvZ28teW91dHViZVwiKTtcblxuICBpY29ucy5jbGFzc0xpc3QuYWRkKFwiaWNvbnNcIik7XG4gIHNvY2lhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic29jaWFsXCIpO1xuXG4gIHNwYW4udGV4dENvbnRlbnQgPSBcIkZvbGxvdyB1cyBvbiBzb2NpYWxzOlwiO1xuXG4gIGljb25zLmFwcGVuZChmYWNlYm9vaywgdHdpdHRlciwgaW5zdGFncmFtLCB5b3V0dWJlKTtcbiAgc29jaWFsQ29udGFpbmVyLmFwcGVuZChzcGFuLCBpY29ucyk7XG5cbiAgcmV0dXJuIHNvY2lhbENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgY29udGVudC5hcHBlbmQobG9hZE1haW5UZXh0KCksIGxvYWRNYWluSW1hZ2UoKSwgbG9hZFNvY2lhbHMoKSk7XG59XG4iLCJmdW5jdGlvbiBuZXdNZW51KG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBtZW51RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBtZW51UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgbWVudU5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnUtbmFtZVwiKTtcbiAgbWVudVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcblxuICBtZW51TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIG1lbnVEZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIG1lbnVQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gIG1lbnVJdGVtcy5hcHBlbmQobWVudU5hbWUsIG1lbnVEZXNjLCBtZW51UHJpY2UpO1xuICByZXR1cm4gbWVudUl0ZW1zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGl6emFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGFzdGFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBwaXp6YUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGFzdGFCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgcGl6emFMaXN0LmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1saXN0XCIpO1xuICBwYXN0YUxpc3QuY2xhc3NMaXN0LmFkZChcInBhc3RhLWxpc3RcIik7XG5cbiAgcGl6emFCZy5jbGFzc0xpc3QuYWRkKFwicGl6emEtYmdcIik7XG4gIHBhc3RhQmcuY2xhc3NMaXN0LmFkZChcInBhc3RhLWJnXCIpO1xuXG4gIC8vIGh0dHBzOi8vd3d3LnNvdXRoZXJubGl2aW5nLmNvbS9mb29kL2Rpc2gvcGl6emEvbW9zdC1wb3B1bGFyLXBpenphLXRvcHBpbmdzXG4gIHBpenphTGlzdC5hcHBlbmQoXG4gICAgbmV3TWVudShcbiAgICAgIFwiUGVwcGVyb25pXCIsXG4gICAgICBcIlBvbGwgYWZ0ZXIgcG9sbCwgcGVwcGVyb25pIGFsd2F5cyB0b3BzIHRoZSBsaXN0IG9mIEFtZXJpY2EncyBmYXZvcml0ZSBwaXp6YSB0b3BwaW5ncy4gV2hlbiBpdCBkb3VidCwgeW91IGNhbid0IGdvIHdyb25nIHdpdGggYSBjbGFzc2ljLlwiLFxuICAgICAgXCIkMjAuMDBcIlxuICAgICksXG4gICAgbmV3TWVudShcbiAgICAgIFwiTXVzaHJvb21zXCIsXG4gICAgICBcIlRoaXMgZWFydGh5IHRvcHBpbmcgY2FuIGJlIGRpdmlzaXZlIGluIHRoZSBraXRjaGVuLCBidXQgbWFueSBhZ3JlZSB0aGF0IGl0IGZpdHMgcmlnaHQgaW4gb24gYSBwaXp6YSwgYW5kIHRoaXMgYnJlYWtmYXN0IHJlY2lwZSBpcyBhIHBlcmZlY3QgZXhjdXNlIHRvIHRyeSBlZ2dzIG9uIGEgcGl6emEuIFNwb2lsZXI6IFlvdSdyZSBnb2luZyB0byBsb3ZlIGl0LlwiLFxuICAgICAgXCIkMjIuMDBcIlxuICAgICksXG4gICAgbmV3TWVudShcbiAgICAgIFwiRXh0cmEgQ2hlZXNlXCIsXG4gICAgICBcIldobyBkb2Vzbid0IGxvdmUgYSBsaXR0bGUgZXh0cmEgY2hlZXNlIGZvciB0aGUgcGVyZmVjdCBjaGVlc2UtcHVsbCBwaWN0dXJlPyBXZSBzdXJlIGRvLiBZb3UgbWlnaHQgd2FudCB0byBjaGVjayB3aXRoIHlvdXIgbG9jYWwgcGl6emEgam9pbnQgdG8gc2VlIGhvdyBtdWNoIGNoZWVzZSBhY3R1YWxseSBjb21lcyB3aXRoIGFuICdleHRyYSBjaGVlc2UnIG9yZGVyLCBiZWNhdXNlIGFwcGFyZW50bHksIGl0J3MgaG90bHkgZGViYXRlZC5cIixcbiAgICAgIFwiJDI1LjAwXCJcbiAgICApLFxuICAgIG5ld01lbnUoXG4gICAgICBcIlNwaW5hY2hcIixcbiAgICAgIFwiU3BpbmFjaCBpcyBhIGRlbGljaW91cyB3YXkgdG8gYWRkIGEgbGl0dGxlIGdyZWVuIHRvIHlvdXIgcGl6emEuIEFub3RoZXIgcG9wdWxhciBncmVlbiBmb3VuZCBvbiBwaXp6YXMgaXMgYXJ1Z3VsYS4gVW5saWtlIHNwaW5hY2gsIHdoaWNoIGlzIHVzdWFsbHkgY29va2VkIHdpdGggdGhlIHBpenphLCBhcnVndWxhIGlzIHBsYWNlZCBmcmVzaCBvbiB0b3Agb2YgdGhlIHBpenphIGZvciBhIGZyZXNoLCBwZXBwZXJ5IHBvcC5cIixcbiAgICAgIFwiJDE4LjAwXCJcbiAgICApXG4gICk7XG5cbiAgLy9odHRwczovL3d3dy5zb3V0aGVybmxpdmluZy5jb20vZm9vZC9wYXN0YS9wYXN0YS1jYXNzZXJvbGUtcmVjaXBlc1xuICBwYXN0YUxpc3QuYXBwZW5kKFxuICAgIG5ld01lbnUoXG4gICAgICBcIkhlYXZlbmx5IENoaWNrZW4gTGFzYWduYVwiLFxuICAgICAgXCJHZXQgcmVhZHkgdG8gZGVsaWdodCBpbiB0aGUgY3JlYW15IGZpbmlzaCwgd2l0aCBmb3VyIGNoZWVzZXMgbWVsdGluZyBpbnRvIHRoZSBkaXNoIHdpdGggcmljaCBBbGZyZWRvIHNhdWNlLCBzYXV0w6llZCBvbmlvbnMsIHNsaWNlZCBtdXNocm9vbXMsIGNob3BwZWQgc3BpbmFjaCwgYW5kIGNoaWNrZW4uXCIsXG4gICAgICBcIiQxNS4wMFwiXG4gICAgKSxcbiAgICBuZXdNZW51KFxuICAgICAgXCJDcmVhbXkgS2FsZSBhbmQgUGFzdGEgQmFrZVwiLFxuICAgICAgXCJXaG8ga25ldyBrYWxlIGNvdWxkIHRhc3RlIHRoaXMgZ29vZD8gUHV0IHlvdXIgbHVzaCBncmVlbnMgZnJvbSB0aGUgZmFybWVycycgbWFya2V0IHRvIHVzZSB0aGlzIHNlYXNvbiB3aXRoIHRoaXMgY3JlYW15IGJha2Ugd2l0aCBsb2FkcyBvZiBnb29leSBjaGVlc2UgYW5kIHRlbmRlciBrYWxlLlwiLFxuICAgICAgXCIkMTAuMDBcIlxuICAgICksXG4gICAgbmV3TWVudShcbiAgICAgIFwiTWFjIGFuZCBDaGVlc2Ugd2l0aCBIYW1cIixcbiAgICAgIFwiU2V0IGFueSBzdXBwZXIgb3IgcG90bHVjayB1cCBmb3Igc3VjY2VzcyB3aXRoIHRoaXMgbW91dGh3YXRlcmluZ2x5IHNtb2t5IHJlY2lwZSBmdWxsIG9mIGEgY3JlYW15IHNtb2tlZCBHb3VkYSBhbmQgQ2hlZGRhciBzYXVjZSwgY29ya3NjcmV3IHBhc3RhLCBhbmQgY2hvcHBlZCBzbW9rZWQgaGFtLlwiLFxuICAgICAgXCIkMTMuMDBcIlxuICAgIClcbiAgKTtcblxuICBtZW51LmFwcGVuZChwaXp6YUxpc3QsIHBpenphQmcsIHBhc3RhTGlzdCwgcGFzdGFCZyk7XG4gIHJldHVybiBtZW51O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICBjb250ZW50LmFwcGVuZChjcmVhdGVNZW51KCkpO1xufVxuIiwiaW1wb3J0IHsgcGFnZUhlYWRlciB9IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgbG9hZE1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgbG9hZENvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgbG9hZEhvbWVQYWdlKCk7XG59XG5cbnBhZ2VIZWFkZXIuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGVtcHR5UGFnZSgpO1xuICBsb2FkSG9tZVBhZ2UoKTtcbn0pO1xuXG5wYWdlSGVhZGVyLm1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlbXB0eVBhZ2UoKTtcbiAgbG9hZE1lbnVQYWdlKCk7XG59KTtcblxucGFnZUhlYWRlci5jb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZW1wdHlQYWdlKCk7XG4gIGxvYWRDb250YWN0UGFnZSgpO1xufSk7XG5cbmZ1bmN0aW9uIGVtcHR5UGFnZSgpIHtcbiAgbGV0IGNoaWxkcmVuID0gY29udGVudC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbiAtIDE7IGkrKykge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5cbmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==