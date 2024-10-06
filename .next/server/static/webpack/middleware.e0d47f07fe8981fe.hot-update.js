"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middlewares/authMiddleware.ts":
/*!***************************************!*\
  !*** ./middlewares/authMiddleware.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ authMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction authMiddleware(req) {\n    const token = req.cookies.get(\"token\");\n    if (!token) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Missing token\"\n        }, {\n            status: 400\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZXMvYXV0aE1pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0Q7QUFFekMsU0FBU0MsZUFBZUMsR0FBZ0I7SUFDbkQsTUFBTUMsUUFBUUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDOUIsSUFBRyxDQUFDRixPQUFNO1FBQ04sT0FBT0gscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFDQyxTQUFTO1FBQWUsR0FBRztZQUFDQyxRQUFRO1FBQUc7SUFDckU7SUFFQSxPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSTtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlcy9hdXRoTWlkZGxld2FyZS50cz9iMmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aE1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmNvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgIGlmKCF0b2tlbil7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bWVzc2FnZTogJ01pc3NpbmcgdG9rZW4nfSwge3N0YXR1czogNDAwfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImF1dGhNaWRkbGV3YXJlIiwicmVxIiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middlewares/authMiddleware.ts\n");

/***/ })

});