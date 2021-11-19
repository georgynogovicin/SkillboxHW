/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 922:
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ 499:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 853:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --black:          #333333;\n  --orange:         #CC6633;\n  --green:          #A4CC33;\n  --whiteLightness: 100%;\n  --white:          hsl(0, 0%, var(--whiteLightness));\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: var(--grayF4);\n  font-size: 14px;\n  line-height: 16px;\n  font-family: 'Roboto', serif;\n}\n\n* {\n  color: var(--black);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}", ""]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// NAMESPACE OBJECT: ./src/shared/Icons/index.ts
var Icons_namespaceObject = {};
__webpack_require__.r(Icons_namespaceObject);
__webpack_require__.d(Icons_namespaceObject, {
  "Anon": () => (Anon),
  "Comment": () => (Comment),
  "Complain": () => (Complain),
  "Ellipsis": () => (Ellipsis),
  "Hide": () => (Hide),
  "Save": () => (Save),
  "Share": () => (Share)
});

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: ./src/server/index.template.js
var indexTemplate = function indexTemplate(content, token) {
  return "\n<!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width initial-scale=1.0\">\n    <title>New Reddit</title>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script>\n      window.__token__ = '".concat(token, "'\n    </script>\n  </head>\n  <body>\n    <div id=\"root\">").concat(content, "</div>\n    <div id=\"modal\"></div>\n  </body>\n  </html>\n");
};
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "react-hot-loader/root"
const root_namespaceObject = require("react-hot-loader/root");
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/redux/me/actions.ts

var MeStateActions;

(function (MeStateActions) {
  MeStateActions["ME_REQUEST"] = "ME_REQUEST";
  MeStateActions["ME_REQUEST_SUCCESS"] = "ME_REQUEST_SUCCESS";
  MeStateActions["ME_REQUEST_ERROR"] = "ME_REQUEST_ERROR";
})(MeStateActions || (MeStateActions = {}));

var meRequest = function meRequest() {
  return {
    type: MeStateActions.ME_REQUEST
  };
};
var meRequestSuccess = function meRequestSuccess(userData) {
  return {
    type: MeStateActions.ME_REQUEST_SUCCESS,
    payload: userData
  };
};
var meRequestError = function meRequestError(error) {
  return {
    type: MeStateActions.ME_REQUEST_ERROR,
    payload: error
  };
};
var getUserAsync = function getUserAsync() {
  return function (dispatch, getState) {
    var token = getState().token;
    if (token === "undefined") return;
    dispatch(meRequest());
    external_axios_default().get('https://oauth.reddit.com/api/v1/me', {
      headers: {
        Authorization: "bearer ".concat(token)
      }
    }).then(function (res) {
      var userData = res.data;
      dispatch(meRequestSuccess({
        name: userData.name,
        iconImg: userData.icon_img
      }));
    })["catch"](function (e) {
      dispatch(meRequestError(e));
    });
  };
};
;// CONCATENATED MODULE: ./src/redux/me/meStore.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var meInitialState = {
  user: {
    name: "",
    iconImg: ""
  },
  loading: false,
  error: null
};
var meReducer = function meReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : meInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case MeStateActions.ME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case MeStateActions.ME_REQUEST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        user: action.payload
      });

    case MeStateActions.ME_REQUEST_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./src/redux/store.ts
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RootStateActions;

(function (RootStateActions) {
  RootStateActions["UPDATE_COMMENT"] = "UPDATE_COMMENT";
  RootStateActions["SET_TOKEN"] = "SET_TOKEN";
})(RootStateActions || (RootStateActions = {}));

var initialState = {
  commentText: "",
  token: "",
  me: meInitialState
};
var updateComment = function updateComment(value) {
  return {
    type: RootStateActions.UPDATE_COMMENT,
    payload: value
  };
};
var setToken = function setToken(token) {
  return {
    type: RootStateActions.SET_TOKEN,
    payload: token
  };
};
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case RootStateActions.UPDATE_COMMENT:
      {
        return store_objectSpread(store_objectSpread({}, state), {}, {
          commentText: action.payload
        });
      }

    case RootStateActions.SET_TOKEN:
      {
        return store_objectSpread(store_objectSpread({}, state), {}, {
          token: action.payload
        });
      }

    case MeStateActions.ME_REQUEST:
    case MeStateActions.ME_REQUEST_ERROR:
    case MeStateActions.ME_REQUEST_SUCCESS:
      {
        return store_objectSpread(store_objectSpread({}, state), {}, {
          me: meReducer(state.me, action)
        });
      }

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./src/hooks/useToken.tsx



function useToken() {
  var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
  (0,external_react_namespaceObject.useEffect)(function () {
    if (window.__token__ !== "undefined") {
      dispatch(setToken(window.__token__));
    }
  }, []);
}
;// CONCATENATED MODULE: ./src/shared/Layout/layout.css
// Exports
/* harmony default export */ const layout = ({
	"layout": "layout__layout--GTQmj"
});

;// CONCATENATED MODULE: ./src/shared/Layout/Layout.tsx



function Layout(_ref) {
  var children = _ref.children;
  useToken();
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: layout.layout
  }, children);
}
;// CONCATENATED MODULE: ./src/shared/Layout/index.ts

// EXTERNAL MODULE: ./src/main.global.css
var main_global = __webpack_require__(853);
;// CONCATENATED MODULE: ./src/shared/Header/header.css
// Exports
/* harmony default export */ const header = ({
	"header": "header__header--tfvWN"
});

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/searchblock.css
// Exports
/* harmony default export */ const searchblock = ({
	"searchBlock": "searchblock__searchBlock--Mwwc_"
});

;// CONCATENATED MODULE: ./src/constants/constants.ts
var EColor;

(function (EColor) {
  EColor["black"] = "black";
  EColor["orage"] = "orange";
  EColor["green"] = "green";
  EColor["white"] = "white";
  EColor["greyF3"] = "greyF3";
  EColor["greyD9"] = "greyD9";
  EColor["greyC4"] = "greyC4";
  EColor["grey99"] = "grey99";
  EColor["grey66"] = "grey66";
})(EColor || (EColor = {}));

