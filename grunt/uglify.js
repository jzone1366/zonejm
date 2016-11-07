module.exports = {
  app: {
    options: {
      mangle: true,
      compress: true,
      sourceMap: true
    },
    files: {
      'dist/js/app.js': ['src/js/**/*.js']
    }
  }
};
