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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://new-reddit/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://new-reddit/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppComponent\": () => (/* binding */ AppComponent),\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\n/* harmony import */ var _main_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\n/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\n/* harmony import */ var _shared_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\n/* harmony import */ var _shared_CardsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\n\n\n\n\n\n\n\nfunction AppComponent() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_4__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Content__WEBPACK_IMPORTED_MODULE_5__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_CardsList__WEBPACK_IMPORTED_MODULE_6__.CardsList, null)));\n}\nvar App = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__.hot)(function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppComponent, null);\n});\n\n//# sourceURL=webpack://new-reddit/./src/App.tsx?");

/***/ }),

/***/ "./src/server/index.template.js":
/*!**************************************!*\
  !*** ./src/server/index.template.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexTemplate\": () => (/* binding */ indexTemplate)\n/* harmony export */ });\nvar indexTemplate = function indexTemplate(content) {\n  return \"\\n<!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width initial-scale=1.0\\\">\\n    <title>New Reddit</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  </head>\\n  <body>\\n    <div id=\\\"root\\\">\".concat(content, \"</div>\\n  </body>\\n  </html>\\n\");\n};\n\n//# sourceURL=webpack://new-reddit/./src/server/index.template.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.template */ \"./src/server/index.template.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(\"/static\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"./dist/client\"));\napp.get(\"/\", function (req, res) {\n  res.send((0,_index_template__WEBPACK_IMPORTED_MODULE_2__.indexTemplate)(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString((0,_App__WEBPACK_IMPORTED_MODULE_3__.App)())));\n});\napp.listen(3000, function () {\n  console.log(\"Server started on http://localhost:3000\");\n});\n\n//# sourceURL=webpack://new-reddit/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\");\n/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MetaData */ \"./src/shared/CardsList/MetaData/index.ts\");\n/* harmony import */ var _CardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardTitle */ \"./src/shared/CardsList/CardTitle/index.ts\");\n/* harmony import */ var _CardPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardPreview */ \"./src/shared/CardsList/CardPreview/index.ts\");\n/* harmony import */ var _CardMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardMenu */ \"./src/shared/CardsList/CardMenu/index.ts\");\n/* harmony import */ var _CardControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CardControls */ \"./src/shared/CardsList/CardControls/index.ts\");\n\n\n\n\n\n\n\nvar exampleCard = {\n  user: {\n    name: \"John Doe\",\n    avatarUrl: \"https://cdn.dribbble.com/users/1259559/avatars/normal/03d2ec443a4df3da75d0c025d43d0a82.png?1607523381\",\n    avatarAlt: \"avatar-alt\",\n    userLink: \"#user-link\"\n  },\n  createdAt: \"3.10.2021\",\n  postLink: \"#post-link\",\n  postTitle: \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos accusamus voluptatum distinctio, iusto molestias culpa illum sunt porro quo deserunt doloremque dolorum excepturi natus praesentium. Expedita doloremque adipisci exercitationem tenetur!\",\n  previewUrl: \"https://cdn.dribbble.com/users/4540442/screenshots/16558334/media/c4a086e3cf000c7309d3b9aa226539a2.png\",\n  previewAlt: \"preview alt\"\n};\nfunction Card() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: _card_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MetaData__WEBPACK_IMPORTED_MODULE_2__.MetaData, {\n    user: exampleCard.user,\n    createdAt: exampleCard.createdAt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardTitle__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n    postLink: exampleCard.postLink,\n    postTitle: exampleCard.postTitle\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardPreview__WEBPACK_IMPORTED_MODULE_4__.CardPreview, {\n    previewUrl: exampleCard.previewUrl,\n    previewAlt: exampleCard.previewAlt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardMenu__WEBPACK_IMPORTED_MODULE_5__.CardMenu, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardControls__WEBPACK_IMPORTED_MODULE_6__.CardControls, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__.Card)\n/* harmony export */ });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/CardActions/CardActions.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/CardActions/CardActions.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardActions\": () => (/* binding */ CardActions)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SaveButton */ \"./src/shared/CardsList/CardControls/SaveButton/index.ts\");\n/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShareButton */ \"./src/shared/CardsList/CardControls/ShareButton/index.ts\");\n/* harmony import */ var _cardactions_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardactions.css */ \"./src/shared/CardsList/CardControls/CardActions/cardactions.css\");\n\n\n\n\nfunction CardActions() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _cardactions_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].actions\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShareButton__WEBPACK_IMPORTED_MODULE_2__.ShareButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SaveButton__WEBPACK_IMPORTED_MODULE_1__.SaveButton, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/CardActions/CardActions.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/CardActions/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/CardActions/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardActions\": () => (/* reexport safe */ _CardActions__WEBPACK_IMPORTED_MODULE_0__.CardActions)\n/* harmony export */ });\n/* harmony import */ var _CardActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardActions */ \"./src/shared/CardsList/CardControls/CardActions/CardActions.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/CardActions/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/CardControls.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/CardControls.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardControls\": () => (/* binding */ CardControls)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardActions */ \"./src/shared/CardsList/CardControls/CardActions/index.ts\");\n/* harmony import */ var _cardcontrols_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardcontrols.css */ \"./src/shared/CardsList/CardControls/cardcontrols.css\");\n/* harmony import */ var _CommentsButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/CardControls/CommentsButton/index.ts\");\n/* harmony import */ var _KarmaCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/CardControls/KarmaCounter/index.ts\");\n\n\n\n\n\nfunction CardControls() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _cardcontrols_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].controls\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_KarmaCounter__WEBPACK_IMPORTED_MODULE_4__.KarmaCounter, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentsButton__WEBPACK_IMPORTED_MODULE_3__.CommentsButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardActions__WEBPACK_IMPORTED_MODULE_1__.CardActions, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/CardControls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/CommentsButton/CommentsButton.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/CommentsButton/CommentsButton.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentsButton\": () => (/* binding */ CommentsButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commentsbutton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/CardControls/CommentsButton/commentsbutton.css\");\n\n\nfunction CommentsButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _commentsbutton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commentsButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"15\",\n    height: \"15\",\n    viewBox: \"0 0 15 15\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\",\n    fill: \"#999999\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _commentsbutton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commentsNumber\n  }, \"13\"));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/CommentsButton/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/CommentsButton/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentsButton\": () => (/* reexport safe */ _CommentsButton__WEBPACK_IMPORTED_MODULE_0__.CommentsButton)\n/* harmony export */ });\n/* harmony import */ var _CommentsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/CardControls/CommentsButton/CommentsButton.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/ButtonDown.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/ButtonDown.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonDown\": () => (/* binding */ ButtonDown)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _buttondown_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttondown.css */ \"./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/buttondown.css\");\n\n\nfunction ButtonDown() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _buttondown_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].down\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"19\",\n    height: \"10\",\n    viewBox: \"0 0 19 10\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\",\n    fill: \"#D9D9D9\"\n  })));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/ButtonDown.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/index.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonDown\": () => (/* reexport safe */ _ButtonDown__WEBPACK_IMPORTED_MODULE_0__.ButtonDown)\n/* harmony export */ });\n/* harmony import */ var _ButtonDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonDown */ \"./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/ButtonDown.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/ButtonUp.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/ButtonUp.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonUp\": () => (/* binding */ ButtonUp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _buttonup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonup.css */ \"./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/buttonup.css\");\n\n\nfunction ButtonUp() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _buttonup_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].up\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"19\",\n    height: \"10\",\n    viewBox: \"0 0 19 10\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M9.5 0L0 10H19L9.5 0Z\",\n    fill: \"#D9D9D9\"\n  })));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/ButtonUp.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/index.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonUp\": () => (/* reexport safe */ _ButtonUp__WEBPACK_IMPORTED_MODULE_0__.ButtonUp)\n/* harmony export */ });\n/* harmony import */ var _ButtonUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonUp */ \"./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/ButtonUp.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/KarmaCounter.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/KarmaCounter.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KarmaCounter\": () => (/* binding */ KarmaCounter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ButtonDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonDown */ \"./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/index.ts\");\n/* harmony import */ var _ButtonUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonUp */ \"./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/index.ts\");\n/* harmony import */ var _karmacounter_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/CardControls/KarmaCounter/karmacounter.css\");\n\n\n\n\nfunction KarmaCounter() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _karmacounter_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].karmaCounter\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonUp__WEBPACK_IMPORTED_MODULE_2__.ButtonUp, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _karmacounter_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].karmaValue\n  }, \"123\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonDown__WEBPACK_IMPORTED_MODULE_1__.ButtonDown, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KarmaCounter\": () => (/* reexport safe */ _KarmaCounter__WEBPACK_IMPORTED_MODULE_0__.KarmaCounter)\n/* harmony export */ });\n/* harmony import */ var _KarmaCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/CardControls/KarmaCounter/KarmaCounter.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/SaveButton/SaveButton.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/SaveButton/SaveButton.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SaveButton\": () => (/* binding */ SaveButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _savebutton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savebutton.css */ \"./src/shared/CardsList/CardControls/SaveButton/savebutton.css\");\n\n\nfunction SaveButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _savebutton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"20\",\n    height: \"20\",\n    viewBox: \"0 0 20 20\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"10\",\n    cy: \"10\",\n    r: \"10\",\n    fill: \"#C4C4C4\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\",\n    fill: \"white\"\n  })));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/SaveButton/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/SaveButton/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SaveButton\": () => (/* reexport safe */ _SaveButton__WEBPACK_IMPORTED_MODULE_0__.SaveButton)\n/* harmony export */ });\n/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/CardControls/SaveButton/SaveButton.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/ShareButton/ShareButton.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/ShareButton/ShareButton.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShareButton\": () => (/* binding */ ShareButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sharebutton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharebutton.css */ \"./src/shared/CardsList/CardControls/ShareButton/sharebutton.css\");\n\n\nfunction ShareButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _sharebutton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].shareButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"12\",\n    height: \"14\",\n    viewBox: \"0 0 12 14\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\",\n    fill: \"#999999\"\n  })));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/ShareButton/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/ShareButton/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShareButton\": () => (/* reexport safe */ _ShareButton__WEBPACK_IMPORTED_MODULE_0__.ShareButton)\n/* harmony export */ });\n/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/CardControls/ShareButton/ShareButton.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/CardControls/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardControls\": () => (/* reexport safe */ _CardControls__WEBPACK_IMPORTED_MODULE_0__.CardControls)\n/* harmony export */ });\n/* harmony import */ var _CardControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/CardControls/CardControls.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/CardMenu.tsx":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/CardMenu.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardMenu\": () => (/* binding */ CardMenu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_react_generate_random_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/react/generate-random-index */ \"./src/utils/react/generate-random-index.ts\");\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\n/* harmony import */ var _cardmenu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardmenu.css */ \"./src/shared/CardsList/CardMenu/cardmenu.css\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _CardMenuList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardMenuList */ \"./src/shared/CardsList/CardMenu/CardMenuList/index.ts\");\n\n\n\n\n\n\nvar MENU = [{\n  label: \"Комментарий\",\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_4__.Comment, null)\n}, {\n  label: \"Поделиться\",\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_4__.Share, null)\n}, {\n  label: \"Скрыть\",\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_4__.Hide, null),\n  showOnMobile: true\n}, {\n  label: \"Сохранить\",\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_4__.Save, null)\n}, {\n  label: \"Пожаловаться\",\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_4__.Complain, null),\n  showOnMobile: true\n}].map(_utils_react_generate_random_index__WEBPACK_IMPORTED_MODULE_1__.generateId);\nfunction CardMenu() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _cardmenu_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].menu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {\n    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: _cardmenu_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].menuButton\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_4__.Ellipsis, null))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardMenuList__WEBPACK_IMPORTED_MODULE_5__.CardMenuList, {\n    menuItems: MENU,\n    postId: (0,_utils_react_generate_random_index__WEBPACK_IMPORTED_MODULE_1__.generateRandomString)()\n  })));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/CardMenu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/CardMenuList/CardMenuList.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/CardMenuList/CardMenuList.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardMenuList\": () => (/* binding */ CardMenuList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_react_with_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/react/with-key */ \"./src/utils/react/with-key.ts\");\n/* harmony import */ var _MenuListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuListItem */ \"./src/shared/CardsList/CardMenu/MenuListItem/index.ts\");\n/* harmony import */ var _cardmenulist_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardmenulist.css */ \"./src/shared/CardsList/CardMenu/CardMenuList/cardmenulist.css\");\n\n\n\n\nfunction CardMenuList(_ref) {\n  var menuItems = _ref.menuItems,\n      postId = _ref.postId;\n  var items = menuItems.map((0,_utils_react_with_key__WEBPACK_IMPORTED_MODULE_1__.withKey)('id')(_MenuListItem__WEBPACK_IMPORTED_MODULE_2__.MenuListItem));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: _cardmenulist_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list,\n    onClick: function onClick() {\n      return console.log(postId);\n    }\n  }, items, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: _cardmenulist_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].close\n  }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/CardMenuList/CardMenuList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/CardMenuList/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/CardMenuList/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardMenuList\": () => (/* reexport safe */ _CardMenuList__WEBPACK_IMPORTED_MODULE_0__.CardMenuList)\n/* harmony export */ });\n/* harmony import */ var _CardMenuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardMenuList */ \"./src/shared/CardsList/CardMenu/CardMenuList/CardMenuList.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/CardMenuList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/MenuListItem/MenuListItem.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/MenuListItem/MenuListItem.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuListItem\": () => (/* binding */ MenuListItem)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/js/noop */ \"./src/utils/js/noop.ts\");\n/* harmony import */ var _menulistitem_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menulistitem.css */ \"./src/shared/CardsList/CardMenu/MenuListItem/menulistitem.css\");\n\n\n\nfunction MenuListItem(_ref) {\n  var label = _ref.label,\n      icon = _ref.icon,\n      showOnMobile = _ref.showOnMobile,\n      _ref$onClick = _ref.onClick,\n      onClick = _ref$onClick === void 0 ? _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__.NOOP : _ref$onClick;\n\n  var getClassName = function getClassName() {\n    return \"\".concat(_menulistitem_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].item, \" \").concat(showOnMobile ? _menulistitem_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mobile : '');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: getClassName(),\n    onClick: onClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _menulistitem_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].icon\n  }, icon && icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _menulistitem_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].label\n  }, label));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/MenuListItem/MenuListItem.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/MenuListItem/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/MenuListItem/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuListItem\": () => (/* reexport safe */ _MenuListItem__WEBPACK_IMPORTED_MODULE_0__.MenuListItem)\n/* harmony export */ });\n/* harmony import */ var _MenuListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuListItem */ \"./src/shared/CardsList/CardMenu/MenuListItem/MenuListItem.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/MenuListItem/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardMenu\": () => (/* reexport safe */ _CardMenu__WEBPACK_IMPORTED_MODULE_0__.CardMenu)\n/* harmony export */ });\n/* harmony import */ var _CardMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardMenu */ \"./src/shared/CardsList/CardMenu/CardMenu.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardPreview/CardPreview.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/CardPreview/CardPreview.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardPreview\": () => (/* binding */ CardPreview)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardpreview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardpreview.css */ \"./src/shared/CardsList/CardPreview/cardpreview.css\");\n\n\nfunction CardPreview(_ref) {\n  var previewUrl = _ref.previewUrl,\n      previewAlt = _ref.previewAlt;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _cardpreview_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].preview\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: previewUrl,\n    alt: previewAlt,\n    className: _cardpreview_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].previewImg\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardPreview/CardPreview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardPreview/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/CardPreview/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardPreview\": () => (/* reexport safe */ _CardPreview__WEBPACK_IMPORTED_MODULE_0__.CardPreview)\n/* harmony export */ });\n/* harmony import */ var _CardPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPreview */ \"./src/shared/CardsList/CardPreview/CardPreview.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardPreview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardTitle/CardTitle.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/CardTitle/CardTitle.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardTitle\": () => (/* binding */ CardTitle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardtitle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardtitle.css */ \"./src/shared/CardsList/CardTitle/cardtitle.css\");\n\n\nfunction CardTitle(_ref) {\n  var postLink = _ref.postLink,\n      postTitle = _ref.postTitle;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: _cardtitle_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: postLink,\n    className: _cardtitle_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].postLink\n  }, postTitle));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardTitle/CardTitle.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardTitle/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/CardTitle/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardTitle\": () => (/* reexport safe */ _CardTitle__WEBPACK_IMPORTED_MODULE_0__.CardTitle)\n/* harmony export */ });\n/* harmony import */ var _CardTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTitle */ \"./src/shared/CardsList/CardTitle/CardTitle.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardTitle/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsList\": () => (/* binding */ CardsList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\n/* harmony import */ var _cardslist_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\");\n\n\n\nfunction CardsList() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: _cardslist_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cardsList\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CreatedAt/CreatedAt.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/CreatedAt/CreatedAt.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreatedAt\": () => (/* binding */ CreatedAt)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createdat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createdat.css */ \"./src/shared/CardsList/CreatedAt/createdat.css\");\n\n\nfunction CreatedAt(_ref) {\n  var createdAt = _ref.createdAt;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _createdat_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createdAt\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _createdat_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publishedLabel\n  }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"), createdAt);\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CreatedAt/CreatedAt.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CreatedAt/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/CreatedAt/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreatedAt\": () => (/* reexport safe */ _CreatedAt__WEBPACK_IMPORTED_MODULE_0__.CreatedAt)\n/* harmony export */ });\n/* harmony import */ var _CreatedAt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatedAt */ \"./src/shared/CardsList/CreatedAt/CreatedAt.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CreatedAt/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/MetaData/MetaData.tsx":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/MetaData/MetaData.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MetaData\": () => (/* binding */ MetaData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CreatedAt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CreatedAt */ \"./src/shared/CardsList/CreatedAt/index.ts\");\n/* harmony import */ var _UserLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserLink */ \"./src/shared/CardsList/UserLink/index.ts\");\n/* harmony import */ var _metadata_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata.css */ \"./src/shared/CardsList/MetaData/metadata.css\");\n\n\n\n\nfunction MetaData(_ref) {\n  var user = _ref.user,\n      createdAt = _ref.createdAt;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _metadata_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].metaData\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserLink__WEBPACK_IMPORTED_MODULE_2__.UserLink, {\n    user: user\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreatedAt__WEBPACK_IMPORTED_MODULE_1__.CreatedAt, {\n    createdAt: createdAt\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/MetaData/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardsList/MetaData/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MetaData\": () => (/* reexport safe */ _MetaData__WEBPACK_IMPORTED_MODULE_0__.MetaData)\n/* harmony export */ });\n/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/MetaData/MetaData.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/UserLink/UserLink.tsx":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/UserLink/UserLink.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserLink\": () => (/* binding */ UserLink)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userlink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userlink.css */ \"./src/shared/CardsList/UserLink/userlink.css\");\n\n\nfunction UserLink(_ref) {\n  var user = _ref.user;\n  var avatarUrl = user.avatarUrl,\n      userLink = user.userLink,\n      name = user.name,\n      avatarAlt = user.avatarAlt;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _userlink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userLink\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: _userlink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].avatar,\n    src: avatarUrl,\n    alt: avatarAlt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: userLink,\n    className: _userlink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userName\n  }, name));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/UserLink/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardsList/UserLink/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserLink\": () => (/* reexport safe */ _UserLink__WEBPACK_IMPORTED_MODULE_0__.UserLink)\n/* harmony export */ });\n/* harmony import */ var _UserLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/UserLink/UserLink.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsList\": () => (/* reexport safe */ _CardsList__WEBPACK_IMPORTED_MODULE_0__.CardsList)\n/* harmony export */ });\n/* harmony import */ var _CardsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\");\n\n\nfunction Content(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", {\n    className: _content_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content\n  }, children);\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* reexport safe */ _Content__WEBPACK_IMPORTED_MODULE_0__.Content)\n/* harmony export */ });\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dropdown\": () => (/* binding */ Dropdown)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\n/* harmony import */ var _dropdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction Dropdown(_ref) {\n  var button = _ref.button,\n      children = _ref.children,\n      isOpen = _ref.isOpen,\n      _ref$onOpen = _ref.onOpen,\n      onOpen = _ref$onOpen === void 0 ? _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__.NOOP : _ref$onOpen,\n      _ref$onClose = _ref.onClose,\n      onClose = _ref$onClose === void 0 ? _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__.NOOP : _ref$onClose;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpen),\n      _useState2 = _slicedToArray(_useState, 2),\n      isDropdownOpen = _useState2[0],\n      setIsDropdownOpen = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setIsDropdownOpen(!setIsDropdownOpen);\n  }, [isOpen]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    isDropdownOpen ? onOpen() : onClose();\n  }, [isDropdownOpen]);\n\n  var handleOpen = function handleOpen() {\n    if (isOpen === undefined) {\n      setIsDropdownOpen(!isDropdownOpen);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _dropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: function onClick() {\n      return handleOpen();\n    }\n  }, button), isDropdownOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _dropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: function onClick() {\n      return setIsDropdownOpen(false);\n    },\n    className: _dropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list\n  }, children)));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dropdown\": () => (/* reexport safe */ _Dropdown__WEBPACK_IMPORTED_MODULE_0__.Dropdown)\n/* harmony export */ });\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\");\n/* harmony import */ var _SearchBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\n/* harmony import */ var _SortBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\n/* harmony import */ var _ThreadTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\n\n\n\n\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", {\n    className: _header_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchBlock__WEBPACK_IMPORTED_MODULE_2__.SearchBlock, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThreadTitle__WEBPACK_IMPORTED_MODULE_4__.ThreadTitle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SortBlock__WEBPACK_IMPORTED_MODULE_3__.SortBlock, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchBlock\": () => (/* binding */ SearchBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _searchblock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\");\n\n\nfunction SearchBlock() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _searchblock_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchBlock\n  }, \"searchblock\");\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchBlock\": () => (/* reexport safe */ _SearchBlock__WEBPACK_IMPORTED_MODULE_0__.SearchBlock)\n/* harmony export */ });\n/* harmony import */ var _SearchBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortBlock\": () => (/* binding */ SortBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sortblock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\");\n\n\nfunction SortBlock() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _sortblock_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sortBlock\n  }, \"SortingDropwn\");\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortBlock\": () => (/* reexport safe */ _SortBlock__WEBPACK_IMPORTED_MODULE_0__.SortBlock)\n/* harmony export */ });\n/* harmony import */ var _SortBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThreadTitle\": () => (/* binding */ ThreadTitle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _threadtitle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\");\n\n\nfunction ThreadTitle() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: _threadtitle_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].threadTitle\n  }, \"ThreadTitle\");\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThreadTitle\": () => (/* reexport safe */ _ThreadTitle__WEBPACK_IMPORTED_MODULE_0__.ThreadTitle)\n/* harmony export */ });\n/* harmony import */ var _ThreadTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/Comment.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/Comment.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comment\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Comment() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"15\",\n    height: \"15\",\n    viewBox: \"0 0 15 15\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\",\n    fill: \"#999999\"\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/Comment.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Complain.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/Complain.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Complain\": () => (/* binding */ Complain)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Complain() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"16\",\n    height: \"14\",\n    viewBox: \"0 0 16 14\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\",\n    fill: \"#999999\"\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/Complain.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Ellipsis.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/Ellipsis.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ellipsis\": () => (/* binding */ Ellipsis)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Ellipsis() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"5\",\n    height: \"20\",\n    viewBox: \"0 0 5 20\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"2.5\",\n    cy: \"2.5\",\n    r: \"2.5\",\n    fill: \"#D9D9D9\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"2.5\",\n    cy: \"10\",\n    r: \"2.5\",\n    fill: \"#D9D9D9\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"2.5\",\n    cy: \"17.5\",\n    r: \"2.5\",\n    fill: \"#D9D9D9\"\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/Ellipsis.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Hide.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Hide.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hide\": () => (/* binding */ Hide)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Hide() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"14\",\n    height: \"14\",\n    viewBox: \"0 0 14 14\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\",\n    fill: \"#999999\"\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/Hide.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Save.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Save.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Save\": () => (/* binding */ Save)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Save() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"14\",\n    height: \"14\",\n    viewBox: \"0 0 14 14\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\",\n    fill: \"#979797\"\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/Save.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Share.tsx":
/*!************************************!*\
  !*** ./src/shared/Icons/Share.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Share\": () => (/* binding */ Share)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Share() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"12\",\n    height: \"14\",\n    viewBox: \"0 0 12 14\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\",\n    fill: \"#999999\"\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/Share.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comment\": () => (/* reexport safe */ _Comment__WEBPACK_IMPORTED_MODULE_0__.Comment),\n/* harmony export */   \"Complain\": () => (/* reexport safe */ _Complain__WEBPACK_IMPORTED_MODULE_1__.Complain),\n/* harmony export */   \"Ellipsis\": () => (/* reexport safe */ _Ellipsis__WEBPACK_IMPORTED_MODULE_2__.Ellipsis),\n/* harmony export */   \"Hide\": () => (/* reexport safe */ _Hide__WEBPACK_IMPORTED_MODULE_3__.Hide),\n/* harmony export */   \"Save\": () => (/* reexport safe */ _Save__WEBPACK_IMPORTED_MODULE_4__.Save),\n/* harmony export */   \"Share\": () => (/* reexport safe */ _Share__WEBPACK_IMPORTED_MODULE_5__.Share)\n/* harmony export */ });\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ \"./src/shared/Icons/Comment.tsx\");\n/* harmony import */ var _Complain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Complain */ \"./src/shared/Icons/Complain.tsx\");\n/* harmony import */ var _Ellipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ellipsis */ \"./src/shared/Icons/Ellipsis.tsx\");\n/* harmony import */ var _Hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hide */ \"./src/shared/Icons/Hide.tsx\");\n/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ \"./src/shared/Icons/Save.tsx\");\n/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Share */ \"./src/shared/Icons/Share.tsx\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\");\n\n\nfunction Layout(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _layout_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].layout\n  }, children);\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Layout)\n/* harmony export */ });\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assoc\": () => (/* binding */ assoc)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction assoc(key, value) {\n  return function (obj) {\n    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, value));\n  };\n}\n\n//# sourceURL=webpack://new-reddit/./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/noop.ts":
