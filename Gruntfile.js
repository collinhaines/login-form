module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      default: {
        src:  ['css/src/**/*.less', '!css/src/bootstrap/**/*.less'],
        dest: 'css/custom.css'
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
      less: {
        files: 'css/src/**/*.less',
        tasks: ['less']
      }
    },

    browserSync: {
      default: {
        bsFiles: {
          src: 'css/*.css'
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
