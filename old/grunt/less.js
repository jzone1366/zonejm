var cleanCssOptions = {
  advanced: true,
  compatibility: 'ie8'
};

module.exports = {
  dev: {
    options: {
      paths: [
        'bower_components',
        'bower_components/bootstrap/less'
      ]
    },
    files: {
      'dist/css/app.built.css': 'src/less/app.less'
    }
  },
  app: {
    options: {
      paths: [
        'bower_components',
        'bower_components/bootstrap/less'
      ],
      plugins: [
        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
        new (require('less-plugin-clean-css'))(cleanCssOptions)
      ]
    },
    files: {
      'dist/css/app.built.css': 'src/less/app.less'
    }
  }
};