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
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
   * @param string id
   * @param integer end number
   * @param integer duration (default 100, milsec)
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
   * @param string id (Elements of the element must consist only of numbers.)
   * @param integer end number
   * @param integer count unit
   * @param integer interval (default 0.1, milsec)
   */
  countByN(id, end, n, interval = 0.1) {
    const htmlElement = document.getElementById(id);
    const start = parseInt(htmlElement.innerText.replace(/\D+/g, ''));
    const direction = end > start;
    const coefficient = direction ? n : -n;
    const differ = Math.abs(end - start);
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
   * Define the behavior of the format function. You can customize it with $B.formatStyler = yourFunction;
   * @param number number to format
   */
  formatStyler: defaultFormatStyler,
  defaultFormatStyler,
};

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

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWMiLCJmaWxlIjoiYmlsbC1jb3VudGVyLmNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgJEIgPSB7XG4gIC8qKlxuICAgKiBTZWUgdGhlIHNpdGUgYmVsb3cuXG4gICAqIGxvY2FsZSA6IGh0dHBzOi8vd3d3LnNjaWVuY2UuY28uaWwvbGFuZ3VhZ2UvTG9jYWxlLWNvZGVzLnBocFxuICAgKiBjdXJyZW5jeSA6IGh0dHBzOi8vd3d3LmN1cnJlbmN5LWlzby5vcmcvZW4vaG9tZS90YWJsZXMvdGFibGUtYTEuaHRtbFxuICAgKi9cbiAgbG9jYWxlT3B0aW9uczoge1xuICAgIGZvcm1hdDogdHJ1ZSxcbiAgICBsb2NhbGU6ICdlbi1VUycsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICB9LFxuICAvKipcbiAgICogQ291bnQgYW55IG51bWJlciBpbiBhIGNlcnRhaW4gYW1vdW50IG9mIHRpbWVcbiAgICpcbiAgICogQHBhcmFtIHN0cmluZyBpZFxuICAgKiBAcGFyYW0gaW50ZWdlciBlbmQgbnVtYmVyXG4gICAqIEBwYXJhbSBpbnRlZ2VyIGR1cmF0aW9uIChkZWZhdWx0IDEwMCwgbWlsc2VjKVxuICAgKi9cbiAgY291bnRGYXN0KGlkLCBlbmQsIGR1cmF0aW9uID0gMTAwKSB7XG4gICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3Qgc3RhcnQgPSBwYXJzZUludChodG1sRWxlbWVudC5pbm5lclRleHQucmVwbGFjZSgvXFxEKy9nLCAnJykpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGVuZCA+IHN0YXJ0O1xuICAgIGNvbnN0IGRpZmZlciA9IE1hdGguYWJzKGVuZCAtIHN0YXJ0KTtcbiAgICBjb25zdCBjb2VmZmljaWVudCA9IGRpcmVjdGlvbiA/IGRpZmZlciAvIGR1cmF0aW9uIDogLWRpZmZlciAvIGR1cmF0aW9uO1xuICAgIGxldCBuZXh0TnVtYmVyID0gc3RhcnQ7XG4gICAgY29uc3Qgc2lkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbmV4dE51bWJlciArPSBjb2VmZmljaWVudDtcbiAgICAgIGlmIChkaXJlY3Rpb24gJiYgbmV4dE51bWJlciA+IGVuZCkge1xuICAgICAgICBodG1sRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQoZW5kLnRvU3RyaW5nKCkpO1xuICAgICAgICBjbGVhckludGVydmFsKHNpZCk7XG4gICAgICB9IGVsc2UgaWYgKCFkaXJlY3Rpb24gJiYgbmV4dE51bWJlciA8IGVuZCkge1xuICAgICAgICBodG1sRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQoZW5kLnRvU3RyaW5nKCkpO1xuICAgICAgICBjbGVhckludGVydmFsKHNpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodG1sRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQoTWF0aC5yb3VuZChuZXh0TnVtYmVyKS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfSxcbiAgLyoqXG4gICAqIENvdW50IHRoZSBudW1iZXJzIGJ5IG4uXG4gICAqIFBlcmhhcHMgbW9zdCBzaW1pbGFyIHRvIHRoZSBjb3VudGVyLlxuICAgKlxuICAgKiBAcGFyYW0gc3RyaW5nIGlkIChFbGVtZW50cyBvZiB0aGUgZWxlbWVudCBtdXN0IGNvbnNpc3Qgb25seSBvZiBudW1iZXJzLilcbiAgICogQHBhcmFtIGludGVnZXIgZW5kIG51bWJlclxuICAgKiBAcGFyYW0gaW50ZWdlciBjb3VudCB1bml0XG4gICAqIEBwYXJhbSBpbnRlZ2VyIGludGVydmFsIChkZWZhdWx0IDAuMSwgbWlsc2VjKVxuICAgKi9cbiAgY291bnRCeU4oaWQsIGVuZCwgbiwgaW50ZXJ2YWwgPSAwLjEpIHtcbiAgICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBjb25zdCBzdGFydCA9IHBhcnNlSW50KGh0bWxFbGVtZW50LmlubmVyVGV4dC5yZXBsYWNlKC9cXEQrL2csICcnKSk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZW5kID4gc3RhcnQ7XG4gICAgY29uc3QgY29lZmZpY2llbnQgPSBkaXJlY3Rpb24gPyBuIDogLW47XG4gICAgY29uc3QgZGlmZmVyID0gTWF0aC5hYnMoZW5kIC0gc3RhcnQpO1xuICAgIGxldCBuZXh0TnVtYmVyID0gc3RhcnQ7XG4gICAgY29uc3Qgc2lkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbmV4dE51bWJlciArPSBjb2VmZmljaWVudDtcbiAgICAgIGlmIChkaXJlY3Rpb24gJiYgbmV4dE51bWJlciA+IGVuZCkge1xuICAgICAgICBodG1sRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQoZW5kLnRvU3RyaW5nKCkpO1xuICAgICAgICBjbGVhckludGVydmFsKHNpZCk7XG4gICAgICB9IGVsc2UgaWYgKCFkaXJlY3Rpb24gJiYgbmV4dE51bWJlciA8IGVuZCkge1xuICAgICAgICBodG1sRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQoZW5kLnRvU3RyaW5nKCkpO1xuICAgICAgICBjbGVhckludGVydmFsKHNpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodG1sRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQobmV4dE51bWJlci50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9LCBpbnRlcnZhbCk7XG4gIH0sXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGJlaGF2aW9yIG9mIHRoZSBmb3JtYXQgZnVuY3Rpb24uIFlvdSBjYW4gY3VzdG9taXplIGl0IHdpdGggJEIuZm9ybWF0U3R5bGVyID0geW91ckZ1bmN0aW9uO1xuICAgKiBAcGFyYW0gbnVtYmVyIG51bWJlciB0byBmb3JtYXRcbiAgICovXG4gIGZvcm1hdFN0eWxlcjogZGVmYXVsdEZvcm1hdFN0eWxlcixcbiAgZGVmYXVsdEZvcm1hdFN0eWxlcixcbn07XG5cbmZ1bmN0aW9uIGRlZmF1bHRGb3JtYXRTdHlsZXIobnVtYmVyKSB7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJEIubG9jYWxlT3B0aW9ucy5sb2NhbGUsIHtcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICBjdXJyZW5jeTogJEIubG9jYWxlT3B0aW9ucy5jdXJyZW5jeSxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gIH0pLmZvcm1hdChwYXJzZUludChudW1iZXIpKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KG51bWJlcikge1xuICBpZiAoISRCLmxvY2FsZU9wdGlvbnMuZm9ybWF0KSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJEIuZm9ybWF0U3R5bGVyKG51bWJlcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgJEIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=