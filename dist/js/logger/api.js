(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core/format"), require("core/promise"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["core/format", "core/promise", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["logger/api"] = factory(require("core/format"), require("core/promise"), require("lodash"));
	else
		root["logger/api"] = factory(root["core/format"], root["core/promise"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_core_format__, __WEBPACK_EXTERNAL_MODULE_core_promise__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/logger/api.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/logger/api.js":
/*!***************************!*\
  !*** ./src/logger/api.js ***!
  \***************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/format */ "core/format");
/* harmony import */ var core_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/promise */ "core/promise");
/* harmony import */ var core_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_promise__WEBPACK_IMPORTED_MODULE_2__);
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
 * Logger API, highly inspired and mostly compatible from https://github.com/trentm/node-bunyan
 *
 * @example
 * var logger = loggerFactory('component');
 * logger.info('Message');
 * logger.debug('Formated %s', 'message');
 * logger.trace({ anotherField : true}, 'hello');
 * logger.error(new Error('Something went wrong'));
 *
 * var childLogger = logger.child({ type : 'sub-component'});
 * childLogger.warn('oops');
 *
 *
 * @author Bertrand Chevrier <bertrand@taotesting.com>
 */





    'use strict';

    /**
     * The default level
     */
    var defaultLevel = 'info';

    var levels = {
        fatal : 60, // The service/app is going to stop or become unusable now. An operator should definitely look into this soon.
        error : 50, // Fatal for a particular request, but the service/app continues servicing other requests. An operator should look at this soon(ish).
        warn  : 40, // A note on something that should probably be looked at by an operator eventually.
        info  : 30, // Detail on regular operation.
        debug : 20, // Anything else, i.e. too verbose to be included in "info" level.
        trace : 10  // Logging from external libraries used by your app or very detailed application logging.
    };

    /**
     * Major version of the node-bunyan package (for compat)
     */
    var bunyanVersion = 0;

    /**
     * Where messages dwells
     */
    var logQueue = [];

    /**
     * Get the actual level as a string,
     * fallback to the default level.
     * @param {String|Number} [level] - the level
     * @returns {String} the level
     */
    var getLevel = function getLevel(level){
        if(typeof level === 'undefined' || (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(level) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(levels, level)) ){
            return defaultLevel;
        }
        if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(level)){
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.findKey(levels, function(l){
                return l === level;
            }) || defaultLevel;
        }
        return level;
    };

    /**
     * Get the actual level as a number,
     * fallback to the default level.
     * @param {String|Number} [level] - the level
     * @returns {Number} the level
     */
    var getLevelNum = function getLevelNum(level){
        if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(level) && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(levels, level)){
            return levels[level];
        }
        if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(level) && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.contains(levels, level)){
            return level;
        }
        return levels[defaultLevel];
    };

    /**
     * Check whether the given level is above the minimum level threshold
     * @param {String|Number} minlevel- the minimum level
     * @param {String|Number} [level] - the level to check
     * @returns {Boolean}
     */
    var checkMinLevel = function checkMinLevel(minLevel, level) {
        return getLevelNum(level) >= getLevelNum(minLevel);
    };

    /**
     * Creates a logger instance
     *
     * @param {String} name - each logger instance MUST have a name
     * @param {String|Number} [minLevel] - the minimum logging level
     * @param {Object} [fields] - fields to add to all records
     *
     * @returns {logger} a new logger instance
     */
    var loggerFactory = function loggerFactory(name, minLevel, fields){

        var baseRecord;
        var logger;

        if(!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(name) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(name)){
            throw new TypeError('A logger needs a name');
        }

        if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(minLevel) && typeof field === 'undefined'){
            fields = minLevel;
            minLevel = defaultLevel;
        }

        baseRecord = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(fields || {}, {
            name     : name,
            pid      : 1,    // only for compat
            hostname : navigator.userAgent
        });

        /**
         * Exposes a log method and one by log level, like logger.trace()
         *
         * @typedef logger
         */
        logger = {


            /**
             * Log messages by delegating to the provider
             *
             * @param {String|Number} level - the log level
             * @param {Object} [recordFields] - fields to add to the log record
             * @param {String|Error} message - the message to log
             * @param {...String} [rest] - rest parameters if the message is formatted
             * @returns {logger} chains
             */
            log : function log(level, recordFields, message){

                var record;
                var err;
                var rest = [];
                var time = new Date().toISOString();

                //without providers or not the level, we don't log.
                if(loggerFactory.providers === false || !checkMinLevel(minLevel || defaultLevel, level)){
                    return;
                }

                if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(recordFields) || recordFields instanceof Error){
                    message = recordFields;
                    recordFields = {};
                    rest = [].slice.call(arguments, 2);
                } else {
                    rest = [].slice.call(arguments, 3);
                }

                record = {
                    level : getLevel(level),
                    v     : bunyanVersion,
                    time  : time
                };

                if(checkMinLevel(levels.error, level) || message instanceof Error){
                    if (message instanceof Error) {
                        err = message;
                    } else {
                        message = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(message) ? JSON.stringify(message) : message;
                        err = new Error(message);
                    }

                    record.msg = err.message;
                    record.err = err;

                } else {
                    record.msg = core_format__WEBPACK_IMPORTED_MODULE_1___default.a.apply(null, [message].concat(rest));
                }

                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.merge(record, baseRecord, recordFields);

                logQueue.push(record);

                loggerFactory.flush();

                return this;
            },

            /**
             * Get/set the default level of the logger
             * @param {String|Number} [level] - set the default level
             * @returns {String|logger} the default level as a getter or chains as a setter
             */
            level : function(value){
                if(typeof value !== 'undefined'){
                    //update the partial function
                    minLevel = getLevelNum(value);
                    return this;
                }
                return getLevel(minLevel);
            },

            /**
             * Fork the current logger to create a child logger :
             * same config + child fields
             *
             * @param {Object} [childFields] - specialized child fields
             * @return {logger} the child logger
             */
            child : function child(childFields){
                return loggerFactory(name, minLevel, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(childFields, baseRecord));
            }
        };

        //augment the logger by each level
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(levels, function reduceLogLevel(target, level, levelName){
            target[levelName] = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.partial(logger.log, level);
            return target;
        }, logger);
    };

    /**
     * Exposes the levels
     * @type {Object}
     */
    loggerFactory.levels = levels;

    /**
     * The list of providers bound to the logger.
     * @type {Boolean|Array} false means we don't log, array even empty we keep the logs
     */
    loggerFactory.providers = false;

    /**
     * Load providers from AMD modules
     * @param {Object} providerConfigs - provider's modules to load and register
     * @returns {Promise} resolves once modules are registered
     */
    loggerFactory.load = function load(providerConfigs){
        var self = this;
        var modules = [];
        this.providers = [];

        return new core_promise__WEBPACK_IMPORTED_MODULE_2___default.a( function(resolve, reject) {
            //we can load the loggers dynamically
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(providerConfigs, function (providerConfig, providerName) {
                modules.push(providerName);
            });
            console.log('api load', modules);
            var z = 'require';
            var x = global[z];
            x(modules, function(){
                var loadedProviders = [].slice.call(arguments);
                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(loadedProviders, function (provider, moduleKey){
                    try {
                        self.register(provider, providerConfigs[modules[moduleKey]]);
                    } catch(err){
                        reject(err);
                    }
                });

                //flush messages that arrived before the providers are there
                self.flush();

                resolve();

            }, reject);
            resolve();
        });
    };

    /**
     * A logger provider provides with a way to log
     * @typedef {Object} loggerProvider
     * @property {Function} log - called with the message in parameter
     * @param {Object} providerConfig - provider's config
     * @throws TypeError
     */
    loggerFactory.register = function register(provider, providerConfig){

        if(!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(provider) || !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(provider.log)){
            throw new TypeError('A log provider is an object with a log method');
        }
        //propogate checkMinLevel function
        provider.checkMinLevel = checkMinLevel;
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(provider.setConfig)) {
            provider.setConfig(providerConfig);
        }
        this.providers = this.providers || [];
        this.providers.push(provider);
    };


    /**
     * Flush the messages queue into the providers
     */
    loggerFactory.flush = function flush(){
        if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(this.providers) && this.providers.length > 0){
            lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(logQueue, function(message){
                //forward to the providers
                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(loggerFactory.providers, function(provider){
                    provider.log.call(provider, message);
                });
            });
            //clear the queue
            logQueue = [];
        }
    };

    /**
     * Change the default level for all loggers
     * @param {String|Number} [level] - set the default level
     * @returns {String} the defined level
     */
    loggerFactory.setDefaultLevel = function setDefaultLevel(level){
        defaultLevel = getLevel(level);
        return defaultLevel;
    };

    /* harmony default export */ __webpack_exports__["default"] = (loggerFactory);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "core/format":
/*!******************************!*\
  !*** external "core/format" ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_format__;

/***/ }),

/***/ "core/promise":
/*!*******************************!*\
  !*** external "core/promise" ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_promise__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ })["default"];
});