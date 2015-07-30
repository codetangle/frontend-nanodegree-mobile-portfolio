module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            jscript: {
                files: {
                    'js/js.min.js': ['js/perfmatters.js'],
                    'views/js/main.min.js': ['views/js/main.js']
                }
            },
            mainHtml: {
                files: {
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'css/style.min.css': ['css/style.css'],
                    'css/print.min.css': ['css/print.css'],
                    'views/css/style.min.css': ['views/css/style.css'],
                    'views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css']
                }
            }
        },
        htmlmin: {
            dist: {
                files: [
                    {
                        src: 'index.html',
                        dest: 'minHTML/index.html'
                    },
                    {
                        src: 'project-2048.html',
                        dest: 'minHTML/project-2048.html',
                    },
                    {
                        src: 'project-mobile.html',
                        dest: 'minHTML/project-mobile.html'
                    },
                    {
                        src: 'project-webperf.html',
                        dest: 'minHTML/project-webperf.html'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    //Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};
