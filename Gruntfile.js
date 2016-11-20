module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: require('./grunt/connect'),
    copy: require('./grunt/copy'),
    clean: require('./grunt/clean'),
    watch: require('./grunt/watch'),
    less: require('./grunt/less'),
    uglify: require('./grunt/uglify'),
    bowercopy: require('./grunt/bowercopy')
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.registerTask('build-prod', ['clean', 'copy', 'bowercopy', 'less:app', 'uglify:app']);
  grunt.registerTask('build-dev', ['clean', 'copy', 'bowercopy', 'less:dev', 'uglify:dev']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('run-app-dev', ['build-dev', 'server']);
};