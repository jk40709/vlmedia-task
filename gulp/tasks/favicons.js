var gulp = require('gulp'),
    config = require('../config'),
    copy = require('gulp-copy');

// Zkopirovat favicony do /dist
gulp.task('favicons', function() {
  return gulp.src(config.paths.favicons.all)
    .pipe(copy(config.paths.favicons.dest, {prefix: 3}))
    .pipe(gulp.dest(config.paths.favicons.dest));
});
