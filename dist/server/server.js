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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppComponent\": () => (/* binding */ AppComponent),\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\n/* harmony import */ var _main_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\n/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\n/* harmony import */ var _shared_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\n/* harmony import */ var _shared_CardsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_redux_store__WEBPACK_IMPORTED_MODULE_10__.rootReducer, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_11___default()))));\nfunction AppComponent() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_5__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Content__WEBPACK_IMPORTED_MODULE_6__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_CardsList__WEBPACK_IMPORTED_MODULE_7__.CardsList, null))));\n}\nvar App = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__.hot)(function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppComponent, null);\n});\n\n//# sourceURL=webpack://new-reddit/./src/App.tsx?");

/***/ }),

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EColor\": () => (/* binding */ EColor),\n/* harmony export */   \"EIconNames\": () => (/* binding */ EIconNames)\n/* harmony export */ });\nvar EColor;\n\n(function (EColor) {\n  EColor[\"black\"] = \"black\";\n  EColor[\"orage\"] = \"orange\";\n  EColor[\"green\"] = \"green\";\n  EColor[\"white\"] = \"white\";\n  EColor[\"greyF3\"] = \"greyF3\";\n  EColor[\"greyD9\"] = \"greyD9\";\n  EColor[\"greyC4\"] = \"greyC4\";\n  EColor[\"grey99\"] = \"grey99\";\n  EColor[\"grey66\"] = \"grey66\";\n})(EColor || (EColor = {}));\n\nvar EIconNames;\n\n(function (EIconNames) {\n  EIconNames[\"Comment\"] = \"Comment\";\n  EIconNames[\"Hide\"] = \"Hide\";\n  EIconNames[\"Complain\"] = \"Complain\";\n  EIconNames[\"Save\"] = \"Save\";\n  EIconNames[\"Share\"] = \"Share\";\n  EIconNames[\"Ellipsis\"] = \"Ellipsis\";\n  EIconNames[\"Anon\"] = \"Anon\";\n})(EIconNames || (EIconNames = {}));\n\n//# sourceURL=webpack://new-reddit/./src/constants/constants.ts?");

/***/ }),

/***/ "./src/hooks/useToken.tsx":
/*!********************************!*\
  !*** ./src/hooks/useToken.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useToken\": () => (/* binding */ useToken)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n\n\n\nfunction useToken() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (window.__token__ !== \"undefined\") {\n      dispatch((0,_redux_store__WEBPACK_IMPORTED_MODULE_2__.setToken)(window.__token__));\n    }\n  }, []);\n}\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useToken.tsx?");

/***/ }),

/***/ "./src/redux/me/actions.ts":
/*!*********************************!*\
  !*** ./src/redux/me/actions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MeStateActions\": () => (/* binding */ MeStateActions),\n/* harmony export */   \"meRequest\": () => (/* binding */ meRequest),\n/* harmony export */   \"meRequestSuccess\": () => (/* binding */ meRequestSuccess),\n/* harmony export */   \"meRequestError\": () => (/* binding */ meRequestError),\n/* harmony export */   \"getUserAsync\": () => (/* binding */ getUserAsync)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar MeStateActions;\n\n(function (MeStateActions) {\n  MeStateActions[\"ME_REQUEST\"] = \"ME_REQUEST\";\n  MeStateActions[\"ME_REQUEST_SUCCESS\"] = \"ME_REQUEST_SUCCESS\";\n  MeStateActions[\"ME_REQUEST_ERROR\"] = \"ME_REQUEST_ERROR\";\n})(MeStateActions || (MeStateActions = {}));\n\nvar meRequest = function meRequest() {\n  return {\n    type: MeStateActions.ME_REQUEST\n  };\n};\nvar meRequestSuccess = function meRequestSuccess(userData) {\n  return {\n    type: MeStateActions.ME_REQUEST_SUCCESS,\n    payload: userData\n  };\n};\nvar meRequestError = function meRequestError(error) {\n  return {\n    type: MeStateActions.ME_REQUEST_ERROR,\n    payload: error\n  };\n};\nvar getUserAsync = function getUserAsync() {\n  return function (dispatch, getState) {\n    var token = getState().token;\n    if (token === \"undefined\") return;\n    dispatch(meRequest());\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://oauth.reddit.com/api/v1/me', {\n      headers: {\n        Authorization: \"bearer \".concat(token)\n      }\n    }).then(function (res) {\n      var userData = res.data;\n      dispatch(meRequestSuccess({\n        name: userData.name,\n        iconImg: userData.icon_img\n      }));\n    })[\"catch\"](function (e) {\n      dispatch(meRequestError(e));\n    });\n  };\n};\n\n//# sourceURL=webpack://new-reddit/./src/redux/me/actions.ts?");

/***/ }),

