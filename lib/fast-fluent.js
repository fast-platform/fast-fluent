(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fast-fluent", [], factory);
	else if(typeof exports === 'object')
		exports["fast-fluent"] = factory();
	else
		root["fast-fluent"] = factory();
})(this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var compose = __webpack_require__(2);
var Shortcut = __webpack_require__(16);
var isStamp = __webpack_require__(6);
var isString = __webpack_require__(17);
var isObject = __webpack_require__(1);
var isFunction = __webpack_require__(3);
var merge = __webpack_require__(8);
var assign = __webpack_require__(7);

var concat = Array.prototype.concat;
function extractFunctions() {
  var fns = concat.apply([], arguments).filter(isFunction);
  return fns.length === 0 ? undefined : fns;
}

function standardiseDescriptor(descr) {
  if (!isObject(descr)) return descr;

  var methods = descr.methods;
  var properties = descr.properties;
  var props = descr.props;
  var initializers = descr.initializers;
  var init = descr.init;
  var composers = descr.composers;
  var deepProperties = descr.deepProperties;
  var deepProps = descr.deepProps;
  var pd = descr.propertyDescriptors;
  var staticProperties = descr.staticProperties;
  var statics = descr.statics;
  var staticDeepProperties = descr.staticDeepProperties;
  var deepStatics = descr.deepStatics;
  var configuration = descr.configuration;
  var conf = descr.conf;
  var deepConfiguration = descr.deepConfiguration;
  var deepConf = descr.deepConf;

  var p = isObject(props) || isObject(properties) ?
    assign({}, props, properties) : undefined;

  var dp = isObject(deepProps) ? merge({}, deepProps) : undefined;
  dp = isObject(deepProperties) ? merge(dp, deepProperties) : dp;

  var sp = isObject(statics) || isObject(staticProperties) ?
    assign({}, statics, staticProperties) : undefined;

  var sdp = isObject(deepStatics) ? merge({}, deepStatics) : undefined;
  sdp = isObject(staticDeepProperties) ? merge(sdp, staticDeepProperties) : sdp;

  var spd = descr.staticPropertyDescriptors;
  if (isString(descr.name)) spd = assign({}, spd || {}, { name: { value: descr.name } });

  var c = isObject(conf) || isObject(configuration) ?
    assign({}, conf, configuration) : undefined;

  var dc = isObject(deepConf) ? merge({}, deepConf) : undefined;
  dc = isObject(deepConfiguration) ? merge(dc, deepConfiguration) : dc;

  var ii = extractFunctions(init, initializers);

  var cc = extractFunctions(composers);

  var descriptor = {};
  if (methods) descriptor.methods = methods;
  if (p) descriptor.properties = p;
  if (ii) descriptor.initializers = ii;
  if (cc) descriptor.composers = cc;
  if (dp) descriptor.deepProperties = dp;
  if (sp) descriptor.staticProperties = sp;
  if (sdp) descriptor.staticDeepProperties = sdp;
  if (pd) descriptor.propertyDescriptors = pd;
  if (spd) descriptor.staticPropertyDescriptors = spd;
  if (c) descriptor.configuration = c;
  if (dc) descriptor.deepConfiguration = dc;

  return descriptor;
}

function stampit() {
  'use strict'; // to make sure `this` is not pointing to `global` or `window`
  var length = arguments.length, args = [];
  for (var i = 0; i < length; i += 1) {
    var arg = arguments[i];
    args.push(isStamp(arg) ? arg : standardiseDescriptor(arg));
  }

  return compose.apply(this || baseStampit, args); // jshint ignore:line
}

var baseStampit = Shortcut.compose({
  staticProperties: {
    create: function () { return this.apply(this, arguments); },
    compose: stampit // infecting
  }
});

var shortcuts = Shortcut.compose.staticProperties;
for (var prop in shortcuts) stampit[prop] = shortcuts[prop].bind(baseStampit);
stampit.compose = stampit.bind();

module.exports = stampit;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function isObject(arg) {
  var type = typeof arg;
  return Boolean(arg) && (type === 'object' || type === 'function');
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5);
var isFunction = __webpack_require__(3);
var isObject = __webpack_require__(1);
var isStamp = __webpack_require__(6);
var isComposable = __webpack_require__(14);

var assign = __webpack_require__(7);
var merge = __webpack_require__(8);

var slice = Array.prototype.slice;

/**
 * Creates new factory instance.
 * @returns {Function} The new factory function.
 */
function createFactory() {
  return function Stamp(options) {
    var descriptor = Stamp.compose || {};
    // Next line was optimized for most JS VMs. Please, be careful here!
    var obj = {__proto__: descriptor.methods}; // jshint ignore:line

    merge(obj, descriptor.deepProperties);
    assign(obj, descriptor.properties);
    Object.defineProperties(obj, descriptor.propertyDescriptors || {});

    if (!descriptor.initializers || descriptor.initializers.length === 0) return obj;

    if (options === undefined) options = {};
    var inits = descriptor.initializers;
    var length = inits.length;
    for (var i = 0; i < length; i += 1) {
      var initializer = inits[i];
      if (isFunction(initializer)) {
        var returnedValue = initializer.call(obj, options,
          {instance: obj, stamp: Stamp, args: slice.apply(arguments)});
        obj = returnedValue === undefined ? obj : returnedValue;
      }
    }

    return obj;
  };
}

/**
 * Returns a new stamp given a descriptor and a compose function implementation.
 * @param {Descriptor} [descriptor={}] The information about the object the stamp will be creating.
 * @param {Compose} composeFunction The "compose" function implementation.
 * @returns {Stamp}
 */
function createStamp(descriptor, composeFunction) {
  var Stamp = createFactory();

  if (descriptor.staticDeepProperties) {
    merge(Stamp, descriptor.staticDeepProperties);
  }
  if (descriptor.staticProperties) {
    assign(Stamp, descriptor.staticProperties);
  }
  if (descriptor.staticPropertyDescriptors) {
    Object.defineProperties(Stamp, descriptor.staticPropertyDescriptors);
  }

  var composeImplementation = isFunction(Stamp.compose) ? Stamp.compose : composeFunction;
  Stamp.compose = function _compose() {
    'use strict'; // to make sure `this` is not pointing to `global` or `window`
    return composeImplementation.apply(this, arguments);
  };
  assign(Stamp.compose, descriptor);

  return Stamp;
}

function concatAssignFunctions(dstObject, srcArray, propName) {
  if (!isArray(srcArray)) return;

  var length = srcArray.length;
  var dstArray = dstObject[propName] || [];
  dstObject[propName] = dstArray;
  for (var i = 0; i < length; i += 1) {
    var fn = srcArray[i];
    if (isFunction(fn) && dstArray.indexOf(fn) < 0) {
      dstArray.push(fn);
    }
  }
}


function combineProperties(dstObject, srcObject, propName, action) {
  if (!isObject(srcObject[propName])) return;
  if (!isObject(dstObject[propName])) dstObject[propName] = {};
  action(dstObject[propName], srcObject[propName]);
}

function deepMergeAssign(dstObject, srcObject, propName) {
  combineProperties(dstObject, srcObject, propName, merge);
}
function mergeAssign(dstObject, srcObject, propName) {
  combineProperties(dstObject, srcObject, propName, assign);
}

/**
 * Mutates the dstDescriptor by merging the srcComposable data into it.
 * @param {Descriptor} dstDescriptor The descriptor object to merge into.
 * @param {Composable} [srcComposable] The composable
 * (either descriptor or stamp) to merge data form.
 */
function mergeComposable(dstDescriptor, srcComposable) {
  var srcDescriptor = (srcComposable && srcComposable.compose) || srcComposable;

  mergeAssign(dstDescriptor, srcDescriptor, 'methods');
  mergeAssign(dstDescriptor, srcDescriptor, 'properties');
  deepMergeAssign(dstDescriptor, srcDescriptor, 'deepProperties');
  mergeAssign(dstDescriptor, srcDescriptor, 'propertyDescriptors');
  mergeAssign(dstDescriptor, srcDescriptor, 'staticProperties');
  deepMergeAssign(dstDescriptor, srcDescriptor, 'staticDeepProperties');
  mergeAssign(dstDescriptor, srcDescriptor, 'staticPropertyDescriptors');
  mergeAssign(dstDescriptor, srcDescriptor, 'configuration');
  deepMergeAssign(dstDescriptor, srcDescriptor, 'deepConfiguration');
  concatAssignFunctions(dstDescriptor, srcDescriptor.initializers, 'initializers');
  concatAssignFunctions(dstDescriptor, srcDescriptor.composers, 'composers');
}

/**
 * Given the list of composables (stamp descriptors and stamps) returns
 * a new stamp (composable factory function).
 * @typedef {Function} Compose
 * @param {...(Composable)} [arguments] The list of composables.
 * @returns {Stamp} A new stamp (aka composable factory function)
 */
module.exports = function compose() {
  'use strict'; // to make sure `this` is not pointing to `global` or `window`
  var descriptor = {};
  var composables = [];
  if (isComposable(this)) {
    mergeComposable(descriptor, this);
    composables.push(this);
  }

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (isComposable(arg)) {
      mergeComposable(descriptor, arg);
      composables.push(arg);
    }
  }

  var stamp = createStamp(descriptor, compose);

  var composers = descriptor.composers;
  if (isArray(composers) && composers.length > 0) {
    for (var j = 0; j < composers.length; j += 1) {
      var composer = composers[j];
      var returnedValue = composer({stamp: stamp, composables: composables});
      stamp = isStamp(returnedValue) ? returnedValue : stamp;
    }
  }

  return stamp;
};


