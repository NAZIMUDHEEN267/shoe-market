module.exports = (grunt) => {
  grunt.initConfig({
    concat: {
      js: {
        src: ['src/scripts/Header.js', 'src/Homepage.js'],
        dest: 'build/js/Home.js',
      },
    },
    uglify: {
      my_target: {
        files: { 'build/js/Home.js': ['build/js/Home.js'] },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('concat-js', ['concat:css']);
  grunt.registerTask('default', ['uglify:my_target']);
};