var EIconNames;

(function (EIconNames) {
  EIconNames["Comment"] = "Comment";
  EIconNames["Hide"] = "Hide";
  EIconNames["Complain"] = "Complain";
  EIconNames["Save"] = "Save";
  EIconNames["Share"] = "Share";
  EIconNames["Ellipsis"] = "Ellipsis";
  EIconNames["Anon"] = "Anon";
})(EIconNames || (EIconNames = {}));
;// CONCATENATED MODULE: ./src/shared/Icon/icon.css
// Exports
/* harmony default export */ const Icon_icon = ({
	"s12": "icon__s12--Ec59_",
	"s16": "icon__s16--Uwzb_",
	"m12": "icon__m12--n2_oT",
	"m16": "icon__m16--D9mQ8",
	"t12": "icon__t12--iUFxs",
	"t16": "icon__t16--_vi8A",
	"d12": "icon__d12--ss8Q0",
	"d16": "icon__d16--hP60k"
});

;// CONCATENATED MODULE: ./src/shared/Icons/Comment.tsx

function Comment() {
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z",
    fill: "#999999"
  }));
}
;// CONCATENATED MODULE: ./src/shared/Icons/Complain.tsx

function Complain() {
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z",
    fill: "#999999"
  }));
}
;// CONCATENATED MODULE: ./src/shared/Icons/Ellipsis.tsx

function Ellipsis() {
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "5",
    height: "20",
    viewBox: "0 0 5 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("circle", {
    cx: "2.5",
    cy: "2.5",
    r: "2.5",
    fill: "#D9D9D9"
  }), /*#__PURE__*/external_react_default().createElement("circle", {
    cx: "2.5",
    cy: "10",
    r: "2.5",
    fill: "#D9D9D9"
  }), /*#__PURE__*/external_react_default().createElement("circle", {
    cx: "2.5",
    cy: "17.5",
    r: "2.5",
    fill: "#D9D9D9"
  }));
}
;// CONCATENATED MODULE: ./src/shared/Icons/Hide.tsx

function Hide() {
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z",
    fill: "#999999"
  }));
}
;// CONCATENATED MODULE: ./src/shared/Icons/Save.tsx

function Save() {
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z",
    fill: "#979797"
  }));
}
;// CONCATENATED MODULE: ./src/shared/Icons/Share.tsx

function Share() {
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z",
    fill: "#999999"
  }));
}
;// CONCATENATED MODULE: ./src/shared/Icons/Anon.tsx

function Anon() {
  return /*#__PURE__*/external_react_default().createElement("svg", {
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z",
    fill: "#D9D9D9"
  }));
}
;// CONCATENATED MODULE: ./src/shared/Icons/index.ts







;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/Icon/Icon.tsx
function Icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Icon(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      mobileSize = props.mobileSize,
      desktopSize = props.desktopSize,
      tabletSize = props.tabletSize,
      name = props.name,
      icon = props.icon;

  var _useState = (0,external_react_namespaceObject.useState)(icon),
      _useState2 = _slicedToArray(_useState, 2),
      svgIconComponent = _useState2[0],
      setSvgIconComponent = _useState2[1];

  var classes = external_classnames_default()(Icon_icon.icon, Icon_icon["s".concat(size)], Icon_defineProperty({}, Icon_icon["m".concat(mobileSize)], mobileSize), Icon_defineProperty({}, Icon_icon["d".concat(desktopSize)], desktopSize), Icon_defineProperty({}, Icon_icon["t".concat(tabletSize)], tabletSize));
  (0,external_react_namespaceObject.useEffect)(function () {
    if (typeof svgIconComponent === 'undefined') {
      setSvgIconComponent(Icons_namespaceObject[name]);
    }
  }, []);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: classes
  }, svgIconComponent);
}
;// CONCATENATED MODULE: ./src/shared/Icon/index.ts

;// CONCATENATED MODULE: ./src/shared/Text/text.css
// Exports
/* harmony default export */ const Text_text = ({
	"s28": "text__s28--POgWB",
	"s20": "text__s20--f7Qmu",
	"s16": "text__s16--gsQ45",
	"s14": "text__s14--n9OWB",
	"s12": "text__s12--_KWef",
	"s10": "text__s10--_IA3u",
	"black": "text__black--S0fHP",
	"orange": "text__orange--qk4Y7",
	"green": "text__green--O57NU",
	"white": "text__white--Z7JdG",
	"grayF4": "text__grayF4--MWvGn",
	"greyF3": "text__greyF3--Le2H1",
	"greyD9": "text__greyD9--pLBro",
	"greyC4": "text__greyC4--bjeXb",
	"grey99": "text__grey99--j4_GF",
	"grey66": "text__grey66--SrMlf",
	"upperCase": "text__upperCase--DMl7u",
	"m28": "text__m28--X0zqf",
	"m20": "text__m20--LOqr_",
	"m16": "text__m16--WOjvb",
	"m14": "text__m14--uWTwF",
	"m12": "text__m12--_Vrcl",
	"m10": "text__m10--_VnrM",
	"bold": "text__bold--GWjoy",
	"t28": "text__t28--nLC7M",
	"t20": "text__t20--LU3nb",
	"t16": "text__t16--hshTO",
	"t14": "text__t14--_ycr1",
	"t12": "text__t12--xHb8R",
	"t10": "text__t10--_mbzm",
	"d28": "text__d28--kVNyg",
	"d20": "text__d20--xiMIe",
	"d16": "text__d16--NODPK",
	"d14": "text__d14--ZYaNA",
	"d12": "text__d12--C5wnd",
	"d10": "text__d10--_twcr"
});