/***/ "./src/redux/me/meStore.ts":
/*!*********************************!*\
  !*** ./src/redux/me/meStore.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"meInitialState\": () => (/* binding */ meInitialState),\n/* harmony export */   \"meReducer\": () => (/* binding */ meReducer)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/redux/me/actions.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar meInitialState = {\n  user: {\n    name: \"\",\n    iconImg: \"\"\n  },\n  loading: false,\n  error: null\n};\nvar meReducer = function meReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : meInitialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__.MeStateActions.ME_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__.MeStateActions.ME_REQUEST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        user: action.payload\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__.MeStateActions.ME_REQUEST_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        error: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://new-reddit/./src/redux/me/meStore.ts?");

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateComment\": () => (/* binding */ updateComment),\n/* harmony export */   \"setToken\": () => (/* binding */ setToken),\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var _me_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./me/actions */ \"./src/redux/me/actions.ts\");\n/* harmony import */ var _me_meStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./me/meStore */ \"./src/redux/me/meStore.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar RootStateActions;\n\n(function (RootStateActions) {\n  RootStateActions[\"UPDATE_COMMENT\"] = \"UPDATE_COMMENT\";\n  RootStateActions[\"SET_TOKEN\"] = \"SET_TOKEN\";\n})(RootStateActions || (RootStateActions = {}));\n\nvar initialState = {\n  commentText: \"\",\n  token: \"\",\n  me: _me_meStore__WEBPACK_IMPORTED_MODULE_1__.meInitialState\n};\nvar updateComment = function updateComment(value) {\n  return {\n    type: RootStateActions.UPDATE_COMMENT,\n    payload: value\n  };\n};\nvar setToken = function setToken(token) {\n  return {\n    type: RootStateActions.SET_TOKEN,\n    payload: token\n  };\n};\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case RootStateActions.UPDATE_COMMENT:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          commentText: action.payload\n        });\n      }\n\n    case RootStateActions.SET_TOKEN:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          token: action.payload\n        });\n      }\n\n    case _me_actions__WEBPACK_IMPORTED_MODULE_0__.MeStateActions.ME_REQUEST:\n    case _me_actions__WEBPACK_IMPORTED_MODULE_0__.MeStateActions.ME_REQUEST_ERROR:\n    case _me_actions__WEBPACK_IMPORTED_MODULE_0__.MeStateActions.ME_REQUEST_SUCCESS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          me: (0,_me_meStore__WEBPACK_IMPORTED_MODULE_1__.meReducer)(state.me, action)\n        });\n      }\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://new-reddit/./src/redux/store.ts?");

/***/ }),

