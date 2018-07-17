var gulp = require('gulp'),
    config = require('../config'),
    tinypng = require('gulp-tinypng'),
    svgo = require('gulp-svgo'),
    changed = require('gulp-changed'),
    resize = require('gulp-image-resize');

// Komprimovat PNG obrazky pomoci tinypng.com
gulp.task('min-png', function() {
  return gulp.src(config.paths.img.png)
    .pipe(changed(config.paths.img.dest))
    .pipe(tinypng('XlNnBEzt9cg_f_PUN-m9mnAf_xgZ_F7D'))
    .pipe(gulp.dest(config.paths.img.dest));
});

// Komprimovat JPG obrazky pomoci tinypng.com
gulp.task('min-jpg', function() {
  return gulp.src(config.paths.img.jpg)
    .pipe(changed(config.paths.img.dest))
    .pipe(tinypng('XlNnBEzt9cg_f_PUN-m9mnAf_xgZ_F7D'))
    .pipe(gulp.dest(config.paths.img.dest));
});

// Komprimovat SVG
gulp.task('min-svg', function() {
  return gulp.src(config.paths.img.all)
    .pipe(changed(config.paths.img.dest))
    .pipe(svgo())
    .pipe(gulp.dest(config.paths.img.dest));
});

// Vytvorit thumbnaily galerie
gulp.task('thumbnails', function() {
  return gulp.src(config.paths.img.gallerysrc)
  .pipe(resize({
    width: 720,
    height: 432,
    crop: true,
    upscale: false
  }))
  .pipe(tinypng('XlNnBEzt9cg_f_PUN-m9mnAf_xgZ_F7D'))
  .pipe(gulp.dest(config.paths.img.thumbnailsdest));
});

// Vytvorit plne obrazky galerie
gulp.task('full-images', function() {
  return gulp.src(config.paths.img.gallerysrc)
  .pipe(resize({
    width: 2000,
    height: 1334,
    crop: true,
    upscale: false
  }))
  .pipe(tinypng('XlNnBEzt9cg_f_PUN-m9mnAf_xgZ_F7D'))
  .pipe(gulp.dest(config.paths.img.gallerydest));
});

gulp.task('gallery', ['thumbnails', 'full-images']);
gulp.task('images', ['min-png', 'min-jpg', 'min-svg']);
