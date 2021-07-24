/******/ ;(() => {
	// webpackBootstrap
	/******/ 'use strict'
	/******/ var __webpack_modules__ = {
		/***/ './src/module.js':
			/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r(__webpack_exports__)
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ default: () => /* binding */ helloItem,
					/* harmony export */
				})
				function helloItem(itemName) {
					return 'Hello '.concat(itemName)
				}

				/***/
			},

		/******/
	}
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {}
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId]
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		})
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](
			module,
			module.exports,
			__webpack_require__
		)
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/define property getters */
	/******/ ;(() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
					/******/ Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key],
					})
					/******/
				}
				/******/
			}
			/******/
		}
		/******/
	})()
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ ;(() => {
		/******/ __webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop)
		/******/
	})()
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ ;(() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = exports => {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: 'Module',
				})
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true })
			/******/
		}
		/******/
	})()
	/******/
	/************************************************************************/
	var __webpack_exports__ = {}
	// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
	;(() => {
		/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
		__webpack_require__.r(__webpack_exports__)
		/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ =
			__webpack_require__(/*! ./module */ './src/module.js')
		// import _ from 'lodash'
		// function component() {
		// 	const element = document.createElement('div')
		// 	// Lodash, now imported by this script
		// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
		// 	return element
		// }
		// document.body.appendChild(component())

		var item = {
			name: 'console',
		}
		console.log((0, _module__WEBPACK_IMPORTED_MODULE_0__.default)(item.name))
	})()

	/******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xNV90b29scy0tY29kZS1tb2R1bGFyaXR5LWFuZC13ZWJwYWNrLy4vc3JjL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8xNV90b29scy0tY29kZS1tb2R1bGFyaXR5LWFuZC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzE1X3Rvb2xzLS1jb2RlLW1vZHVsYXJpdHktYW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzE1X3Rvb2xzLS1jb2RlLW1vZHVsYXJpdHktYW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xNV90b29scy0tY29kZS1tb2R1bGFyaXR5LWFuZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMTVfdG9vbHMtLWNvZGUtbW9kdWxhcml0eS1hbmQtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJoZWxsb0l0ZW0iLCJpdGVtTmFtZSIsIml0ZW0iLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImhlbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCO0FBQzNDLHlCQUFnQkEsUUFBaEI7QUFDQSxDOzs7Ozs7VUNGRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUMsSUFBSSxHQUFHO0FBQ1hDLE1BQUksRUFBRTtBQURLLENBQWI7QUFJQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdEQUFLLENBQUNKLElBQUksQ0FBQ0MsSUFBTixDQUFqQixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWxsb0l0ZW0oaXRlbU5hbWUpIHtcblx0cmV0dXJuIGBIZWxsbyAke2l0ZW1OYW1lfWBcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICBoZWxsbyBmcm9tICcuL21vZHVsZSdcblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuLy8gXHQvLyBMb2Rhc2gsIG5vdyBpbXBvcnRlZCBieSB0aGlzIHNjcmlwdFxuLy8gXHRlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKVxuXG4vLyBcdHJldHVybiBlbGVtZW50XG4vLyB9XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpXG5cbmNvbnN0IGl0ZW0gPSB7XG4gIG5hbWU6ICdjb25zb2xlJyxcbn1cblxuY29uc29sZS5sb2coaGVsbG8oaXRlbS5uYW1lKSkiXSwic291cmNlUm9vdCI6IiJ9
