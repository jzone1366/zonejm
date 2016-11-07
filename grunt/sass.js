module.exports = {
  options: {
    sourceMap: true,
    includePaths: ['bower_components/foundation/scss', 'bower_components/'],
    outputStyle: 'compressed'
  },
  dist: {
    files: {
      'dist/css/app.css': 'src/scss/app.scss'
    }
  }
};