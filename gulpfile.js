var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css');
 
gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/'))
    .pipe(notify('Done!'));
});

gulp.task('watch', function(){
  gulp.watch('css/*.css', ['default'])
})