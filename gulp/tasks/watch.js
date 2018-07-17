var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    config = require('../config');

// Sledovat zmeny
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(config.paths.html.entry, ['strip']);
  gulp.watch(config.paths.css.all, ['styles']);
  gulp.watch(config.paths.img.all, ['images']);
  gulp.watch(config.paths.js.vendor, ['vendor-scripts']);
  gulp.watch(config.paths.js.custom, ['lint', 'custom-scripts']);
});