;// CONCATENATED MODULE: ./src/shared/Text/Text.tsx
function Text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Text(props) {
  var _props$As = props.As,
      As = _props$As === void 0 ? 'span' : _props$As,
      children = props.children,
      size = props.size,
      mobileSize = props.mobileSize,
      tabletSize = props.tabletSize,
      desktopSize = props.desktopSize,
      _props$color = props.color,
      color = _props$color === void 0 ? EColor.black : _props$color,
      _props$upperCase = props.upperCase,
      upperCase = _props$upperCase === void 0 ? false : _props$upperCase;
  var classes = external_classnames_default()(Text_text["s".concat(size)], Text_text[color], Text_defineProperty({}, Text_text["m".concat(mobileSize)], mobileSize), Text_defineProperty({}, Text_text["t".concat(tabletSize)], tabletSize), Text_defineProperty({}, Text_text["t".concat(desktopSize)], desktopSize), Text_defineProperty({}, Text_text.upperCase, upperCase));
  return /*#__PURE__*/external_react_default().createElement(As, {
    className: classes
  }, children);
}
;// CONCATENATED MODULE: ./src/shared/Text/index.ts

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/userblock.css
// Exports
/* harmony default export */ const userblock = ({
	"userBox": "userblock__userBox--GoHCS",
	"avatarBox": "userblock__avatarBox--_2cyM",
	"avatarImage": "userblock__avatarImage--_YLpV",
	"username": "userblock__username--ZqW0q"
});

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx





function UserBlock(_ref) {
  var avatarSrc = _ref.avatarSrc,
      username = _ref.username;
  return /*#__PURE__*/external_react_default().createElement("a", {
    href: "https://www.reddit.com/api/v1/authorize?client_id=".concat('undefined', "&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"),
    className: userblock.userBox
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: userblock.avatarBox
  }, avatarSrc ? /*#__PURE__*/external_react_default().createElement("img", {
    src: avatarSrc,
    alt: "user avatar",
    className: userblock.avatarImage
  }) : /*#__PURE__*/external_react_default().createElement(Icon, {
    name: EIconNames.Anon
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: userblock.username
  }, /*#__PURE__*/external_react_default().createElement(Text, {
    size: 20,
    color: username ? EColor.black : EColor.grey99
  }, username !== null && username !== void 0 ? username : "Аноним")));
}
;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/index.ts

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/hooks/useUserData.tsx



function useUserData() {
  var token = (0,external_react_redux_namespaceObject.useSelector)(function (state) {
    return state.token;
  });
  var data = (0,external_react_redux_namespaceObject.useSelector)(function (state) {
    return state.me;
  });
  var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
  (0,external_react_namespaceObject.useEffect)(function () {
    if (!token) return;
    dispatch(getUserAsync());
  }, [token]);
  return data;
}
;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/SearchBlock.tsx




function SearchBlock() {
  var userData = useUserData();
  var user = userData.user,
      loading = userData.loading;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: searchblock.searchBlock
  }, /*#__PURE__*/external_react_default().createElement(UserBlock, {
    username: loading ? "...Загрузка" : user.name,
    avatarSrc: user.iconImg
  }));
}
;
;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/index.ts

;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/sortblock.css
// Exports
/* harmony default export */ const sortblock = ({
	"sortBlock": "sortblock__sortBlock--E8IsY"
});

;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/SortBlock.tsx


function SortBlock() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: sortblock.sortBlock
  }, "SortingDropwn");
}
;// CONCATENATED MODULE: ./src/shared/Header/SortBlock/index.ts

;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/threadtitle.css
// Exports
/* harmony default export */ const threadtitle = ({
	"threadTitle": "threadtitle__threadTitle--LtBnb"
});

;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/ThreadTitle.tsx


function ThreadTitle() {
  return /*#__PURE__*/external_react_default().createElement("h1", {
    className: threadtitle.threadTitle
  }, "ThreadTitle");
}
;// CONCATENATED MODULE: ./src/shared/Header/ThreadTitle/index.ts

;// CONCATENATED MODULE: ./src/shared/Header/Header.tsx





function Header() {
  return /*#__PURE__*/external_react_default().createElement("header", {
    className: header.header
  }, /*#__PURE__*/external_react_default().createElement(SearchBlock, null), /*#__PURE__*/external_react_default().createElement(ThreadTitle, null), /*#__PURE__*/external_react_default().createElement(SortBlock, null));
}
;// CONCATENATED MODULE: ./src/shared/Header/index.ts

;// CONCATENATED MODULE: ./src/shared/Content/content.css
// Exports
/* harmony default export */ const content = ({
	"content": "content__content--euWAH"
});

;// CONCATENATED MODULE: ./src/shared/Content/Content.tsx


function Content(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default().createElement("main", {
    className: content.content
  }, children);
}
;// CONCATENATED MODULE: ./src/shared/Content/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/cardslist.css
// Exports
/* harmony default export */ const cardslist = ({
	"cardsList": "cardslist__cardsList--DoJRD",
	"button": "cardslist__button--YddgM"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/hooks/usePostData.tsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || usePostData_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return usePostData_arrayLikeToArray(arr); }

function usePostData_slicedToArray(arr, i) { return usePostData_arrayWithHoles(arr) || usePostData_iterableToArrayLimit(arr, i) || usePostData_unsupportedIterableToArray(arr, i) || usePostData_nonIterableRest(); }

function usePostData_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function usePostData_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return usePostData_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return usePostData_arrayLikeToArray(o, minLen); }

