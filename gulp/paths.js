module.exports = {
  src: {
    html: 'src/*.html',
    css: 'src/sass/main.scss',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
  },
  watch: {
    html: 'src/**/*.html',
    css: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
  },
  build: {
    html: 'build/',
    css: 'build/assets/css',
    js: 'build/assets/js',
    images: 'build/assets/images',
    fonts: 'build/assets/fonts',
  },
  inject: {
    html: 'build/index.html',
    css: 'build/assets/css/**/*.css',
    js: 'build/assets/js/**/*.js',
  },
  clean: 'build/',
};
