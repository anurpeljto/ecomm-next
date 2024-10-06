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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authMiddleware: () => (/* binding */ authMiddleware),\n/* harmony export */   matcher: () => (/* binding */ matcher)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction authMiddleware(req) {\n    const token = req.cookies.get(\"token\");\n    if (!token) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Not logged in!\", {\n            status: 401\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst matcher = [\n    \"/profile\",\n    \"/api/products/:path*\"\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZXMvYXV0aE1pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRWpELFNBQVNDLGVBQWVDLEdBQWdCO0lBQzNDLE1BQU1DLFFBQVFELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQzlCLElBQUcsQ0FBQ0YsT0FBTztRQUNQLE9BQU8sSUFBSUgscURBQVlBLENBQUMsa0JBQWtCO1lBQUNNLFFBQVE7UUFBRztJQUMxRDtJQUNBLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJO0FBQzVCO0FBRU8sTUFBTUMsVUFBVTtJQUFDO0lBQVk7Q0FBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZXMvYXV0aE1pZGRsZXdhcmUudHM/YjJhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoTWlkZGxld2FyZShyZXE6IE5leHRSZXF1ZXN0KSB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgaWYoIXRva2VuKSB7IFxuICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZSgnTm90IGxvZ2dlZCBpbiEnLCB7c3RhdHVzOiA0MDF9KTtcbiAgICB9XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyID0gWycvcHJvZmlsZScsICcvYXBpL3Byb2R1Y3RzLzpwYXRoKiddIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImF1dGhNaWRkbGV3YXJlIiwicmVxIiwidG9rZW4iLCJjb29raWVzIiwiZ2V0Iiwic3RhdHVzIiwibmV4dCIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middlewares/authMiddleware.ts\n");

/***/ })

});