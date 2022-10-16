"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/cart.js":
/*!*************************!*\
  !*** ./context/cart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCartDispatch\": () => (/* binding */ useCartDispatch),\n/* harmony export */   \"useCartState\": () => (/* binding */ useCartState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ \"./lib/commerce.js\");\n\n\n\nconst CartStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SET_CART = \"SET_CART\";\nconst initialState = {\n    total_items: 0,\n    total_unique_items: 0,\n    line_items: []\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case SET_CART:\n            return {\n                ...state,\n                ...action.payload\n            };\n        default:\n            throw new Error(`Unknown action: ${action.type}`);\n    }\n};\nconst CartProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCart();\n    }, []);\n    const setCart = (payload)=>dispatch({\n            type: SET_CART,\n            payload\n        });\n    const getCart = async ()=>{\n        try {\n            const cart = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cart.retrieve();\n            setCart(cart);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {\n        value: {\n            setCart\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {\n            value: state,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/taylargard/Desktop/Business Sites/Trident Site/context/cart.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/taylargard/Desktop/Business Sites/Trident Site/context/cart.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCartState = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext);\nconst useCartDispatch = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF5RTtBQUVsQztBQUV2QyxNQUFNSyxnQkFBZ0IsaUJBQUdMLG9EQUFhLEVBQUU7QUFDeEMsTUFBTU0sbUJBQW1CLGlCQUFHTixvREFBYSxFQUFFO0FBRTNDLE1BQU1PLFFBQVEsR0FBRyxVQUFVO0FBRTNCLE1BQU1DLFlBQVksR0FBRztJQUNuQkMsV0FBVyxFQUFFLENBQUM7SUFDZEMsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQkMsVUFBVSxFQUFFLEVBQUU7Q0FDZjtBQUVELE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztJQUNqQyxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBS1IsUUFBUTtZQUNYLE9BQU87Z0JBQUUsR0FBR00sS0FBSztnQkFBRSxHQUFHQyxNQUFNLENBQUNFLE9BQU87YUFBRSxDQUFDO1FBQ3pDO1lBQ0UsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUgsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckQ7QUFDSCxDQUFDO0FBRU0sTUFBTUcsWUFBWSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDNUMsTUFBTSxLQUFDTixLQUFLLE1BQUVPLFFBQVEsTUFBSW5CLGlEQUFVLENBQUNXLE9BQU8sRUFBRUosWUFBWSxDQUFDO0lBRTNETCxnREFBUyxDQUFDLElBQU07UUFDZGtCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTUMsT0FBTyxHQUFHLENBQUNOLE9BQU8sR0FBS0ksUUFBUSxDQUFDO1lBQUVMLElBQUksRUFBRVIsUUFBUTtZQUFFUyxPQUFPO1NBQUUsQ0FBQztJQUVsRSxNQUFNSyxPQUFPLEdBQUcsVUFBWTtRQUMxQixJQUFJO1lBQ0YsTUFBTUUsSUFBSSxHQUFHLE1BQU1uQixtRUFBc0IsRUFBRTtZQUUzQ2tCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUM7UUFDaEIsRUFBRSxPQUFPRSxHQUFHLEVBQUU7WUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDO0lBRUQscUJBQ0UsOERBQUNuQixtQkFBbUIsQ0FBQ3NCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVQLE9BQU87U0FBRTtrQkFDOUMsNEVBQUNqQixnQkFBZ0IsQ0FBQ3VCLFFBQVE7WUFBQ0MsS0FBSyxFQUFFaEIsS0FBSztzQkFDcENNLFFBQVE7Ozs7O3FCQUNpQjs7Ozs7aUJBQ0MsQ0FDL0I7QUFDSixDQUFDLENBQUM7QUFFSyxNQUFNVyxZQUFZLEdBQUcsSUFBTTVCLGlEQUFVLENBQUNHLGdCQUFnQixDQUFDLENBQUM7QUFDeEQsTUFBTTBCLGVBQWUsR0FBRyxJQUFNN0IsaURBQVUsQ0FBQ0ksbUJBQW1CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaWRlbnQtc2l0ZS8uL2NvbnRleHQvY2FydC5qcz83Y2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uL2xpYi9jb21tZXJjZVwiO1xuXG5jb25zdCBDYXJ0U3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgQ2FydERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgU0VUX0NBUlQgPSBcIlNFVF9DQVJUXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdG90YWxfaXRlbXM6IDAsXG4gIHRvdGFsX3VuaXF1ZV9pdGVtczogMCxcbiAgbGluZV9pdGVtczogW10sXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0NBUlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDYXJ0KCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXRDYXJ0ID0gKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogU0VUX0NBUlQsIHBheWxvYWQgfSk7XG5cbiAgY29uc3QgZ2V0Q2FydCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FydCA9IGF3YWl0IGNvbW1lcmNlLmNhcnQucmV0cmlldmUoKTtcblxuICAgICAgc2V0Q2FydChjYXJ0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2V0Q2FydCB9fT5cbiAgICAgIDxDYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ2FydFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0NhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0U3RhdGVDb250ZXh0KTtcbmV4cG9ydCBjb25zdCB1c2VDYXJ0RGlzcGF0Y2ggPSAoKSA9PiB1c2VDb250ZXh0KENhcnREaXNwYXRjaENvbnRleHQpOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJjb21tZXJjZSIsIkNhcnRTdGF0ZUNvbnRleHQiLCJDYXJ0RGlzcGF0Y2hDb250ZXh0IiwiU0VUX0NBUlQiLCJpbml0aWFsU3RhdGUiLCJ0b3RhbF9pdGVtcyIsInRvdGFsX3VuaXF1ZV9pdGVtcyIsImxpbmVfaXRlbXMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIkVycm9yIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImdldENhcnQiLCJzZXRDYXJ0IiwiY2FydCIsInJldHJpZXZlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0U3RhdGUiLCJ1c2VDYXJ0RGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/cart.js\n");

/***/ }),

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ \"@chec/commerce.js\");\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(\"pk_4387710bb47c116d102343d5593bf592994b1dd460b5b\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbWVyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCwwREFBVyxDQUFDRSxrREFBMkMsQ0FBQztBQUUzRSxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpZGVudC1zaXRlLy4vbGliL2NvbW1lcmNlLmpzPzc1NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lcmNlU0RLIGZyb20gXCJAY2hlYy9jb21tZXJjZS5qc1wiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQ29tbWVyY2VTREsocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiQ29tbWVyY2VTREsiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/commerce.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cart */ \"./context/cart.js\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_cart__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/taylargard/Desktop/Business Sites/Trident Site/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/taylargard/Desktop/Business Sites/Trident Site/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUErQztBQUVoQyxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN0RCxxQkFDRSw4REFBQ0gsdURBQVk7a0JBQ1gsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDZixDQUNmO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaWRlbnQtc2l0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DYXJ0UHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIkNhcnRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();