/*!
 * MIT License
 * 
 * Copyright (c) 2020 JeHwan Yoo
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: $B */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$B", function() { return $B; });
const $B = {
  /**
   * See the site below.
   * locale : https://www.science.co.il/language/Locale-codes.php
   * currency : https://www.currency-iso.org/en/home/tables/table-a1.html
   */
  localeOptions: {
    format: true,
    locale: 'en-US',
    currency: 'USD',
  },
  /**
   * Count any number in a certain amount of time
   *
   * @param { string } id id (The value of the element must consist only of numbers.)
   * @param { number } end end number
   * @param { number } duration duration (default 100, milsec)
   */
  countFast(id, end, duration = 100) {
    const htmlElement = document.getElementById(id);
    const start = parseInt(htmlElement.innerText.replace(/\D+/g, ''));
    const direction = end > start;
    const differ = Math.abs(end - start);
    const coefficient = direction ? differ / duration : -differ / duration;
    let nextNumber = start;
    const sid = setInterval(() => {
      nextNumber += coefficient;
      if (direction && nextNumber > end) {
        htmlElement.innerText = format(end.toString());
        clearInterval(sid);
      } else if (!direction && nextNumber < end) {
        htmlElement.innerText = format(end.toString());
        clearInterval(sid);
      } else {
        htmlElement.innerText = format(Math.round(nextNumber).toString());
      }
    }, 1);
  },
  /**
   * Count the numbers by n.
   * Perhaps most similar to the counter.
   *
   * @param { string } id id (The value of the element must consist only of numbers.)
   * @param { number } end end number
   * @param { number } n count unit
   * @param { number } interval interval (default 0.1, milsec)
   */
  countByN(id, end, n, interval = 0.1) {
    const htmlElement = document.getElementById(id);
    const start = parseInt(htmlElement.innerText.replace(/\D+/g, ''));
    const direction = end > start;
    const coefficient = direction ? n : -n;
    let nextNumber = start;
    const sid = setInterval(() => {
      nextNumber += coefficient;
      if (direction && nextNumber > end) {
        htmlElement.innerText = format(end.toString());
        clearInterval(sid);
      } else if (!direction && nextNumber < end) {
        htmlElement.innerText = format(end.toString());
        clearInterval(sid);
      } else {
        htmlElement.innerText = format(nextNumber.toString());
      }
    }, interval);
  },
  /**
   * Count value by n ​​in the object. (=countByN)
   * @param { object } obj { value }
   * @param { number } end end number
   * @param { number } n count unit
   * @param { number } interval interval (default 0.1, milsec)
   */
  countObjectByN(obj, end, n, interval = 0.1) {
    const start = obj.value;
    const direction = end > start;
    const coefficient = direction ? n : -n;
    let nextNumber = start;
    const sid = setInterval(() => {
      nextNumber += coefficient;
      if (direction && nextNumber > end) {
        obj.value = format(end.toString());
        clearInterval(sid);
      } else if (!direction && nextNumber < end) {
        obj.value = format(end.toString());
        clearInterval(sid);
      } else {
        obj.value = format(nextNumber.toString());
      }
    }, interval);
  },
  /**
   * Count value very fast ​​in the object. (=countFast)
   * @param { object } obj { value }
   * @param { number } end end number
   * @param { number } duration duration (default 100, milsec)
   */
  countObjectFast(obj, end, duration = 100) {
    const start = obj.value;
    const direction = end > start;
    const differ = Math.abs(end - start);
    const coefficient = direction ? differ / duration : -differ / duration;
    let nextNumber = start;
    const sid = setInterval(() => {
      nextNumber += coefficient;
      if (direction && nextNumber > end) {
        obj.value = format(end.toString());
        clearInterval(sid);
      } else if (!direction && nextNumber < end) {
        obj.value = format(end.toString());
        clearInterval(sid);
      } else {
        obj.value = format(Math.round(nextNumber).toString());
      }
    }, 1);
  },
  /**
   * Define the behavior of the format function. You can customize it with $B.formatStyler = yourFunction;
   * @param number number to format
   */
  formatStyler: defaultFormatStyler,
  defaultFormatStyler,
};

