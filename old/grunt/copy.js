module.exports = {
  index: {
    expand: true,
    cwd: 'src',
    src: ['index.html', 'resources/**/*'],
    dest: 'dist/',
    filter: 'isFile'
  }
};
