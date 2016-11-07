module.exports = {
  uglify: {
    options: {
      mangle: true,
      compress: true,
      sourceMap: true
    },
    app: {
      files: {
        'dist/js/app.js': ['src/js/**/*.js']
      }
    }
  }
};
