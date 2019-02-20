const {src, dest, task} = require('gulp');
const rm = require( 'gulp-rm' );

task( 'clean:tmp', function() {
  return gulp.src( 'app/tmp/**/*', { read: false })
    .pipe( rm() )
})

function copy(){
  return src('src/css/**/*.scss').pipe(dest('dist'))
}

exports.copy = copy