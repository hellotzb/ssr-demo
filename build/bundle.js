/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/fetch.js":
/*!*****************************!*\
  !*** ./src/client/fetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clientFetch\": () => (/* binding */ clientFetch)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.includes.js */ \"core-js/modules/es6.string.includes.js\");\n/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes.js */ \"core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ \"core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n\n\n\n\n\n\n\nvar clientFetch = function clientFetch(url, config) {\n  // console.log('客户端fetch');\n  if (url.includes('http')) {\n    var newURL = url.replace('/api', '');\n    return node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(newURL, config).then(function (response) {\n      return response.json();\n    }).catch(function (err) {\n      console.error('fetch err', err);\n      return Promise.reject(err);\n    });\n  } else {\n    return node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_6__.CLIENT_BASEURL).concat(url), config).then(function (response) {\n      return response.json();\n    }).catch(function (err) {\n      console.error('fetch err', err);\n      return Promise.reject(err);\n    });\n  }\n};\n\n//# sourceURL=webpack://ssr/./src/client/fetch.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/components/Header/store/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-style-loader/useStyles */ \"isomorphic-style-loader/useStyles\");\n/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ \"./src/components/Header/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n // 需要在webpack中css-loader的配置开启modules: true,\n\nvar Header = function Header() {\n  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_5___default()((_index_less__WEBPACK_IMPORTED_MODULE_6___default()));\n  var isLogin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {\n    return state.header.isLogin;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); // useEffect(() => {\n  // 优化，login通用接口服务端能够后渲染可以不在客户端进行渲染(处理二级路由)\n  // dispatch(fetchLogin(LOGIN_INFO));\n  // }, []);\n\n  var handleLogin = function handleLogin() {\n    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.fetchLogin)(_config__WEBPACK_IMPORTED_MODULE_4__.LOGIN_INFO));\n  };\n\n  var handleLogout = function handleLogout() {\n    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.logout)());\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/home\"\n  }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), isLogin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_6___default().logout),\n    onClick: handleLogout\n  }, \"\\u9000\\u51FA\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_6___default().login),\n    onClick: handleLogin\n  }, \"\\u767B\\u9646\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null));\n};\n\nHeader.loadData = function (store) {\n  return store.dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.fetchLogin)(_config__WEBPACK_IMPORTED_MODULE_4__.LOGIN_INFO));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://ssr/./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/action.js":