/*!******************************!*\
  !*** ./src/utils/js/noop.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NOOP\": () => (/* binding */ NOOP)\n/* harmony export */ });\nfunction NOOP() {}\n;\n\n//# sourceURL=webpack://new-reddit/./src/utils/js/noop.ts?");

/***/ }),

/***/ "./src/utils/react/generate-random-index.ts":
/*!**************************************************!*\
  !*** ./src/utils/react/generate-random-index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRandomString\": () => (/* binding */ generateRandomString),\n/* harmony export */   \"assignId\": () => (/* binding */ assignId),\n/* harmony export */   \"generateId\": () => (/* binding */ generateId)\n/* harmony export */ });\n/* harmony import */ var _js_assoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\n\nvar generateRandomString = function generateRandomString() {\n  return Math.random().toString(36).substring(2, 15);\n};\nvar assignId = (0,_js_assoc__WEBPACK_IMPORTED_MODULE_0__.assoc)(\"id\", generateRandomString());\nvar generateId = function generateId(obj) {\n  return (0,_js_assoc__WEBPACK_IMPORTED_MODULE_0__.assoc)(\"id\", generateRandomString())(obj);\n};\n\n//# sourceURL=webpack://new-reddit/./src/utils/react/generate-random-index.ts?");

/***/ }),

