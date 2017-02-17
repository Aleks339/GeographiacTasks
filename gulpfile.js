var gulp = require('gulp');
var less = require('gulp-less');

gulp.task("less", function () {
   gulp.src('less/myStyles.less')
     .pipe(less())   .pipe(gulp.dest('less/myStyles.css'));
});

gulp.task('less:watch', function(){
    gulp.watch('less/myStyles.css', ['less']);
});