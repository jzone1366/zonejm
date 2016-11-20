var LIVERELOAD_PORT = 35729;
module.exports = {
  options: {
    livereload: LIVERELOAD_PORT
  },
  copy: {
    files: ['src/index.html'],
    tasks: ['copy']
  },
  less: {
    files: ['src/less/**/*.less'],
    tasks: ['less:dev']
  }
};