/*!***********************************************!*\
  !*** ./src/components/Header/store/action.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_LOGIN_SUCCESS\": () => (/* binding */ GET_LOGIN_SUCCESS),\n/* harmony export */   \"LOGOUT\": () => (/* binding */ LOGOUT),\n/* harmony export */   \"changeLoginStatus\": () => (/* binding */ changeLoginStatus),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"fetchLogin\": () => (/* binding */ fetchLogin)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ \"./src/config/index.js\");\n\nvar GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';\nvar LOGOUT = 'LOGOUT';\nvar changeLoginStatus = function changeLoginStatus(data) {\n  return {\n    type: GET_LOGIN_SUCCESS,\n    data: data\n  };\n};\nvar logout = function logout() {\n  return {\n    type: LOGOUT,\n    data: {\n      isLogin: false\n    }\n  };\n}; // node中间层proxy转发api，客户端不直接请求api服务器\n\nvar fetchLogin = function fetchLogin(params) {\n  return function (dispatch, getState, request) {\n    // 浏览器端运行/api/users = http://localhost:3001/api/users\n    // 服务端运行/api/users = 服务器根目录/api/users --> 报错（TypeError: Only absolute URLs are supported）\n    return request(_config__WEBPACK_IMPORTED_MODULE_0__.LOGIN_API, {\n      headers: {\n        'Content-type': 'application/json'\n      },\n      method: 'post',\n      body: JSON.stringify(params)\n    }).then(function (data) {\n      if (+data.status === 200) {\n        dispatch(changeLoginStatus(data));\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack://ssr/./src/components/Header/store/action.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__.header),\n/* harmony export */   \"GET_LOGIN_SUCCESS\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.GET_LOGIN_SUCCESS),\n/* harmony export */   \"LOGOUT\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.LOGOUT),\n/* harmony export */   \"changeLoginStatus\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.changeLoginStatus),\n/* harmony export */   \"fetchLogin\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.fetchLogin),\n/* harmony export */   \"logout\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.logout)\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ \"./src/components/Header/store/action.js\");\n\n\n\n//# sourceURL=webpack://ssr/./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ \"core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ \"core-js/modules/es6.array.filter.js\");\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ \"core-js/modules/es6.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ \"core-js/modules/es7.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action */ \"./src/components/Header/store/action.js\");\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  isLogin: false\n};\nvar header = function header() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      _action$data = action.data,\n      data = _action$data === void 0 ? {} : _action$data;\n\n  switch (type) {\n    case _action__WEBPACK_IMPORTED_MODULE_5__.GET_LOGIN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLogin: true\n      });\n\n    case _action__WEBPACK_IMPORTED_MODULE_5__.LOGOUT:\n      return _objectSpread(_objectSpread({}, state), data);\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://ssr/./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"port\": () => (/* binding */ port),\n/* harmony export */   \"CLIENT_BASEURL\": () => (/* binding */ CLIENT_BASEURL),\n/* harmony export */   \"SERVER_BASEURL\": () => (/* binding */ SERVER_BASEURL),\n/* harmony export */   \"MUKE_SECERT\": () => (/* binding */ MUKE_SECERT),\n/* harmony export */   \"GET_HOME_LIST_OLD_URL\": () => (/* binding */ GET_HOME_LIST_OLD_URL),\n/* harmony export */   \"GET_HOME_LIST_URL\": () => (/* binding */ GET_HOME_LIST_URL),\n/* harmony export */   \"LOGIN_API\": () => (/* binding */ LOGIN_API),\n/* harmony export */   \"LOGIN_INFO\": () => (/* binding */ LOGIN_INFO)\n/* harmony export */ });\nvar port = 8000;\nvar CLIENT_BASEURL = '';\nvar SERVER_BASEURL = 'http://120.78.191.110:7001'; // https://git.imooc.com/coding-276/coding-276，secret3年未更新，无法使用\n\nvar MUKE_SECERT = 'PP87ANTIPIRATE'; // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE\n\nvar GET_HOME_LIST_OLD_URL = 'http://47.95.113.63/ssr/api/news.json'; // node转发api格式：/api/xxx\n// 获取Home列表\n\nvar GET_HOME_LIST_URL = '/api/users'; // 登陆\n\nvar LOGIN_API = '/api/user/login';\nvar LOGIN_INFO = {\n  username: 'admin',\n  password: '123456'\n};\n\n//# sourceURL=webpack://ssr/./src/config/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.assign.js */ \"core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _screens_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/Home */ \"./src/screens/Home/index.js\");\n/* harmony import */ var _screens_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/Page */ \"./src/screens/Page/index.js\");\n/* harmony import */ var _screens_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/NotFound */ \"./src/screens/NotFound/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\n // 原生处理二级路由\n\nvar routes = [{\n  key: 'header',\n  path: '/',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null),\n  loadData: _components_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"].loadData,\n  children: [{\n    key: 'home',\n    path: 'home',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_screens_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n    loadData: _screens_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"].loadData\n  }, {\n    key: 'page',\n    path: 'page',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_screens_Page__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n  }]\n}, {\n  key: 'test',\n  path: '/test',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"p\", null, \"test\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Outlet, null)),\n  children: [{\n    key: 'test2',\n    path: 'test2',\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_screens_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n    loadData: _screens_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"].loadData\n  }]\n}, {\n  key: 'not-found',\n  path: '*',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_screens_NotFound__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)\n}];\n\nvar mapRoutes = function mapRoutes(routes) {\n  if (Object.prototype.toString.call(routes) !== '[object Array]' || routes.length === 0) return null;\n  return routes.map(function (route) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, _extends({}, route, {\n      path: route.path\n    }), mapRoutes(route.children));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, mapRoutes(routes));\n});\n\n//# sourceURL=webpack://ssr/./src/routes.js?");

/***/ }),

