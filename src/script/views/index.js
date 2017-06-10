var indexTpl = require('../tpls/index.string')
var headerTpl = require('../tpls/header.string')
var navTpl = require('../tpls/nav.string')
var sectionTpl = require('../tpls/section.string')
//var bannerTpl = require('../tpls/banner.string')

var commonUtil = require('../utils/common')

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