/***/ "./src/utils/react/with-key.ts":
/*!*************************************!*\
  !*** ./src/utils/react/with-key.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withKey\": () => (/* binding */ withKey)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction withKey(key) {\n  return function (component) {\n    return function (props, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(component, _objectSpread(_objectSpread({}, props), {}, {\n        key: key ? props[key] : index\n      }), []);\n    };\n  };\n}\n;\n\n//# sourceURL=webpack://new-reddit/./src/utils/react/with-key.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new-reddit/./src/main.global.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"card\": \"card__card--Ut_X_\",\n\t\"textContent\": \"card__textContent--AgwdF\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/CardActions/cardactions.css":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/CardActions/cardactions.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"actions\": \"cardactions__actions--_I_kY\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/CardActions/cardactions.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/CommentsButton/commentsbutton.css":
/*!*****************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/CommentsButton/commentsbutton.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"commentsButton\": \"commentsbutton__commentsButton--DFT4I\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--QbbiP\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/buttondown.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/buttondown.css ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"down\": \"buttondown__down--ypLB3\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/buttondown.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/buttonup.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/buttonup.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"up\": \"buttonup__up--QJmJi\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/buttonup.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/KarmaCounter/karmacounter.css":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/KarmaCounter/karmacounter.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"karmaCounter\": \"karmacounter__karmaCounter--_qRYB\",\n\t\"karmaValue\": \"karmacounter__karmaValue--TU4Rm\",\n\t\"up\": \"karmacounter__up--xPvsu\",\n\t\"down\": \"karmacounter__down--FJSZ8\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/SaveButton/savebutton.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/SaveButton/savebutton.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"saveButton\": \"savebutton__saveButton--S32AZ\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/ShareButton/sharebutton.css":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/ShareButton/sharebutton.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"shareButton\": \"sharebutton__shareButton--iQr_a\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardControls/cardcontrols.css":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/CardControls/cardcontrols.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"controls\": \"cardcontrols__controls--_0VXh\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardControls/cardcontrols.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/CardMenuList/cardmenulist.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/CardMenuList/cardmenulist.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"list\": \"cardmenulist__list--Jeqc1\",\n\t\"close\": \"cardmenulist__close--_Kfzb\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/CardMenuList/cardmenulist.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/MenuListItem/menulistitem.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/MenuListItem/menulistitem.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"item\": \"menulistitem__item--LpwC_\",\n\t\"mobile\": \"menulistitem__mobile--XwX5h\",\n\t\"icon\": \"menulistitem__icon--Ae0yV\",\n\t\"label\": \"menulistitem__label--yb3Cq\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/MenuListItem/menulistitem.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardMenu/cardmenu.css":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/CardMenu/cardmenu.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"menu\": \"cardmenu__menu--jGH3W\",\n\t\"menuButton\": \"cardmenu__menuButton--PfCkU\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/cardmenu.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardPreview/cardpreview.css":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/CardPreview/cardpreview.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"preview\": \"cardpreview__preview--SPqaH\",\n\t\"previewImg\": \"cardpreview__previewImg--kqvsb\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardPreview/cardpreview.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardTitle/cardtitle.css":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/CardTitle/cardtitle.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"title\": \"cardtitle__title--sUYkk\",\n\t\"postLink\": \"cardtitle__postLink--wpeFr\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardTitle/cardtitle.css?");

/***/ }),

