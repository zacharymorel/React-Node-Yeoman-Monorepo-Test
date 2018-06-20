webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(24);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createBrowserHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(24);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createHashHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(51);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(46);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  "aria-current": __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(52);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(53);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(54);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(55);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__ = __webpack_require__(26);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_generatePath__["a" /* default */]);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(16);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(56);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(15);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCATION_CHANGE = exports.SET_PAGEDATA = exports.FETCHING_PAGEDATA = undefined;
exports.fetchingPageData = fetchingPageData;
exports.setPageData = setPageData;
exports.fetchPageData = fetchPageData;

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCHING_PAGEDATA = exports.FETCHING_PAGEDATA = 'FETCHING_PAGEDATA'; /** This provides the various redux actions to trigger app state changes by the redux reducer
                                                                          * @module Redux actions
                                                                          */

var SET_PAGEDATA = exports.SET_PAGEDATA = 'SET_PAGEDATA';
var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

function fetchingPageData() {
  return {
    type: FETCHING_PAGEDATA
  };
}

function setPageData(data) {
  return {
    type: SET_PAGEDATA,
    payload: data
  };
}

function fetchPageData() {
  return function (dispatch) {
    dispatch(fetchingPageData());
    return _axios2.default.get('/api/get-page-details').then(function (response) {
      dispatch(setPageData(response.data));
    });
  };
}

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, "You should not use <Link> outside a <Router>");

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createLocation"])(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(25);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = __webpack_require__(28);

var _reactRouterRedux = __webpack_require__(11);

var _index = __webpack_require__(85);

var reducers = _interopRequireWildcard(_index);

var _defaultState = __webpack_require__(86);

var _defaultState2 = _interopRequireDefault(_defaultState);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  app: reducers.appState,
  dataRequests: reducers.dataRequests,
  routing: _reactRouterRedux.routerReducer,
  homePage: reducers.homePageReducer
});

var routingMiddleware = (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory);

var store = (0, _redux.createStore)(reducer, _defaultState2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, routingMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}));

exports.default = store;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-unused-vars */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Error404 = function (_React$Component) {
  _inherits(Error404, _React$Component);

  function Error404() {
    _classCallCheck(this, Error404);

    return _possibleConstructorReturn(this, (Error404.__proto__ || Object.getPrototypeOf(Error404)).apply(this, arguments));
  }

  _createClass(Error404, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page-container' },
        _react2.default.createElement(
          'h2',
          { className: 'error-heading' },
          '404 - Missing Resource '
        ),
        _react2.default.createElement(
          'p',
          null,
          'Please try again, but if the problem persist, contact an administrator.'
        )
      );
    }
  }]);

  return Error404;
}(_react2.default.Component);

Error404.displayName = 'Error404';

exports.default = Error404;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(88);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(33);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(10);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch(actions.fetchPageData());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _index2.default,
        { className: 'home-page', header: 'Home' },
        _react2.default.createElement(
          'h2',
          null,
          this.props.message
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.displayName = 'Home';

function select(state) {
  return {
    message: state.homePage.message
  };
}

exports.default = (0, _reactRedux.connect)(select)(Home);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generatePath__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return __WEBPACK_IMPORTED_MODULE_11__generatePath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__matchPath__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_12__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__withRouter__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_13__withRouter__["a"]; });





























/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homePageReducer = homePageReducer;
exports.appState = appState;
exports.dataRequests = dataRequests;

var _index = __webpack_require__(33);

var actionEvents = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function homePageReducer(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PAGEDATA) {
    newState = action.payload;
  }

  return newState;
}

function appState(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.LOCATION_CHANGE) {
    newState.current.path = action.payload.pathname;
  }

  return newState;
}

function dataRequests(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SETTING_PAGEDATA) {
    newState.settings = true;
  } else if (actionType === actionEvents.SET_PAGEDATA) {
    newState.settings = false;
  }

  return newState;
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  app: {
    current: {
      path: '',
      pageTitle: ''
    }
  },
  homePage: {
    message: "Template Message"
  }
};

