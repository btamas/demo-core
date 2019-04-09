(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core/logger"), require("core/promise"), require("lib/uuid"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["core/logger", "core/promise", "lib/uuid", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["eventifier"] = factory(require("core/logger"), require("core/promise"), require("lib/uuid"), require("lodash"));
	else
		root["eventifier"] = factory(root["core/logger"], root["core/promise"], root["lib/uuid"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_core_logger__, __WEBPACK_EXTERNAL_MODULE_core_promise__, __WEBPACK_EXTERNAL_MODULE_lib_uuid__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/eventifier.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/eventifier.js":
/*!***************************!*\
  !*** ./src/eventifier.js ***!
  \***************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/promise */ "core/promise");
/* harmony import */ var core_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/uuid */ "lib/uuid");
/* harmony import */ var lib_uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lib_uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/logger */ "core/logger");
/* harmony import */ var core_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_logger__WEBPACK_IMPORTED_MODULE_3__);
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
 * Copyright (c) 2015 (original work) Open Assessment Technologies SA;
 *
 */

/**
 * Make an object an event emitter.
 *
 * @example simple usage
 * var emitter = eventifier({});
 * emitter.on('hello', function(who){
 *      console.log('Hello ' + who);
 * });
 * emitter.trigger('hello', 'world');
 *
 * @example namespace usage
 * var emitter = eventifier({});
 * emitter.on('hello', function(who){
 *      console.log('Hello ' + who);
 * });
 * emitter.on('hello.world', function(who){
 *      console.log('Hello World ' + who);
 * });
 * emitter.on('hello.*', function(who){
 *      console.log('Hello all ' + who);
 * });
 * // notify all listeners
 * emitter.trigger('hello', 'world');
 * // notify only hello.world and hello.* listeners
 * emitter.trigger('hello.world', 'world');
 *
 * @example stopping synchronous events
 * emitter.before('hello', function(e, who){
 *      if(!who || who === 'nobody'){
 *          console.log('I am not saying Hello to nobody');
 *          emitter.stopEvent('hello');
 *          // alternative (in .before() only, deprecated)
 *          return false;
 *      }
 * });
 *
 * @example stopping asynchronous events
 * emitter.before('hello', function(e, who){
 *
 *      // in before handlers, you can know about the event context
 *      var eventName = e.name;
 *      var eventNamespace = e.namespace;
 *      console.log('Received a ' + eventName + '.' + eventNamespace + ' event');
 *
 *      // I am in an asynchronous context
 *      return new Promise(function(resolve, reject) {
 *          // ajax call
 *          fetch('do/I/know?who='+who).then(function(yes) {
 *              if (yes) {
 *                  console.log('I know', who);
 *                  resolve();
 *              } else {
 *                  console.log('I don't talk to stranger');
 *                  reject();
 *                  // alternative:
 *                  emitter.stopEvent('hello');
 *              }
 *          }).catch(function(err){
 *              console.log('System failure, I should quit now');
 *              reject(err);
 *              // alternative:
 *              emitter.stopEvent('hello');
 *          });
 *      });
 * });
 *
 * @author Bertrand Chevrier <bertrand@taotesting.com>
 */





    'use strict';

    /**
     * All events have a namespace, this one is the default
     */
    var defaultNs = '@';

    /**
     * Namespace that targets all event
     */
    var globalNs = '*';

    /**
     * Create a logger
     */
    var eventifierLogger = core_logger__WEBPACK_IMPORTED_MODULE_3___default()('core/eventifier');

    /**
     * Get the list of events from an eventName string (ie, separated by spaces)
     * @param {String} eventNames - the event strings
     * @returns {String[]} the event list (no empty, no duplicate)
     */
    function getEventNames(eventNames){
        if(!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(eventNames) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(eventNames)){
            return [];
        }
        return lodash__WEBPACK_IMPORTED_MODULE_0___default()(eventNames.split(/\s/g)).compact().uniq().value();
    }

    /**
     * Get the name part of an event name: the 'foo' of 'foo.bar'
     * @param {String} eventName - the name of the event
     * @returns {String} the name part
     */
    function getName(eventName){
        if(eventName.indexOf('.') > -1){
            return eventName.substr(0, eventName.indexOf('.'));
        }
        return eventName;
    }

    /**
     * Get the namespace part of an event name: the 'bar' of 'foo.bar'
     * @param {String} eventName - the name of the event
     * @returns {String} the namespace, that defaults to defaultNs
     */
    function getNamespace(eventName){
        if(eventName.indexOf('.') > -1){
            return eventName.substr(eventName.indexOf('.') + 1);
        }
        return defaultNs;
    }

    /**
     * Creates a new EventHandler object structure
     * @returns {Object} the handler structure
     */
    function getHandlerObject(){
        return {
            before : [],
            between: [],
            after  : []
        };
    }


    /**
     * Makes the target an event emitter by delegating calls to the event API.
     * @param {Object} [target = {}] - the target object, a new plain object is created when omited.
     * @returns {Object} the target for conveniance
     */
    function eventifier(target){
        var targetName;
        var logger;
        var stoppedEvents;

        //it stores all the handlers under ns/name/[handlers]
        var eventHandlers  = {};

        /**
         * Get the handlers for an event type
         * @param {String} eventName - the event name, namespace included
         * @param {String} [type = 'between'] - the type of event in before, between and after
         * @returns {Function[]} the handlers
         */
        var getHandlers = function getHandlers(eventName, type){
            var name = getName(eventName);
            var ns = getNamespace(eventName);

            type = type || 'between';
            eventHandlers[ns] = eventHandlers[ns] || {};
            eventHandlers[ns][name] = eventHandlers[ns][name] || getHandlerObject();
            return eventHandlers[ns][name][type];
        };

        /**
         * The API itself is just a placeholder, all methods will be delegated to a target.
         */
        var eventApi = {

            /**
             * Attach an handler to an event.
             * Calling `on` with the same eventName multiple times add callbacks: they
             * will all be executed.
             *
             * @example target.on('foo', function(bar){ console.log('Cool ' + bar) } );
             *
             * @this the target
             * @param {String} eventNames - the name of the event, or multiple events separated by a space
             * @param {Function} handler - the callback to run once the event is triggered
             * @returns {Object} the target object
             */
            on : function on(eventNames, handler){
                if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(handler)){
                    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(getEventNames(eventNames), function(eventName){
                        getHandlers(eventName).push(handler);
                    });
                }
                return this;
            },

            /**
             * Remove ALL handlers for an event.
             *
             * @example remove ALL
             * target.off('foo');
             *
             * @example remove targeted namespace
             * target.off('foo.bar');
             *
             * @example remove all handlers by namespace
             * target.off('.bar');
             *
             * @example remove all namespaces, keep non namespace
             * target.off('.*');
             *
             * @this the target
             * @param {String} eventNames - the name of the event, or multiple events separated by a space
             * @returns {Object} the target object
             */
            off : function off(eventNames){

                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(getEventNames(eventNames), function(eventName){

                    var name = getName(eventName);
                    var ns = getNamespace(eventName);
                    var offNamespaces;

                    if(ns && !name){
                        if (ns === globalNs) {
                            offNamespaces = {};
                            offNamespaces[defaultNs] = eventHandlers[defaultNs];
                            eventHandlers = offNamespaces;
                        } else {
                            //off the complete namespace
                            eventHandlers[ns] = {};
                        }
                    } else {
                        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(eventHandlers, function(nsHandlers, namespace){
                            if(nsHandlers[name] && (ns === defaultNs || ns === namespace)){
                                nsHandlers[name] = getHandlerObject();
                            }
                        });
                    }
                });
                return this;
            },

            /**
             * Remove ALL registered handlers
             *
             * @example remove ALL
             * target.removeAllListeners();
             *
             * @this the target
             * @returns {Object} the target object
             */
            removeAllListeners : function removeAllListeners(){
                // full erase
                eventHandlers  = {};
                return this;
            },

            /**
             * Trigger an event.
             *
             * @example target.trigger('foo', 'Awesome');
             *
             * @this the target
             * @param {String} eventNames - the name of the event to trigger, or multiple events separated by a space
             * @returns {Object} the target object
             */
            trigger : function trigger(eventNames){
                var self = this;
                var args = [].slice.call(arguments, 1);

                stoppedEvents = {};

                lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(getEventNames(eventNames), function(eventName){
                    var ns = getNamespace(eventName);
                    var name = getName(eventName);

                    //check which ns needs to be executed and then merge the handlers to be executed
                    var mergedHandlers = lodash__WEBPACK_IMPORTED_MODULE_0___default()(eventHandlers)
                        .filter(function(nsHandlers, namespace){
                            return nsHandlers[name] && (ns === defaultNs || ns === namespace || namespace === globalNs);
                        })
                        .reduce(function(acc, nsHandlers){
                            acc.before  = acc.before.concat(nsHandlers[name].before);
                            acc.between = acc.between.concat(nsHandlers[name].between);
                            acc.after   = acc.after.concat(nsHandlers[name].after);
                            return acc;
                        }, getHandlerObject());

                    logger.trace({event : eventName, args : args}, 'trigger %s', eventName);

                    if(mergedHandlers){
                        triggerAllHandlers(mergedHandlers, name, ns);
                    }
                });

                function triggerAllHandlers(allHandlers, name, ns) {
                    var event = {
                        name: name,
                        namespace: ns
                    };

                    if (allHandlers.before.length) {
                        triggerBefore(allHandlers.before, event)
                            .then(function() {
                                triggerBetween(allHandlers, event);
                            })
                            .catch(function(err) {
                                logHandlerStop('before', event, err);
                            });
                    } else {

                        triggerBetween(allHandlers, event);
                    }
                }

                function triggerBefore(handlers, event) {
                    var pHandlers,
                        beforeArgs = args.slice();

                    // .before() handlers will get a special 'event' object as their first parameter
                    beforeArgs.unshift(event);

                    pHandlers = handlers.map(function(handler) {
                        // .before() handlers use to return false to cancel the call stack
                        // to maintain backward compatibility, we treat this case as a rejected Promise
                        var value = (shouldStop(event.name)) ? false : handler.apply(self, beforeArgs);
                        return (value === false) ? core_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject() : value;
                    });

                    return core_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(pHandlers);
                }

                function triggerBetween(allHandlers, event) {
                    if (shouldStop(event.name)) {
                        logHandlerStop('before', event); // .stopEvent() has been called in an async .before() callback
                    } else {
                        // trigger the event handlers
                        triggerHandlers(allHandlers.between, event)
                            .then(function() {
                                triggerAfter(allHandlers.after, event);
                            })
                            .catch(function(err) {
                                logHandlerStop('on', event, err);
                            });
                    }
                }

                function triggerAfter(handlers, event) {
                    if (shouldStop(event.name)) {
                        logHandlerStop('on', event); // .stopEvent() has been called in an async .on() callback
                    } else {
                        triggerHandlers(handlers, event)
                            .then(function() {
                                if (shouldStop(event.name)) {
                                    logHandlerStop('after', event); // .stopEvent() has been called in an async .after() callback
                                }
                            })
                            .catch(function(err) {
                                logHandlerStop('after', event, err);
                            });
                    }
                }

                function triggerHandlers(handlers, event) {
                    var pHandlers;
                    pHandlers = handlers.map(function (handler) {
                        return (shouldStop(event.name)) ? core_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject() : handler.apply(self, args);
                    });
                    return core_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(pHandlers);
                }

                function logHandlerStop(stoppedIn, event, err) {
                    if(err instanceof Error){
                        logger.error(err);
                    }
                    logger.trace({ err: err, event: event.name, stoppedIn: stoppedIn }, event.name + ' handlers stopped');
                }

                function shouldStop(name) {
                    return stoppedEvents[name];
                }

                return this;
            },

            /**
             * Register a callback that is executed before the given event name
             * Provides an opportunity to cancel the execution of the event if one of the returned value is false
             *
             * @this the target
             * @param {String} eventNames - the name of the event, or multiple events separated by a space
             * @param {Function} handler - the callback to run once the event is triggered
             * @returns {Object} the target object
             */
            before : function before(eventNames, handler){
                if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(handler)) {
                    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(getEventNames(eventNames), function(eventName){
                        getHandlers(eventName, 'before').push(handler);
                    });
                }
                return this;
            },

            /**
             * Register a callback that is executed after the given event name
             * The handlers will all be executed, no matter what
             *
             * @this the target
             * @param {String} eventNames - the name of the event, or multiple events separated by a space
             * @param {Function} handler - the callback to run once the event is triggered
             * @returns {Object} the target object
             */
            after : function after(eventNames, handler){
                if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(handler)) {
                    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(getEventNames(eventNames), function(eventName){
                        getHandlers(eventName, 'after').push(handler);
                    });
                }
                return this;
            },

            /**
             * If triggered into an sync handler, this immediately cancels the execution of all following handlers
             * regardless of their category
             * If triggered asynchronously, this will only cancel the next category of handlers:
             * - .on() and .after() if triggered during a .before() handler
             * - .after() if triggered during a .on() handler
             * - nothing if triggered during a .after() handler
             * In an async context, you can also reject a Promise with the same results
             *
             * @param {string} name - of the event to stop
             */
            stopEvent : function stopEvent(name) {
                if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(name) && ! lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(name.trim())) {
                    stoppedEvents[name.trim()] = true;
                }
            },

            /**
             * Spread events to another eventifier object.
             * So when an event is triggered on the current target,
             * it get's triggered on the destination too.
             *
             * Be careful, the forward will be triggered only if the event reach the `on` steps
             * (it can be canceled by a before).
             *
             * @param {eventifier} destination - the destination emitter
             * @param {String|String[]} eventNames - the list of events to forward
             * @returns {Object} target - chains
             */
            spread : function spread(destination, eventNames){
                var self = this;
                if(destination && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(destination.trigger)){
                    if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(eventNames)){
                        eventNames = getEventNames(eventNames);
                    }
                    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(eventNames, function(eventName) {
                        self.on(eventName, function forwardEventTo(){
                            var args = [eventName].concat([].slice.call(arguments));

                            destination.trigger.apply(destination, args);
                        });
                    });
                }
                return this;
            }
        };

        target = target || {};

        //try to get something that looks like a name, an id or generate one only for logging purposes
        targetName = target.name || target.id || target.serial || lib_uuid__WEBPACK_IMPORTED_MODULE_2___default()(6);

        //create a child logger per eventifier
        logger = eventifierLogger.child({ target : targetName });

        lodash__WEBPACK_IMPORTED_MODULE_0___default()(eventApi).functions().forEach(function(method){
            if(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(target[method])){
                eventifierLogger.warn('The target object has already a method named ' + method, target);
            }
            target[method] = function delegate(){
                var args =  [].slice.call(arguments);
                return eventApi[method].apply(target, args);
            };
        });

        return target;
    }

    /* harmony default export */ __webpack_exports__["default"] = (eventifier);


/***/ }),

/***/ "core/logger":
/*!******************************!*\
  !*** external "core/logger" ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_logger__;

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

/***/ "lib/uuid":
/*!***************************!*\
  !*** external "lib/uuid" ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lib_uuid__;

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