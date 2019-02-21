const {src, dest, task, series, watch} = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

task('clean', () => {
  return src('dist/**/*', { read: false }).pipe(rm())
})

task('copy:html', () => {
    return src('src/*.html').pipe(dest('dist')).pipe(reload({stream: true}));
  });
  task('copy:sprite', () => {
    return src('src/*.svg').pipe(dest('dist')).pipe(reload({stream: true}));
  });
  task('copy:img', () => {
    return src('src/img/*').pipe(dest('dist/img')).pipe(reload({stream: true}));
  });
  task('copy:fonts', () => {
    return src('src/fonts/*').pipe(dest('dist/fonts')).pipe(reload({stream: true}));
  });

const styles = [
  'node_modules/normalize.css/normalize.css',
  'src/css/main.scss'
]

  task('styles', () => {
    return src(styles)
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  })
  )
  .pipe(gcmq())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(dest('dist'))
  .pipe(reload({stream: true}));
  });

 const libs = [
   'node_modules/jquery/dist/jquery.js',
  'src/scripts/*.js'
 ]

task('scripts', () =>{
  return src(libs)
  .pipe(sourcemaps.init())
  .pipe(concat('main.min.js', {newLine: ';'}))
  .pipe(babel({
    presets: ['@babel/env']
})
)
.pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(dest('dist'))
  .pipe(reload({stream: true}));
})

  task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});

  watch('./src/css/**/*.scss', series('styles'));
  watch('./src/*.html', series('copy:html'));
  watch('./src/scripts/*.js', series('scripts'));

task('default', series('clean', 'copy:html', 'copy:sprite', 'copy:img', 'copy:fonts', 'styles', 'scripts', 'server'));