/***/ "./src/server/index.template.js":
/*!**************************************!*\
  !*** ./src/server/index.template.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexTemplate\": () => (/* binding */ indexTemplate)\n/* harmony export */ });\nvar indexTemplate = function indexTemplate(content, token) {\n  return \"\\n<!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width initial-scale=1.0\\\">\\n    <title>New Reddit</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n      window.__token__ = '\".concat(token, \"'\\n    </script>\\n  </head>\\n  <body>\\n    <div id=\\\"root\\\">\").concat(content, \"</div>\\n    <div id=\\\"modal\\\"></div>\\n  </body>\\n  </html>\\n\");\n};\n\n//# sourceURL=webpack://new-reddit/./src/server/index.template.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.template */ \"./src/server/index.template.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(\"/static\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"./dist/client\"));\napp.get(\"/\", function (req, res) {\n  res.send((0,_index_template__WEBPACK_IMPORTED_MODULE_2__.indexTemplate)(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString((0,_App__WEBPACK_IMPORTED_MODULE_3__.App)())));\n});\napp.get(\"/auth\", function (req, res) {\n  axios__WEBPACK_IMPORTED_MODULE_4___default().post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\n    auth: {\n      username: 'jX6MapNVQC9F2kzmFYyEDA',\n      password: \"\".concat('l5z7Od2iYfFDIlFLvs5GgTOH4XqVcg')\n    },\n    headers: {\n      \"Content-type\": \"application/x-www-form-urlencoded\"\n    }\n  }).then(function (_ref) {\n    var data = _ref.data;\n    res.send((0,_index_template__WEBPACK_IMPORTED_MODULE_2__.indexTemplate)(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString((0,_App__WEBPACK_IMPORTED_MODULE_3__.App)()), data['access_token']));\n  })[\"catch\"](console.log);\n});\napp.listen(3000, function () {\n  console.log(\"Server started on http://localhost:3000\");\n});\n\n//# sourceURL=webpack://new-reddit/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\");\n/* harmony import */ var _MetaData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MetaData */ \"./src/shared/CardsList/MetaData/index.ts\");\n/* harmony import */ var _CardTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardTitle */ \"./src/shared/CardsList/CardTitle/index.ts\");\n/* harmony import */ var _CardPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardPreview */ \"./src/shared/CardsList/CardPreview/index.ts\");\n/* harmony import */ var _CardMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardMenu */ \"./src/shared/CardsList/CardMenu/index.ts\");\n/* harmony import */ var _CardControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CardControls */ \"./src/shared/CardsList/CardControls/index.ts\");\n\n\n\n\n\n\n\nfunction Card(_ref) {\n  var post = _ref.post;\n  var created_utc = post.created_utc,\n      author = post.author,\n      permalink = post.permalink,\n      title = post.title,\n      url = post.url,\n      thumbnail = post.thumbnail;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: _card_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _card_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MetaData__WEBPACK_IMPORTED_MODULE_2__.MetaData, {\n    username: author,\n    userLink: permalink,\n    createdAt: created_utc\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardTitle__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n    postLink: url,\n    postTitle: title\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardPreview__WEBPACK_IMPORTED_MODULE_4__.CardPreview, {\n    previewUrl: thumbnail,\n    previewAlt: title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardMenu__WEBPACK_IMPORTED_MODULE_5__.CardMenu, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardControls__WEBPACK_IMPORTED_MODULE_6__.CardControls, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/Card.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardMenu\": () => (/* binding */ CardMenu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_react_generate_random_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/react/generate-random-index */ \"./src/utils/react/generate-random-index.ts\");\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\n/* harmony import */ var _cardmenu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardmenu.css */ \"./src/shared/CardsList/CardMenu/cardmenu.css\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/constants */ \"./src/constants/constants.ts\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\n\n\n\n\n\n\nvar MENU = [{\n  label: \"Комментарий\",\n  icon: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.EIconNames.Comment\n}, {\n  label: \"Поделиться\",\n  icon: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.EIconNames.Share\n}, {\n  label: \"Скрыть\",\n  icon: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.EIconNames.Hide,\n  showOnMobile: true\n}, {\n  label: \"Сохранить\",\n  icon: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.EIconNames.Save\n}, {\n  label: \"Пожаловаться\",\n  icon: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.EIconNames.Complain,\n  showOnMobile: true\n}].map(_utils_react_generate_random_index__WEBPACK_IMPORTED_MODULE_1__.generateId);\nfunction CardMenu() {\n  var button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _cardmenu_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].menuButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n    name: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.EIconNames.Ellipsis\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _cardmenu_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].menu\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {\n    button: button,\n    items: MENU\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/CardMenu.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuListItem\": () => (/* binding */ MenuListItem)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/js/noop */ \"./src/utils/js/noop.ts\");\n/* harmony import */ var _menulistitem_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menulistitem.css */ \"./src/shared/CardsList/CardMenu/MenuListItem/menulistitem.css\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\n\n\n\n\n\nfunction MenuListItem(_ref) {\n  var label = _ref.label,\n      icon = _ref.icon,\n      showOnMobile = _ref.showOnMobile,\n      _ref$onClick = _ref.onClick,\n      onClick = _ref$onClick === void 0 ? _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__.NOOP : _ref$onClick;\n\n  var getClassName = function getClassName() {\n    return \"\".concat(_menulistitem_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].item, \" \").concat(showOnMobile ? _menulistitem_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mobile : '');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: getClassName(),\n    onClick: onClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _menulistitem_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].icon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n    name: icon,\n    size: 16,\n    mobileSize: 12\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    size: 14,\n    mobileSize: 12\n  }, label));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardMenu/MenuListItem/MenuListItem.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardPreview\": () => (/* binding */ CardPreview)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardpreview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardpreview.css */ \"./src/shared/CardsList/CardPreview/cardpreview.css\");\n\n\nvar errorSrc = 'https://www.onlygfx.com/wp-content/uploads/2017/12/empty-stamp-1-1024x1024.png';\nfunction CardPreview(_ref) {\n  var previewUrl = _ref.previewUrl,\n      previewAlt = _ref.previewAlt;\n\n  var handleError = function handleError(e) {\n    e.currentTarget.src = errorSrc;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _cardpreview_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].preview\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: previewUrl,\n    alt: previewAlt,\n    className: _cardpreview_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].previewImg,\n    onError: handleError\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardPreview/CardPreview.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardTitle\": () => (/* binding */ CardTitle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/js/pipe */ \"./src/utils/js/pipe.ts\");\n/* harmony import */ var _utils_react_prevent_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/react/prevent-default */ \"./src/utils/react/prevent-default.ts\");\n/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Portal */ \"./src/shared/Portal/index.ts\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Post */ \"./src/shared/Post/index.ts\");\n/* harmony import */ var _cardtitle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cardtitle.css */ \"./src/shared/CardsList/CardTitle/cardtitle.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction CardTitle(_ref) {\n  var postLink = _ref.postLink,\n      postTitle = _ref.postTitle;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isModalOpen = _useState2[0],\n      setIsModalOpen = _useState2[1];\n\n  var handleClick = function handleClick() {\n    setIsModalOpen(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: _cardtitle_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: _cardtitle_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].postLink,\n    onClick: (0,_utils_js_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(_utils_react_prevent_default__WEBPACK_IMPORTED_MODULE_2__.preventDefault, _utils_react_prevent_default__WEBPACK_IMPORTED_MODULE_2__.stopPropagation, handleClick)\n  }, postTitle), isModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Portal__WEBPACK_IMPORTED_MODULE_3__.Portal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Post__WEBPACK_IMPORTED_MODULE_4__.Post, {\n    onClose: function onClose() {\n      return setIsModalOpen(false);\n    }\n  })));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardTitle/CardTitle.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsList\": () => (/* binding */ CardsList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.ts\");\n/* harmony import */ var _cardslist_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\");\n/* harmony import */ var _hooks_usePostData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/usePostData */ \"./src/shared/CardsList/hooks/usePostData.tsx\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\n\n\n\n\n\nfunction CardsList() {\n  var bottomOfList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _usePostData = (0,_hooks_usePostData__WEBPACK_IMPORTED_MODULE_3__.usePostData)(bottomOfList),\n      _usePostData$state = _usePostData.state,\n      items = _usePostData$state.items,\n      loading = _usePostData$state.loading,\n      error = _usePostData$state.error,\n      loadingCount = _usePostData$state.loadingCount,\n      onLoadClick = _usePostData.onLoadClick;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: _cardslist_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cardsList\n  }, items.length === 0 && !loading && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_4__.Text, {\n    size: 20,\n    color: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EColor.orage\n  }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")), items, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_4__.Text, {\n    size: 20,\n    color: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EColor.grey99\n  }, \"...\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430\")), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    role: \"alert\",\n    style: {\n      textAlign: \"center\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_4__.Text, {\n    size: 20,\n    color: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EColor.orage\n  }, error.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    ref: bottomOfList\n  }), loadingCount >= 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _cardslist_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button,\n    onClick: onLoadClick\n  }, \"...\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435\"));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CreatedAt/CreatedAt.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/CreatedAt/CreatedAt.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreatedAt\": () => (/* binding */ CreatedAt)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createdat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createdat.css */ \"./src/shared/CardsList/CreatedAt/createdat.css\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction CreatedAt(_ref) {\n  var createdAt = _ref.createdAt;\n  var date = new Date(new Date().getTime() - createdAt);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _createdat_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createdAt\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _createdat_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publishedLabel\n  }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"), moment__WEBPACK_IMPORTED_MODULE_2___default()(date.toString()).locale('ru').fromNow());\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CreatedAt/CreatedAt.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MetaData\": () => (/* binding */ MetaData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CreatedAt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CreatedAt */ \"./src/shared/CardsList/CreatedAt/index.ts\");\n/* harmony import */ var _UserLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserLink */ \"./src/shared/CardsList/UserLink/index.ts\");\n/* harmony import */ var _metadata_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata.css */ \"./src/shared/CardsList/MetaData/metadata.css\");\n\n\n\n\nfunction MetaData(_ref) {\n  var username = _ref.username,\n      userLink = _ref.userLink,\n      createdAt = _ref.createdAt;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _metadata_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].metaData\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserLink__WEBPACK_IMPORTED_MODULE_2__.UserLink, {\n    username: username,\n    userLink: userLink\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreatedAt__WEBPACK_IMPORTED_MODULE_1__.CreatedAt, {\n    createdAt: createdAt\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/MetaData/MetaData.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserLink\": () => (/* binding */ UserLink)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userlink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userlink.css */ \"./src/shared/CardsList/UserLink/userlink.css\");\n\n\nfunction UserLink(_ref) {\n  var username = _ref.username,\n      userLink = _ref.userLink,\n      avatarUrl = _ref.avatarUrl;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _userlink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userLink\n  }, avatarUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: _userlink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].avatar,\n    src: avatarUrl,\n    alt: username\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: userLink,\n    className: _userlink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userName\n  }, username));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/UserLink/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardsList/UserLink/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserLink\": () => (/* reexport safe */ _UserLink__WEBPACK_IMPORTED_MODULE_0__.UserLink)\n/* harmony export */ });\n/* harmony import */ var _UserLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/UserLink/UserLink.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/hooks/useOutsideClick.tsx":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/hooks/useOutsideClick.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useOutsideClick\": () => (/* binding */ useOutsideClick)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useOutsideClick(ref, handler) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleClick = function handleClick(event) {\n      var el = ref === null || ref === void 0 ? void 0 : ref.current;\n\n      if (!el || el.contains(event.target)) {\n        return;\n      }\n\n      handler === null || handler === void 0 ? void 0 : handler(event);\n    };\n\n    window.addEventListener('click', handleClick);\n    return function () {\n      return window.removeEventListener('click', handleClick);\n    };\n  }, [ref, handler]);\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/hooks/useOutsideClick.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/hooks/usePostData.tsx":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/hooks/usePostData.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usePostData\": () => (/* binding */ usePostData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ \"./src/shared/CardsList/Card/index.ts\");\nvar _excluded = [\"id\"];\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction usePostData(ref) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      loading = _useState6[0],\n      setLoading = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      _useState8 = _slicedToArray(_useState7, 2),\n      after = _useState8[0],\n      setAfter = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      _useState10 = _slicedToArray(_useState9, 2),\n      loadingCount = _useState10[0],\n      setLoadingCount = _useState10[1];\n\n  var token = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.token;\n  });\n\n  var load = function load() {\n    if (!token || loadingCount >= 3) return;\n    setLoading(true);\n    setError(null);\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://oauth.reddit.com/rising/', {\n      headers: {\n        Authorization: \"bearer \".concat(token)\n      },\n      params: {\n        limit: 10,\n        after: after\n      }\n    }).then(function (res) {\n      setPosts(function (posts) {\n        return [].concat(_toConsumableArray(posts), _toConsumableArray(res.data.data.children));\n      });\n      setAfter(res.data.data.after);\n      setLoading(false);\n      setLoadingCount(function (count) {\n        return count + 1;\n      });\n    })[\"catch\"](function (error) {\n      setError(error);\n      setLoading(false);\n      setLoadingCount(0);\n    });\n  };\n\n  var onLoadClick = function onLoadClick() {\n    setLoadingCount(0);\n    load();\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var observer = new IntersectionObserver(function (entries) {\n      if (entries[0].isIntersecting) {\n        load();\n      }\n    }, {\n      rootMargin: \"10px\"\n    });\n\n    if (ref.current) {\n      observer.observe(ref.current);\n    }\n\n    return function () {\n      return observer.unobserve(ref.current);\n    };\n  }, [ref.current, token, after, loadingCount]);\n  var items = posts.map(function (_ref) {\n    var data = _ref.data;\n\n    var id = data.id,\n        rest = _objectWithoutProperties(data, _excluded);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n      key: id,\n      post: rest\n    });\n  });\n  return {\n    state: {\n      items: items,\n      error: error,\n      loading: loading,\n      loadingCount: loadingCount\n    },\n    onLoadClick: onLoadClick\n  };\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/hooks/usePostData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsList\": () => (/* reexport safe */ _CardsList__WEBPACK_IMPORTED_MODULE_0__.CardsList)\n/* harmony export */ });\n/* harmony import */ var _CardsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentForm/CommentForm.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentForm/CommentForm.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentForm\": () => (/* binding */ CommentForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _commentform_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentFormContainer/CommentForm/commentform.css\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar validate = function validate(values) {\n  var errors = {};\n\n  if (values.comment.length < 3) {\n    errors.comment = \"Должно быть более 3-х символов\";\n  }\n\n  return errors;\n};\n\nfunction CommentForm(_ref) {\n  var value = _ref.value,\n      handleChange = _ref.handleChange;\n  var form = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({\n    initialValues: {\n      comment: value !== null && value !== void 0 ? value : \"\"\n    },\n    validate: validate,\n    onSubmit: function onSubmit(values) {\n      handleChange(values.comment);\n      console.log(\"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439 \\\"\".concat(values.comment, \"\\\" \\u0443\\u0441\\u043F\\u0435\\u0448\\u043D\\u043E \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D \\u0432 store\"));\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: _commentform_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form,\n    onSubmit: form.handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n    className: _commentform_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input,\n    onChange: form.handleChange,\n    onBlur: form.handleBlur,\n    name: \"comment\",\n    value: form.values.comment\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, form.errors.comment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    className: _commentform_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button\n  }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CommentFormContainer/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentForm/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentForm/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentForm\": () => (/* reexport safe */ _CommentForm__WEBPACK_IMPORTED_MODULE_0__.CommentForm)\n/* harmony export */ });\n/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentFormContainer/CommentForm/CommentForm.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CommentFormContainer/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentFormContainer\": () => (/* binding */ CommentFormContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentFormContainer/CommentForm/index.ts\");\n\n\n\n\nfunction CommentFormContainer(_ref) {\n  var initialValue = _ref.initialValue;\n  var commentText = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.commentText;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (initialValue) {\n      handleChange(\"\".concat(initialValue, \", \"));\n    }\n  }, [initialValue]);\n\n  var handleChange = function handleChange(value) {\n    dispatch((0,_redux_store__WEBPACK_IMPORTED_MODULE_2__.updateComment)(value));\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentForm__WEBPACK_IMPORTED_MODULE_3__.CommentForm, {\n    value: commentText,\n    handleChange: handleChange,\n    handleSubmit: handleSubmit\n  });\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentFormContainer\": () => (/* reexport safe */ _CommentFormContainer__WEBPACK_IMPORTED_MODULE_0__.CommentFormContainer)\n/* harmony export */ });\n/* harmony import */ var _CommentFormContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Comments/CommentItem/CommentItem.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/Comments/CommentItem/CommentItem.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentItem\": () => (/* binding */ CommentItem)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/constants */ \"./src/constants/constants.ts\");\n/* harmony import */ var _CardsList_UserLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CardsList/UserLink */ \"./src/shared/CardsList/UserLink/index.ts\");\n/* harmony import */ var _CommentFormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\n/* harmony import */ var _commentitem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commentitem.css */ \"./src/shared/Comments/CommentItem/commentitem.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar userName = \"John Doe\";\nfunction CommentItem() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      formIsOpen = _useState2[0],\n      setFormIsOpen = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _commentitem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].commentItem\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _commentitem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].commentHeader\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardsList_UserLink__WEBPACK_IMPORTED_MODULE_2__.UserLink, {\n    username: userName,\n    userLink: \"#some-user-link\",\n    avatarUrl: \"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _commentitem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].time\n  }, \"1 \\u0447\\u0430\\u0441 \\u043D\\u0430\\u0437\\u0430\\u0434\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: _commentitem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].league\n  }, \"\\u041B\\u0438\\u0433\\u0430 \\u044E\\u0440\\u0438\\u0441\\u0442\\u043E\\u0432\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {\n    size: 14,\n    As: \"span\"\n  }, \"\\u0421\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043E\\u0431\\u044A\\u0435\\u043A\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u0441\\u043C\\u043E\\u0442\\u0440\\u0435\\u043D\\u044B \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0438\\u043C\\u0438 \\u0438\\u043D\\u0441\\u0442\\u0430\\u043D\\u0446\\u0438\\u044F\\u043C\\u0438. \\u041B\\u0438\\u0448\\u044C \\u0440\\u0435\\u043F\\u043B\\u0438\\u0446\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0441 \\u0437\\u0430\\u0440\\u0443\\u0431\\u0435\\u0436\\u043D\\u044B\\u0445 \\u0438\\u0441\\u0442\\u043E\\u0447\\u043D\\u0438\\u043A\\u043E\\u0432, \\u0441\\u043E\\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043E\\u043F\\u0438\\u0441\\u0430\\u043D\\u044B \\u043C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E \\u043F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u043E.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _commentitem_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].commentControls\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return setFormIsOpen(!formIsOpen);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n    name: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EIconNames.Comment\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {\n    size: 14,\n    color: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EColor.grey66\n  }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n    name: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EIconNames.Share\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {\n    size: 14,\n    color: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EColor.grey66\n  }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n    name: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EIconNames.Complain\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_5__.Text, {\n    size: 14,\n    color: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EColor.grey66\n  }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))), formIsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentFormContainer__WEBPACK_IMPORTED_MODULE_3__.CommentFormContainer, {\n    initialValue: userName\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Comments/CommentItem/CommentItem.tsx?");

