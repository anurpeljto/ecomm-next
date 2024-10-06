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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authMiddleware: () => (/* binding */ authMiddleware),\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction authMiddleware(req) {\n    const token = req.cookies.get(\"token\");\n    if (!token) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Not logged in!\", {\n            status: 401\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/profile\",\n        \"/api/products/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZXMvYXV0aE1pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRWpELFNBQVNDLGVBQWVDLEdBQWdCO0lBQzNDLE1BQU1DLFFBQVFELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQzlCLElBQUcsQ0FBQ0YsT0FBTztRQUNQLE9BQU8sSUFBSUgscURBQVlBLENBQUMsa0JBQWtCO1lBQUNNLFFBQVE7UUFBRztJQUMxRDtJQUNBLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJO0FBQzVCO0FBRU8sTUFBTUMsU0FBUztJQUNsQkMsU0FBUztRQUFDO1FBQVk7S0FBdUI7QUFDakQsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlcy9hdXRoTWlkZGxld2FyZS50cz9iMmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhNaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmdldCgndG9rZW4nKTtcbiAgICBpZighdG9rZW4pIHsgXG4gICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKCdOb3QgbG9nZ2VkIGluIScsIHtzdGF0dXM6IDQwMX0pO1xuICAgIH1cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBtYXRjaGVyOiBbJy9wcm9maWxlJywgJy9hcGkvcHJvZHVjdHMvOnBhdGgqJ10sXG59OyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJhdXRoTWlkZGxld2FyZSIsInJlcSIsInRva2VuIiwiY29va2llcyIsImdldCIsInN0YXR1cyIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middlewares/authMiddleware.ts\n");

/***/ })

});