module.exports = {

  paths: {
    project: './',
    html: {
      entry: './app/*.html',
      dest: './dist'
    },
    css: {
      entry: './app/assets/styles/app.scss',
      all: './app/assets/styles/**/*.scss',
      dest: './dist/assets/css'
    },
    js: {
      entry: './app/assets/scripts/app.js',
      vendor: './app/assets/scripts/vendor/*.js',
      custom: './app/assets/scripts/custom.js',
      other: './app/assets/scripts/other/*.js',
      all: './app/assets/scripts/**/*.js',
      dest: './dist/assets/js'
    },
    img: {
      all: './app/assets/images/**/*',
      png: './app/assets/images/**/*.png',
      jpg: './app/assets/images/**/*.jpg',
      svg: './app/assets/images/**/*.svg',
      dest: './dist/assets/img/',
      gallerysrc: './app/assets/images/gallery/*.png',
      thumbnailsdest: './dist/assets/img/gallery/thumbnails/',
      gallerydest: './dist/assets/img/gallery'
    },
    favicons: {
      all: './app/assets/favicons/*',
      dest: './dist/assets/fav/'
    },
    fonts: {
      all: './app/assets/fonts/*',
      dest: './dist/assets/fonts/'
    },
    data: {
      all: './app/assets/data/*',
      dest: './dist/assets/data/'
    }
  },

  names: {
    css: 'main.min.css',
    js: {
      app: 'library.min.js',
      custom: 'custom.min.js'
    }
  }
};
