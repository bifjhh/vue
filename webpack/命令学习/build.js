/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// 1 获取dom对象
	var v1 = document.querySelector('#v1');
	var v2 = document.querySelector('#v2');
	var bt = document.querySelector('#bt');
	var res = document.querySelector('#res');

	bt.onclick = function () {

	    // 2 获取calc.js中的add方法并且调用计算结果
	    var v1value = parseFloat(v1.value);
	    var v2value = parseFloat(v2.value);

	    // 调用add方法
	    var add = __webpack_require__(1);
	    res.value = add(v1value, v2value);
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	// 1.0 定义add函数
	function add(x, y) {
	    return x + y
	}

	// 2.0 导出add方法
	module.exports = add;


/***/ }
/******/ ]);