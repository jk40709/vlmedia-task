var gulp = require('gulp'),
    config = require('../config'),
    copy = require('gulp-copy');

// Zkopirovat data do /dist
// Zkopirovat favicony do /dist
gulp.task('data', function() {
    return gulp.src(config.paths.data.all)
      .pipe(copy(config.paths.data.dest, {prefix: 3}))
      .pipe(gulp.dest(config.paths.data.dest));
  });