/***/ "./src/screens/Home/index.js":
/*!***********************************!*\
  !*** ./src/screens/Home/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader/useStyles */ \"isomorphic-style-loader/useStyles\");\n/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ \"./src/screens/Home/store/index.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ \"./src/screens/Home/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n // componentDidMount在服务器端是不执行的\n\nvar Home = function Home() {\n  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4___default()((_index_less__WEBPACK_IMPORTED_MODULE_7___default()));\n  var name = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.home.name;\n  });\n  var homeList = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.home.homeList;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (homeList.length === 0) {\n      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_6__.getHomeList)());\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"meta\", {\n    charSet: \"utf-8\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"title\", null, \"home page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"\\u8FD9\\u662Fhome page\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"link\", {\n    rel: \"canonical\",\n    href: \"http://mysite.com/example\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return alert('Hello World');\n    }\n  }, \"click\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, \"home's name is: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"span\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_7___default().strong)\n  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, \"HomeList:\"), !!homeList.length && homeList.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n      key: item.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, \"user's name: \", item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, \"user's email: \", item.email));\n  }));\n};\n\nHome.loadData = function (store) {\n  // loadData负责在服务器端渲染之前，把路由需要的数据提前加载好\n  return store === null || store === void 0 ? void 0 : store.dispatch((0,_store__WEBPACK_IMPORTED_MODULE_6__.getHomeList)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://ssr/./src/screens/Home/index.js?");

/***/ }),

/***/ "./src/screens/Home/store/action.js":
/*!******************************************!*\
  !*** ./src/screens/Home/store/action.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_LIST_SUCCESS\": () => (/* binding */ GET_LIST_SUCCESS),\n/* harmony export */   \"changeList\": () => (/* binding */ changeList),\n/* harmony export */   \"getHomeList\": () => (/* binding */ getHomeList)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ \"./src/config/index.js\");\n\nvar GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';\nvar changeList = function changeList(data) {\n  return {\n    type: GET_LIST_SUCCESS,\n    data: data\n  };\n}; // node中间层proxy转发api，客户端不直接请求api服务器\n\nvar getHomeList = function getHomeList() {\n  return function (dispatch, getState, request) {\n    // 浏览器端运行/api/users = http://localhost:3001/api/users\n    // 服务端运行/api/users = 服务器根目录/api/users --> 报错（TypeError: Only absolute URLs are supported）\n    return request(\"http://jsonplaceholder.typicode.com\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.GET_HOME_LIST_URL)).then(function (data) {\n      dispatch(changeList(data));\n    });\n  };\n};\n\n//# sourceURL=webpack://ssr/./src/screens/Home/store/action.js?");

/***/ }),

/***/ "./src/screens/Home/store/index.js":
/*!*****************************************!*\
  !*** ./src/screens/Home/store/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__.home),\n/* harmony export */   \"GET_LIST_SUCCESS\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.GET_LIST_SUCCESS),\n/* harmony export */   \"changeList\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.changeList),\n/* harmony export */   \"getHomeList\": () => (/* reexport safe */ _action__WEBPACK_IMPORTED_MODULE_1__.getHomeList)\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/screens/Home/store/reducer.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ \"./src/screens/Home/store/action.js\");\n\n\n\n//# sourceURL=webpack://ssr/./src/screens/Home/store/index.js?");

/***/ }),

/***/ "./src/screens/Home/store/reducer.js":
/*!*******************************************!*\
  !*** ./src/screens/Home/store/reducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ \"core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ \"core-js/modules/es6.array.filter.js\");\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ \"core-js/modules/es6.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ \"core-js/modules/es7.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action */ \"./src/screens/Home/store/action.js\");\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  name: \"China\",\n  homeList: []\n};\nvar home = function home() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      _action$data = action.data,\n      data = _action$data === void 0 ? {} : _action$data;\n\n  switch (type) {\n    case _action__WEBPACK_IMPORTED_MODULE_5__.GET_LIST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        homeList: data\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://ssr/./src/screens/Home/store/reducer.js?");

/***/ }),

/***/ "./src/screens/NotFound/index.js":
/*!***************************************!*\
  !*** ./src/screens/NotFound/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotFound)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"404 not found\");\n}\n\n//# sourceURL=webpack://ssr/./src/screens/NotFound/index.js?");

/***/ }),