/***/ }),

/***/ "./src/shared/Comments/CommentItem/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/Comments/CommentItem/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentItem\": () => (/* reexport safe */ _CommentItem__WEBPACK_IMPORTED_MODULE_0__.CommentItem)\n/* harmony export */ });\n/* harmony import */ var _CommentItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentItem */ \"./src/shared/Comments/CommentItem/CommentItem.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Comments/CommentItem/index.ts?");

/***/ }),

/***/ "./src/shared/Comments/Comments.tsx":
/*!******************************************!*\
  !*** ./src/shared/Comments/Comments.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comments\": () => (/* binding */ Comments)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CommentItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentItem */ \"./src/shared/Comments/CommentItem/index.ts\");\n/* harmony import */ var _comments_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.css */ \"./src/shared/Comments/comments.css\");\n\n\n\nfunction Comments() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _comments_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].comments\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentItem__WEBPACK_IMPORTED_MODULE_1__.CommentItem, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/Comments/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Comments/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comments\": () => (/* reexport safe */ _Comments__WEBPACK_IMPORTED_MODULE_0__.Comments)\n/* harmony export */ });\n/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments */ \"./src/shared/Comments/Comments.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Comments/index.ts?");

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

/***/ "./src/shared/Dropdown/DropDownList/DropDownList.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Dropdown/DropDownList/DropDownList.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DropDownList\": () => (/* binding */ DropDownList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_react_generate_random_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/react/generate-random-index */ \"./src/utils/react/generate-random-index.ts\");\n/* harmony import */ var _CardsList_CardMenu_CardMenuList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CardsList/CardMenu/CardMenuList */ \"./src/shared/CardsList/CardMenu/CardMenuList/index.ts\");\n/* harmony import */ var _CardsList_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../CardsList/hooks/useOutsideClick */ \"./src/shared/CardsList/hooks/useOutsideClick.tsx\");\n/* harmony import */ var _dropdownlist_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdownlist.css */ \"./src/shared/Dropdown/DropDownList/dropdownlist.css\");\n\n\n\n\n\nfunction DropDownList(props) {\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,_CardsList_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_3__.useOutsideClick)(ref, props.onClose);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _dropdownlist_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].listContainer,\n    ref: ref\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _dropdownlist_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].list,\n    onClick: props.onClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardsList_CardMenu_CardMenuList__WEBPACK_IMPORTED_MODULE_2__.CardMenuList, {\n    menuItems: props.items,\n    postId: (0,_utils_react_generate_random_index__WEBPACK_IMPORTED_MODULE_1__.generateRandomString)()\n  })));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Dropdown/DropDownList/DropDownList.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/DropDownList/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/Dropdown/DropDownList/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DropDownList\": () => (/* reexport safe */ _DropDownList__WEBPACK_IMPORTED_MODULE_0__.DropDownList)\n/* harmony export */ });\n/* harmony import */ var _DropDownList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropDownList */ \"./src/shared/Dropdown/DropDownList/DropDownList.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Dropdown/DropDownList/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dropdown\": () => (/* binding */ Dropdown)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/js/noop */ \"./src/utils/js/noop.ts\");\n/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal */ \"./src/shared/Portal/index.ts\");\n/* harmony import */ var _dropdown_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\");\n/* harmony import */ var _DropDownList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownList */ \"./src/shared/Dropdown/DropDownList/index.ts\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Dropdown(_ref) {\n  var button = _ref.button,\n      items = _ref.items,\n      isOpen = _ref.isOpen,\n      _ref$onOpen = _ref.onOpen,\n      onOpen = _ref$onOpen === void 0 ? _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__.NOOP : _ref$onOpen,\n      _ref$onClose = _ref.onClose,\n      onClose = _ref$onClose === void 0 ? _utils_js_noop__WEBPACK_IMPORTED_MODULE_1__.NOOP : _ref$onClose;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpen),\n      _useState2 = _slicedToArray(_useState, 2),\n      isDropdownOpen = _useState2[0],\n      setIsDropdownOpen = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setIsDropdownOpen(!setIsDropdownOpen);\n  }, [isOpen]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    isDropdownOpen ? onOpen() : onClose();\n  }, [isDropdownOpen]);\n\n  var handleOpen = function handleOpen() {\n    if (isOpen === undefined) {\n      setIsDropdownOpen(!isDropdownOpen);\n    }\n  };\n\n  var handleClose = function handleClose() {\n    setIsDropdownOpen(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _dropdown_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].container\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: function onClick() {\n      return handleOpen();\n    }\n  }, button), isDropdownOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Portal__WEBPACK_IMPORTED_MODULE_2__.Portal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropDownList__WEBPACK_IMPORTED_MODULE_4__.DropDownList, {\n    items: items,\n    onClose: handleClose\n  })));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Dropdown/Dropdown.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchBlock\": () => (/* binding */ SearchBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _searchblock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\");\n/* harmony import */ var _UserBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\n/* harmony import */ var _UserBlock_hooks_useUserData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserBlock/hooks/useUserData */ \"./src/shared/Header/SearchBlock/UserBlock/hooks/useUserData.tsx\");\n\n\n\n\nfunction SearchBlock() {\n  var userData = (0,_UserBlock_hooks_useUserData__WEBPACK_IMPORTED_MODULE_3__.useUserData)();\n  var user = userData.user,\n      loading = userData.loading;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _searchblock_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserBlock__WEBPACK_IMPORTED_MODULE_2__.UserBlock, {\n    username: loading ? \"...Загрузка\" : user.name,\n    avatarSrc: user.iconImg\n  }));\n}\n;\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserBlock\": () => (/* binding */ UserBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants/constants */ \"./src/constants/constants.ts\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\n/* harmony import */ var _userblock_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\");\n\n\n\n\n\nfunction UserBlock(_ref) {\n  var avatarSrc = _ref.avatarSrc,\n      username = _ref.username;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"https://www.reddit.com/api/v1/authorize?client_id=\".concat('jX6MapNVQC9F2kzmFYyEDA', \"&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\"),\n    className: _userblock_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].userBox\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _userblock_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].avatarBox\n  }, avatarSrc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: avatarSrc,\n    alt: \"user avatar\",\n    className: _userblock_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].avatarImage\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n    name: _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EIconNames.Anon\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _userblock_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].username\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    size: 20,\n    color: username ? _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EColor.black : _constants_constants__WEBPACK_IMPORTED_MODULE_1__.EColor.grey99\n  }, username !== null && username !== void 0 ? username : \"Аноним\")));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/hooks/useUserData.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/hooks/useUserData.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUserData\": () => (/* binding */ useUserData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_me_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../redux/me/actions */ \"./src/redux/me/actions.ts\");\n\n\n\nfunction useUserData() {\n  var token = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.token;\n  });\n  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.me;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!token) return;\n    dispatch((0,_redux_me_actions__WEBPACK_IMPORTED_MODULE_2__.getUserAsync)());\n  }, [token]);\n  return data;\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/hooks/useUserData.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserBlock\": () => (/* reexport safe */ _UserBlock__WEBPACK_IMPORTED_MODULE_0__.UserBlock)\n/* harmony export */ });\n/* harmony import */ var _UserBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/index.ts?");

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

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Icon\": () => (/* binding */ Icon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Icon(props) {\n  var _props$size = props.size,\n      size = _props$size === void 0 ? 16 : _props$size,\n      mobileSize = props.mobileSize,\n      desktopSize = props.desktopSize,\n      tabletSize = props.tabletSize,\n      name = props.name,\n      icon = props.icon;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(icon),\n      _useState2 = _slicedToArray(_useState, 2),\n      svgIconComponent = _useState2[0],\n      setSvgIconComponent = _useState2[1];\n\n  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(_icon_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].icon, _icon_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"s\".concat(size)], _defineProperty({}, _icon_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"m\".concat(mobileSize)], mobileSize), _defineProperty({}, _icon_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"d\".concat(desktopSize)], desktopSize), _defineProperty({}, _icon_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"t\".concat(tabletSize)], tabletSize));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (typeof svgIconComponent === 'undefined') {\n      setSvgIconComponent(_Icons__WEBPACK_IMPORTED_MODULE_2__[name]);\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes\n  }, svgIconComponent);\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Icon\": () => (/* reexport safe */ _Icon__WEBPACK_IMPORTED_MODULE_0__.Icon)\n/* harmony export */ });\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/Anon.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Anon.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Anon\": () => (/* binding */ Anon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Anon() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    width: \"50\",\n    height: \"50\",\n    viewBox: \"0 0 50 50\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\",\n    fill: \"#D9D9D9\"\n  }));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/Anon.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comment\": () => (/* reexport safe */ _Comment__WEBPACK_IMPORTED_MODULE_0__.Comment),\n/* harmony export */   \"Complain\": () => (/* reexport safe */ _Complain__WEBPACK_IMPORTED_MODULE_1__.Complain),\n/* harmony export */   \"Ellipsis\": () => (/* reexport safe */ _Ellipsis__WEBPACK_IMPORTED_MODULE_2__.Ellipsis),\n/* harmony export */   \"Hide\": () => (/* reexport safe */ _Hide__WEBPACK_IMPORTED_MODULE_3__.Hide),\n/* harmony export */   \"Save\": () => (/* reexport safe */ _Save__WEBPACK_IMPORTED_MODULE_4__.Save),\n/* harmony export */   \"Share\": () => (/* reexport safe */ _Share__WEBPACK_IMPORTED_MODULE_5__.Share),\n/* harmony export */   \"Anon\": () => (/* reexport safe */ _Anon__WEBPACK_IMPORTED_MODULE_6__.Anon)\n/* harmony export */ });\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ \"./src/shared/Icons/Comment.tsx\");\n/* harmony import */ var _Complain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Complain */ \"./src/shared/Icons/Complain.tsx\");\n/* harmony import */ var _Ellipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ellipsis */ \"./src/shared/Icons/Ellipsis.tsx\");\n/* harmony import */ var _Hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hide */ \"./src/shared/Icons/Hide.tsx\");\n/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ \"./src/shared/Icons/Save.tsx\");\n/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Share */ \"./src/shared/Icons/Share.tsx\");\n/* harmony import */ var _Anon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Anon */ \"./src/shared/Icons/Anon.tsx\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useToken */ \"./src/hooks/useToken.tsx\");\n/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\");\n\n\n\nfunction Layout(_ref) {\n  var children = _ref.children;\n  (0,_hooks_useToken__WEBPACK_IMPORTED_MODULE_1__.useToken)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _layout_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].layout\n  }, children);\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Layout)\n/* harmony export */ });\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Portal/Portal.tsx":
/*!**************************************!*\
  !*** ./src/shared/Portal/Portal.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Portal\": () => (/* binding */ Portal)\n/* harmony export */ });\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Portal(_ref) {\n  var children = _ref.children;\n  var node = document.querySelector('#modal');\n  if (!node) return null;\n  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)(children, node);\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Portal/Portal.tsx?");

