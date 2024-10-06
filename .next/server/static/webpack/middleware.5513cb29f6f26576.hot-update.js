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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _middlewares_authMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/authMiddleware */ \"(middleware)/./middlewares/authMiddleware.ts\");\n\n\nfunction middleware(req) {\n    const url = req.nextUrl.pathname;\n    if (url.startsWith(\"/products\")) {\n        const auth = (0,_middlewares_authMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req);\n        if (auth) {\n            return auth;\n        }\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDRTtBQUVuRCxTQUFTRSxXQUFXQyxHQUFnQjtJQUN2QyxNQUFNQyxNQUFNRCxJQUFJRSxPQUFPLENBQUNDLFFBQVE7SUFDaEMsSUFBR0YsSUFBSUcsVUFBVSxDQUFDLGNBQWM7UUFDNUIsTUFBTUMsT0FBT1AsdUVBQWNBLENBQUNFO1FBQzVCLElBQUdLLE1BQU07WUFDTCxPQUFPQTtRQUNYO0lBQ0o7SUFDQSxPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSTtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGF1dGhNaWRkbGV3YXJlIGZyb20gXCIuL21pZGRsZXdhcmVzL2F1dGhNaWRkbGV3YXJlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICBjb25zdCB1cmwgPSByZXEubmV4dFVybC5wYXRobmFtZTtcbiAgICBpZih1cmwuc3RhcnRzV2l0aCgnL3Byb2R1Y3RzJykpIHtcbiAgICAgICAgY29uc3QgYXV0aCA9IGF1dGhNaWRkbGV3YXJlKHJlcSk7XG4gICAgICAgIGlmKGF1dGgpIHtcbiAgICAgICAgICAgIHJldHVybiBhdXRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJhdXRoTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ1cmwiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiYXV0aCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});