/***/ "./src/screens/Page/index.js":
/*!***********************************!*\
  !*** ./src/screens/Page/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/useStyles */ \"isomorphic-style-loader/useStyles\");\n/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ \"./src/screens/Page/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Page = function Page() {\n  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()((_index_less__WEBPACK_IMPORTED_MODULE_3___default()));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    charSet: \"utf-8\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"\\u8FD9\\u662Fpage\\u9875\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", {\n    rel: \"canonical\",\n    href: \"http://mysite.com/example\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_3___default().page)\n  }, \"Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return alert('page');\n    }\n  }, \"click\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n//# sourceURL=webpack://ssr/./src/screens/Page/index.js?");

/***/ }),

/***/ "./src/server/fetch.js":
/*!*****************************!*\
  !*** ./src/server/fetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serverFetch\": () => (/* binding */ serverFetch)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.includes.js */ \"core-js/modules/es6.string.includes.js\");\n/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes.js */ \"core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ \"core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n\n\n\n\n\n\n\nvar serverFetch = function serverFetch(url, config) {\n  // console.log('服务端fetch');\n  if (url.includes('http')) {\n    var newURL = url.replace('/api', '');\n    return node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(newURL, config).then(function (response) {\n      return response.json();\n    }).catch(function (err) {\n      console.error('fetch err', err);\n      return Promise.reject(err);\n    });\n  } else {\n    return node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_6__.SERVER_BASEURL).concat(url), config).then(function (response) {\n      return response.json();\n    }).catch(function (err) {\n      console.error('fetch err', err);\n      return Promise.reject(err);\n    });\n  }\n};\n\n//# sourceURL=webpack://ssr/./src/server/fetch.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.includes.js */ \"core-js/modules/es6.string.includes.js\");\n/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes.js */ \"core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.promise.finally.js */ \"core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ \"core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ \"core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ \"./src/server/util.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\n\n// server入口文件\n\n\n\n\n\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express(); // 静态资源\n\napp.use(express.static('public'));\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_8___default()(_config__WEBPACK_IMPORTED_MODULE_10__.SERVER_BASEURL, {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return '/api' + req.url;\n  }\n}));\napp.get('*', function (req, res) {\n  // TODO：解决未知bug，自动调起/json和/json/version的路由\n  if (req.url.includes('json')) return;\n  var store = (0,_store__WEBPACK_IMPORTED_MODULE_11__.getStore)(); // 需要根据路由的路径来往store中加数据\n  // 如果用户访问/home，就拿home组件的异步数据；如果访问/page路径，就拿page组件的异步数据\n\n  var promises = [];\n  var matchRoutes = []; // 储存匹配的路由路径\n  // matchPath无法处理二级路由,使用 matchRoutesFn 封装处理\n\n  (0,_util__WEBPACK_IMPORTED_MODULE_9__.matchRoutesFn)(_routes__WEBPACK_IMPORTED_MODULE_12__.routes, req.url, function (route) {\n    // 有匹配的路径将路由信息储存到matchRoutes中\n    matchRoutes.push(route);\n  }); // console.log('matchRoutes--', matchRoutes);\n\n  matchRoutes.forEach(function (item) {\n    if (item.loadData) {\n      // 避免有一个接口获取失败导致服务端渲染错误以及有一个接口报错，其他接口请求时间过长不会返回\n      var promise = new Promise(function (resolve) {\n        item.loadData(store).finally(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n  Promise.all(promises).then(function () {\n    // 这时已经准备好数据\n    // console.log('state--', store.getState());\n    res.send((0,_util__WEBPACK_IMPORTED_MODULE_9__.render)(store, req));\n  });\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_10__.port, function () {\n  console.log(\"SSR app listening at http://localhost:\".concat(_config__WEBPACK_IMPORTED_MODULE_10__.port));\n});\n\n//# sourceURL=webpack://ssr/./src/server/index.js?");

/***/ }),

