require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__serverUtil__ = __webpack_require__(2);
/*       */

/**
 * Module dependencies.
 */


const port = Object(__WEBPACK_IMPORTED_MODULE_0__serverUtil__["a" /* normalizePort */])(process.env.PORT || '3000');

/**
 * Listen on provided port, on all network interfaces.
 */

__WEBPACK_IMPORTED_MODULE_0__serverUtil__["d" /* server */].listen(port);
__WEBPACK_IMPORTED_MODULE_0__serverUtil__["d" /* server */].on('error', __WEBPACK_IMPORTED_MODULE_0__serverUtil__["b" /* onError */]);
__WEBPACK_IMPORTED_MODULE_0__serverUtil__["d" /* server */].on('listening', __WEBPACK_IMPORTED_MODULE_0__serverUtil__["c" /* onListening */]);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizePort;
/* harmony export (immutable) */ __webpack_exports__["c"] = onListening;
/* harmony export (immutable) */ __webpack_exports__["b"] = onError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(5);
/*       */


                                           


const app = new __WEBPACK_IMPORTED_MODULE_2__app__["a" /* default */]();
const server         = __WEBPACK_IMPORTED_MODULE_0_http___default.a.createServer(app.express);
/* harmony export (immutable) */ __webpack_exports__["d"] = server;


const debug = __WEBPACK_IMPORTED_MODULE_1_debug___default()('tourismatik:server');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val        )                            {
  const normalizedport = parseInt(val, 10);

  if (isNaN(normalizedport)) {
    // named pipe
    return val;
  }

  if (normalizedport >= 0) {
    // port number
    return normalizedport;
  }

  return false;
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening()       {
  const addr                     = server.address();
  const bind         = typeof addr === 'string'
    ? `pipe ${addr}`
    : `pipe ${addr.port}`;
  debug(`Listening on + ${bind}`);
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error             )       {
  const port = normalizePort(process.env.PORT || '3000');
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind         = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port.toString()}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_morgan__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_MainRouter__ = __webpack_require__(9);
/*       */




                                                         


class Application {
                               

  constructor() {
    this.express = __WEBPACK_IMPORTED_MODULE_0_express___default()();
    this.middleware();
    this.routes();
  }

  middleware()       {
    this.express.use(__WEBPACK_IMPORTED_MODULE_1_morgan___default()('dev'));
    this.express.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());
    this.express.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: false }));
    this.express.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
    this.express.use((error        , req          , res           , next              ) => {
      if (error) {
        res.locals.message = error.message;
        res.locals.error = req.app.get('env') === 'development' ? error : {};

        res.status(error.status || 500);
        res.json({ error: error.message });
      }
    });
  }

  routes()       {
    const mainRouter = new __WEBPACK_IMPORTED_MODULE_4__routes_MainRouter__["a" /* default */]();
    this.express.use(mainRouter.path, mainRouter.router);
    this.express.use((req          , res           , next              )       => {
      const err              = new Error('Not Found');
      err.status = 404;
      next(err);
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Application;



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/*       */


class MainRouter {
                 
               

  constructor(path         = '/api')       {
    this.router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
    this.path = path;
    this.init();
  }

  static index(req          , res           )       {
    res.status(200).json({
      success: 'true',
    });
  }

  init()       {
    this.router.get('/', (req          , res           ) => {
      res.status(200).json({
        success: 'true',
      });
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainRouter;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map