/**
 * The Stamp Descriptor
 * @typedef {Function|Object} Descriptor
 * @returns {Stamp} A new stamp based on this Stamp
 * @property {Object} [methods] Methods or other data used as object instances' prototype
 * @property {Array<Function>} [initializers] List of initializers called for each object instance
 * @property {Array<Function>} [composers] List of callbacks called each time a composition happens
 * @property {Object} [properties] Shallow assigned properties of object instances
 * @property {Object} [deepProperties] Deeply merged properties of object instances
 * @property {Object} [staticProperties] Shallow assigned properties of Stamps
 * @property {Object} [staticDeepProperties] Deeply merged properties of Stamps
 * @property {Object} [configuration] Shallow assigned properties of Stamp arbitrary metadata
 * @property {Object} [deepConfiguration] Deeply merged properties of Stamp arbitrary metadata
 * @property {Object} [propertyDescriptors] ES5 Property Descriptors applied to object instances
 * @property {Object} [staticPropertyDescriptors] ES5 Property Descriptors applied to Stamps
 */

/**
 * The Stamp factory function
 * @typedef {Function} Stamp
 * @returns {*} Instantiated object
 * @property {Descriptor} compose - The Stamp descriptor and composition function
 */

/**
 * A composable object - stamp or descriptor
 * @typedef {Stamp|Descriptor} Composable
 */



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function isFunction(arg) {
  return typeof arg === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = Array.isArray;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(3);

module.exports = function isStamp(arg) {
  return isFunction(arg) && isFunction(arg.compose);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = Object.assign;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(15);
var isObject = __webpack_require__(1);
var isArray = __webpack_require__(5);

/**
 * The 'src' argument plays the command role.
 * The returned values is always of the same type as the 'src'.
 * @param dst The object to merge into
 * @param src The object to merge from
 * @returns {*}
 */
function mergeOne(dst, src) {
  if (src === undefined) return dst;

  // According to specification arrays must be concatenated.
  // Also, the '.concat' creates a new array instance. Overrides the 'dst'.
  if (isArray(src)) return (isArray(dst) ? dst : []).concat(src);

  // Now deal with non plain 'src' object. 'src' overrides 'dst'
  // Note that functions are also assigned! We do not deep merge functions.
  if (!isPlainObject(src)) return src;

  // See if 'dst' is allowed to be mutated.
  // If not - it's overridden with a new plain object.
  var returnValue = isObject(dst) ? dst : {};

  var keys = Object.keys(src);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];

    var srcValue = src[key];
    // Do not merge properties with the 'undefined' value.
    if (srcValue !== undefined) {
      var dstValue = returnValue[key];
      // Recursive calls to mergeOne() must allow only plain objects or arrays in dst
      var newDst = isPlainObject(dstValue) || isArray(srcValue) ? dstValue : {};

      // deep merge each property. Recursion!
      returnValue[key] = mergeOne(newDst, srcValue);
    }
  }

  return returnValue;
}

