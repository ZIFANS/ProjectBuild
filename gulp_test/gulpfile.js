var gulp=require('gulp');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var less=require('gulp-less');
var cssClean=require('gulp-clean-css');
var htmlMin=require('gulp-htmlmin');
var livereload=require('gulp-livereload');

// 注册任务
// 注册合并压缩js任务
gulp.task('js',function(){
    return gulp.src('src/js/*.js')  //找到目标源文件，将数据读取到gulp内存中
        .pipe(concat('build.js'))   // 临时合并文件
        .pipe(gulp.dest('dist/js/'))  // 输出文件到本地
        .pipe(uglify())             // 压缩文件
        .pipe(rename({suffix:'.min'}))  // 重命名
        .pipe(gulp.dest('dist/js/'))
});

// 注册转换Less的任务
gulp.task('less',function(){
    return gulp.src('src/less/*.less')
    .pipe(less())       //编译Less文件为css文件，不需要重命名也可以
    .pipe(gulp.dest('src/css/'))  
    .pipe(livereload());
});

// 注册合并压缩css文件
/*gulp.task('css',['less'],function(){
    return gulp.src('src/css/*.css')
    .pipe(concat('build.css'))
    .pipe(rename({suffix:'.min'}))
    .pipe(cssClean({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'))
});*/


gulp.task('css',gulp.series('less',() => {
    // Do something after a,b, and c are finished.
    return gulp.src('src/css/*.css')
    .pipe(concat('build.css'))
    .pipe(rename({suffix:'.min'}))
    .pipe(cssClean({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe(livereload());
}));

// 注册压缩html的任务
gulp.task('html',function(){
    return gulp.src('index.html')
    .pipe(htmlMin({collapseWhitespace:true}))   // 压缩空格
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});




//gulp.task('default',['js','less','css']); 这个不能在gulp 4.0版本上这样写，下面的写法才是正确的。


gulp.task('default',gulp.series('js','less','css','html',() => {
    // Do something after a,b, and c are finished.
     return pipe(livereload());
}));

// 注册监视任务
gulp.task('watch',gulp.series('default',() => {
    livereload.listen();    // 开启监听
    // 确认监听的目标以及绑定的任务
    gulp.watch('src/js/*.js',['js']);
    gulp.watch(['src/css/*.css','src/less/*.less'],['css'])
}));