/***/ "./src/shared/CardsList/CreatedAt/createdat.css":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/CreatedAt/createdat.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"publishedLabel\": \"createdat__publishedLabel--_zojE\",\n\t\"createdAt\": \"createdat__createdAt--ff47V\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CreatedAt/createdat.css?");

/***/ }),

/***/ "./src/shared/CardsList/MetaData/metadata.css":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/MetaData/metadata.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"metaData\": \"metadata__metaData--fNt9Z\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/MetaData/metadata.css?");

/***/ }),

/***/ "./src/shared/CardsList/UserLink/userlink.css":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/UserLink/userlink.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"userLink\": \"userlink__userLink--hUtMz\",\n\t\"avatar\": \"userlink__avatar--_8AyD\",\n\t\"username\": \"userlink__username--HGcCB\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/UserLink/userlink.css?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"cardsList\": \"cardslist__cardsList--DoJRD\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"content\": \"content__content--euWAH\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"container\": \"dropdown__container--D2qet\",\n\t\"listContainer\": \"dropdown__listContainer--dH5KA\",\n\t\"list\": \"dropdown__list--_2BjT\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"searchBlock\": \"searchblock__searchBlock--Mwwc_\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"sortBlock\": \"sortblock__sortBlock--E8IsY\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"threadTitle\": \"threadtitle__threadTitle--LtBnb\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"header\": \"header__header--tfvWN\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"layout\": \"layout__layout--GTQmj\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/layout.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-hot-loader/root");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;