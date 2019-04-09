(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core/logger/api"), require("lodash"), require("module"));
	else if(typeof define === 'function' && define.amd)
		define(["core/logger/api", "lodash", "module"], factory);
	else if(typeof exports === 'object')
		exports["logger"] = factory(require("core/logger/api"), require("lodash"), require("module"));
	else
		root["logger"] = factory(root["core/logger/api"], root["lodash"], root["module"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_core_logger_api__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_module__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/logger.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! module */ "module");
/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_logger_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/logger/api */ "core/logger/api");
/* harmony import */ var core_logger_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_logger_api__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2017 (original work) Open Assessment Technologies SA;
 *
 */

/**
 *
 * Logger facade
 *
 * Load the logger providers based on the module configuration
 * and exposes the logger api
 *
 * @author Bertrand Chevrier <bertrand@taotesting.com>
 */





    'use strict';

    /**
     * The default configuration if nothing
     * is found on the module config
     */
    var defaultConfig = {
        level : core_logger_api__WEBPACK_IMPORTED_MODULE_2___default.a.levels.warn,
        loggers : {
            'core/logger/console' : {
                'level' : 'warn'
            }
        }
    };

    //the logger providers are configured through the AMD module config
    var config = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(module__WEBPACK_IMPORTED_MODULE_1___default.a.config() || {}, defaultConfig);
    var logger = core_logger_api__WEBPACK_IMPORTED_MODULE_2___default()('core/logger');

    core_logger_api__WEBPACK_IMPORTED_MODULE_2___default.a.setDefaultLevel(config.level);
    core_logger_api__WEBPACK_IMPORTED_MODULE_2___default.a.load(config.loggers);

    /**
      * Catch uncaught errors
      * @param msg - error message
      * @param url - current url
      * @param line - line number
      * @param col - column number
      * @param error - error object (not all browsers support).
      * @return {boolean}
      */
    window.onerror = function (msg, url, line, col, error) {
        logger.error("Caught[via window.onerror]: '" + msg + "' from " + url + ":" + line + ":" + col);
    };

    /**
     * Expose explicitely an direct way to activate log levels
     * @param {String|Number} level - the new log level
     * @returns {String} the defined level
     */
    window.setTaoLogLevel = function setTaoLogLevel(level){
        return core_logger_api__WEBPACK_IMPORTED_MODULE_2___default.a.setDefaultLevel(level);
    };

    //exposes the API
    window.loggerFactory = core_logger_api__WEBPACK_IMPORTED_MODULE_2___default.a;
    
    /* harmony default export */ __webpack_exports__["default"] = (core_logger_api__WEBPACK_IMPORTED_MODULE_2___default.a);


/***/ }),

/***/ "core/logger/api":
/*!**********************************!*\
  !*** external "core/logger/api" ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_logger_api__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_module__;

/***/ })

/******/ })["default"];
});