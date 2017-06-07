var indexTpl = require('../tpls/index.string')
var headerTpl = require('../tpls/header.string')
var navTpl = require('../tpls/nav.string')


var commonUtil = require('../utils/common')

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