/***/ "./src/server/util.js":
/*!****************************!*\
  !*** ./src/server/util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"matchRoutesFn\": () => (/* binding */ matchRoutesFn)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.set.js */ \"core-js/modules/es6.set.js\");\n/* harmony import */ var core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ \"core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ \"core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ \"core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ \"core-js/modules/es6.array.from.js\");\n/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ \"core-js/modules/es6.array.slice.js\");\n/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar render = function render(store, req) {\n  /* \r\n    1.服务器接收到请求，这个时候store是空的\r\n    2.服务器不会执行componentDidMount，所以列表内容获取不到\r\n    3.客户端代码运行，这个时候store也是空的\r\n    4.客户端会执行componentDidMount，获取列表数据，更新store的内容\r\n    5.客户端渲染出列表对应内容\r\n   */\n  var css = new Set(); // CSS for all rendered React components\n\n  var insertCss = function insertCss() {\n    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n      styles[_key] = arguments[_key];\n    }\n\n    return styles.forEach(function (style) {\n      return css.add(style._getCss());\n    });\n  }; // renderToString无法处理事件\n\n\n  var homeContent = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_11__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_15___default().Provider), {\n    value: {\n      insertCss: insertCss\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_13__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_12__.StaticRouter, {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_routes__WEBPACK_IMPORTED_MODULE_17__[\"default\"], null))))); // 使用react-helmet优化seo\n\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_16__.Helmet.renderStatic();\n  return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        \".concat(helmet.title.toString(), \"\\n        \").concat(helmet.meta.toString(), \"\\n        <script src=\\\"/index.js\\\" defer></script>\\n        <style>\").concat(_toConsumableArray(css).join(''), \"</style>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\").concat(homeContent, \"</div>\\n        <script>\\n          // \\u6570\\u636E\\u7684\\u6CE8\\u6C34\\n          window.context = {\\n            state: \").concat(JSON.stringify(store.getState()), \"\\n          };\\n        </script>\\n      </body>\\n    </html>\\n  \");\n}; // 扩展 matchPath 方法，能够匹配多级路由\n\nvar newMatchpath = function newMatchpath(route, url, parentPath) {\n  // '/' -> '/home'\n  // '/test' -> '/test/test2'\n  if (parentPath) {\n    // 处理多级路由\n    var newParentPath = parentPath === '/' ? '' : parentPath;\n    return url === newParentPath + '/' + route.path;\n  } else {\n    return (0,react_router__WEBPACK_IMPORTED_MODULE_14__.matchPath)(route, url);\n  }\n};\n\nvar matchRoutesFn = function matchRoutesFn(routes, url, cb, parentPath) {\n  if (Object.prototype.toString.call(routes) !== '[object Array]' || routes.length === 0) return false;\n\n  for (var i = 0; i < routes.length; i++) {\n    // matchPath 只能处理一级路由\n    var match = newMatchpath(routes[i], url, parentPath);\n\n    if (match) {\n      // console.log('route matched', routes[i]);\n      cb === null || cb === void 0 ? void 0 : cb(routes[i]);\n      return true;\n    } else if (routes[i].children) {\n      // 子路由匹配的话将父路由放入matchRoute数组中\n      var childrenMatch = matchRoutesFn(routes[i].children, url, cb, routes[i].path);\n      childrenMatch && (cb === null || cb === void 0 ? void 0 : cb(routes[i]));\n    }\n  }\n};\n\n//# sourceURL=webpack://ssr/./src/server/util.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStore\": () => (/* binding */ getStore),\n/* harmony export */   \"getClientStore\": () => (/* binding */ getClientStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _screens_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/Home/store */ \"./src/screens/Home/store/index.js\");\n/* harmony import */ var _components_Header_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n/* harmony import */ var _client_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/fetch */ \"./src/client/fetch.js\");\n/* harmony import */ var _server_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/fetch */ \"./src/server/fetch.js\");\n\n\n\n\n\n\nvar reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  home: _screens_Home_store__WEBPACK_IMPORTED_MODULE_2__.home,\n  header: _components_Header_store__WEBPACK_IMPORTED_MODULE_3__.header\n}); // 直接导出的store是单例的，会被所有用户共享\n// export default store;\n// 问题：服务端和客户端没有共享store\n\nvar getStore = function getStore() {\n  // 改变服务端store的内容，要使用serverFetch\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(_server_fetch__WEBPACK_IMPORTED_MODULE_5__.serverFetch)));\n}; // 解决：数据脱水和注水\n\nvar getClientStore = function getClientStore() {\n  // 改变服务端store的内容，要使用clientFetch\n  var defaultState = window.context.state; // 数据的脱水\n\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, defaultState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(_client_fetch__WEBPACK_IMPORTED_MODULE_4__.clientFetch)));\n};\n\n//# sourceURL=webpack://ssr/./src/store/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Header/index.less":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Header/index.less ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".src-components-Header-index__login--UVG0h,\\n.src-components-Header-index__logout--M3bTb {\\n  font-weight: bold;\\n  color: lightblue;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"login\": \"src-components-Header-index__login--UVG0h\",\n\t\"logout\": \"src-components-Header-index__logout--M3bTb\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://ssr/./src/components/Header/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/screens/Home/index.less":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/screens/Home/index.less ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".src-screens-Home-index__strong--Qmb74 {\\n  color: red;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"strong\": \"src-screens-Home-index__strong--Qmb74\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://ssr/./src/screens/Home/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/screens/Page/index.less":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/screens/Page/index.less ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".src-screens-Page-index__page--SbbOJ {\\n  width: 100vw;\\n  background-color: lightgreen;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"page\": \"src-screens-Page-index__page--SbbOJ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://ssr/./src/screens/Page/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ssr/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ssr/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Header/index.less":
