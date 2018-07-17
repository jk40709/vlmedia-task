var gulp = require('gulp'),
    copy = require('gulp-copy'),
    config = require('../config');

// Zkopirovat soubory fontu do /dist
gulp.task('fonts', function() {
  gulp.src(config.paths.fonts.all)
    .pipe(copy(config.paths.fonts.dest, {prefix: 4}))
    .pipe(gulp.dest(config.paths.fonts.dest));
});
