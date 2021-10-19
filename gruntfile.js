module.exports = (grunt) => {
  grunt.initConfig({

    concat: {
      js: {
        src: ['src/scripts/*.js'],
        dest: 'build/js/Home.js',
      },
    },

    uglify: {
      my_target: {
        files: { 'build/js/Home.js': ['build/js/Home.js'] },
      },
    },

    cssmin: {
      dist: {
        src: 'build/css/home.css',
        dest: 'build/css/home.min.css',
      },
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'build/html/*home.html': 'build/html/*home.html',
        },
      },
      dev: {
        files: {
          'build/html/*home.html': 'build/html/*home.html',
        },
      },
    },

    watch: {
      w1: {
        files: ['src/scripts/*.js', 'build/js/Home.js'],
        tasks: ['concat', 'uglify', 'htmlmin'],
      },
      w2: {
        files: ['build/css/home.css'],
        tasks: ['cssmin'],
      },
      w3: {
        files: ['build/html/*home.html'],
        tasks: ['htmlmin'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