function usePostData_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function usePostData_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function usePostData_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function usePostData(ref) {
  var _useState = (0,external_react_namespaceObject.useState)([]),
      _useState2 = usePostData_slicedToArray(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = (0,external_react_namespaceObject.useState)(null),
      _useState4 = usePostData_slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,external_react_namespaceObject.useState)(false),
      _useState6 = usePostData_slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,external_react_namespaceObject.useState)(""),
      _useState8 = usePostData_slicedToArray(_useState7, 2),
      after = _useState8[0],
      setAfter = _useState8[1];

  var _useState9 = (0,external_react_namespaceObject.useState)(0),
      _useState10 = usePostData_slicedToArray(_useState9, 2),
      loadingCount = _useState10[0],
      setLoadingCount = _useState10[1];

  var token = (0,external_react_redux_namespaceObject.useSelector)(function (state) {
    return state.token;
  });

  var load = function load() {
    if (!token || loadingCount >= 3) return;
    setLoading(true);
    setError(null);
    external_axios_default().get('https://oauth.reddit.com/rising/', {
      headers: {
        Authorization: "bearer ".concat(token)
      },
      params: {
        limit: 10,
        after: after
      }
    }).then(function (res) {
      setPosts(function (posts) {
        return [].concat(_toConsumableArray(posts), _toConsumableArray(res.data.data.children));
      });
      setAfter(res.data.data.after);
      setLoading(false);
      setLoadingCount(function (count) {
        return count + 1;
      });
    })["catch"](function (error) {
      setError(error);
      setLoading(false);
      setLoadingCount(0);
    });
  };

  var onLoadClick = function onLoadClick() {
    setLoadingCount(0);
    load();
  };

  (0,external_react_namespaceObject.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: "10px"
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return function () {
      return observer.unobserve(ref.current);
    };
  }, [ref.current, token, after, loadingCount]);
  return {
    state: {
      posts: posts,
      error: error,
      loading: loading,
      loadingCount: loadingCount
    },
    onLoadClick: onLoadClick
  };
}
;// CONCATENATED MODULE: ./src/shared/CardsList/Card/card.css
// Exports
/* harmony default export */ const card = ({
	"card": "card__card--Ut_X_",
	"textContent": "card__textContent--AgwdF"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CreatedAt/createdat.css
// Exports
/* harmony default export */ const createdat = ({
	"publishedLabel": "createdat__publishedLabel--_zojE",
	"createdAt": "createdat__createdAt--ff47V"
});

;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/CardsList/CreatedAt/CreatedAt.tsx



function CreatedAt(_ref) {
  var createdAt = _ref.createdAt;
  var date = new Date(new Date().getTime() - createdAt);
  return /*#__PURE__*/external_react_default().createElement("span", {
    className: createdat.createdAt
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: createdat.publishedLabel
  }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "), external_moment_default()(date.toString()).locale('ru').fromNow());
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CreatedAt/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/UserLink/userlink.css
// Exports
/* harmony default export */ const userlink = ({
	"userLink": "userlink__userLink--hUtMz",
	"avatar": "userlink__avatar--_8AyD",
	"username": "userlink__username--HGcCB"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/UserLink/UserLink.tsx


function UserLink(_ref) {
  var username = _ref.username,
      userLink = _ref.userLink,
      avatarUrl = _ref.avatarUrl;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: userlink.userLink
  }, avatarUrl && /*#__PURE__*/external_react_default().createElement("img", {
    className: userlink.avatar,
    src: avatarUrl,
    alt: username
  }), /*#__PURE__*/external_react_default().createElement("a", {
    href: userLink,
    className: userlink.userName
  }, username));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/UserLink/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/MetaData/metadata.css
// Exports
/* harmony default export */ const metadata = ({
	"metaData": "metadata__metaData--fNt9Z"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/MetaData/MetaData.tsx




function MetaData(_ref) {
  var username = _ref.username,
      userLink = _ref.userLink,
      createdAt = _ref.createdAt;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: metadata.metaData
  }, /*#__PURE__*/external_react_default().createElement(UserLink, {
    username: username,
    userLink: userLink
  }), /*#__PURE__*/external_react_default().createElement(CreatedAt, {
    createdAt: createdAt
  }));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/MetaData/index.ts

;// CONCATENATED MODULE: external "react-router-dom"
const external_react_router_dom_namespaceObject = require("react-router-dom");
;// CONCATENATED MODULE: ./src/shared/CardsList/CardTitle/cardtitle.css
// Exports
/* harmony default export */ const cardtitle = ({
	"title": "cardtitle__title--sUYkk",
	"postLink": "cardtitle__postLink--wpeFr"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardTitle/CardTitle.tsx



function CardTitle(_ref) {
  var postLink = _ref.postLink,
      postTitle = _ref.postTitle;
  return /*#__PURE__*/external_react_default().createElement("h2", {
    className: cardtitle.title
  }, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Link, {
    to: "/posts/".concat(postTitle),
    className: cardtitle.postLink
  }, postTitle));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardTitle/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardPreview/cardpreview.css
// Exports
/* harmony default export */ const cardpreview = ({
	"preview": "cardpreview__preview--SPqaH",
	"previewImg": "cardpreview__previewImg--kqvsb"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardPreview/CardPreview.tsx


var errorSrc = 'https://www.onlygfx.com/wp-content/uploads/2017/12/empty-stamp-1-1024x1024.png';
function CardPreview(_ref) {
  var previewUrl = _ref.previewUrl,
      previewAlt = _ref.previewAlt;

  var handleError = function handleError(e) {
    e.currentTarget.src = errorSrc;
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: cardpreview.preview
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: previewUrl,
    alt: previewAlt,
    className: cardpreview.previewImg,
    onError: handleError
  }));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardPreview/index.ts

;// CONCATENATED MODULE: ./src/utils/js/assoc.ts
function assoc_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function assoc_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { assoc_ownKeys(Object(source), true).forEach(function (key) { assoc_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { assoc_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function assoc_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function assoc(key, value) {
  return function (obj) {
    return assoc_objectSpread(assoc_objectSpread({}, obj), {}, assoc_defineProperty({}, key, value));
  };
}
;// CONCATENATED MODULE: ./src/utils/react/generate-random-index.ts

var generateRandomString = function generateRandomString() {
  return Math.random().toString(36).substring(2, 15);
};
var assignId = assoc("id", generateRandomString());
var generateId = function generateId(obj) {
  return assoc("id", generateRandomString())(obj);
};
;// CONCATENATED MODULE: ./src/utils/js/noop.ts
function NOOP() {}
;
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./src/shared/Portal/Portal.tsx

function Portal(_ref) {
  var children = _ref.children;
  var node = document.querySelector('#modal');
  if (!node) return null;
  return /*#__PURE__*/(0,external_react_dom_namespaceObject.createPortal)(children, node);
}
;// CONCATENATED MODULE: ./src/shared/Portal/index.ts

;// CONCATENATED MODULE: ./src/shared/Dropdown/dropdown.css
// Exports
/* harmony default export */ const dropdown = ({
	"container": "dropdown__container--D2qet"
});

;// CONCATENATED MODULE: ./src/utils/react/with-key.ts
function with_key_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function with_key_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { with_key_ownKeys(Object(source), true).forEach(function (key) { with_key_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { with_key_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function with_key_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function withKey(key) {
  return function (component) {
    return function (props, index) {
      return /*#__PURE__*/external_react_default().createElement(component, with_key_objectSpread(with_key_objectSpread({}, props), {}, {
        key: key ? props[key] : index
      }), []);
    };
  };
}
;
;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/MenuListItem/menulistitem.css
// Exports
/* harmony default export */ const menulistitem = ({
	"item": "menulistitem__item--LpwC_",
	"mobile": "menulistitem__mobile--XwX5h",
	"icon": "menulistitem__icon--Ae0yV",
	"label": "menulistitem__label--yb3Cq"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/MenuListItem/MenuListItem.tsx





function MenuListItem(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      showOnMobile = _ref.showOnMobile,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? NOOP : _ref$onClick;

  var getClassName = function getClassName() {
    return "".concat(menulistitem.item, " ").concat(showOnMobile ? menulistitem.mobile : '');
  };

  return /*#__PURE__*/external_react_default().createElement("li", {
    className: getClassName(),
    onClick: onClick
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: menulistitem.icon
  }, /*#__PURE__*/external_react_default().createElement(Icon, {
    name: icon,
    size: 16,
    mobileSize: 12
  })), /*#__PURE__*/external_react_default().createElement(Text, {
    size: 14,
    mobileSize: 12
  }, label));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/MenuListItem/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/CardMenuList/cardmenulist.css
// Exports
/* harmony default export */ const cardmenulist = ({
	"list": "cardmenulist__list--Jeqc1",
	"close": "cardmenulist__close--_Kfzb"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/CardMenuList/CardMenuList.tsx




function CardMenuList(_ref) {
  var menuItems = _ref.menuItems,
      postId = _ref.postId;
  var items = menuItems.map(withKey('id')(MenuListItem));
  return /*#__PURE__*/external_react_default().createElement("ul", {
    className: cardmenulist.list,
    onClick: function onClick() {
      return console.log(postId);
    }
  }, items, /*#__PURE__*/external_react_default().createElement("li", {
    className: cardmenulist.close
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/CardMenuList/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/hooks/useOutsideClick.tsx

function useOutsideClick(ref, handler) {
  (0,external_react_namespaceObject.useEffect)(function () {
    var handleClick = function handleClick(event) {
      var el = ref === null || ref === void 0 ? void 0 : ref.current;

      if (!el || el.contains(event.target)) {
        return;
      }

      handler === null || handler === void 0 ? void 0 : handler(event);
    };

    window.addEventListener('click', handleClick);
    return function () {
      return window.removeEventListener('click', handleClick);
    };
  }, [ref, handler]);
}
;// CONCATENATED MODULE: ./src/shared/Dropdown/DropDownList/dropdownlist.css
// Exports
/* harmony default export */ const dropdownlist = ({
	"listContainer": "dropdownlist__listContainer--fnJw5",
	"list": "dropdownlist__list--wYD8o"
});

;// CONCATENATED MODULE: ./src/shared/Dropdown/DropDownList/DropDownList.tsx





function DropDownList(props) {
  var ref = (0,external_react_namespaceObject.useRef)(null);
  useOutsideClick(ref, props.onClose);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: dropdownlist.listContainer,
    ref: ref
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: dropdownlist.list,
    onClick: props.onClose
  }, /*#__PURE__*/external_react_default().createElement(CardMenuList, {
    menuItems: props.items,
    postId: generateRandomString()
  })));
}
;// CONCATENATED MODULE: ./src/shared/Dropdown/DropDownList/index.ts

;// CONCATENATED MODULE: ./src/shared/Dropdown/Dropdown.tsx
function Dropdown_slicedToArray(arr, i) { return Dropdown_arrayWithHoles(arr) || Dropdown_iterableToArrayLimit(arr, i) || Dropdown_unsupportedIterableToArray(arr, i) || Dropdown_nonIterableRest(); }

function Dropdown_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Dropdown_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Dropdown_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dropdown_arrayLikeToArray(o, minLen); }

function Dropdown_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Dropdown_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Dropdown_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Dropdown(_ref) {
  var button = _ref.button,
      items = _ref.items,
      isOpen = _ref.isOpen,
      _ref$onOpen = _ref.onOpen,
      onOpen = _ref$onOpen === void 0 ? NOOP : _ref$onOpen,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? NOOP : _ref$onClose;

  var _useState = (0,external_react_namespaceObject.useState)(isOpen),
      _useState2 = Dropdown_slicedToArray(_useState, 2),
      isDropdownOpen = _useState2[0],
      setIsDropdownOpen = _useState2[1];

  (0,external_react_namespaceObject.useEffect)(function () {
    setIsDropdownOpen(!setIsDropdownOpen);
  }, [isOpen]);
  (0,external_react_namespaceObject.useEffect)(function () {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen]);

  var handleOpen = function handleOpen() {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  var handleClose = function handleClose() {
    setIsDropdownOpen(false);
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: dropdown.container
  }, /*#__PURE__*/external_react_default().createElement("div", {
    onClick: function onClick() {
      return handleOpen();
    }
  }, button), isDropdownOpen && /*#__PURE__*/external_react_default().createElement(Portal, null, /*#__PURE__*/external_react_default().createElement(DropDownList, {
    items: items,
    onClose: handleClose
  })));
}
;// CONCATENATED MODULE: ./src/shared/Dropdown/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/cardmenu.css
// Exports
/* harmony default export */ const cardmenu = ({
	"menu": "cardmenu__menu--jGH3W",
	"menuButton": "cardmenu__menuButton--PfCkU"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/CardMenu.tsx






var MENU = [{
  label: "Комментарий",
  icon: EIconNames.Comment
}, {
  label: "Поделиться",
  icon: EIconNames.Share
}, {
  label: "Скрыть",
  icon: EIconNames.Hide,
  showOnMobile: true
}, {
  label: "Сохранить",
  icon: EIconNames.Save
}, {
  label: "Пожаловаться",
  icon: EIconNames.Complain,
  showOnMobile: true
}].map(generateId);
function CardMenu() {
  var button = /*#__PURE__*/external_react_default().createElement("button", {
    className: cardmenu.menuButton
  }, /*#__PURE__*/external_react_default().createElement(Icon, {
    name: EIconNames.Ellipsis
  }));
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: cardmenu.menu
  }, /*#__PURE__*/external_react_default().createElement(Dropdown, {
    button: button,
    items: MENU
  }));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardMenu/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/SaveButton/savebutton.css
// Exports
/* harmony default export */ const savebutton = ({
	"saveButton": "savebutton__saveButton--S32AZ"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/SaveButton/SaveButton.tsx


function SaveButton() {
  return /*#__PURE__*/external_react_default().createElement("button", {
    className: savebutton.saveButton
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#C4C4C4"
  }), /*#__PURE__*/external_react_default().createElement("path", {
    d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z",
    fill: "white"
  })));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/SaveButton/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/ShareButton/sharebutton.css
// Exports
/* harmony default export */ const sharebutton = ({
	"shareButton": "sharebutton__shareButton--iQr_a"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/ShareButton/ShareButton.tsx


function ShareButton() {
  return /*#__PURE__*/external_react_default().createElement("button", {
    className: sharebutton.shareButton
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z",
    fill: "#999999"
  })));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/ShareButton/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/CardActions/cardactions.css
// Exports
/* harmony default export */ const cardactions = ({
	"actions": "cardactions__actions--_I_kY"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/CardActions/CardActions.tsx




function CardActions() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: cardactions.actions
  }, /*#__PURE__*/external_react_default().createElement(ShareButton, null), /*#__PURE__*/external_react_default().createElement(SaveButton, null));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/CardActions/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/cardcontrols.css
// Exports
/* harmony default export */ const cardcontrols = ({
	"controls": "cardcontrols__controls--_0VXh"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/CommentsButton/commentsbutton.css
// Exports
/* harmony default export */ const commentsbutton = ({
	"commentsButton": "commentsbutton__commentsButton--DFT4I",
	"commentsNumber": "commentsbutton__commentsNumber--QbbiP"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/CommentsButton/CommentsButton.tsx


function CommentsButton() {
  return /*#__PURE__*/external_react_default().createElement("button", {
    className: commentsbutton.commentsButton
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z",
    fill: "#999999"
  })), /*#__PURE__*/external_react_default().createElement("span", {
    className: commentsbutton.commentsNumber
  }, "13"));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/CommentsButton/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/buttondown.css
// Exports
/* harmony default export */ const buttondown = ({
	"down": "buttondown__down--ypLB3"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/ButtonDown.tsx


function ButtonDown() {
  return /*#__PURE__*/external_react_default().createElement("button", {
    className: buttondown.down
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    width: "19",
    height: "10",
    viewBox: "0 0 19 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z",
    fill: "#D9D9D9"
  })));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/ButtonDown/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/buttonup.css
// Exports
/* harmony default export */ const buttonup = ({
	"up": "buttonup__up--QJmJi"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/ButtonUp.tsx


function ButtonUp() {
  return /*#__PURE__*/external_react_default().createElement("button", {
    className: buttonup.up
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    width: "19",
    height: "10",
    viewBox: "0 0 19 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M9.5 0L0 10H19L9.5 0Z",
    fill: "#D9D9D9"
  })));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/ButtonUp/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/karmacounter.css
// Exports
/* harmony default export */ const karmacounter = ({
	"karmaCounter": "karmacounter__karmaCounter--_qRYB",
	"karmaValue": "karmacounter__karmaValue--TU4Rm",
	"up": "karmacounter__up--xPvsu",
	"down": "karmacounter__down--FJSZ8"
});

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/KarmaCounter.tsx




function KarmaCounter() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: karmacounter.karmaCounter
  }, /*#__PURE__*/external_react_default().createElement(ButtonUp, null), /*#__PURE__*/external_react_default().createElement("span", {
    className: karmacounter.karmaValue
  }, "123"), /*#__PURE__*/external_react_default().createElement(ButtonDown, null));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/KarmaCounter/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/CardControls.tsx





function CardControls() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: cardcontrols.controls
  }, /*#__PURE__*/external_react_default().createElement(KarmaCounter, null), /*#__PURE__*/external_react_default().createElement(CommentsButton, null), /*#__PURE__*/external_react_default().createElement(CardActions, null));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/CardControls/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Card.tsx







function Card(_ref) {
  var post = _ref.post;
  var created_utc = post.created_utc,
      author = post.author,
      permalink = post.permalink,
      title = post.title,
      url = post.url,
      thumbnail = post.thumbnail;
  return /*#__PURE__*/external_react_default().createElement("li", {
    className: card.card
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: card.textContent
  }, /*#__PURE__*/external_react_default().createElement(MetaData, {
    username: author,
    userLink: permalink,
    createdAt: created_utc
  }), /*#__PURE__*/external_react_default().createElement(CardTitle, {
    postLink: url,
    postTitle: title
  })), /*#__PURE__*/external_react_default().createElement(CardPreview, {
    previewUrl: thumbnail,
    previewAlt: title
  }), /*#__PURE__*/external_react_default().createElement(CardMenu, null), /*#__PURE__*/external_react_default().createElement(CardControls, null));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/Card/index.ts

;// CONCATENATED MODULE: ./src/shared/CardsList/CardsList.tsx
var _excluded = ["id"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function CardsList() {
  var bottomOfList = (0,external_react_namespaceObject.useRef)(null);

  var _usePostData = usePostData(bottomOfList),
      _usePostData$state = _usePostData.state,
      posts = _usePostData$state.posts,
      loading = _usePostData$state.loading,
      error = _usePostData$state.error,
      loadingCount = _usePostData$state.loadingCount,
      onLoadClick = _usePostData.onLoadClick;

  var items = posts.map(function (_ref) {
    var data = _ref.data;

    var id = data.id,
        rest = _objectWithoutProperties(data, _excluded);

    return /*#__PURE__*/external_react_default().createElement(Card, {
      key: id,
      post: rest
    });
  });
  return /*#__PURE__*/external_react_default().createElement("ul", {
    className: cardslist.cardsList
  }, posts.length === 0 && !loading && !error && /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/external_react_default().createElement(Text, {
    size: 20,
    color: EColor.orage
  }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")), items, loading && /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/external_react_default().createElement(Text, {
    size: 20,
    color: EColor.grey99
  }, "...\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430")), error && /*#__PURE__*/external_react_default().createElement("div", {
    role: "alert",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/external_react_default().createElement(Text, {
    size: 20,
    color: EColor.orage
  }, error.message)), /*#__PURE__*/external_react_default().createElement("div", {
    ref: bottomOfList
  }), loadingCount >= 3 && /*#__PURE__*/external_react_default().createElement("button", {
    className: cardslist.button,
    onClick: onLoadClick
  }, "...\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"));
}
;// CONCATENATED MODULE: ./src/shared/CardsList/index.ts

;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/CommentFormContainer/CommentForm/commentform.css
// Exports
/* harmony default export */ const commentform = ({
	"form": "commentform__form--cvCOL",
	"input": "commentform__input--DIPwS",
	"button": "commentform__button--_Cv0I"
});

;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
;// CONCATENATED MODULE: ./src/shared/CommentFormContainer/CommentForm/CommentForm.tsx




var validate = function validate(values) {
  var errors = {};

  if (values.comment.length < 3) {
    errors.comment = "Должно быть более 3-х символов";
  }

  return errors;
};

function CommentForm(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange;
  var form = (0,external_formik_namespaceObject.useFormik)({
    initialValues: {
      comment: value !== null && value !== void 0 ? value : ""
    },
    validate: validate,
    onSubmit: function onSubmit(values) {
      handleChange(values.comment);
      console.log("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \"".concat(values.comment, "\" \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u0432 store"));
    }
  });
  return /*#__PURE__*/external_react_default().createElement("form", {
    className: commentform.form,
    onSubmit: form.handleSubmit
  }, /*#__PURE__*/external_react_default().createElement("textarea", {
    className: commentform.input,
    onChange: form.handleChange,
    onBlur: form.handleBlur,
    name: "comment",
    value: form.values.comment
  }), /*#__PURE__*/external_react_default().createElement("div", null, form.errors.comment), /*#__PURE__*/external_react_default().createElement("button", {
    type: "submit",
    className: commentform.button
  }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"));
}
;// CONCATENATED MODULE: ./src/shared/CommentFormContainer/CommentForm/index.ts

;// CONCATENATED MODULE: ./src/shared/CommentFormContainer/CommentFormContainer.tsx




function CommentFormContainer(_ref) {
  var initialValue = _ref.initialValue;
  var commentText = (0,external_react_redux_namespaceObject.useSelector)(function (state) {
    return state.commentText;
  });
  var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
  (0,external_react_namespaceObject.useEffect)(function () {
    if (initialValue) {
      handleChange("".concat(initialValue, ", "));
    }
  }, [initialValue]);

  var handleChange = function handleChange(value) {
    dispatch(updateComment(value));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/external_react_default().createElement(CommentForm, {
    value: commentText,
    handleChange: handleChange,
    handleSubmit: handleSubmit
  });
}
;// CONCATENATED MODULE: ./src/shared/CommentFormContainer/index.ts

;// CONCATENATED MODULE: ./src/shared/Comments/CommentItem/commentitem.css
// Exports
/* harmony default export */ const commentitem = ({
	"commentHeader": "commentitem__commentHeader--fsll1",
	"time": "commentitem__time--_kW6e",
	"league": "commentitem__league--LKBaz",
	"commentControls": "commentitem__commentControls--_wttL"
});

;// CONCATENATED MODULE: ./src/shared/Comments/CommentItem/CommentItem.tsx
function CommentItem_slicedToArray(arr, i) { return CommentItem_arrayWithHoles(arr) || CommentItem_iterableToArrayLimit(arr, i) || CommentItem_unsupportedIterableToArray(arr, i) || CommentItem_nonIterableRest(); }

function CommentItem_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CommentItem_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CommentItem_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CommentItem_arrayLikeToArray(o, minLen); }

function CommentItem_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CommentItem_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CommentItem_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var userName = "John Doe";
function CommentItem() {
  var _useState = (0,external_react_namespaceObject.useState)(false),
      _useState2 = CommentItem_slicedToArray(_useState, 2),
      formIsOpen = _useState2[0],
      setFormIsOpen = _useState2[1];

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: commentitem.commentItem
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: commentitem.commentHeader
  }, /*#__PURE__*/external_react_default().createElement(UserLink, {
    username: userName,
    userLink: "#some-user-link",
    avatarUrl: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png"
  }), /*#__PURE__*/external_react_default().createElement("span", {
    className: commentitem.time
  }, "1 \u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434"), /*#__PURE__*/external_react_default().createElement("span", {
    className: commentitem.league
  }, "\u041B\u0438\u0433\u0430 \u044E\u0440\u0438\u0441\u0442\u043E\u0432")), /*#__PURE__*/external_react_default().createElement(Text, {
    size: 14,
    As: "span"
  }, "\u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u0431\u0443\u0434\u0443\u0442 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u0438\u043D\u0441\u0442\u0430\u043D\u0446\u0438\u044F\u043C\u0438. \u041B\u0438\u0448\u044C \u0440\u0435\u043F\u043B\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u044B \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E."), /*#__PURE__*/external_react_default().createElement("div", {
    className: commentitem.commentControls
  }, /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      return setFormIsOpen(!formIsOpen);
    }
  }, /*#__PURE__*/external_react_default().createElement(Icon, {
    name: EIconNames.Comment
  }), /*#__PURE__*/external_react_default().createElement(Text, {
    size: 14,
    color: EColor.grey66
  }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")), /*#__PURE__*/external_react_default().createElement("button", null, /*#__PURE__*/external_react_default().createElement(Icon, {
    name: EIconNames.Share
  }), /*#__PURE__*/external_react_default().createElement(Text, {
    size: 14,
    color: EColor.grey66
  }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")), /*#__PURE__*/external_react_default().createElement("button", null, /*#__PURE__*/external_react_default().createElement(Icon, {
    name: EIconNames.Complain
  }), /*#__PURE__*/external_react_default().createElement(Text, {
    size: 14,
    color: EColor.grey66
  }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))), formIsOpen && /*#__PURE__*/external_react_default().createElement(CommentFormContainer, {
    initialValue: userName
  }));
}
;// CONCATENATED MODULE: ./src/shared/Comments/CommentItem/index.ts

;// CONCATENATED MODULE: ./src/shared/Comments/comments.css
// Exports
/* harmony default export */ const comments = ({

});

;// CONCATENATED MODULE: ./src/shared/Comments/Comments.tsx



function Comments() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: comments.comments
  }, /*#__PURE__*/external_react_default().createElement(CommentItem, null));
}
;// CONCATENATED MODULE: ./src/shared/Comments/index.ts

;// CONCATENATED MODULE: ./src/shared/Post/post.css
// Exports
/* harmony default export */ const post = ({
	"modal": "post__modal--ph_s0",
	"content": "post__content--dHXVQ",
	"close": "post__close--bFyXJ"
});

;// CONCATENATED MODULE: ./src/shared/Post/Post.tsx






var Post_userName = "John Doe";
function Post() {
  var ref = (0,external_react_namespaceObject.useRef)(null);
  var history = (0,external_react_router_dom_namespaceObject.useHistory)();

  var onClose = function onClose() {
    history.push("/");
  };

  useOutsideClick(ref, onClose);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: post.modal,
    ref: ref
  }, /*#__PURE__*/external_react_default().createElement("h2", null, "Header"), /*#__PURE__*/external_react_default().createElement("div", {
    className: post.content
  }, /*#__PURE__*/external_react_default().createElement("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis."), /*#__PURE__*/external_react_default().createElement("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis."), /*#__PURE__*/external_react_default().createElement("p", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.")), /*#__PURE__*/external_react_default().createElement(CommentFormContainer, {
    initialValue: Post_userName
  }), /*#__PURE__*/external_react_default().createElement(Comments, null));
}
;// CONCATENATED MODULE: ./src/shared/Post/index.ts

;// CONCATENATED MODULE: ./src/styles.css
// Exports
/* harmony default export */ const styles = ({
	"notFound": "styles__notFound--jtYkK"
});

;// CONCATENATED MODULE: ./src/App.tsx
function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }

function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }

function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function App_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var store = (0,external_redux_namespaceObject.createStore)(rootReducer, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
function AppComponent() {
  var _useState = (0,external_react_namespaceObject.useState)(false),
      _useState2 = App_slicedToArray(_useState, 2),
      stateMounted = _useState2[0],
      setStateMounted = _useState2[1];

  (0,external_react_namespaceObject.useEffect)(function () {
    setStateMounted(true);
  }, []);
  return /*#__PURE__*/external_react_default().createElement(external_react_redux_namespaceObject.Provider, {
    store: store
  }, stateMounted && /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.BrowserRouter, null, /*#__PURE__*/external_react_default().createElement(Layout, null, /*#__PURE__*/external_react_default().createElement(Header, null), /*#__PURE__*/external_react_default().createElement(Content, null, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Switch, null, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Redirect, {
    exact: true,
    from: "/",
    to: "/posts"
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Redirect, {
    from: "/auth",
    to: "/posts"
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "/posts"
  }, /*#__PURE__*/external_react_default().createElement(CardsList, null), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "/posts/:id"
  }, /*#__PURE__*/external_react_default().createElement(Post, null))), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "*"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: styles.notFound
  }, /*#__PURE__*/external_react_default().createElement(Text, {
    size: 20
  }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"))))))));
}
var App = (0,root_namespaceObject.hot)(function () {
  return /*#__PURE__*/external_react_default().createElement(AppComponent, null);
});
;// CONCATENATED MODULE: ./src/server/server.js





var app = external_express_default()();
app.use("/static", external_express_default()["static"]("./dist/client"));
app.get("/auth", function (req, res) {
  external_axios_default().post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=".concat(req.query.code, "&redirect_uri=http://localhost:3000/auth"), {
    auth: {
      username: 'undefined',
      password: "".concat('undefined')
    },
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    }
  }).then(function (_ref) {
    var data = _ref.data;
    res.send(indexTemplate(server_default().renderToString(App()), data['access_token']));
  })["catch"](console.log);
});
app.get("*", function (req, res) {
  res.send(indexTemplate(server_default().renderToString(App())));
});
app.listen(3000, function () {
  console.log("Server started on http://localhost:3000");
});
})();

/******/ })()
;