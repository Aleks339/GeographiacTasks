var gulp = require('gulp');
var less = require('gulp-less');

gulp.task("less", function () {
   gulp.src('less/mystyles.less')
     .pipe(less())   .pipe(gulp.dest('css'));
});

gulp.task('less:watch', function(){
    gulp.watch('less/mystyles.css', ['less']);
});