/***/ }),

/***/ "./src/shared/Portal/index.ts":
/*!************************************!*\
  !*** ./src/shared/Portal/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Portal\": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_0__.Portal)\n/* harmony export */ });\n/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ \"./src/shared/Portal/Portal.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Portal/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardsList_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CardsList/hooks/useOutsideClick */ \"./src/shared/CardsList/hooks/useOutsideClick.tsx\");\n/* harmony import */ var _CommentFormContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\n/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Comments */ \"./src/shared/Comments/index.ts\");\n/* harmony import */ var _post_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\");\n\n\n\n\n\nvar userName = \"John Doe\";\nfunction Post(_ref) {\n  var onClose = _ref.onClose;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,_CardsList_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_1__.useOutsideClick)(ref, onClose);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _post_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].modal,\n    ref: ref\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Header\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _post_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].content\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentFormContainer__WEBPACK_IMPORTED_MODULE_2__.CommentFormContainer, {\n    initialValue: userName\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comments__WEBPACK_IMPORTED_MODULE_3__.Comments, null));\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": () => (/* reexport safe */ _Post__WEBPACK_IMPORTED_MODULE_0__.Post)\n/* harmony export */ });\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Text\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _text_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction Text(props) {\n  var _props$As = props.As,\n      As = _props$As === void 0 ? 'span' : _props$As,\n      children = props.children,\n      size = props.size,\n      mobileSize = props.mobileSize,\n      tabletSize = props.tabletSize,\n      desktopSize = props.desktopSize,\n      _props$color = props.color,\n      color = _props$color === void 0 ? _constants_constants__WEBPACK_IMPORTED_MODULE_3__.EColor.black : _props$color,\n      _props$upperCase = props.upperCase,\n      upperCase = _props$upperCase === void 0 ? false : _props$upperCase;\n  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_text_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"s\".concat(size)], _text_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][color], _defineProperty({}, _text_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"m\".concat(mobileSize)], mobileSize), _defineProperty({}, _text_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"t\".concat(tabletSize)], tabletSize), _defineProperty({}, _text_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"t\".concat(desktopSize)], desktopSize), _defineProperty({}, _text_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].upperCase, upperCase));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(As, {\n    className: classes\n  }, children);\n}\n\n//# sourceURL=webpack://new-reddit/./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Text\": () => (/* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_0__.Text)\n/* harmony export */ });\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\");\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Text/index.ts?");

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