/*!******************************************!*\
  !*** ./src/components/Header/index.less ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/components/Header/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://ssr/./src/components/Header/index.less?");

/***/ }),

/***/ "./src/screens/Home/index.less":
/*!*************************************!*\
  !*** ./src/screens/Home/index.less ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/screens/Home/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://ssr/./src/screens/Home/index.less?");

/***/ }),

/***/ "./src/screens/Page/index.less":
/*!*************************************!*\
  !*** ./src/screens/Page/index.less ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/screens/Page/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://ssr/./src/screens/Page/index.less?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack://ssr/./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "core-js/modules/es6.array.filter.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.array.filter.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.filter.js");

/***/ }),

/***/ "core-js/modules/es6.array.from.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.array.from.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.from.js");

/***/ }),

/***/ "core-js/modules/es6.array.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.iterator.js");

/***/ }),

/***/ "core-js/modules/es6.array.map.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.map.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.map.js");

/***/ }),

/***/ "core-js/modules/es6.array.slice.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.slice.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.array.slice.js");

/***/ }),

/***/ "core-js/modules/es6.function.name.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.function.name.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.function.name.js");

/***/ }),

/***/ "core-js/modules/es6.object.assign.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.assign.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.assign.js");

/***/ }),

/***/ "core-js/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es6.object.get-own-property-descriptor.js" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.get-own-property-descriptor.js");

/***/ }),

/***/ "core-js/modules/es6.object.keys.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.object.keys.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.keys.js");

/***/ }),

/***/ "core-js/modules/es6.object.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.object.to-string.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.promise.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.promise.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.promise.js");

/***/ }),

/***/ "core-js/modules/es6.regexp.replace.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.regexp.replace.js");

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.regexp.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.set.js":
/*!*********************************************!*\
  !*** external "core-js/modules/es6.set.js" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.set.js");

/***/ }),

/***/ "core-js/modules/es6.string.includes.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.includes.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.string.includes.js");

/***/ }),

/***/ "core-js/modules/es6.string.iterator.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.iterator.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.string.iterator.js");

/***/ }),

/***/ "core-js/modules/es6.symbol.js":
/*!************************************************!*\
  !*** external "core-js/modules/es6.symbol.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es6.symbol.js");

/***/ }),

/***/ "core-js/modules/es7.array.includes.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es7.array.includes.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es7.array.includes.js");

/***/ }),

/***/ "core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************!*\
  !*** external "core-js/modules/es7.object.get-own-property-descriptors.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es7.object.get-own-property-descriptors.js");

/***/ }),

/***/ "core-js/modules/es7.promise.finally.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es7.promise.finally.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es7.promise.finally.js");

/***/ }),

/***/ "core-js/modules/web.dom.iterable.js":
/*!******************************************************!*\
  !*** external "core-js/modules/web.dom.iterable.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/web.dom.iterable.js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-http-proxy");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "isomorphic-style-loader/useStyles":
/*!****************************************************!*\
  !*** external "isomorphic-style-loader/useStyles" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/useStyles");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;