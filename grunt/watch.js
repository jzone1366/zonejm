var LIVERELOAD_PORT = 35729;
module.exports = {
  options: {
    livereload: LIVERELOAD_PORT
  },
  copy: {
    files: ['src/index.html'],
    tasks: ['copy']
  },
  sass: {
    files: ['src/sass/**/*.scss'],
    tasks: ['sass']
  }
};