/***/ "./src/utils/js/pipe.ts":
/*!******************************!*\
  !*** ./src/utils/js/pipe.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pipe\": () => (/* binding */ pipe)\n/* harmony export */ });\nfunction pipe() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return fns.reduce(function (previousValue, fn) {\n      return fn(previousValue);\n    }, initialValue);\n  };\n}\n\n//# sourceURL=webpack://new-reddit/./src/utils/js/pipe.ts?");

/***/ }),

/***/ "./src/utils/react/generate-random-index.ts":
/*!**************************************************!*\
  !*** ./src/utils/react/generate-random-index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRandomString\": () => (/* binding */ generateRandomString),\n/* harmony export */   \"assignId\": () => (/* binding */ assignId),\n/* harmony export */   \"generateId\": () => (/* binding */ generateId)\n/* harmony export */ });\n/* harmony import */ var _js_assoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\n\nvar generateRandomString = function generateRandomString() {\n  return Math.random().toString(36).substring(2, 15);\n};\nvar assignId = (0,_js_assoc__WEBPACK_IMPORTED_MODULE_0__.assoc)(\"id\", generateRandomString());\nvar generateId = function generateId(obj) {\n  return (0,_js_assoc__WEBPACK_IMPORTED_MODULE_0__.assoc)(\"id\", generateRandomString())(obj);\n};\n\n//# sourceURL=webpack://new-reddit/./src/utils/react/generate-random-index.ts?");

