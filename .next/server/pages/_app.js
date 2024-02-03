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

/***/ "./components/utils/AppProvider.tsx":
/*!******************************************!*\
  !*** ./components/utils/AppProvider.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppProvider: () => (/* binding */ AppProvider),\n/* harmony export */   useAppContext: () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ \"./components/utils/appReducer.tsx\");\n// AppContext.js\n\n\n\n// Definir el contexto utilizando createContext\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Hook personalizado para acceder al contexto\nconst useAppContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n    if (!context) {\n        throw new Error(\"useAppContext must be used within an AppProvider\");\n    }\n    return context;\n};\n// Definir las acciones para el reducer\n// Componente que proporciona el contexto y el estado global\nconst AppProvider = ({ children })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_appReducer__WEBPACK_IMPORTED_MODULE_2__.appReducer, {\n        activeCategory: null\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\trabajo\\\\Trabajo\\\\alejo\\\\vale-github\\\\components\\\\utils\\\\AppProvider.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWxzL0FwcFByb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOztBQUVxRDtBQUMzQjtBQUkxQywrQ0FBK0M7QUFDL0MsTUFBTUssMkJBQWFILG9EQUFhQSxDQUFNSTtBQUV0Qyw4Q0FBOEM7QUFDdkMsTUFBTUMsZ0JBQWdCO0lBQzNCLE1BQU1DLFVBQVVMLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNHLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUU7QUFFRix1Q0FBdUM7QUFFdkMsNERBQTREO0FBQ3JELE1BQU1FLGNBQWMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLGlEQUFVQSxDQUFDRyxtREFBVUEsRUFBRTtRQUFFVSxnQkFBZ0I7SUFBSztJQUV4RSxxQkFDRSw4REFBQ1QsV0FBV1UsUUFBUTtRQUFDQyxPQUFPO1lBQUVKO1lBQU9DO1FBQVM7a0JBQzNDRjs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGUtY29ycmVhLy4vY29tcG9uZW50cy91dGlscy9BcHBQcm92aWRlci50c3g/MmIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBDb250ZXh0LmpzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhcHBSZWR1Y2VyIH0gZnJvbSBcIi4vYXBwUmVkdWNlclwiO1xyXG5pbnRlcmZhY2UgQXBwQ29udGV4dFR5cGUge1xyXG4gIGFjdGl2ZUNhdGVnb3J5OiBhbnk7IC8vIEFqdXN0YSBlc3RlIHRpcG8gc2Vnw7puIGxvIHF1ZSByZWFsbWVudGUgZXNwZXJhcyBhcXXDrVxyXG59XHJcbi8vIERlZmluaXIgZWwgY29udGV4dG8gdXRpbGl6YW5kbyBjcmVhdGVDb250ZXh0XHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4odW5kZWZpbmVkKTtcclxuXHJcbi8vIEhvb2sgcGVyc29uYWxpemFkbyBwYXJhIGFjY2VkZXIgYWwgY29udGV4dG9cclxuZXhwb3J0IGNvbnN0IHVzZUFwcENvbnRleHQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBcHBDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXBwUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuLy8gRGVmaW5pciBsYXMgYWNjaW9uZXMgcGFyYSBlbCByZWR1Y2VyXHJcblxyXG4vLyBDb21wb25lbnRlIHF1ZSBwcm9wb3JjaW9uYSBlbCBjb250ZXh0byB5IGVsIGVzdGFkbyBnbG9iYWxcclxuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihhcHBSZWR1Y2VyLCB7IGFjdGl2ZUNhdGVnb3J5OiBudWxsIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiYXBwUmVkdWNlciIsIkFwcENvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBcHBDb250ZXh0IiwiY29udGV4dCIsIkVycm9yIiwiQXBwUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3RpdmVDYXRlZ29yeSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/utils/AppProvider.tsx\n");

/***/ }),

/***/ "./components/utils/appReducer.tsx":
/*!*****************************************!*\
  !*** ./components/utils/appReducer.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appReducer: () => (/* binding */ appReducer)\n/* harmony export */ });\n// Definir las acciones para el reducer\nconst SET_ACTIVE_CATEGORY = \"SET_ACTIVE_CATEGORY\";\n// Reducer para manejar el estado global\nconst appReducer = (state, action)=>{\n    switch(action.type){\n        case SET_ACTIVE_CATEGORY:\n            return {\n                ...state,\n                activeCategory: action.payload\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWxzL2FwcFJlZHVjZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsTUFBTUEsc0JBQXNCO0FBRTVCLHdDQUF3QztBQUNqQyxNQUFNQyxhQUFhLENBQUNDLE9BQU9DO0lBQ2hDLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBS0o7WUFDSCxPQUFPO2dCQUFFLEdBQUdFLEtBQUs7Z0JBQUVHLGdCQUFnQkYsT0FBT0csT0FBTztZQUFDO1FBQ3BEO1lBQ0UsT0FBT0o7SUFDWDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxlLWNvcnJlYS8uL2NvbXBvbmVudHMvdXRpbHMvYXBwUmVkdWNlci50c3g/ZGE3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmlyIGxhcyBhY2Npb25lcyBwYXJhIGVsIHJlZHVjZXJcclxuY29uc3QgU0VUX0FDVElWRV9DQVRFR09SWSA9IFwiU0VUX0FDVElWRV9DQVRFR09SWVwiO1xyXG5cclxuLy8gUmVkdWNlciBwYXJhIG1hbmVqYXIgZWwgZXN0YWRvIGdsb2JhbFxyXG5leHBvcnQgY29uc3QgYXBwUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTRVRfQUNUSVZFX0NBVEVHT1JZOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWN0aXZlQ2F0ZWdvcnk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59OyJdLCJuYW1lcyI6WyJTRVRfQUNUSVZFX0NBVEVHT1JZIiwiYXBwUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFjdGl2ZUNhdGVnb3J5IiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/utils/appReducer.tsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utils_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils/AppProvider */ \"./components/utils/AppProvider.tsx\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_AppProvider__WEBPACK_IMPORTED_MODULE_3__.AppProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\trabajo\\\\Trabajo\\\\alejo\\\\vale-github\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\trabajo\\\\Trabajo\\\\alejo\\\\vale-github\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQytCO0FBQzlELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILHNFQUFXQTtrQkFDViw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsZS1jb3JyZWEvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzL0FwcFByb3ZpZGVyXCI7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcHBQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXBwUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
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