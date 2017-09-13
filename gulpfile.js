const gulp                   = require('gulp');
const plumber                = require('gulp-plumber');
const rename                 = require('gulp-rename');
const autoprefixer           = require('gulp-autoprefixer');
const concat                 = require('gulp-concat');
const uglify                 = require('gulp-uglify');
const minifycss              = require('gulp-minify-css');
const sass                   = require('gulp-sass');
const cmq                    = require('gulp-merge-media-queries');
const sourcemaps             = require('gulp-sourcemaps');

// File Paths
// -----------------------------------------------------------------------------
const SCRIPTS_PATH = 'src/js/**/*.js';
const CSS_PATH     = 'src/scss/**/*.scss';

// Build CSS Files
// -----------------------------------------------------------------------------
gulp.task('styles', function() {
  gulp.src(CSS_PATH)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', 'ie 9'))
    // Write sourcemap to uncompressed file only
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('web/assets/css/'))

    // Create production file, minify, and clean up media queries
    .pipe(rename({suffix: '.min'}))
    .pipe(cmq())
    .pipe(minifycss())
    .pipe(gulp.dest('web/assets/css/'))
});

// Build JS Files
// -----------------------------------------------------------------------------
gulp.task('scripts', function() {
  return gulp.src([
      'src/js/vendor/**/*.js',
      'src/js/lib/**/*.js',
      'src/js/application.js'
    ])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('application.js'))
    .pipe(gulp.dest('web/assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('web/assets/js/'))
});

// Defaults
// -----------------------------------------------------------------------------
gulp.task('default', ['styles', 'scripts'], function() {
  gulp.watch(CSS_PATH, ['styles']);
  gulp.watch(SCRIPTS_PATH, ['scripts']);
});

gulp.task('build', ['styles', 'scripts']);