/***/ }),

/***/ "./src/utils/react/prevent-default.ts":
/*!********************************************!*\
  !*** ./src/utils/react/prevent-default.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"preventDefault\": () => (/* binding */ preventDefault),\n/* harmony export */   \"stopPropagation\": () => (/* binding */ stopPropagation)\n/* harmony export */ });\nfunction preventDefault(fn) {\n  return function (e) {\n    e.preventDefault();\n    fn(e);\n  };\n}\nfunction stopPropagation(fn) {\n  return function (e) {\n    e.stopPropagation();\n    fn(e);\n  };\n}\n\n//# sourceURL=webpack://new-reddit/./src/utils/react/prevent-default.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"cardsList\": \"cardslist__cardsList--DoJRD\",\n\t\"button\": \"cardslist__button--YddgM\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentForm/commentform.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentForm/commentform.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"form\": \"commentform__form--cvCOL\",\n\t\"input\": \"commentform__input--DIPwS\",\n\t\"button\": \"commentform__button--_Cv0I\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CommentFormContainer/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/Comments/CommentItem/commentitem.css":
/*!*********************************************************!*\
  !*** ./src/shared/Comments/CommentItem/commentitem.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"commentHeader\": \"commentitem__commentHeader--fsll1\",\n\t\"time\": \"commentitem__time--_kW6e\",\n\t\"league\": \"commentitem__league--LKBaz\",\n\t\"commentControls\": \"commentitem__commentControls--_wttL\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Comments/CommentItem/commentitem.css?");

/***/ }),

