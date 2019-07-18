
var gulp = require('gulp');
var concat = require('gulp-concat');//合并
var uglify = require('gulp-uglify');//压缩JS
var minifyCss = require('gulp-minify-css');//压缩CSS
var rename = require('gulp-rename');//重命名
var minifyHtml = require('gulp-minify-html');//压缩HTML
var imagemin = require('gulp-imagemin')//压缩图片
var server = require('browser-sync').create();

//压缩JS
gulp.task('uglify',function(){
    gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
})

//压缩CSS
gulp.task('minifyCss',function(){
    gulp.src('./css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'))
})

//压缩HTML
gulp.task('minifyHtml',function(){
    gulp.src('./*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist/'))
})

//压缩图片
gulp.task('imagemin',function(){
    gulp.src('./img/')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'))
})

//自动刷新
gulp.task('server',function(){
    server.init({
        server: './',
        port: 3002
    });
    gulp.watch('./*.html').on('change',server.reload);
})
