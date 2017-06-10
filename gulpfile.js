//1、 引入 gulp 包
var gulp = require('gulp')

///2、引入 gulp-webserver 包
var webserver = require('gulp-webserver')

//3、引入反向代理的 包
var proxy = require('http-proxy-middleware')

///4、引入 gulp-webpack 包
var webpack = require('gulp-webpack')

//5、引入 文件名提取 包
var named = require('vinyl-named')

//6、引入 gulp-sass 包
var sass = require('gulp-sass')

//7、版本号控制相关的 包
var rev = require('gulp-rev')
var revCollector = require('gulp-rev-collector')
var del = require('del') //删除模块
var gulpSequence = require('gulp-sequence') // 序列

//8、gulp load 包
var $ = require('gulp-load-plugins')()

//9、环境切换配置 包
var minimist = require('minimist') //可以获取命令行里的参数
var gulpif = require('gulp-if') //if语句
var knowOptions = {
	string: 'env',
	default: {
		env: process.env.NODE_ENV || 'production'
	}
}
var options = minimist(process.argv.slice(2), knowOptions)

//任务1： 启动一个webserver服务
gulp.task('webserver', function() {
	gulp.src('./dev/')
		.pipe(
			webserver({
				host: 'localhost',
				port: 8000,
				directoryListing: {
					enable: true,
					path: './dev'
				},
				livereload: true,
				middleware: [
					//反向代理
					proxy('/mock', {
						target: 'http://localhost:9000/',
						//目标

						changeOrigin: true,
						//识别localhost向其他域名的跳转

						pathRewrite: {
							'^/mock': ''
							//浏览器看到mock就去9000域名，并且删除mock
						}
					}),
					proxy('/api,', {
						//目标地址
						target: 'http://m.qbaobei.com/',

						changeOrigin: true,
						//识别localhost向其他域名的跳转

						pathRwrite: {
							'^/api': ''
							//浏览器看到api就去对应的域名，并且删除api
						}
					})
				]

			})
		)
})

//任务2： 打包 js
gulp.task('packjs', function() {
	gulp.src([
			'./src/script/app.js',
			'./src/script/app-search.js'
		])
		.pipe(named())
		.pipe(webpack({
			output: {
				filename: '[name].js'
			},
			module: {
				loaders: [{
						test: /\.js$/,
						loader: 'imports-loader',
						exclude: './node_modules'
					},
					{
						test: /\.string$/,
						loader: 'string-loader'
					}
				]
			}
		}))
		.pipe(gulpif(options.env === 'production', $.uglify())) //生产环境  压缩js
		.pipe(gulpif(options.env === 'production', rev())) //生产环境  给js加版本号
		.pipe(gulpif(options.env === 'production', gulp.dest('./build/script')))
		//生产环境  将js输送到build下
		.pipe(gulpif(options.env !== 'production', gulp.dest('./dev/script')))
		//开发环境  将js输送到dev下
		.pipe(gulpif(options.env === 'production', rev.manifest())) //生产环境  产生json文件
		.pipe(gulpif(options.env === 'production', gulp.dest('./build/rev/script')))
	//生产环境 将json文件输送到bulid下的rev下的script
})

//任务3： 打包  scss
gulp.task('packcss', function() {
	gulp.src([
			'./src/style/usage/app.scss',
			'./src/style/usage/readyBaby.scss'
		])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulpif(options.env === 'production', $.minifyCss()))
		//生产环境  压缩css
		.pipe(gulpif(options.env === 'production', rev()))
		//生产环境  给css增加版本号
		.pipe(gulpif(options.env === 'production', gulp.dest('./build/style')))
		//生产环境  将js输送到bulid下
		.pipe(gulpif(options.env !== 'production', gulp.dest('./dev/style')))
		//开发环境  将js输送到dev下
		.pipe(gulpif(options.env === 'production', rev.manifest()))
		//生产环境  给css增加json文件
		.pipe(gulpif(options.env === 'production', gulp.dest('./build/rev/style')))
	//生产环境  将css的json文件输送到bulid下的rev下的style
})

//任务4： 拷贝src下的html到build下
gulp.task('copyhtml', function() {
	gulp.src('./src/*.html')
		.pipe(gulpif(options.env === 'production', gulp.dest('./build/')))
		.pipe(gulpif(options.env !== 'production', gulp.dest('./dev/')))
})

//任务5： html 增加版本号
gulp.task('packhtml', function() {
	return gulp.src(['./bulid/rev/**/*.json', './bulid/*.html'])
		.pipe(revCollector()) //从manifests中获取静态资源版本数据, 该数据由不同的流产生, 并且替换html中的链接
		.pipe($.minifyHtml())
		.pipe(gulp.dest('./bulid/'))
})

//任务6： copy images
gulp.task('copyimage', function() {
	gulp.src('./src/images/**/*')
		.pipe(gulpif(options.env === 'production', gulp.dest('./build/images')))
		.pipe(gulpif(options.env !== 'production', gulp.dest('./dev/images')))
})

//任务7： copy libs
gulp.task('copylibs', function() {
	gulp.src('./src/script/libs/**/*')
		.pipe(gulpif(options.env === 'production', gulp.dest('./build/libs')))
		.pipe(gulpif(options.env !== 'production', gulp.dest('./dev/libs')))
})

//任务9： 监测文件变化
gulp.task('watch', function() {
	gulp.watch('./src/*.html', ['copyhtml'])
	gulp.watch('./src/script/**/*.js', ['packjs'])
	gulp.watch('./src/script/**/*.string', ['packjs'])
	gulp.watch('./src/style/usage/**/*.scss', ['packcss'])
	gulp.watch('./src/images/**/*', ['copyimage'])
	gulp.watch('./src/libs/**/*', ['copylibs'])
})

//任务10：删除 bulid 里的所有文件
gulp.task('clean', del.bind(null, ['./bulid/**/*'], {
	force: true
}))

//任务11：总的 pack任务
gulp.task('pack', function(callback) {
	if(options.env === 'production') {
		//注意 串行  并行  逗号前后的有先后顺序 但是【】中间的没有先后顺序
		gulpSequence('clean', ['packjs', 'packcss','copylibs', 'copyimage', 'copyhtml'], 'packhtml')(callback)
	} else {
		gulpSequence(['packjs', 'packcss','copyhtml', 'copylibs', 'copyimage'])(callback)
	}

})

//任务12： 定义默认任务
gulp.task('default', ['pack', 'watch', 'webserver'], function() {
	console.log('恭喜大神！默认任务执行完成!.')
})