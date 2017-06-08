var indexTpl = require('../tpls/index.string')
var headerTpl = require('../tpls/header.string')
var navTpl = require('../tpls/nav.string')
var sectionTpl = require('../tpls/section.string')
//var bannerTpl = require('../tpls/banner.string')


var swiper = require('../utils/swiper-3.4.2.jquery.min')

var commonUtil = require('../utils/common')

commonUtil.renderBody(indexTpl)
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('nav'), navTpl)
commonUtil.render(document.getElementById('section'), sectionTpl)
//commonUtil.render(document.getElementById('banner'), bannerTpl)

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