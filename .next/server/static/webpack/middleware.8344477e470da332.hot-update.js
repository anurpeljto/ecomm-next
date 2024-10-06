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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _middlewares_authMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/authMiddleware */ \"(middleware)/./middlewares/authMiddleware.ts\");\n\n\nfunction middleware(req) {\n    const auth = (0,_middlewares_authMiddleware__WEBPACK_IMPORTED_MODULE_1__.authMiddleware)(req);\n    if (auth) {\n        return auth;\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/profile\",\n        \"/api/products/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBQ007QUFFdkQsU0FBU0UsV0FBV0MsR0FBZ0I7SUFDdkMsTUFBTUMsT0FBT0gsMkVBQWNBLENBQUNFO0lBQzVCLElBQUdDLE1BQU07UUFDTCxPQUFPQTtJQUNYO0lBRUEsT0FBT0oscURBQVlBLENBQUNLLElBQUk7QUFDNUI7QUFFTyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQ0w7UUFDQTtLQUNIO0FBQ0wsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgYXV0aE1pZGRsZXdhcmUgfSBmcm9tIFwiLi9taWRkbGV3YXJlcy9hdXRoTWlkZGxld2FyZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXE6IE5leHRSZXF1ZXN0KSB7XG4gICAgY29uc3QgYXV0aCA9IGF1dGhNaWRkbGV3YXJlKHJlcSk7XG4gICAgaWYoYXV0aCkge1xuICAgICAgICByZXR1cm4gYXV0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBtYXRjaGVyOiBbXG4gICAgICAgICcvcHJvZmlsZScsXG4gICAgICAgICcvYXBpL3Byb2R1Y3RzLzpwYXRoKidcbiAgICBdXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImF1dGhNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsImF1dGgiLCJuZXh0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});