module.exports = function (dst) {
  for (var i = 1; i < arguments.length; i++) {
    dst = mergeOne(dst, arguments[i]);
  }
  return dst;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _it = __webpack_require__(0);

var _it2 = _interopRequireDefault(_it);

var _privatize = __webpack_require__(18);

var _privatize2 = _interopRequireDefault(_privatize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _it2.default)({
  properties: {
    name: 'baseModel',
    config: {
      remote: {
        path: undefined,
        token: undefined,
        pullForm: false
      },
      local: {
        connector: 'loki'
      },
      merge: {
        connector: 'formio-loki'
      }
    }
  },
  methods: {
    /**
     * 
     */
    getModelName: function getModelName() {
      return this.name;
    },

    /**
     * 
     */
    getFluentConfig: function getFluentConfig() {
      var FLUENT = void 0;
      if (typeof window !== 'undefined' && window && window._FLUENT_) {
        FLUENT = window._FLUENT_;
      } else if (global && global._FLUENT_) {
        FLUENT = global._FLUENT_;
      }

      return FLUENT;
    },

    /**
     * 
     * @param {*} connectors 
     * @param {*} type 
     */
    getConnector: function getConnector(connectors, type) {
      if (Array.isArray(connectors)) {
        return this.getConnectorFromArray(connectors, type);
      }

      if (connectors instanceof Object) {
        return connectors;
      }

      return undefined;
    },

    /**
     * 
     * @param {*} connectors 
     * @param {*} type 
     */
    getConnectorFromArray: function getConnectorFromArray(connectors, type) {
      var _this = this;

      // Default case
      if (connectors.length === 1) {
        return connectors[0];
      }

      // If the model assigns specific one
      if (this.config && this.config[type] && this.config[type].connector) {
        var Lcon = connectors.find(function (c) {
          return c.name === _this.config[type].connector;
        });

        if (Lcon instanceof Object) {
          return Lcon;
        }
      }

      var base = connectors.find(function (c) {
        return c.default;
      });

      if (base instanceof Object) {
        return base;
      }

      return undefined;
    },

    /**
     * [remote description]
     * @return {[type]} [description]
     */
    remote: function remote() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$token = _ref.token,
          token = _ref$token === undefined ? undefined : _ref$token,
          _ref$pullForm = _ref.pullForm,
          pullForm = _ref$pullForm === undefined ? undefined : _ref$pullForm;

      var FLUENT = this.getFluentConfig();
      var connectors = FLUENT && FLUENT.connectors && FLUENT.connectors.remote;

      if (!connectors) {
        throw new Error('No remote connector was defined. Please define it using Fluent.config()');
      }

      var remoteConnector = this.getConnector(connectors, 'remote');

      this.config.remote.token = token || this.config.remote.token;

      if (pullForm) {
        this.config.remote.pullForm = pullForm || this.config.remote.pullForm;
      }

      if (remoteConnector) {
        return remoteConnector.connector({
          remoteConnection: this.config.remote,
          connector: remoteConnector
        });
      }

      throw new Error('No default remote connector found. Please assign one as your default in Fluent.config');
    },

    /**
     * [local description]
     * @return {[type]} [description]
     */
    local: function local() {
      var FLUENT = this.getFluentConfig();
      var connectors = FLUENT && FLUENT.connectors && FLUENT.connectors.local;

      if (!connectors) {
        throw new Error('No local connector was defined. Please define it using Fluent.config()');
      }

      var localConnector = this.getConnector(connectors, 'local');

      if (localConnector) {
        return localConnector.connector({ name: this.name, connector: localConnector });
      }

      throw new Error('No default local connector found. Please assign one as your default in Fluent.config');
    },

    /**
    * [local description]
    * @return {[type]} [description]
    */
    merged: function merged() {
      var local = this.local();
      var remote = this.remote();

      var FLUENT = this.getFluentConfig();
      var connectors = FLUENT && FLUENT.connectors && FLUENT.connectors.merge;

      if (!connectors) {
        throw new Error('No merge connector was defined. Please define it using Fluent.config()');
      }

      var mergeConnector = this.getConnector(connectors, 'merge');

      if (mergeConnector) {
        return mergeConnector.connector({ local: local, remote: remote, name: this.name, connector: mergeConnector });
      }

      throw new Error('No default merge connector found. Please assign one as your default in Fluent.config');
    }
  }
}).compose(_privatize2.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _it = __webpack_require__(0);

var _it2 = _interopRequireDefault(_it);

var _utilities = __webpack_require__(11);

var _utilities2 = _interopRequireDefault(_utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = (0, _it2.default)({
  init: function init(data) {
    if (!Array.isArray(data)) {
      throw new Error('Collect method only accepts arrays of data');
    }
    this.data = data;
  },

  properties: {
    data: []
  },
  methods: {
    /**
     * 
     */
    get: function get() {
      return this.data;
    },

    /**
     * Alias for the "get" method
     * @return function
     */
    all: function all() {
      return this.get();
    },

    /**
     * Alias for the "average" method.
     *
     * @param  {String}  path Path of the key
     * @return function
     */
    avg: function avg(path) {
      return this.average(path);
    },

    /**
     * Get the average value of a given key.
     *
     * @param  {String}  path Path of the key
     * @return static
     */
    average: function average() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var data = [].concat(_toConsumableArray(this.data));
      var sum = data.reduce(function (acc, element) {
        var value = element;

        if (element instanceof Object) {
          var extract = _utilities2.default.getFromPath(element, path, undefined);
          if (typeof extract !== 'undefined' && extract.value) {
            value = extract.value;
          }
        }
        return acc + value;
      }, 0);

      try {
        var avg = sum / data.length;
        return avg;
      } catch (e) {
        throw new Error('Division between "' + sum + '" and "' + data.length + '" is not valid.');
      }
    },

    /**
     * Chunks the given array
     *
     * @param {Int} size
     * @return static
     */
    chunks: function chunks(size) {
      var data = [].concat(_toConsumableArray(this.data));
      var results = [];

      while (data.length) {
        results.push(data.splice(0, size));
      }

      this.data = results;
      return this;
    },

    /**
     * 
     */
    collapse: function collapse() {
      var data = [].concat(_toConsumableArray(this.data));
      var results = [];

      data.forEach(function (chunk) {
        if (Array.isArray(chunk)) {
          chunk.forEach(function (element) {
            results.push(element);
          });
        } else {
          results.push(chunk);
        }
      });
      this.data = results;

      return this;
    },
    unChunk: function unChunk() {
      return this.collapse();
    },
    combine: function combine(array) {
      var data = [].concat(_toConsumableArray(this.data));
      var result = void 0;
      data.forEach(function (e, index) {
        if (!(e instanceof Object)) {
          if (!result) {
            result = {};
          }
          result[e] = array[index];
        } else {
          if (!result) {
            result = [];
          }
          result[index] = _extends({}, e, { _value: array[index] });
        }
      });

      this.data = result;
      return this;
    },
    concat: function concat(array) {
      this.data = [].concat(_toConsumableArray(this.data), _toConsumableArray(array));
      return this;
    },
    contains: function contains() {
      var value = void 0;
      var path = void 0;
      var Fx = void 0;
      if (arguments.length === 1) {
        if (this.isFunction(arguments.length <= 0 ? undefined : arguments[0])) {
          Fx = arguments.length <= 0 ? undefined : arguments[0];
        }
        value = arguments.length <= 0 ? undefined : arguments[0];
      } else {
        value = arguments.length <= 1 ? undefined : arguments[1];
        path = arguments.length <= 0 ? undefined : arguments[0];
      }
      var data = [].concat(_toConsumableArray(this.data));

      return data.some(function (e, index) {
        if (Fx) {
          return !!Fx(e, index);
        }
        var val = e;
        if (e instanceof Object) {
          var extract = _utilities2.default.getFromPath(e, path, undefined);
          if (extract.value) {
            val = extract.value;
          }
        }
        return val === value;
      });
    },
    count: function count() {
      return this.data.length;
    },
    isFunction: function isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-unused-vars */
var Utilities = function () {
  /**
   * Given an Object and its path, if exisits it will
   * return the value of it, if not the default
   * @param {Object} obj
   * @param {String} path
   * @param {*} def
   */
  var get = function get(fn, def) {
    try {
      return fn();
    } catch (e) {
      return def;
    }
  };
  /**
   *
   * @param {*} obj
   * @param {*} path
   * @param {*} def
   */
  var getFromPath = function getFromPath(obj, path, def) {
    var _path = path;

    if (path.includes(' as ')) {
      path = path.split(' as ');
      _path = path[0];
    }

    var assignedName = get(function () {
      return Array.isArray(path) && path[1].trim();
    }, undefined);

    var fullPath = _path.replace(/\[/g, '.').replace(/]/g, '').split('.').filter(Boolean).map(function (e) {
      return e.trim();
    });

    function everyFunc(step) {
      return !(step && (obj = obj[step]) === undefined);
    }

    var result = fullPath.every(everyFunc) ? obj : def;

    return { label: assignedName || _path, value: result };
  };

  return Object.freeze({
    get: get,
    getFromPath: getFromPath
  });
}();

exports.default = Utilities;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interface = exports.Fluent = exports.Model = undefined;

var _Fluent = __webpack_require__(13);

var _Fluent2 = _interopRequireDefault(_Fluent);

var _Model = __webpack_require__(9);

var _Model2 = _interopRequireDefault(_Model);

var _Interface = __webpack_require__(19);

var _Interface2 = _interopRequireDefault(_Interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Model = _Model2.default;
exports.Fluent = _Fluent2.default;
exports.Interface = _Interface2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _it = __webpack_require__(0);

var _it2 = _interopRequireDefault(_it);

var _Model = __webpack_require__(9);

var _Model2 = _interopRequireDefault(_Model);

var _Collection = __webpack_require__(10);

var _Collection2 = _interopRequireDefault(_Collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Fluent = (0, _it2.default)({
  init: function init() {
    this.registerGlobalVariable();
  },

  properties: {},
  methods: {
    model: function model() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.registerModel(args);
      return _Model2.default.compose.apply(_Model2.default, _toConsumableArray(args));
    },
    extend: function extend() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.registerModel(args);
      return _Model2.default.compose.apply(_Model2.default, _toConsumableArray(args));
    },
    compose: function compose() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.registerModel(args);
      return _Model2.default.compose.apply(_Model2.default, _toConsumableArray(args));
    },
    collect: function collect(args) {
      return (0, _Collection2.default)(args);
    },
    registerGlobalVariable: function registerGlobalVariable() {
      if (typeof window !== "undefined" && window && !window._FLUENT_) {
        window._FLUENT_ = {
          connectors: {},
          models: {}
        };
      }

      if (global && !global._FLUENT_) {
        global._FLUENT_ = {
          connectors: {},
          models: {}
        };
      }
    },
    registerModel: function registerModel(args) {
      var name = args && args[0] && args[0].properties && args[0].properties.name ? args[0].properties.name : undefined;

      if (!name || name === "baseModel") {
        return;
      }

      if (!(typeof name === "string")) {
        throw new Error("You must assign a name to your Model when using Fluent.compose");
      }

      if (typeof window !== "undefined") {
        window._FLUENT_.models[name] = true;
        return;
      }
      global._FLUENT_.models[name] = true;
    },
    config: function config(_ref) {
      var _ref$REMOTE_CONNECTOR = _ref.REMOTE_CONNECTORS,
          REMOTE_CONNECTORS = _ref$REMOTE_CONNECTOR === undefined ? undefined : _ref$REMOTE_CONNECTOR,
          _ref$LOCAL_CONNECTORS = _ref.LOCAL_CONNECTORS,
          LOCAL_CONNECTORS = _ref$LOCAL_CONNECTORS === undefined ? undefined : _ref$LOCAL_CONNECTORS,
          _ref$MERGE_CONNECTORS = _ref.MERGE_CONNECTORS,
          MERGE_CONNECTORS = _ref$MERGE_CONNECTORS === undefined ? undefined : _ref$MERGE_CONNECTORS;

      if (typeof window !== "undefined" && window) {
        window._FLUENT_.connectors = {
          local: LOCAL_CONNECTORS,
          remote: REMOTE_CONNECTORS,
          merge: MERGE_CONNECTORS
        };
      }

      if (typeof global !== "undefined" && global) {
        global._FLUENT_.connectors = {
          local: LOCAL_CONNECTORS,
          remote: REMOTE_CONNECTORS,
          merge: MERGE_CONNECTORS
        };
      }
    },
    getConfig: function getConfig() {
      if (typeof window !== "undefined" && window) {
        return window._FLUENT_;
      }

      if (typeof global !== "undefined" && global) {
        return global._FLUENT_;
      }
    }
  }
})();

exports.default = Fluent;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// More proper implementation would be
// isDescriptor(obj) || isStamp(obj)
// but there is no sense since stamp is function and function is object.
module.exports = __webpack_require__(1);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' &&
    Object.getPrototypeOf(value) === Object.prototype;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var compose = __webpack_require__(2);

function createShortcut(propName) {
  return function (arg) {
    'use strict';
    var param = {};
    param[propName] = arg;
    return this && this.compose ? this.compose(param) : compose(param);
  };
}

var properties = createShortcut('properties');
var staticProperties = createShortcut('staticProperties');
var configuration = createShortcut('configuration');
var deepProperties = createShortcut('deepProperties');
var staticDeepProperties = createShortcut('staticDeepProperties');
var deepConfiguration = createShortcut('deepConfiguration');
var initializers = createShortcut('initializers');

module.exports = compose({
  staticProperties: {
    methods: createShortcut('methods'),

    props: properties,
    properties: properties,

    statics: staticProperties,
    staticProperties: staticProperties,

    conf: configuration,
    configuration: configuration,

    deepProps: deepProperties,
    deepProperties: deepProperties,

    deepStatics: staticDeepProperties,
    staticDeepProperties: staticDeepProperties,

    deepConf: deepConfiguration,
    deepConfiguration: deepConfiguration,

    init: initializers,
    initializers: initializers,

    composers: createShortcut('composers'),

    propertyDescriptors: createShortcut('propertyDescriptors'),

    staticPropertyDescriptors: createShortcut('staticPropertyDescriptors')
  }
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function isString(arg) {
  return typeof arg === 'string';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var compose = __webpack_require__(2);
var privates = new WeakMap(); // WeakMap works in IE11, node 0.12

var makeProxyFunction = function (fn, name) {
  function proxiedFn() {
    'use strict';
    var fields = privates.get(this); // jshint ignore:line
    return fn.apply(fields, arguments);
  }

  Object.defineProperty(proxiedFn, 'name', {
    value: name,
    configurable: true
  });

  return proxiedFn;
};

function initializer(_, opts) {
  var descriptor = opts.stamp.compose;
  var privateMethodNames = descriptor.deepConfiguration.Privatize.methods;

  var newObject = {}; // our proxy object
  privates.set(newObject, this);

  var methods = descriptor.methods;
  if (!methods) {
    return newObject;
  }

  var methodNames = Object.keys(methods);
  for (var i = 0; i < methodNames.length; i++) {
    var name = methodNames[i];
    if (privateMethodNames.indexOf(name) < 0) { // not private, thus wrap
      newObject[name] = makeProxyFunction(methods[name], name);
    }
  }

  // Integration with @stamp/instanceof
  if (typeof Symbol !== "undefined") {
    var stampSymbol = Symbol.for('stamp');
    if (methods[stampSymbol]) {
      newObject[stampSymbol] = opts.stamp;
    }
  }

  return newObject;
}

var Privatize = compose({
  initializers: [initializer],
  deepConfiguration: {Privatize: {methods: []}},
  staticProperties: {
    privatizeMethods: function () {
      'use strict';
      var methodNames = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (typeof arg === 'string' && arg.length > 0) {
          methodNames.push(arg);
        }
      }
      var Stamp = this && this.compose ? this : Privatize;
      return Stamp.compose({
        deepConfiguration: {
          Privatize: {
            methods: methodNames
          }
        }
      });
    }
  },
  composers: [function (opts) {
    var initializers = opts.stamp.compose.initializers;
    // Keep our initializer the last to return proxy object
    initializers.splice(initializers.indexOf(initializer), 1);
    initializers.push(initializer);
  }]
});

module.exports = Privatize;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _it = __webpack_require__(0);

var _it2 = _interopRequireDefault(_it);

var _utilities = __webpack_require__(11);

var _utilities2 = _interopRequireDefault(_utilities);

var _Collection = __webpack_require__(10);

var _Collection2 = _interopRequireDefault(_Collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (0, _it2.default)({
  init: function init(_ref) {
    var name = _ref.name,
        remoteConnection = _ref.remoteConnection,
        connector = _ref.connector;

    if (!name && !remoteConnection) {
      throw new Error("Model must have a name or path");
    }

    if (!connector) {
      throw new Error("Model must have a connector. Please register one using Fluent.config");
    }
    this.name = name || this.name;
    this.remoteConnection = remoteConnection || this.remoteConnection;
    this.connector = connector || this.connector;
    this.chainReference = [];
    this.whereArray = [];
    this.orWhereArray = [];
    this.selectArray = [];
    this.orderByArray = [];
    this.limitNumber = undefined;
    this.offsetNumber = undefined;
    this.populate = [];
    this.chunk = null;
    this.pullSize = null;
    this.ownerEmail = undefined;
  },

  properties: {
    operators: ["=", "<", ">", "<=", ">=", "<>", "!=", "in", "nin", "like", "regexp", "startsWith", "endsWith", "contains"]
  },
  methods: {
    /**
     *
     */
    get: function get() {
      throw new Error("get() method not implemented");
    },

    /**
     *
     */
    all: function all() {
      throw new Error("all() method not implemented");
    },

    /**
     *
     */
    find: function find(id) {
      throw new Error("find() method not implemented");
    },

    /**
     *
     */
    findOne: function findOne() {
      throw new Error("findOne() method not implemented");
    },

    /**
     *
     */
    remove: function remove() {
      throw new Error("remove() method not implemented");
    },

    /**
     *
     */
    softDelete: function softDelete() {
      throw new Error("softDelete() method not implemented");
    },

    /**
     *
     */
    insert: function insert() {
      throw new Error("insert() method not implemented");
    },

    /**
     *
     */
    update: function update() {
      throw new Error("update() method not implemented");
    },

    /**
     *
     */
    clear: function clear() {
      throw new Error("clear() method not implemented");
    },

    /**
     *
     */
    updateOrCreate: function updateOrCreate() {
      throw new Error("updateOrCreate() method not implemented");
    },

    /**
     *
     */
    findAndRemove: function findAndRemove() {
      throw new Error("findAndRemove() method not implemented");
    },

    /**
     * 
     * @param {*} user 
     */
    paginate: function paginate(perPage, currentPage) {
      throw new Error("paginate() method not implemented");
    },
    owner: function owner(user) {
      this.chainReference.push({ method: "owner", args: user });
      this.ownerEmail = user;
      return this;
    },
    own: function own(user) {
      return this.owner(user);
    },

    /**
     * Executes the Get() method and
     * returns the its first result
     *
     * @return {Object} First result
     */
    first: function first() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.get();

              case 2:
                data = _context.sent;
                return _context.abrupt("return", _utilities2.default.get(function () {
                  return data[0];
                }, []));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /**
     *
     * Gets the data in the current query and
     * transforms it into a collection
     * @returns {Collection} Fluent Collection
     */
    collect: function collect() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.get();

              case 2:
                data = _context2.sent;

                if (Array.isArray(data)) {
                  _context2.next = 5;
                  break;
                }

                throw new Error("Collect method only accepts arrays of data");

              case 5:
                return _context2.abrupt("return", (0, _Collection2.default)(data));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    /**
     * Adds the given columns to the SelectArray
     * to use as column filter for the data
     *
     * @param {Array|String} columns The columns to select
     * @returns {Model} Fluent Model
     */
    select: function select() {
      for (var _len = arguments.length, columns = Array(_len), _key = 0; _key < _len; _key++) {
        columns[_key] = arguments[_key];
      }

      columns = this.prepareInput(columns);
      this.chainReference.push({ method: "select", args: columns });
      this.selectArray = this.selectArray.concat(columns).filter(function (elem, pos, arr) {
        return arr.indexOf(elem) === pos;
      });

      return this;
    },

    /**
     * Maps the given Data to show only those fields
     * explicitly detailed on the Select function
     *
     * @param {Array} data Data from local or remote DB
     * @returns {Array} Formatted data with the selected columns
     */
    jsApplySelect: function jsApplySelect(data) {
      var _this3 = this;

      var _data = Array.isArray(data) ? [].concat(_toConsumableArray(data)) : [data];

      if (this.selectArray.length > 0) {
        _data = _data.map(function (element) {
          var newElement = {};

          _this3.selectArray.forEach(function (attribute) {
            var extract = _utilities2.default.getFromPath(element, attribute, undefined);

            var value = _utilities2.default.get(function () {
              return extract.value;
            }, undefined);

            if (typeof value !== "undefined") {
              newElement[extract.label] = extract.value;
            }
          });
          return newElement;
        });
      }

      return _data;
    },

    /**
     *  Sets the offset number for
     *  the given query
     *
     * @param {int} offset The given offset
     * @returns {Model} Fluent Model
     */
    offset: function offset(_offset) {
      this.chainReference.push({ method: "offset", args: _offset });
      this.offsetNumber = _offset;
      return this;
    },

    /**
     *  Alias for the offset method
     *
     * @param {int} offset the given offset
     */
    skip: function skip(offset) {
      return this.offset(offset);
    },

    /**
     *  Adds where filters to the query
     *  whereArray
     * @param {String|Array} args Where filters
     * @returns {Model} Fluent Model
     */
    where: function where() {
      var _this4 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.chainReference.push({ method: "where", args: args });
      this.whereArray = [];
      args = Array.isArray(args[0]) ? args : [args];
      args.forEach(function (arg) {
        if (arg.length !== 3) {
          throw new Error('There where clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "' + JSON.stringify(arg) + '" ');
        }
        _this4.whereArray.push(arg);
      });
      return this;
    },

    /**
     * Pushes where filters with AND condition
     * to the whereArray
     *
     * @param {String|Array} args Where filters
     * @returns {Model} Fluent Model
     */
    andWhere: function andWhere() {
      var _this5 = this;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.chainReference.push({ method: "andWhere", args: args });
      args = Array.isArray(args[0]) ? args : [args];
      args.forEach(function (arg) {
        if (arg.length !== 3) {
          throw new Error('There where clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "' + JSON.stringify(arg) + '" ');
        }
        _this5.whereArray.push(arg);
      });
      return this;
    },

    /**
     * Pushes where filter with OR condition
     * to the orWhereArray
     *
     * @param {String|Array} args OR where filters
     * @returns {Model} Fluent Model
     */
    orWhere: function orWhere() {
      var _this6 = this;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.chainReference.push({ method: "orWhere", args: args });
      args = Array.isArray(args[0]) ? args : [args];
      args.forEach(function (arg) {
        if (arg.length !== 3) {
          throw new Error('There orWhere clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "' + JSON.stringify(arg) + '" ');
        }
        _this6.orWhereArray.push(arg);
      });
      return this;
    },

    /**
     * Limits the number of results for the
     * given query
     * @param {int} limit limit number
     * @returns {Model} Fluent Model
     */
    limit: function limit(_limit) {
      this.chainReference.push({ method: "limit", args: _limit });
      this.limitNumber = _limit;
      return this;
    },

    /**
     * Alias for the limit method
     *
     * @param {*} limit limit number
     * @returns {Model} Fluent Model
     */
    take: function take(limit) {
      return this.limit(limit);
    },

    /**
     * Gets all values for a given KEY
     * @param {String} keyPath The path to the key
     * @returns {Array}
     */
    pluck: function pluck(keyPath) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this7.chainReference.push({ method: "pluck", args: keyPath });
                _context3.next = 3;
                return _this7.get();

              case 3:
                data = _context3.sent;


                data = data.map(function (e) {
                  var extracted = _utilities2.default.getFromPath(e, keyPath, undefined);

                  if (typeof extracted.value !== "undefined") {
                    return extracted.value;
                  }
                });
                return _context3.abrupt("return", data);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this7);
      }))();
    },

    /**
     *
     * @param {*} args
     */
    orderBy: function orderBy() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this.chainReference.push({ method: "orderBy", args: args });
      this.orderByArray = args;
      return this;
    },

    /**
     *
     * @param {*} data
     */
    jsApplyOrderBy: function jsApplyOrderBy(data) {
      var _data = [].concat(_toConsumableArray(data));

      if (this.orderByArray.length === 0) {
        return _data;
      }
      var field = this.orderByArray[0];

      if (this.selectArray.length > 0 && (field.includes(".") || field.includes("["))) {
        throw new Error('Cannot orderBy nested attribute "' + field + '" when using Select. You must rename the attribute');
      }

      var order = this.orderByArray[1];
      var type = this.orderByArray[2];

      if (!type) {
        type = "string";
      }

      _data = _data.sort(function (a, b) {
        var A = _utilities2.default.getFromPath(a, field, undefined).value;
        var B = _utilities2.default.getFromPath(b, field, undefined).value;

        if (typeof A === "undefined" || typeof B === "undefined") {
          throw new Error('Cannot order by property "' + field + '" not all values have this property');
        }
        // For default order and numbers
        if (type.includes("string") || type.includes("number")) {
          if (order === "asc") {
            return A > B ? 1 : A < B ? -1 : 0;
          }
          return A > B ? -1 : A < B ? 1 : 0;
        } else if (type.includes("date")) {
          if (order === "asc") {
            return new Date(A) - new Date(B);
          }
          return new Date(B) - new Date(A);
        }
      });
      return _data;
    },

    /**
     *
     * @param {*} input
     */
    prepareInput: function prepareInput(input) {
      var cols = [];

      input.forEach(function (item) {
        var value = Array.isArray(item) ? item : item.split(",");

        value = value.map(function (e) {
          return e.trim();
        });
        cols = cols.concat(value);
      });

      cols.filter(function (elem, pos, arr) {
        return arr.indexOf(elem) === pos;
      });

      return cols;
    },
    ArrayInsert: function ArrayInsert(dataArray, options) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var initial, length, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element, a;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                initial = 1;
                length = dataArray.length;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 5;
                _iterator = dataArray[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 26;
                  break;
                }

                element = _step.value;

                if (options && options.showProgress) {
                  console.log("Inserting " + initial + " of " + length);
                }
                _context4.prev = 10;
                _context4.next = 13;
                return _this8.insert(element, options);

              case 13:
                a = _context4.sent;

                if (options && options.showProgress) {
                  console.log("Element " + initial + " inserted");
                }
                initial++;
                _context4.next = 23;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](10);

                console.log("ERROR - Element " + initial + " - " + JSON.stringify(element) + " could not be inserted");
                console.log(_context4.t0);
                initial++;

              case 23:
                _iteratorNormalCompletion = true;
                _context4.next = 7;
                break;

              case 26:
                _context4.next = 32;
                break;

              case 28:
                _context4.prev = 28;
                _context4.t1 = _context4["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context4.t1;

              case 32:
                _context4.prev = 32;
                _context4.prev = 33;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 35:
                _context4.prev = 35;

                if (!_didIteratorError) {
                  _context4.next = 38;
                  break;
                }

                throw _iteratorError;

              case 38:
                return _context4.finish(35);

              case 39:
                return _context4.finish(32);

              case 40:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this8, [[5, 28, 32, 40], [10, 18], [33,, 35, 39]]);
      }))();
    }
  }
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=fast-fluent.js.map