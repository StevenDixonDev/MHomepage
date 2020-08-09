webpackHotUpdate_N_E("pages/posts/[pid]",{

/***/ "./Components/PostWrapper.jsx":
/*!************************************!*\
  !*** ./Components/PostWrapper.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostWrapper.module.scss */ "./Components/PostWrapper.module.scss");
/* harmony import */ var _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\StevenDev\\Documents\\git\\Mhomepage\\web\\Components\\PostWrapper.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PostWrapper = function PostWrapper(_ref) {
  var children = _ref.children,
      post = _ref.post;
  return __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("img", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main_image,
    src: post.mainImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_article_wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_main_title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, post.title), children), __jsx("div", {
    className: _PostWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.post_side_bar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, post.publishedAt), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }, "Author"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, post.name)))));
};

_c = PostWrapper;
/* harmony default export */ __webpack_exports__["default"] = (PostWrapper);

var _c;

$RefreshReg$(_c, "PostWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0V3JhcHBlci5qc3giXSwibmFtZXMiOlsiUG9zdFdyYXBwZXIiLCJjaGlsZHJlbiIsInBvc3QiLCJzdHlsZXMiLCJwb3N0X3dyYXBwZXIiLCJwb3N0X21haW5faW1hZ2UiLCJtYWluSW1hZ2UiLCJwb3N0X2FydGljbGVfd3JhcHBlciIsInBvc3RfbWFpbiIsInBvc3RfbWFpbl90aXRsZSIsInRpdGxlIiwicG9zdF9zaWRlX2JhciIsInB1Ymxpc2hlZEF0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFzQjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDeEMsU0FDQTtBQUFLLGFBQVMsRUFBRUMsK0RBQU0sQ0FBQ0MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCwrREFBTSxDQUFDRSxlQUF2QjtBQUF3QyxPQUFHLEVBQUVILElBQUksQ0FBQ0ksU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVILCtEQUFNLENBQUNJLG9CQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUVKLCtEQUFNLENBQUNLLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBR0wsK0RBQU0sQ0FBQ00sZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q1AsSUFBSSxDQUFDUSxLQUE5QyxDQURGLEVBRUNULFFBRkQsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFFRSwrREFBTSxDQUFDUSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJVCxJQUFJLENBQUNVLFdBQVQsQ0FESSxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlWLElBQUksQ0FBQ1csSUFBVCxDQUZGLENBRkQsQ0FMRixDQUZGLENBREE7QUFtQkQsQ0FwQkQ7O0tBQU1iLFc7QUFzQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twaWRdLmExMWU5N2Y0MDRkMThjZDY1ZjNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9zdFdyYXBwZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgUG9zdFdyYXBwZXIgPSAoe2NoaWxkcmVuLCBwb3N0fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X3dyYXBwZXJ9PlxyXG4gICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X21haW5faW1hZ2V9IHNyYz17cG9zdC5tYWluSW1hZ2V9PjwvaW1nPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2FydGljbGVfd3JhcHBlcn0+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfbWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZSA9e3N0eWxlcy5wb3N0X21haW5fdGl0bGV9Pntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X3NpZGVfYmFyfT5cclxuICA8cD57cG9zdC5wdWJsaXNoZWRBdH08L3A+XHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgICA8cD5BdXRob3I8L3A+XHJcbiAgICAgICAgIDxwPntwb3N0Lm5hbWV9PC9wPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgIFxyXG4gIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFdyYXBwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==