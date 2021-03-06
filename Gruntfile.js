module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      default: {
        src:  ['css/src/**/*.less', '!css/src/bootstrap/**/*.less'],
        dest: 'css/login-form.css'
      },

      bootstrap: {
        src:  'css/src/bootstrap/bootstrap.less',
        dest: 'css/bootstrap.css'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },

      default: {
        tasks: ['watch']
      }
    },

    watch: {
      bootstrap: {
        files: 'css/src/bootstrap/**/*.less',
        tasks: ['less']
      },

      less: {
        files: ['css/src/**/*.less', '!css/src/bootstrap/**/*.less'],
        tasks: ['less']
      }
    },

    browserSync: {
      default: {
        bsFiles: {
          src: ['css/*.css', '*.html', 'js/*.js']
        },

        options: {
          // Make sure MAMP is on.
          proxy:     'localhost:8888',
          watchTask: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['browserSync', 'concurrent']);
};
