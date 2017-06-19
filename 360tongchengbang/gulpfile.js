//引入gulp模块

//var gulp = require('gulp');                      //gulp
//var livereload = require('gulp-livereload');   
//var browserSync = require('browser-sync');   //
//var sass = require('gulp-sass');            //sass模块
//var uglify = require('gulp-uglify');       // js压缩 模块
//var rename = require('gulp-rename');      //重命名 模块
//var webserver = require('gulp-webserver');//web服务器模块
//var imagemin = require('gulp-imagemin'); // 图片压缩模块
//var  pngquant = require('imagemin-pngquant');//深度压缩模块
////gulp.task('webserver',function(){
////	gulp.src('./src/')         //源码目录
////	.pipe(webserver({
////		livereload:true,    //启用livereload
////		open:true          //启动服务器
////	}))
////});
//
//gulp.task('servers', function() {
// // 在浏览器服务启动后，设置一个观察者，来监视文件的变动，如果文件发生了改变，就来重新执行对应的任务
//  browserSync({
//          server: {baseDir: ['dist/']}
//
//      }, function(err, bs) {
//
//          console.log(bs.options.getIn(["urls", "local"]));
//  });
//  gulp.watch('./src/*.html', ['html']);
//  gulp.watch('./src/js/*.js',['script']);
//  gulp.watch('./src/css/*.scss', ['sass']);
//});
//
// 
//
//gulp.task('imagemin', function(){
//return gulp.src('src/images/**/*.{png,jpg,gif,svg}') // 指明源文件路径、并进行文件匹配
//  .pipe(imagemin({
//    progressive: true, // 无损压缩JPG图片
//    svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
//    use: [pngquant()] // 使用pngquant插件进行深度压缩
//  }))
//  .pipe(gulp.dest('src/images')); // 输出路径
//});
//
//
//
//gulp.task('script', function() {
//return gulp.src('src/js/*.js') // 指明源文件路径、并进行文件匹配
////  .pipe(uglify()) // 使用uglify进行压缩，并保留部分注释
////  .pipe(rename({suffix:'\.min' })) // 重命名
//  .pipe(gulp.dest('dist/js')); // 输出路径
//});
//
//
//gulp.task('sass', function () {
//  gulp.src('./src/css/*.scss')    //sass源码路径
//  .pipe(sass())                   //编译
//  .pipe(gulp.dest('./src/css/'))  //输出路径
////  .pipe(browserSync.reload({      //刷新
////      stream: true
////  }))
//});
//gulp.task('html',function(){       //
//	gulp.src('src/**/*.html')        //html源码路径
//	
//	.pipe(gulp.dest('src'))        //输出路径
//})
////  gulp.watch('./src/*.html', ['html']);     //监听html
////  gulp.watch('./src/js/*.js',['script']);       //监听js
////  gulp.watch('./src/css/*.scss', ['sass']);   //监听sass
//  
//gulp.task('default',['sass','script','imagemin','html','browser-sync']);


var gulp = require("gulp");
//注入gulp-sass插件
var sass = require("gulp-sass");
//注入
var browserSync = require('browser-sync');
//注入useref插件
var useref = require("gulp-useref");
//注入js压缩插件
var uglify = require("gulp-uglify");
//创建任务
gulp.task("sass",function(){
	return gulp.src('src/css/*.scss')
	.pipe(sass()) //调用sass编译方法
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream:true}));
})
//创建
gulp.task("browserSync",function(){
	return browserSync({
		server:{
			baseDir:"src"
		}
	})
})
//创建一个watch命令

gulp.task("watch",['sass','browserSync'],function(){
	gulp.watch('src/css/*.scss',['sass']);
	gulp.watch('src/js/*.js',browserSync.reload);
	gulp.watch('src/*.html',browserSync.reload);
})
//执行默认序列,直接输入gulp即可执行
gulp.task('default',["browserSync","sass","watch"]);

//以下大多上线的时候用
//创建一个拼接的任务

gulp.task('useref',function(){
	return gulp.src('src/*.html')
	.pipe(useref())
	.pipe(gulp.dest('src'))()
})

gulp.task("uglify",function(){
	gulp.src("src/js/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist/minjs"));
})