/**
 *
 * @param {number} number
 */
function defaultFormatStyler(number) {
  return new Intl.NumberFormat($B.localeOptions.locale, {
    style: 'currency',
    currency: $B.localeOptions.currency,
    minimumFractionDigits: 0,
  }).format(parseInt(number));
}

function format(number) {
  if (!$B.localeOptions.format) {
    return number;
  } else {
    return $B.formatStyler(number);
  }
}




/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsYUFBYSxTQUFTLE1BQU07QUFDNUIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxhQUFhLFNBQVMsTUFBTTtBQUM1QixhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWMiLCJmaWxlIjoiYmlsbC1jb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCAkQiA9IHtcbiAgLyoqXG4gICAqIFNlZSB0aGUgc2l0ZSBiZWxvdy5cbiAgICogbG9jYWxlIDogaHR0cHM6Ly93d3cuc2NpZW5jZS5jby5pbC9sYW5ndWFnZS9Mb2NhbGUtY29kZXMucGhwXG4gICAqIGN1cnJlbmN5IDogaHR0cHM6Ly93d3cuY3VycmVuY3ktaXNvLm9yZy9lbi9ob21lL3RhYmxlcy90YWJsZS1hMS5odG1sXG4gICAqL1xuICBsb2NhbGVPcHRpb25zOiB7XG4gICAgZm9ybWF0OiB0cnVlLFxuICAgIGxvY2FsZTogJ2VuLVVTJyxcbiAgICBjdXJyZW5jeTogJ1VTRCcsXG4gIH0sXG4gIC8qKlxuICAgKiBDb3VudCBhbnkgbnVtYmVyIGluIGEgY2VydGFpbiBhbW91bnQgb2YgdGltZVxuICAgKlxuICAgKiBAcGFyYW0geyBzdHJpbmcgfSBpZCBpZCAoVGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IG11c3QgY29uc2lzdCBvbmx5IG9mIG51bWJlcnMuKVxuICAgKiBAcGFyYW0geyBudW1iZXIgfSBlbmQgZW5kIG51bWJlclxuICAgKiBAcGFyYW0geyBudW1iZXIgfSBkdXJhdGlvbiBkdXJhdGlvbiAoZGVmYXVsdCAxMDAsIG1pbHNlYylcbiAgICovXG4gIGNvdW50RmFzdChpZCwgZW5kLCBkdXJhdGlvbiA9IDEwMCkge1xuICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGNvbnN0IHN0YXJ0ID0gcGFyc2VJbnQoaHRtbEVsZW1lbnQuaW5uZXJUZXh0LnJlcGxhY2UoL1xcRCsvZywgJycpKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBlbmQgPiBzdGFydDtcbiAgICBjb25zdCBkaWZmZXIgPSBNYXRoLmFicyhlbmQgLSBzdGFydCk7XG4gICAgY29uc3QgY29lZmZpY2llbnQgPSBkaXJlY3Rpb24gPyBkaWZmZXIgLyBkdXJhdGlvbiA6IC1kaWZmZXIgLyBkdXJhdGlvbjtcbiAgICBsZXQgbmV4dE51bWJlciA9IHN0YXJ0O1xuICAgIGNvbnN0IHNpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIG5leHROdW1iZXIgKz0gY29lZmZpY2llbnQ7XG4gICAgICBpZiAoZGlyZWN0aW9uICYmIG5leHROdW1iZXIgPiBlbmQpIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KGVuZC50b1N0cmluZygpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaWQpO1xuICAgICAgfSBlbHNlIGlmICghZGlyZWN0aW9uICYmIG5leHROdW1iZXIgPCBlbmQpIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KGVuZC50b1N0cmluZygpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KE1hdGgucm91bmQobmV4dE51bWJlcikudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH0sXG4gIC8qKlxuICAgKiBDb3VudCB0aGUgbnVtYmVycyBieSBuLlxuICAgKiBQZXJoYXBzIG1vc3Qgc2ltaWxhciB0byB0aGUgY291bnRlci5cbiAgICpcbiAgICogQHBhcmFtIHsgc3RyaW5nIH0gaWQgaWQgKFRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCBtdXN0IGNvbnNpc3Qgb25seSBvZiBudW1iZXJzLilcbiAgICogQHBhcmFtIHsgbnVtYmVyIH0gZW5kIGVuZCBudW1iZXJcbiAgICogQHBhcmFtIHsgbnVtYmVyIH0gbiBjb3VudCB1bml0XG4gICAqIEBwYXJhbSB7IG51bWJlciB9IGludGVydmFsIGludGVydmFsIChkZWZhdWx0IDAuMSwgbWlsc2VjKVxuICAgKi9cbiAgY291bnRCeU4oaWQsIGVuZCwgbiwgaW50ZXJ2YWwgPSAwLjEpIHtcbiAgICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBjb25zdCBzdGFydCA9IHBhcnNlSW50KGh0bWxFbGVtZW50LmlubmVyVGV4dC5yZXBsYWNlKC9cXEQrL2csICcnKSk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZW5kID4gc3RhcnQ7XG4gICAgY29uc3QgY29lZmZpY2llbnQgPSBkaXJlY3Rpb24gPyBuIDogLW47XG4gICAgbGV0IG5leHROdW1iZXIgPSBzdGFydDtcbiAgICBjb25zdCBzaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBuZXh0TnVtYmVyICs9IGNvZWZmaWNpZW50O1xuICAgICAgaWYgKGRpcmVjdGlvbiAmJiBuZXh0TnVtYmVyID4gZW5kKSB7XG4gICAgICAgIGh0bWxFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdChlbmQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2lkKTtcbiAgICAgIH0gZWxzZSBpZiAoIWRpcmVjdGlvbiAmJiBuZXh0TnVtYmVyIDwgZW5kKSB7XG4gICAgICAgIGh0bWxFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdChlbmQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0bWxFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdChuZXh0TnVtYmVyLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH0sIGludGVydmFsKTtcbiAgfSxcbiAgLyoqXG4gICAqIENvdW50IHZhbHVlIGJ5IG4g4oCL4oCLaW4gdGhlIG9iamVjdC4gKD1jb3VudEJ5TilcbiAgICogQHBhcmFtIHsgb2JqZWN0IH0gb2JqIHsgdmFsdWUgfVxuICAgKiBAcGFyYW0geyBudW1iZXIgfSBlbmQgZW5kIG51bWJlclxuICAgKiBAcGFyYW0geyBudW1iZXIgfSBuIGNvdW50IHVuaXRcbiAgICogQHBhcmFtIHsgbnVtYmVyIH0gaW50ZXJ2YWwgaW50ZXJ2YWwgKGRlZmF1bHQgMC4xLCBtaWxzZWMpXG4gICAqL1xuICBjb3VudE9iamVjdEJ5TihvYmosIGVuZCwgbiwgaW50ZXJ2YWwgPSAwLjEpIHtcbiAgICBjb25zdCBzdGFydCA9IG9iai52YWx1ZTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBlbmQgPiBzdGFydDtcbiAgICBjb25zdCBjb2VmZmljaWVudCA9IGRpcmVjdGlvbiA/IG4gOiAtbjtcbiAgICBsZXQgbmV4dE51bWJlciA9IHN0YXJ0O1xuICAgIGNvbnN0IHNpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIG5leHROdW1iZXIgKz0gY29lZmZpY2llbnQ7XG4gICAgICBpZiAoZGlyZWN0aW9uICYmIG5leHROdW1iZXIgPiBlbmQpIHtcbiAgICAgICAgb2JqLnZhbHVlID0gZm9ybWF0KGVuZC50b1N0cmluZygpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaWQpO1xuICAgICAgfSBlbHNlIGlmICghZGlyZWN0aW9uICYmIG5leHROdW1iZXIgPCBlbmQpIHtcbiAgICAgICAgb2JqLnZhbHVlID0gZm9ybWF0KGVuZC50b1N0cmluZygpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqLnZhbHVlID0gZm9ybWF0KG5leHROdW1iZXIudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSwgaW50ZXJ2YWwpO1xuICB9LFxuICAvKipcbiAgICogQ291bnQgdmFsdWUgdmVyeSBmYXN0IOKAi+KAi2luIHRoZSBvYmplY3QuICg9Y291bnRGYXN0KVxuICAgKiBAcGFyYW0geyBvYmplY3QgfSBvYmogeyB2YWx1ZSB9XG4gICAqIEBwYXJhbSB7IG51bWJlciB9IGVuZCBlbmQgbnVtYmVyXG4gICAqIEBwYXJhbSB7IG51bWJlciB9IGR1cmF0aW9uIGR1cmF0aW9uIChkZWZhdWx0IDEwMCwgbWlsc2VjKVxuICAgKi9cbiAgY291bnRPYmplY3RGYXN0KG9iaiwgZW5kLCBkdXJhdGlvbiA9IDEwMCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gb2JqLnZhbHVlO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGVuZCA+IHN0YXJ0O1xuICAgIGNvbnN0IGRpZmZlciA9IE1hdGguYWJzKGVuZCAtIHN0YXJ0KTtcbiAgICBjb25zdCBjb2VmZmljaWVudCA9IGRpcmVjdGlvbiA/IGRpZmZlciAvIGR1cmF0aW9uIDogLWRpZmZlciAvIGR1cmF0aW9uO1xuICAgIGxldCBuZXh0TnVtYmVyID0gc3RhcnQ7XG4gICAgY29uc3Qgc2lkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbmV4dE51bWJlciArPSBjb2VmZmljaWVudDtcbiAgICAgIGlmIChkaXJlY3Rpb24gJiYgbmV4dE51bWJlciA+IGVuZCkge1xuICAgICAgICBvYmoudmFsdWUgPSBmb3JtYXQoZW5kLnRvU3RyaW5nKCkpO1xuICAgICAgICBjbGVhckludGVydmFsKHNpZCk7XG4gICAgICB9IGVsc2UgaWYgKCFkaXJlY3Rpb24gJiYgbmV4dE51bWJlciA8IGVuZCkge1xuICAgICAgICBvYmoudmFsdWUgPSBmb3JtYXQoZW5kLnRvU3RyaW5nKCkpO1xuICAgICAgICBjbGVhckludGVydmFsKHNpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmoudmFsdWUgPSBmb3JtYXQoTWF0aC5yb3VuZChuZXh0TnVtYmVyKS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfSxcbiAgLyoqXG4gICAqIERlZmluZSB0aGUgYmVoYXZpb3Igb2YgdGhlIGZvcm1hdCBmdW5jdGlvbi4gWW91IGNhbiBjdXN0b21pemUgaXQgd2l0aCAkQi5mb3JtYXRTdHlsZXIgPSB5b3VyRnVuY3Rpb247XG4gICAqIEBwYXJhbSBudW1iZXIgbnVtYmVyIHRvIGZvcm1hdFxuICAgKi9cbiAgZm9ybWF0U3R5bGVyOiBkZWZhdWx0Rm9ybWF0U3R5bGVyLFxuICBkZWZhdWx0Rm9ybWF0U3R5bGVyLFxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICovXG5mdW5jdGlvbiBkZWZhdWx0Rm9ybWF0U3R5bGVyKG51bWJlcikge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCRCLmxvY2FsZU9wdGlvbnMubG9jYWxlLCB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6ICRCLmxvY2FsZU9wdGlvbnMuY3VycmVuY3ksXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICB9KS5mb3JtYXQocGFyc2VJbnQobnVtYmVyKSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChudW1iZXIpIHtcbiAgaWYgKCEkQi5sb2NhbGVPcHRpb25zLmZvcm1hdCkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICRCLmZvcm1hdFN0eWxlcihudW1iZXIpO1xuICB9XG59XG5cbmV4cG9ydCB7ICRCIH07XG4iXSwic291cmNlUm9vdCI6IiJ9