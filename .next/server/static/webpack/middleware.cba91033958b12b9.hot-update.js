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

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _middlewares_authMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/authMiddleware */ \"(middleware)/./middlewares/authMiddleware.ts\");\n\n\nfunction middleware(req) {\n    const url = req.nextUrl.pathname;\n    if (url.startsWith(\"/api/products\")) {\n        const auth = (0,_middlewares_authMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req);\n        if (auth) {\n            return auth;\n        }\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDRTtBQUVuRCxTQUFTRSxXQUFXQyxHQUFnQjtJQUN2QyxNQUFNQyxNQUFNRCxJQUFJRSxPQUFPLENBQUNDLFFBQVE7SUFDaEMsSUFBR0YsSUFBSUcsVUFBVSxDQUFDLGtCQUFrQjtRQUNoQyxNQUFNQyxPQUFPUCx1RUFBY0EsQ0FBQ0U7UUFDNUIsSUFBR0ssTUFBTTtZQUNMLE9BQU9BO1FBQ1g7SUFDSjtJQUNBLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgYXV0aE1pZGRsZXdhcmUgZnJvbSBcIi4vbWlkZGxld2FyZXMvYXV0aE1pZGRsZXdhcmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IHVybCA9IHJlcS5uZXh0VXJsLnBhdGhuYW1lO1xuICAgIGlmKHVybC5zdGFydHNXaXRoKCcvYXBpL3Byb2R1Y3RzJykpIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGF1dGhNaWRkbGV3YXJlKHJlcSk7XG4gICAgICAgIGlmKGF1dGgpIHtcbiAgICAgICAgICAgIHJldHVybiBhdXRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJhdXRoTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ1cmwiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiYXV0aCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});