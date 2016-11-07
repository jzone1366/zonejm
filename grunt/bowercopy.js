module.exports = {
  external: {
    options: {
      destPrefix: 'dist/js/external'
    },
    files: {
      'jquery.min.js': 'jquery/dist/jquery.min.js',
      'jquery.min.map': 'jquery/dist/jquery.min.map',
      'foundation.min.js': 'foundation/js/foundation.min.js',
      'modernizr.js': 'modernizr/modernizr.js'
    }
  },
  fonts: {
    options: {
      destPrefix: 'dist/fonts'
    },
    files: {
      'fontawesome-webfont.eot': 'font-awesome/fonts/fontawesome-webfont.eot',
      'fontawesome-webfont.svg': 'font-awesome/fonts/fontawesome-webfont.svg',
      'fontawesome-webfont.ttf': 'font-awesome/fonts/fontawesome-webfont.ttf',
      'fontawesome-webfont.woff': 'font-awesome/fonts/fontawesome-webfont.woff',
      'fontawesome-webfont.woff2': 'font-awesome/fonts/fontawesome-webfont.woff2',
      'FontAwesome.otf': 'font-awesome/fonts/FontAwesome.otf'
    }
  }
};