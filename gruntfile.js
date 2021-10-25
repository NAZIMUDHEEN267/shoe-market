module.exports = (grunt) => {
  grunt.initConfig({

    concat: {
      js: {
        src: ['src/scripts/Header.js', 'src/scripts/HomePage.js'],
        dest: 'build/js/Home.js',
      },
    },

    uglify: {
      my_target: {
        files: {
          'build/js/Home.js': ['build/js/Home.js'],
          'build/js/Login.js': ['src/scripts/Login.js'],
          'build/js/Sign-in.js': ['src/scripts/Sign-in.js'],
        },
      },
    },

    cssmin: {
      file: {
        src: 'build/css/sign-in.css',
        dest: 'build/css/sign-in.min.css',
      },
      file2: {
        src: 'build/css/home.css',
        dest: 'build/css/home.min.css',
      },
      file3: {
        src: 'build/css/login.css',
        dest: 'build/css/login.min.css',
      },
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
      },
      dev: {
        files: {
          'build/html/*home.html': 'build/html/*home.html',
          'build/html/*sign-in.html': 'build/html/*sing-in.html',
          'build/html/*login.html': 'build/html/*login.html',
        },
      },
    },

    watch: {
      w1: {
        files: ['src/scripts/*.js', 'build/js/Home.js'],
        tasks: ['concat', 'uglify', 'htmlmin'],
      },
      w2: {
        files: ['build/css/home.css', 'build/css/sign-in.css', 'build/css/login.css'],
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
