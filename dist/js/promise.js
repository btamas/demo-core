(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lib/polyfill/es6-promise')) :
    typeof define === 'function' && define.amd ? define(['lib/polyfill/es6-promise'], factory) :
    (global = global || self, global.promise = factory(global.es6Promise));
}(this, function (es6Promise) { 'use strict';

    es6Promise = es6Promise && es6Promise.hasOwnProperty('default') ? es6Promise['default'] : es6Promise;

    /**
         * @exports core/promise
         */
        var promise = window.Promise || es6Promise.Promise;

    return promise;

}));
