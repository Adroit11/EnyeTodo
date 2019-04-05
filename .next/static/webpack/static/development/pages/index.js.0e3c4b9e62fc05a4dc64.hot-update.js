webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var TodoList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TodoList, _Component);

  function TodoList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TodoList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoList, [{
    key: "render",
    value: function render() {
      var _this$props$todo = this.props.todo,
          id = _this$props$todo.id,
          name = _this$props$todo.name;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-199231209"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-199231209"
      }, " ", name, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.props.delTodo.bind(this, id),
        className: "jsx-199231209"
      }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "199231209"
      }, "button.jsx-199231209{padding:5px;width:40px;margin:0 0 0 60px;}ul.jsx-199231209{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxuZXh0anNcXHRvZG9cXGNvbXBvbmVudHNcXFRvZG9MaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUd5QixBQUtJLFlBSkwsSUFLYixPQUpvQixrQkFDcEIiLCJmaWxlIjoiQzpcXHhhbXBwXFxodGRvY3NcXG5leHRqc1xcdG9kb1xcY29tcG9uZW50c1xcVG9kb0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlkLCBuYW1lIH0gPSB0aGlzLnByb3BzLnRvZG87XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuZGVsVG9kby5iaW5kKHRoaXMsIGlkKX0+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgdG9kbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\xampp\\htdocs\\nextjs\\todo\\components\\TodoList.js */"));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

TodoList.propTypes = {
  todo: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ })

})
//# sourceMappingURL=index.js.0e3c4b9e62fc05a4dc64.hot-update.js.map