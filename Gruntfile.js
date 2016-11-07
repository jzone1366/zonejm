module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: require('./grunt/connect'),
    copy: require('./grunt/copy'),
    clean: require('./grunt/clean'),
    watch: require('./grunt/watch'),
    sass: require('./grunt/sass'),
    bowercopy: require('./grunt/bowercopy'),
    uglify: require('./grunt/uglify')
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('build', ['clean', 'copy', 'bowercopy', 'sass', 'uglify']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('run-app-dev', ['build', 'server']);
  grunt.registerTask('build-prod', ['build']);
};