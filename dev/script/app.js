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
		paginationClickable: true, //分页器可以点击
		mousewheelControl: true, //允许拖动鼠标切换
		preventClicks: false, //默认true
		//当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。

		autoplayDisableOnInteraction: false,
		//用户操作swiper之后，是否禁止autoplay。默认为true：停止。设置为false的话，可以继续autoplay

	})

	//$.ajax({
	//	//http://dynamic.qbaobei.com/dynamic.php?s=Qbaobeimobile/loadFirstNews&callback=jQuery1111013138540122878228_1497103117095&page=1&_=1497103117097
	//	url: '/api/index.php',
	//	data: {
	//		s:'/Dynamic/autoTask/push',
	//		url:'/',
	//		pm:'m'
	//	},
	//	success: function(res) {
	//		//  var str = ''
	//		//  var dataSource = res.content.data.page.result
	//		//  for (var i = 0; i < dataSource.length; i++) {
	//		//    str += '<li> \
	//		//    <div><img src="//www.lgstatic.com/'+ dataSource[i].companyLogo +'"></div> \
	//		//      <div> \
	//		//        <h2>'+ dataSource[i].companyName +'</h2> \
	//		//          <p>'+ dataSource[i].positionName +'</p> \
	//		//            <span>'+ dataSource[i].createTime +'</span> \
	//		//            </div> \
	//		//            <div>'+ dataSource[i].salary +'</div> \
	//		//            </li>';
	//		//  }
	//		//  $('.m-index section ul').html(str)
	//		console.log(res)
	//	}
	//})


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">	<div id=\"header\"></div>	<div id=\"nav\"></div>	<section id=\"section\"></section></div>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"logo\">	<a href=\"\">		<img src=\"../images/menu/logo.png\"/>	</a></h1><div class=\"search\">	<span class=\"yo-ico searchMagnifier\">&#xe600;</span>	高龄备孕二胎</div><span class=\"yo-ico marginR10\">&#xe66e;</span><span class=\"yo-ico marginR10\">&#xe602;</span>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<ul>	<li class=\"active\">		<a href=\"\">首页</a>	</li>	<li>		<a href=\"\">备孕</a>	</li>	<li>		<a href=\"\">分娩</a>	</li>	<li>		<a href=\"\">产后</a>	</li>	<li>		<a href=\"\">新生儿</a>	</li>	<li>		<a href=\"\">0-1岁</a>	</li>	<li>		<a href=\"\">1-3岁</a>	</li>	<li>		<a href=\"\">3-6岁</a>	</li></ul>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"scrollSection\">	<div class=\"swiper-container\">		<div class=\"swiper-wrapper\">			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/592537db03e95_5-2_448-179_crop.png\" />				<div class=\"title\">					<p class=\"title_text\">关于爸爸的绘本</p>				</div>			</a>			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/59268f0b467b8_5-2_448-179_crop.png\" />				<div class=\"title\">					<p class=\"title_text\">2017年宝宝最佳食物排行榜 告诉你什么食物给宝宝吃最好</p>				</div>			</a>			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/59312fbc60d4b_5-2_448-179_crop.png\" />				<div class=\"title\">					<p class=\"title_text\">2017年6月哪天生宝宝好 黄金日期你可知</p>				</div>			</a>			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/5932159f146bd_5-2_448-179_crop.png\" />				<div class=\"title\">					<p class=\"title_text\">父亲节超人爸爸创意礼物手工制作</p>				</div>			</a>			<a href=\"\" class=\"swiper-slide\">				<img src=\"/images/banner/593669b52d42f_5-2_448-179_crop.jpg\" />				<div class=\"title\">					<p class=\"title_text\">2017浙江省大学排名榜 浙江省高校综合实力排名揭晓</p>				</div>			</a>		</div>		<div class=\"swiper-pagination\"></div>	</div>	<div class=\"menu\">		<a href=\"\" class=\"\">			<div>				<span></span>			</div>			早教		</a>		<a href=\"\" class=\"\">			<div>				<span></span>			</div>			食谱		</a>		<a href=\"\" class=\"\">			<div>				<span></span>			</div>			视频		</a>		<a href=\"\" class=\"\">			<div>				<span></span>			</div>			APP		</a>		<a href=\"\" class=\"\">			<div>			</div>			试用		</a>		<a href=\"\" class=\"\">			<div>				<span></span>			</div>			问答		</a>		<a href=\"\" class=\"\">			<div>				<span></span>			</div>			百科		</a>		<a href=\"\" class=\"\">			<div>				<span></span>			</div>			工具		</a>		<a href=\"\" class=\"\">			<div>				<span></span>			</div>			奶粉		</a>		<a href=\"\" class=\"\">			<div>			</div>			听听		</a>	</div>	<ul class=\"listMore\">		<a href=\"\">			<div class=\"img_box\">				<img src=\"./images/listMore/593b5da5ee791_5-3_125-75_crop.png\" />			</div>			<div class=\"txt\">				<h4 class=\"txt_title\">胎儿双肾集合系统分离是什么意思</h4>				<p class=\"txt_content\">胎儿双肾集合系统分离是什么意思?怀孕期间，一些准妈妈做B超检查时，被医生告知胎儿的双肾集合系统分离，大部分妈妈都不懂是什么意思，但还是很担忧。那么，胎儿双肾集合系统分离是什么意思呢?</p>			</div>		</a>		<a href=\"\">			<div class=\"img_box\">				<img src=\"./images/listMore/5939ff57b851d_5-3_125-75_crop.png\" />			</div>			<div class=\"txt\">				<h4 class=\"txt_title\">网恋如何看出她爱你 隔着屏幕教你辨别真假爱情</h4>				<p class=\"txt_content\">胎儿双肾集合系统分离是什么意思?怀孕期间，一些准妈妈做B超检查时，被医生告知胎儿的双肾集合系统分离，大部分妈妈都不懂是什么意思，但还是很担忧。那么，胎儿双肾集合系统分离是什么意思呢?</p>			</div>		</a>		<a href=\"\">			<div class=\"img_box\">				<img src=\"./images/listMore/593a0a4051033_5-3_125-75_crop.png\" />			</div>			<div class=\"txt\">				<h4 class=\"txt_title\">眼霜哪个牌子好30岁 最佳的眼霜品牌</h4>				<p class=\"txt_content\">眼霜哪个牌子好30岁？市场上的眼霜有很多种，对于30岁的女性来说，好的眼霜可以有效淡化细纹，那么，哪款眼霜适合30岁用呢？30岁用什么牌子眼霜好呢？？</p>			</div>		</a>		<a href=\"\">			<div class=\"img_box\">				<img src=\"./images/listMore/593a60019d959_5-3_125-75_crop.jpg\" />			</div>			<div class=\"txt\">				<h4 class=\"txt_title\">多胞胎到底是怎么来的？想一次生俩的可不能错过</h4>			</div>		</a>		<a href=\"\">			<div class=\"img_box\">				<img src=\"./images/listMore/593a650023c92_5-3_125-75_crop.jpg\" />			</div>			<div class=\"txt\">				<h4 class=\"txt_title\">宝宝5个月可以坐吗？怎样帮助宝宝学坐</h4>				<p class=\"txt_content\">宝宝5个月可以坐吗？一般来说，六个月至六个半月的婴儿时期，宝宝会开始学会独立的坐姿，但是如果倾倒了，就无法自己恢复坐姿，一直要到八至九个月大时才能不须任何扶助，自己也能坐得好。所以说，宝宝5个月一般不可以坐。</p>			</div>		</a>		<a href=\"\">			<div class=\"img_box\">				<img src=\"./images/listMore/v_112492307_m_601_480_270.jpg\" />			</div>			<div class=\"txt\">				<h4 class=\"txt_title\">宝宝4个月不会翻身怎么办？怎样帮助宝宝练习翻身</h4>				<p class=\"txt_content\">宝宝4个月不会翻身怎么办？一般来说，发育好的宝宝三个月就能翻身了。但是大多数的宝宝都是在4个月才会翻身，宝宝会翻身的高峰期是在5个月。那么，宝宝4个月不会翻身怎么办呢？家长如何训练宝宝翻身呢？</p>			</div>		</a>	</ul></div>"

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