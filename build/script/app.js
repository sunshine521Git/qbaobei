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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(2)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var indexTpl = __webpack_require__(3)
	var headerTpl = __webpack_require__(4)
	var navTpl = __webpack_require__(5)


	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(indexTpl)
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('nav'), navTpl)

	//$.ajax({
	//url: '/listmore.json?pageNo=2&pageSize=15',
	//success: function (res) {
	//  var str = ''
	//  var dataSource = res.content.data.page.result
	//  for (var i = 0; i < dataSource.length; i++) {
	//    str += '<li> \
	//    <div><img src="//www.lgstatic.com/'+ dataSource[i].companyLogo +'"></div> \
	//      <div> \
	//        <h2>'+ dataSource[i].companyName +'</h2> \
	//          <p>'+ dataSource[i].positionName +'</p> \
	//            <span>'+ dataSource[i].createTime +'</span> \
	//            </div> \
	//            <div>'+ dataSource[i].salary +'</div> \
	//            </li>';
	//  }
	//  $('.m-index section ul').html(str)
	//}
	//})


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">  <div id=\"header\"></div>  <div id=\"nav\"></div>  <section>    <div id=\"banner\"> </div>    <div id=\"menu\"></div>  </section></div>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<header>  亲亲宝贝  你好！</header>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<footer><ul>  <li>职位</li>  <li>职位2</li>  <li>职位3</li></ul></footer>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	var common = {
	  renderBody: function (tpl) {
	    var body = document.body
	    body.innerHTML = tpl + body.innerHTML
	  },
	  render: function (obj, tpl) {
	    obj.innerHTML = tpl
	  }
	}

	module.exports = common



/***/ })
/******/ ]);