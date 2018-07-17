var gulp = require('gulp'),
    config = require('../config'),
    stripComments = require('gulp-strip-comments'),
    livereload = require('gulp-livereload');

// Odstranit komenty z HTML
gulp.task('strip', function() {
  return gulp.src(config.paths.html.entry)
    .pipe(stripComments())
    .pipe(gulp.dest(config.paths.html.dest))
    .pipe(livereload());
});
