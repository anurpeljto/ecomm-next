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

/***/ "(middleware)/./lib/errors/CustomError.ts":
/*!***********************************!*\
  !*** ./lib/errors/CustomError.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CustomError extends Error {\n    constructor(message, statusCode){\n        super(message);\n        this.statusCode = statusCode;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomError);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbGliL2Vycm9ycy9DdXN0b21FcnJvci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsb0JBQW9CQztJQUV0QkMsWUFBWUMsT0FBZSxFQUFFQyxVQUFrQixDQUFFO1FBQzdDLEtBQUssQ0FBQ0Q7UUFDTixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDdEI7QUFDSjtBQUVBLGlFQUFlSixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9lcnJvcnMvQ3VzdG9tRXJyb3IudHM/YTM4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXN0b21FcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIHN0YXR1c0NvZGU6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3RhdHVzQ29kZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRXJyb3I7XHJcbiJdLCJuYW1lcyI6WyJDdXN0b21FcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwic3RhdHVzQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./lib/errors/CustomError.ts\n");

/***/ }),

/***/ "(middleware)/./lib/errors/UnAuthError.ts":
/*!***********************************!*\
  !*** ./lib/errors/UnAuthError.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UnauthError)\n/* harmony export */ });\n/* harmony import */ var _CustomError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomError */ \"(middleware)/./lib/errors/CustomError.ts\");\n\nclass UnauthError extends _CustomError__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(message){\n        super(message, 401);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbGliL2Vycm9ycy9VbkF1dGhFcnJvci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUV6QixNQUFNQyxvQkFBb0JELG9EQUFXQTtJQUNoREUsWUFBWUMsT0FBZSxDQUFDO1FBQ3hCLEtBQUssQ0FBQ0EsU0FBUztJQUNuQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9lcnJvcnMvVW5BdXRoRXJyb3IudHM/YzE1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSBcIi4vQ3VzdG9tRXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5hdXRoRXJyb3IgZXh0ZW5kcyBDdXN0b21FcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKXtcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgNDAxKTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJDdXN0b21FcnJvciIsIlVuYXV0aEVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./lib/errors/UnAuthError.ts\n");

/***/ }),

/***/ "(middleware)/./middlewares/authMiddleware.ts":
/*!***************************************!*\
  !*** ./middlewares/authMiddleware.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ authMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _lib_errors_UnAuthError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/errors/UnAuthError */ \"(middleware)/./lib/errors/UnAuthError.ts\");\n\n\nfunction authMiddleware(req) {\n    try {\n        const token = req.cookies.get(\"token\");\n        if (!token) {\n            throw new _lib_errors_UnAuthError__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Missing token!\");\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    } catch (error) {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZXMvYXV0aE1pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ0w7QUFFcEMsU0FBU0UsZUFBZUMsR0FBZ0I7SUFDbkQsSUFBSTtRQUNBLE1BQU1DLFFBQVFELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQzlCLElBQUcsQ0FBQ0YsT0FBTTtZQUNOLE1BQU0sSUFBSUgsK0RBQVdBLENBQUM7UUFDMUI7UUFFQSxPQUFPRCxxREFBWUEsQ0FBQ08sSUFBSTtJQUM1QixFQUFFLE9BQU9DLE9BQU8sQ0FFaEI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlcy9hdXRoTWlkZGxld2FyZS50cz9iMmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBVbmF1dGhFcnJvciBmcm9tIFwiQC9saWIvZXJyb3JzL1VuQXV0aEVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhNaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmdldCgndG9rZW4nKTtcbiAgICAgICAgaWYoIXRva2VuKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBVbmF1dGhFcnJvcignTWlzc2luZyB0b2tlbiEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIFxuICAgIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiVW5hdXRoRXJyb3IiLCJhdXRoTWlkZGxld2FyZSIsInJlcSIsInRva2VuIiwiY29va2llcyIsImdldCIsIm5leHQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middlewares/authMiddleware.ts\n");

/***/ })

});