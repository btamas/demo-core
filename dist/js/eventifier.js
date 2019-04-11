(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('lib/polyfill/es6-promise'), require('lib/uuid'), require('module')) :
    typeof define === 'function' && define.amd ? define(['lodash', 'lib/polyfill/es6-promise', 'lib/uuid', 'module'], factory) :
    (global = global || self, global.eventifier = factory(global._, global.es6Promise, global.uuid, global.module));
}(this, function (_, es6Promise, uuid, module) { 'use strict';

    _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
    es6Promise = es6Promise && es6Promise.hasOwnProperty('default') ? es6Promise['default'] : es6Promise;
    uuid = uuid && uuid.hasOwnProperty('default') ? uuid['default'] : uuid;
    module = module && module.hasOwnProperty('default') ? module['default'] : module;

    /**
         * @exports core/promise
         */
        var Promise = window.Promise || es6Promise.Promise;

    /**
     * @author Bertrand Chevrier <bertrand@taotesting.com>
     */

        var pattern = /(%[sdj])/g;

        /**
         * Enables you to format strings/message, using the pattern:
         *  - %s : string
         *  - %d : number
         *  - %j : json
         *
         * @example format('Resize %s to %d%', 'width', 100); //returns Resize width to 100%
         * @exports core/format
         * @param {String} message - the message to format
         * @param {...String|Number|Object} [replacements] -  the replacements arguments in the order defined in the message
         * @returns {String} the formatted message
         */
        function format(message){
            var replacements = Array.prototype.slice.call(arguments, 1);
            return _.reduce(
                message.match(pattern),
                function(acc, match, index){
                    var replacement = '';
                    if(undefined !== replacements[index]){
                         switch(match){
                            case '%d': replacement = Number(replacements[index]); break;
                            case '%j': try{
                                    replacement = JSON.stringify(replacements[index]).replace(/"/g, '');
                                } catch(e){}
                                break;
                            default : replacement = replacements[index]; break;
                         }
                         message = message.replace(match, replacement);
                    }
                    return message;
                },
                message
            );
        }

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
            if(typeof level === 'undefined' || (_.isString(level) && !_.has(levels, level)) ){
                return defaultLevel;
            }
            if(_.isNumber(level)){
                return _.findKey(levels, function(l){
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
            if(_.isString(level) && _.has(levels, level)){
                return levels[level];
            }
            if(_.isNumber(level) && _.contains(levels, level)){
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

            if(!_.isString(name) || _.isEmpty(name)){
                throw new TypeError('A logger needs a name');
            }

            if(_.isPlainObject(minLevel) && typeof field === 'undefined'){
                fields = minLevel;
                minLevel = defaultLevel;
            }

            baseRecord = _.defaults(fields || {}, {
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

                    if(_.isString(recordFields) || recordFields instanceof Error){
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
                            message = _.isObject(message) ? JSON.stringify(message) : message;
                            err = new Error(message);
                        }

                        record.msg = err.message;
                        record.err = err;

                    } else {
                        record.msg = format.apply(null, [message].concat(rest));
                    }

                    _.merge(record, baseRecord, recordFields);

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
                    return loggerFactory(name, minLevel, _.defaults(childFields, baseRecord));
                }
            };

            //augment the logger by each level
            return _.reduce(levels, function reduceLogLevel(target, level, levelName){
                target[levelName] = _.partial(logger.log, level);
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
            this.providers = [];

            var asyncModuleLoad = function(moduleName) {
                try {
                    return System.import(moduleName).then(function(loadedModule) {
                        return loadedModule.default || loadedModule;
                    });
                } catch(e) {
                    return new Promise(function(resolve, reject) {
                        require([moduleName], resolve, reject);
                    });
                }
            };

            return Promise.all(
                Object.keys(providerConfigs).map(function(providerName) {
                    return asyncModuleLoad(providerName).then(function(loadedModule) {
                        self.register(loadedModule, providerConfigs[providerName]);
                        self.flush();
                    });
                })
            );

            // return new Promise( function(resolve, reject) {
            //     //we can load the loggers dynamically
            //     _.forEach(providerConfigs, function (providerConfig, providerName) {
            //         modules.push(providerName);
            //     });
            //     require(modules, function(){
            //         var loadedProviders = [].slice.call(arguments);
            //         _.forEach(loadedProviders, function (provider, moduleKey){
            //             try {
            //                 self.register(provider, providerConfigs[modules[moduleKey]]);
            //             } catch(err){
            //                 reject(err);
            //             }
            //         });

            //         //flush messages that arrived before the providers are there
            //         self.flush();

            //         resolve();

            //     }, reject);
            //     resolve();
            // });
        };

        /**
         * A logger provider provides with a way to log
         * @typedef {Object} loggerProvider
         * @property {Function} log - called with the message in parameter
         * @param {Object} providerConfig - provider's config
         * @throws TypeError
         */
        loggerFactory.register = function register(provider, providerConfig){

            if(!_.isPlainObject(provider) || !_.isFunction(provider.log)){
                throw new TypeError('A log provider is an object with a log method');
            }
            //propogate checkMinLevel function
            provider.checkMinLevel = checkMinLevel;
            if (_.isFunction(provider.setConfig)) {
                provider.setConfig(providerConfig);
            }
            this.providers = this.providers || [];
            this.providers.push(provider);
        };


        /**
         * Flush the messages queue into the providers
         */
        loggerFactory.flush = function flush(){
            if(_.isArray(this.providers) && this.providers.length > 0){
                _.forEach(logQueue, function(message){
                    //forward to the providers
                    _.forEach(loggerFactory.providers, function(provider){
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
         * The default configuration if nothing
         * is found on the module config
         */
        var defaultConfig = {
            level : loggerFactory.levels.warn,
            loggers : {
                'core/logger/console' : {
                    'level' : 'warn'
                }
            }
        };

        //the logger providers are configured through the AMD module config
        var config = _.defaults(module.config() || {}, defaultConfig);
        var logger = loggerFactory('core/logger');

        loggerFactory.setDefaultLevel(config.level);
        loggerFactory.load(config.loggers);

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
            return loggerFactory.setDefaultLevel(level);
        };

        //exposes the API
        window.loggerFactory = loggerFactory;

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
        var eventifierLogger = loggerFactory('core/eventifier');

        /**
         * Get the list of events from an eventName string (ie, separated by spaces)
         * @param {String} eventNames - the event strings
         * @returns {String[]} the event list (no empty, no duplicate)
         */
        function getEventNames(eventNames){
            if(!_.isString(eventNames) || _.isEmpty(eventNames)){
                return [];
            }
            return _(eventNames.split(/\s/g)).compact().uniq().value();
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
                    if(_.isFunction(handler)){
                        _.forEach(getEventNames(eventNames), function(eventName){
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

                    _.forEach(getEventNames(eventNames), function(eventName){

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
                            _.forEach(eventHandlers, function(nsHandlers, namespace){
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

                    _.forEach(getEventNames(eventNames), function(eventName){
                        var ns = getNamespace(eventName);
                        var name = getName(eventName);

                        //check which ns needs to be executed and then merge the handlers to be executed
                        var mergedHandlers = _(eventHandlers)
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
                            return (value === false) ? Promise.reject() : value;
                        });

                        return Promise.all(pHandlers);
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
                            return (shouldStop(event.name)) ? Promise.reject() : handler.apply(self, args);
                        });
                        return Promise.all(pHandlers);
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
                    if(_.isFunction(handler)) {
                        _.forEach(getEventNames(eventNames), function(eventName){
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
                    if(_.isFunction(handler)) {
                        _.forEach(getEventNames(eventNames), function(eventName){
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
                    if (_.isString(name) && ! _.isEmpty(name.trim())) {
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
                    if(destination && _.isFunction(destination.trigger)){
                        if(_.isString(eventNames)){
                            eventNames = getEventNames(eventNames);
                        }
                        _.forEach(eventNames, function(eventName) {
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
            targetName = target.name || target.id || target.serial || uuid(6);

            //create a child logger per eventifier
            logger = eventifierLogger.child({ target : targetName });

            _(eventApi).functions().forEach(function(method){
                if(_.isFunction(target[method])){
                    eventifierLogger.warn('The target object has already a method named ' + method, target);
                }
                target[method] = function delegate(){
                    var args =  [].slice.call(arguments);
                    return eventApi[method].apply(target, args);
                };
            });

            return target;
        }

    return eventifier;

}));