/***/ "./src/shared/Comments/comments.css":
/*!******************************************!*\
  !*** ./src/shared/Comments/comments.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Comments/comments.css?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"content\": \"content__content--euWAH\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Dropdown/DropDownList/dropdownlist.css":
/*!***********************************************************!*\
  !*** ./src/shared/Dropdown/DropDownList/dropdownlist.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"listContainer\": \"dropdownlist__listContainer--fnJw5\",\n\t\"list\": \"dropdownlist__list--wYD8o\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Dropdown/DropDownList/dropdownlist.css?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"container\": \"dropdown__container--D2qet\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"userBox\": \"userblock__userBox--GoHCS\",\n\t\"avatarBox\": \"userblock__avatarBox--_2cyM\",\n\t\"avatarImage\": \"userblock__avatarImage--_YLpV\",\n\t\"username\": \"userblock__username--ZqW0q\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

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

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"s12\": \"icon__s12--Ec59_\",\n\t\"s16\": \"icon__s16--Uwzb_\",\n\t\"m12\": \"icon__m12--n2_oT\",\n\t\"m16\": \"icon__m16--D9mQ8\",\n\t\"t12\": \"icon__t12--iUFxs\",\n\t\"t16\": \"icon__t16--_vi8A\",\n\t\"d12\": \"icon__d12--ss8Q0\",\n\t\"d16\": \"icon__d16--hP60k\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"layout\": \"layout__layout--GTQmj\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"modal\": \"post__modal--ph_s0\",\n\t\"content\": \"post__content--dHXVQ\",\n\t\"close\": \"post__close--bFyXJ\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"s28\": \"text__s28--POgWB\",\n\t\"s20\": \"text__s20--f7Qmu\",\n\t\"s16\": \"text__s16--gsQ45\",\n\t\"s14\": \"text__s14--n9OWB\",\n\t\"s12\": \"text__s12--_KWef\",\n\t\"s10\": \"text__s10--_IA3u\",\n\t\"black\": \"text__black--S0fHP\",\n\t\"orange\": \"text__orange--qk4Y7\",\n\t\"green\": \"text__green--O57NU\",\n\t\"white\": \"text__white--Z7JdG\",\n\t\"grayF4\": \"text__grayF4--MWvGn\",\n\t\"greyF3\": \"text__greyF3--Le2H1\",\n\t\"greyD9\": \"text__greyD9--pLBro\",\n\t\"greyC4\": \"text__greyC4--bjeXb\",\n\t\"grey99\": \"text__grey99--j4_GF\",\n\t\"grey66\": \"text__grey66--SrMlf\",\n\t\"upperCase\": \"text__upperCase--DMl7u\",\n\t\"m28\": \"text__m28--X0zqf\",\n\t\"m20\": \"text__m20--LOqr_\",\n\t\"m16\": \"text__m16--WOjvb\",\n\t\"m14\": \"text__m14--uWTwF\",\n\t\"m12\": \"text__m12--_Vrcl\",\n\t\"m10\": \"text__m10--_VnrM\",\n\t\"bold\": \"text__bold--GWjoy\",\n\t\"t28\": \"text__t28--nLC7M\",\n\t\"t20\": \"text__t20--LU3nb\",\n\t\"t16\": \"text__t16--hshTO\",\n\t\"t14\": \"text__t14--_ycr1\",\n\t\"t12\": \"text__t12--xHb8R\",\n\t\"t10\": \"text__t10--_mbzm\",\n\t\"d28\": \"text__d28--kVNyg\",\n\t\"d20\": \"text__d20--xiMIe\",\n\t\"d16\": \"text__d16--NODPK\",\n\t\"d14\": \"text__d14--ZYaNA\",\n\t\"d12\": \"text__d12--C5wnd\",\n\t\"d10\": \"text__d10--_twcr\"\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Text/text.css?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

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

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

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