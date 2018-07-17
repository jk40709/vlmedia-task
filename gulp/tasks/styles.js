var gulp = require('gulp'),
    config = require('../config'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    please = require('gulp-pleeease');

// Kompilovat, prefixovat a minifikovat styly
gulp.task('styles', function() {
  return gulp.src(config.paths.css.all)
    .pipe(sass())
    .on('error', function (err) {
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(please({
      sass: true
    }))
    .pipe(rename(config.names.css))
    .pipe(gulp.dest(config.paths.css.dest))
    .pipe(livereload());
});
