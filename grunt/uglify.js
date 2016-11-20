module.exports = {
  dev: {
    options: {
      sourceMap: true
    },
    files: {
      'dist/js/app.built.js': ['src/js/**/*.js']
    }
  },
  app: {
    options: {
      mangle: true,
      compress: true,
      sourceMap: true
    },
    files: {
      'dist/js/app.built.js': ['src/js/**/*.js']
    }
  }
};
