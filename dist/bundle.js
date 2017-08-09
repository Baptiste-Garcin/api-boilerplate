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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_morgan__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_debug__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_PostRouter__ = __webpack_require__(7);
/*       */






                                      
                                                         


class Application {
                               
                        
                    
                  
                    

  constructor() {
    this.DEFAULT_PORT = 3000;
    this.port = this.normalizePort(process.env.PORT || '3000');
    this.mongodURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/tourismatik';
    this.express = __WEBPACK_IMPORTED_MODULE_0_express___default()();
    this.debug = __WEBPACK_IMPORTED_MODULE_5_debug___default()('tourismatik:server');
    this.dbConnect();
    this.middleware();
    this.routes();
    this.start();
  }

  normalizePort(val        )                  {
    const normalizedport = parseInt(val, 10);

    if (isNaN(normalizedport)) {
      // named pipe
      return val;
    }

    if (normalizedport >= 0) {
      // port number
      return normalizedport;
    }

    return this.DEFAULT_PORT;
  }

  onListening()       {
    const addr                     = this.express.address();
    const bind         = typeof addr === 'string'
      ? `pipe ${addr}`
      : `pipe ${addr.port}`;
    this.debug(`Listening on + ${bind}`);
  }

  onError(error             )       {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const bind         = typeof this.port === 'string'
      ? `Pipe ${this.port}`
      : `Port ${this.port.toString()}`;

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

  dbConnect()       {
    __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.Promise = global.Promise;
    __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(this.mongodURI, { useMongoClient: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
  middleware()       {
    this.express.use(__WEBPACK_IMPORTED_MODULE_1_morgan___default()('dev'));
    this.express.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());
    this.express.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: false }));
    this.express.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
    /**
     * Error Handler
     */
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
    const postRouter = new __WEBPACK_IMPORTED_MODULE_6__routes_PostRouter__["a" /* default */]();
    this.express.use(postRouter.path, postRouter.router);
    this.express.use((req          , res           , next              )       => {
      const err              = new Error('Not Found');
      err.status = 404;
      next(err);
    });
  }

  start() {
    this.express.listen(this.port);
    this.express.on('error', this.onError);
    this.express.on('listening', this.onListening);
  }
}

const app = new Application();
/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_post__ = __webpack_require__(8);
/*       */



class PostRouter {
                 
               

  constructor(path         = '/api')       {
    this.router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
    this.path = path;
    this.init();
  }

  static placeholder(req          , res           ) {
    res.status(200).json({
      success: true,
    });
  }

  init()       {
    this.router.get('/', PostRouter.placeholder);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostRouter;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/*       */


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
/* unused harmony export Schema */

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

const post = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Post', schema);
/* unused harmony default export */ var _unused_webpack_default_export = (post);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map