exports.default = state;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global location */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(10);

var _index = __webpack_require__(61);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(67);

var _reactRouterRedux = __webpack_require__(11);

var _home = __webpack_require__(63);

var _home2 = _interopRequireDefault(_home);

var _error = __webpack_require__(62);

var _error2 = _interopRequireDefault(_error);

var _history = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = (0, _reactRouterRedux.syncHistoryWithStore)((0, _history.createBrowserHistory)(), _index2.default);
console.log(history);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'view-container' },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: _index2.default },
          _react2.default.createElement(
            _reactRouterDom.Router,
            { history: history },
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/404', component: _error2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { nomatch: true, component: _error2.default })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.displayName = 'App';

// Bootstrap client
if (typeof window !== 'undefined') {
  window.onload = function () {
    var props = {
      path: location.pathname
    };
    _reactDom2.default.render(_react2.default.createElement(App, props), document.getElementById('reactView'));
  };
}

exports.default = App;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { id: 'header' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement('div', { className: 'logo-icon' }),
            _react2.default.createElement(
              'div',
              { className: 'page-header' },
              this.props.header
            )
          )
        ),
        _react2.default.createElement(
          'main',
          { id: 'body' },
          _react2.default.createElement(
            'div',
            { id: 'container', className: 'page-container' },
            this.props.children
          )
        ),
        _react2.default.createElement(
          'footer',
          null,
          _react2.default.createElement(
            'div',
            { className: 'footer' },
            'Generated by ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/jefreesujit/react-generator-node' },
              'react-generator-node'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

Page.displayName = 'Page';

exports.default = Page;

/***/ })

},[87]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXMvQnJvd3NlclJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXMvSGFzaFJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXMvTWVtb3J5Um91dGVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9lcy9OYXZMaW5rLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9lcy9Qcm9tcHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL1JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9lcy9TdGF0aWNSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL1N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXMvZ2VuZXJhdGVQYXRoLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9lcy9tYXRjaFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL3dpdGhSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL0xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL1JvdXRlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyLWRvbS9+L3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3N0b3Jlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2Vycm9yNDA0LmpzIiwid2VicGFjazovLy8uL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3N0b3Jlcy9kZWZhdWx0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50L3ZpZXdzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZldGNoaW5nUGFnZURhdGEiLCJzZXRQYWdlRGF0YSIsImZldGNoUGFnZURhdGEiLCJGRVRDSElOR19QQUdFREFUQSIsIlNFVF9QQUdFREFUQSIsIkxPQ0FUSU9OX0NIQU5HRSIsInR5cGUiLCJkYXRhIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWR1Y2VycyIsInJlZHVjZXIiLCJhcHAiLCJhcHBTdGF0ZSIsImRhdGFSZXF1ZXN0cyIsInJvdXRpbmciLCJyb3V0ZXJSZWR1Y2VyIiwiaG9tZVBhZ2UiLCJob21lUGFnZVJlZHVjZXIiLCJyb3V0aW5nTWlkZGxld2FyZSIsImJyb3dzZXJIaXN0b3J5Iiwic3RvcmUiLCJkZWZhdWx0U3RhdGUiLCJ0aHVuayIsIndpbmRvdyIsImRldlRvb2xzRXh0ZW5zaW9uIiwiZiIsIkVycm9yNDA0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsImFjdGlvbnMiLCJIb21lIiwicHJvcHMiLCJtZXNzYWdlIiwic2VsZWN0Iiwic3RhdGUiLCJhY3Rpb25FdmVudHMiLCJhY3Rpb24iLCJhY3Rpb25UeXBlIiwibmV3U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjdXJyZW50IiwicGF0aCIsInBhdGhuYW1lIiwiU0VUVElOR19QQUdFREFUQSIsInNldHRpbmdzIiwicGFnZVRpdGxlIiwiaGlzdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJvbmxvYWQiLCJsb2NhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQYWdlIiwiaGVhZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ2dEO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0pBQXVILFNBQVMsc0JBQXNCLDBCQUEwQjtBQUNoTDs7QUFFQTtBQUNBLGtJQUF3Qyx1REFBdUQ7QUFDL0Y7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx3RTs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUEsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDNkM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0SkFBb0gsU0FBUyxzQkFBc0IsdUJBQXVCO0FBQzFLOztBQUVBO0FBQ0Esa0lBQXdDLHVEQUF1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V0FBTCxHQUFtQixNQUFuQjs7a0JBRWU4QixJIiwiZmlsZSI6ImFwcC5iNmRmYjhiOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCB3YXJuaW5nIGZyb20gXCJ3YXJuaW5nXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSBhcyBjcmVhdGVIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cblxudmFyIEJyb3dzZXJSb3V0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQnJvd3NlclJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnJvd3NlclJvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJyb3dzZXJSb3V0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KF90aGlzLnByb3BzKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBCcm93c2VyUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpO1xuICB9O1xuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHsgaGlzdG9yeTogdGhpcy5oaXN0b3J5LCBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB9KTtcbiAgfTtcblxuICByZXR1cm4gQnJvd3NlclJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb3JjZVJlZnJlc2g6IFByb3BUeXBlcy5ib29sLFxuICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlclJvdXRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtcm91dGVyLWRvbS9lcy9Ccm93c2VyUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgd2FybmluZyBmcm9tIFwid2FybmluZ1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlSGFzaEhpc3RvcnkgYXMgY3JlYXRlSGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaFJvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUhpc3RvcnkoX3RoaXMucHJvcHMpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEhhc2hSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9YC5cIik7XG4gIH07XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwgeyBoaXN0b3J5OiB0aGlzLmhpc3RvcnksIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5IYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hSb3V0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vZXMvSGFzaFJvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzXG5pbXBvcnQgTWVtb3J5Um91dGVyIGZyb20gXCJyZWFjdC1yb3V0ZXIvZXMvTWVtb3J5Um91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbW9yeVJvdXRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtcm91dGVyLWRvbS9lcy9NZW1vcnlSb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cbnZhciBOYXZMaW5rID0gZnVuY3Rpb24gTmF2TGluayhfcmVmKSB7XG4gIHZhciB0byA9IF9yZWYudG8sXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBnZXRJc0FjdGl2ZSA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBhcmlhQ3VycmVudCA9IF9yZWZbXCJhcmlhLWN1cnJlbnRcIl0sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInRvXCIsIFwiZXhhY3RcIiwgXCJzdHJpY3RcIiwgXCJsb2NhdGlvblwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwic3R5bGVcIiwgXCJpc0FjdGl2ZVwiLCBcImFyaWEtY3VycmVudFwiXSk7XG5cbiAgdmFyIHBhdGggPSAodHlwZW9mIHRvID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodG8pKSA9PT0gXCJvYmplY3RcIiA/IHRvLnBhdGhuYW1lIDogdG87XG5cbiAgLy8gUmVnZXggdGFrZW4gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwL2Jsb2IvbWFzdGVyL2luZGV4LmpzI0wyMDJcbiAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge1xuICAgIHBhdGg6IGVzY2FwZWRQYXRoLFxuICAgIGV4YWN0OiBleGFjdCxcbiAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKF9yZWYyKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfcmVmMi5sb2NhdGlvbixcbiAgICAgICAgICBtYXRjaCA9IF9yZWYyLm1hdGNoO1xuXG4gICAgICB2YXIgaXNBY3RpdmUgPSAhIShnZXRJc0FjdGl2ZSA/IGdldElzQWN0aXZlKG1hdGNoLCBsb2NhdGlvbikgOiBtYXRjaCk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHtcbiAgICAgICAgdG86IHRvLFxuICAgICAgICBjbGFzc05hbWU6IGlzQWN0aXZlID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSkuam9pbihcIiBcIikgOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZSwgYWN0aXZlU3R5bGUpIDogc3R5bGUsXG4gICAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGxcbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuTmF2TGluay5wcm9wVHlwZXMgPSB7XG4gIHRvOiBMaW5rLnByb3BUeXBlcy50byxcbiAgZXhhY3Q6IFByb3BUeXBlcy5ib29sLFxuICBzdHJpY3Q6IFByb3BUeXBlcy5ib29sLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICBcImFyaWEtY3VycmVudFwiOiBQcm9wVHlwZXMub25lT2YoW1wicGFnZVwiLCBcInN0ZXBcIiwgXCJsb2NhdGlvblwiLCBcImRhdGVcIiwgXCJ0aW1lXCIsIFwidHJ1ZVwiXSlcbn07XG5cbk5hdkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6IFwiYWN0aXZlXCIsXG4gIFwiYXJpYS1jdXJyZW50XCI6IFwicGFnZVwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL05hdkxpbmsuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0c1xuaW1wb3J0IFByb21wdCBmcm9tIFwicmVhY3Qtcm91dGVyL2VzL1Byb21wdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9tcHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vZXMvUHJvbXB0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHNcbmltcG9ydCBSZWRpcmVjdCBmcm9tIFwicmVhY3Qtcm91dGVyL2VzL1JlZGlyZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL1JlZGlyZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHNcbmltcG9ydCBTdGF0aWNSb3V0ZXIgZnJvbSBcInJlYWN0LXJvdXRlci9lcy9TdGF0aWNSb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljUm91dGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL1N0YXRpY1JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzXG5pbXBvcnQgU3dpdGNoIGZyb20gXCJyZWFjdC1yb3V0ZXIvZXMvU3dpdGNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtcm91dGVyLWRvbS9lcy9Td2l0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0c1xuaW1wb3J0IGdlbmVyYXRlUGF0aCBmcm9tIFwicmVhY3Qtcm91dGVyL2VzL2dlbmVyYXRlUGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vZXMvZ2VuZXJhdGVQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHNcbmltcG9ydCBtYXRjaFBhdGggZnJvbSBcInJlYWN0LXJvdXRlci9lcy9tYXRjaFBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hQYXRoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL21hdGNoUGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzXG5pbXBvcnQgd2l0aFJvdXRlciBmcm9tIFwicmVhY3Qtcm91dGVyL2VzL3dpdGhSb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtcm91dGVyLWRvbS9lcy93aXRoUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHNcbmltcG9ydCBSb3V0ZXIgZnJvbSBcInJlYWN0LXJvdXRlci9lcy9Sb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL1JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFRoaXMgcHJvdmlkZXMgdGhlIHZhcmlvdXMgcmVkdXggYWN0aW9ucyB0byB0cmlnZ2VyIGFwcCBzdGF0ZSBjaGFuZ2VzIGJ5IHRoZSByZWR1eCByZWR1Y2VyXG4gKiBAbW9kdWxlIFJlZHV4IGFjdGlvbnNcbiAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgRkVUQ0hJTkdfUEFHRURBVEEgPSAnRkVUQ0hJTkdfUEFHRURBVEEnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQUdFREFUQSA9ICdTRVRfUEFHRURBVEEnO1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0NIQU5HRSA9ICdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hpbmdQYWdlRGF0YSAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hJTkdfUEFHRURBVEFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhZ2VEYXRhIChkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1BBR0VEQVRBLFxuICAgIHBheWxvYWQ6IGRhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGFnZURhdGEgKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL2dldC1wYWdlLWRldGFpbHMnKVxuICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgZGlzcGF0Y2goc2V0UGFnZURhdGEocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC9hY3Rpb25zL2luZGV4LmpzIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcImludmFyaWFudFwiO1xuaW1wb3J0IHsgY3JlYXRlTG9jYXRpb24gfSBmcm9tIFwiaGlzdG9yeVwiO1xuXG52YXIgaXNNb2RpZmllZEV2ZW50ID0gZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn07XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cbnZhciBMaW5rID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIF90aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgLy8gb25DbGljayBwcmV2ZW50ZWQgZGVmYXVsdFxuICAgICAgZXZlbnQuYnV0dG9uID09PSAwICYmIC8vIGlnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAgICAgIV90aGlzLnByb3BzLnRhcmdldCAmJiAvLyBsZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAgICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gaWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICAgICkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICB2YXIgaGlzdG9yeSA9IF90aGlzLmNvbnRleHQucm91dGVyLmhpc3Rvcnk7XG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgIHJlcGxhY2UgPSBfdGhpcyRwcm9wcy5yZXBsYWNlLFxuICAgICAgICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvO1xuXG5cbiAgICAgICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHRvKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHRvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIExpbmsucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcmVwbGFjZSA9IF9wcm9wcy5yZXBsYWNlLFxuICAgICAgICB0byA9IF9wcm9wcy50byxcbiAgICAgICAgaW5uZXJSZWYgPSBfcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgW1wicmVwbGFjZVwiLCBcInRvXCIsIFwiaW5uZXJSZWZcIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgICBpbnZhcmlhbnQodGhpcy5jb250ZXh0LnJvdXRlciwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPExpbms+IG91dHNpZGUgYSA8Um91dGVyPlwiKTtcblxuICAgIGludmFyaWFudCh0byAhPT0gdW5kZWZpbmVkLCAnWW91IG11c3Qgc3BlY2lmeSB0aGUgXCJ0b1wiIHByb3BlcnR5Jyk7XG5cbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcblxuICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBoaXN0b3J5LmxvY2F0aW9uKSA6IHRvO1xuXG4gICAgdmFyIGhyZWYgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgaHJlZjogaHJlZiwgcmVmOiBpbm5lclJlZiB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIExpbms7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdG86IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICBpbm5lclJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKVxufTtcbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICByZXBsYWNlOiBmYWxzZVxufTtcbkxpbmsuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaGlzdG9yeTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHB1c2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZXBsYWNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgY3JlYXRlSHJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL0xpbmsuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzXG5pbXBvcnQgUm91dGUgZnJvbSBcInJlYWN0LXJvdXRlci9lcy9Sb3V0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtcm91dGVyLWRvbS9lcy9Sb3V0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgd2FybmluZ1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vfi93YXJuaW5nL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlLCByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi9kZWZhdWx0U3RhdGUnO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXBwOiByZWR1Y2Vycy5hcHBTdGF0ZSxcbiAgZGF0YVJlcXVlc3RzOiByZWR1Y2Vycy5kYXRhUmVxdWVzdHMsXG4gIHJvdXRpbmc6IHJvdXRlclJlZHVjZXIsXG4gIGhvbWVQYWdlOiByZWR1Y2Vycy5ob21lUGFnZVJlZHVjZXJcbn0pO1xuXG5jb25zdCByb3V0aW5nTWlkZGxld2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoYnJvd3Nlckhpc3RvcnkpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGRlZmF1bHRTdGF0ZSwgY29tcG9zZShcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCByb3V0aW5nTWlkZGxld2FyZSksXG4gIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4pKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3N0b3Jlcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVycm9yNDA0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJlcnJvci1oZWFkaW5nXCI+NDA0IC0gTWlzc2luZyBSZXNvdXJjZSA8L2gyPlxuICAgICAgICA8cD5QbGVhc2UgdHJ5IGFnYWluLCBidXQgaWYgdGhlIHByb2JsZW0gcGVyc2lzdCwgY29udGFjdCBhbiBhZG1pbmlzdHJhdG9yLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRXJyb3I0MDQuZGlzcGxheU5hbWUgPSAnRXJyb3I0MDQnO1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvcjQwNDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvZXJyb3I0MDQuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL2luZGV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5mZXRjaFBhZ2VEYXRhKCkpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgY2xhc3NOYW1lPVwiaG9tZS1wYWdlXCIgaGVhZGVyPVwiSG9tZVwiPlxuICAgICAgICA8aDI+e3RoaXMucHJvcHMubWVzc2FnZX08L2gyPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuSG9tZS5kaXNwbGF5TmFtZSA9ICdIb21lJztcblxuZnVuY3Rpb24gc2VsZWN0IChzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IHN0YXRlLmhvbWVQYWdlLm1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKEhvbWUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NsaWVudC92aWV3cy9wYWdlcy9ob21lLmpzIiwiaW1wb3J0IF9Ccm93c2VyUm91dGVyIGZyb20gXCIuL0Jyb3dzZXJSb3V0ZXJcIjtcbmV4cG9ydCB7IF9Ccm93c2VyUm91dGVyIGFzIEJyb3dzZXJSb3V0ZXIgfTtcbmltcG9ydCBfSGFzaFJvdXRlciBmcm9tIFwiLi9IYXNoUm91dGVyXCI7XG5leHBvcnQgeyBfSGFzaFJvdXRlciBhcyBIYXNoUm91dGVyIH07XG5pbXBvcnQgX0xpbmsgZnJvbSBcIi4vTGlua1wiO1xuZXhwb3J0IHsgX0xpbmsgYXMgTGluayB9O1xuaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9OYXZMaW5rIGZyb20gXCIuL05hdkxpbmtcIjtcbmV4cG9ydCB7IF9OYXZMaW5rIGFzIE5hdkxpbmsgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBhY3Rpb25FdmVudHMgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BBR0VEQVRBKSB7XG4gICAgbmV3U3RhdGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcFN0YXRlIChzdGF0ZSwgYWN0aW9uKSB7XG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcblxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkxPQ0FUSU9OX0NIQU5HRSkge1xuICAgIG5ld1N0YXRlLmN1cnJlbnQucGF0aCA9IGFjdGlvbi5wYXlsb2FkLnBhdGhuYW1lO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YVJlcXVlc3RzIChzdGF0ZSwgYWN0aW9uKSB7XG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcblxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVFRJTkdfUEFHRURBVEEpIHtcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IHRydWU7XG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVF9QQUdFREFUQSkge1xuICAgIG5ld1N0YXRlLnNldHRpbmdzID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgc3RhdGUgPSB7XG4gIGFwcDoge1xuICAgIGN1cnJlbnQ6IHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgcGFnZVRpdGxlOiAnJ1xuICAgIH1cbiAgfSxcbiAgaG9tZVBhZ2U6IHtcbiAgICBtZXNzYWdlOiBcIlRlbXBsYXRlIE1lc3NhZ2VcIlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3Jlcy9pbmRleCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvaG9tZSc7XG5pbXBvcnQgRXJyb3I0MDQgZnJvbSAnLi9wYWdlcy9lcnJvcjQwNCc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSwgc3RvcmUpO1xuY29uc29sZS5sb2coaGlzdG9yeSk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi80MDRcIiBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxuICAgICAgICAgICAgICA8Um91dGUgbm9tYXRjaCBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5kaXNwbGF5TmFtZSA9ICdBcHAnO1xuXG4vLyBCb290c3RyYXAgY2xpZW50XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICB2YXIgcHJvcHMgPSB7XG4gICAgICBwYXRoOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgIH07XG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBwcm9wcyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdFZpZXcnKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWljb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBpZD1cImJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIEdlbmVyYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2plZnJlZXN1aml0L3JlYWN0LWdlbmVyYXRvci1ub2RlXCI+cmVhY3QtZ2VuZXJhdG9yLW5vZGU8L2E+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFnZS5kaXNwbGF5TmFtZSA9ICdQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jbGllbnQvdmlld3MvcGFnZXMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9