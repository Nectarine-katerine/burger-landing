var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css');
 
gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss('main.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  })
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('app/'))
    .pipe(notify('Done!'));
});

gulp.task('watch', function(){
  gulp.watch('css/*.css', ['default'])
})