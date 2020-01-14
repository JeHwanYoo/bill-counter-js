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
var BanknoteCounter =
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

/******/ });


const _BanknoteCounter$$B = BanknoteCounter['$B'];

export {
    _BanknoteCounter$$B as $B
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYW5rbm90ZUNvdW50ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQmFua25vdGVDb3VudGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVjIiwiZmlsZSI6ImJpbGwtY291bnRlci5lc20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0ICRCID0ge1xuICAvKipcbiAgICogU2VlIHRoZSBzaXRlIGJlbG93LlxuICAgKiBsb2NhbGUgOiBodHRwczovL3d3dy5zY2llbmNlLmNvLmlsL2xhbmd1YWdlL0xvY2FsZS1jb2Rlcy5waHBcbiAgICogY3VycmVuY3kgOiBodHRwczovL3d3dy5jdXJyZW5jeS1pc28ub3JnL2VuL2hvbWUvdGFibGVzL3RhYmxlLWExLmh0bWxcbiAgICovXG4gIGxvY2FsZU9wdGlvbnM6IHtcbiAgICBmb3JtYXQ6IHRydWUsXG4gICAgbG9jYWxlOiAnZW4tVVMnLFxuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgfSxcbiAgLyoqXG4gICAqIENvdW50IGFueSBudW1iZXIgaW4gYSBjZXJ0YWluIGFtb3VudCBvZiB0aW1lXG4gICAqXG4gICAqIEBwYXJhbSBzdHJpbmcgaWRcbiAgICogQHBhcmFtIGludGVnZXIgZW5kIG51bWJlclxuICAgKiBAcGFyYW0gaW50ZWdlciBkdXJhdGlvbiAoZGVmYXVsdCAxMDAsIG1pbHNlYylcbiAgICovXG4gIGNvdW50RmFzdChpZCwgZW5kLCBkdXJhdGlvbiA9IDEwMCkge1xuICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGNvbnN0IHN0YXJ0ID0gcGFyc2VJbnQoaHRtbEVsZW1lbnQuaW5uZXJUZXh0LnJlcGxhY2UoL1xcRCsvZywgJycpKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBlbmQgPiBzdGFydDtcbiAgICBjb25zdCBkaWZmZXIgPSBNYXRoLmFicyhlbmQgLSBzdGFydCk7XG4gICAgY29uc3QgY29lZmZpY2llbnQgPSBkaXJlY3Rpb24gPyBkaWZmZXIgLyBkdXJhdGlvbiA6IC1kaWZmZXIgLyBkdXJhdGlvbjtcbiAgICBsZXQgbmV4dE51bWJlciA9IHN0YXJ0O1xuICAgIGNvbnN0IHNpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIG5leHROdW1iZXIgKz0gY29lZmZpY2llbnQ7XG4gICAgICBpZiAoZGlyZWN0aW9uICYmIG5leHROdW1iZXIgPiBlbmQpIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KGVuZC50b1N0cmluZygpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaWQpO1xuICAgICAgfSBlbHNlIGlmICghZGlyZWN0aW9uICYmIG5leHROdW1iZXIgPCBlbmQpIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KGVuZC50b1N0cmluZygpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KE1hdGgucm91bmQobmV4dE51bWJlcikudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH0sXG4gIC8qKlxuICAgKiBDb3VudCB0aGUgbnVtYmVycyBieSBuLlxuICAgKiBQZXJoYXBzIG1vc3Qgc2ltaWxhciB0byB0aGUgY291bnRlci5cbiAgICpcbiAgICogQHBhcmFtIHN0cmluZyBpZCAoRWxlbWVudHMgb2YgdGhlIGVsZW1lbnQgbXVzdCBjb25zaXN0IG9ubHkgb2YgbnVtYmVycy4pXG4gICAqIEBwYXJhbSBpbnRlZ2VyIGVuZCBudW1iZXJcbiAgICogQHBhcmFtIGludGVnZXIgY291bnQgdW5pdFxuICAgKiBAcGFyYW0gaW50ZWdlciBpbnRlcnZhbCAoZGVmYXVsdCAwLjEsIG1pbHNlYylcbiAgICovXG4gIGNvdW50QnlOKGlkLCBlbmQsIG4sIGludGVydmFsID0gMC4xKSB7XG4gICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3Qgc3RhcnQgPSBwYXJzZUludChodG1sRWxlbWVudC5pbm5lclRleHQucmVwbGFjZSgvXFxEKy9nLCAnJykpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGVuZCA+IHN0YXJ0O1xuICAgIGNvbnN0IGNvZWZmaWNpZW50ID0gZGlyZWN0aW9uID8gbiA6IC1uO1xuICAgIGNvbnN0IGRpZmZlciA9IE1hdGguYWJzKGVuZCAtIHN0YXJ0KTtcbiAgICBsZXQgbmV4dE51bWJlciA9IHN0YXJ0O1xuICAgIGNvbnN0IHNpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIG5leHROdW1iZXIgKz0gY29lZmZpY2llbnQ7XG4gICAgICBpZiAoZGlyZWN0aW9uICYmIG5leHROdW1iZXIgPiBlbmQpIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KGVuZC50b1N0cmluZygpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaWQpO1xuICAgICAgfSBlbHNlIGlmICghZGlyZWN0aW9uICYmIG5leHROdW1iZXIgPCBlbmQpIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KGVuZC50b1N0cmluZygpKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KG5leHROdW1iZXIudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSwgaW50ZXJ2YWwpO1xuICB9LFxuICAvKipcbiAgICogRGVmaW5lIHRoZSBiZWhhdmlvciBvZiB0aGUgZm9ybWF0IGZ1bmN0aW9uLiBZb3UgY2FuIGN1c3RvbWl6ZSBpdCB3aXRoICRCLmZvcm1hdFN0eWxlciA9IHlvdXJGdW5jdGlvbjtcbiAgICogQHBhcmFtIG51bWJlciBudW1iZXIgdG8gZm9ybWF0XG4gICAqL1xuICBmb3JtYXRTdHlsZXI6IGRlZmF1bHRGb3JtYXRTdHlsZXIsXG4gIGRlZmF1bHRGb3JtYXRTdHlsZXIsXG59O1xuXG5mdW5jdGlvbiBkZWZhdWx0Rm9ybWF0U3R5bGVyKG51bWJlcikge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCRCLmxvY2FsZU9wdGlvbnMubG9jYWxlLCB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6ICRCLmxvY2FsZU9wdGlvbnMuY3VycmVuY3ksXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICB9KS5mb3JtYXQocGFyc2VJbnQobnVtYmVyKSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChudW1iZXIpIHtcbiAgaWYgKCEkQi5sb2NhbGVPcHRpb25zLmZvcm1hdCkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICRCLmZvcm1hdFN0eWxlcihudW1iZXIpO1xuICB9XG59XG5cbmV4cG9ydCB7ICRCIH07XG4iXSwic291cmNlUm9vdCI6IiJ9