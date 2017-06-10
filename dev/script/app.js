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
	var sectionTpl = __webpack_require__(6)
	//var bannerTpl = require('../tpls/banner.string')

	var commonUtil = __webpack_require__(7)

	commonUtil.renderBody(indexTpl)
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('nav'), navTpl)
	commonUtil.render(document.getElementById('section'), sectionTpl)
	//commonUtil.render(document.getElementById('banner'), bannerTpl)

	//nav 的轮播图
	var myNavScroll = new IScroll('#nav', {
		scrollX: true
	})

	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 3000, //可选选项，自动滑动
		loop: true, //开启循环
		speed: 800, //每张页面的切换速度
		pagination: '.swiper-pagination', //分页器
		paginationClickable :true,//分页器可以点击
		mousewheelControl : true,//允许拖动鼠标切换
		preventClicks : false,//默认true
		//当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
		
		autoplayDisableOnInteraction : false,
		//用户操作swiper之后，是否禁止autoplay。默认为true：停止。设置为false的话，可以继续autoplay
		
	})



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

	module.exports = "<div class=\"m-index\">	<div id=\"header\"></div>	<div id=\"nav\"></div>	<section id=\"section\"></section></div>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"logo\">	<a href=\"\">		<img src=\"../images/logo.png\"/>	</a></h1><div class=\"search\">	<span class=\"yo-ico searchMagnifier\">&#xe600;</span>	高龄备孕二胎</div><span class=\"yo-ico marginR10\">&#xe66e;</span><span class=\"yo-ico marginR10\">&#xe602;</span>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<ul>	<li class=\"active\">		<a href=\"\">首页</a>	</li>	<li>		<a href=\"\">备孕</a>	</li>	<li>		<a href=\"\">分娩</a>	</li>	<li>		<a href=\"\">产后</a>	</li>	<li>		<a href=\"\">新生儿</a>	</li>	<li>		<a href=\"\">0-1岁</a>	</li>	<li>		<a href=\"\">1-3岁</a>	</li>	<li>		<a href=\"\">3-6岁</a>	</li></ul>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"scrollSection\">	<div class=\"swiper-container\">		<div class=\"swiper-wrapper\">			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/592537db03e95_5-2_448-179_crop.png\" />				<div class=\"title\">					<p class=\"title_text\">关于爸爸的绘本</p>				</div>			</a>			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/59268f0b467b8_5-2_448-179_crop.png\" />				<div class=\"title\">					<p class=\"title_text\">2017年宝宝最佳食物排行榜 告诉你什么食物给宝宝吃最好</p>				</div>			</a>			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/59312fbc60d4b_5-2_448-179_crop.png\" />				<div class=\"title\">					<p class=\"title_text\">2017年6月哪天生宝宝好 黄金日期你可知</p>				</div>			</a>			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/5932159f146bd_5-2_448-179_crop.png\" />				<div class=\"title\">					<p class=\"title_text\">父亲节超人爸爸创意礼物手工制作</p>				</div>			</a>			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/593669b52d42f_5-2_448-179_crop.jpg\" />				<div class=\"title\">					<p class=\"title_text\">2017浙江省大学排名榜 浙江省高校综合实力排名揭晓</p>				</div>			</a>		</div>		<div class=\"swiper-pagination\"></div>	</div></div>"

/***/ }),
/* 7 */
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