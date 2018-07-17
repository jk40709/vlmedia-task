var gulp = require('gulp'),
    jshint = require('gulp-jshint');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    copy = require('gulp-copy'),
    config = require('../config');


// Spojit a minifikovat vendor scripty
gulp.task('vendor-scripts', function() {
  return gulp.src(config.paths.js.vendor)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename(config.names.js.app))
    .pipe(gulp.dest(config.paths.js.dest));
});

// Zachytit chyby v custom.js
gulp.task('lint', function() {
  return gulp.src(config.paths.js.custom)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Minifikovat custom script
gulp.task('custom-scripts', function() {
  return gulp.src(config.paths.js.custom)
    .pipe(uglify())
    .pipe(rename(config.names.js.custom))
    .pipe(gulp.dest(config.paths.js.dest))
    .pipe(livereload());
});

// Copy Modernizr
gulp.task('other', function() {
  return gulp.src(config.paths.js.other)
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.js.dest))
});
