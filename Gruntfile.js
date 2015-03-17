// Gruntfile.js

module.exports = function (grunt) {
    // ===============
    // CONFIGURE GRUNT
    // ===============
    grunt.initConfig({

        // get the configuration info from package.json
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // configure jshint to validate js files ----------------------
        jshint: {
            options: {
                // use jshint-stylish to make our errors look and read good
                reporter: require('jshint-stylish'),
                ignores: ['js/*.min.js']
            },
            // when this task is run, lint the Gruntfile and all js files in src
            build: ['Gruntfile.js', 'js/**/*.js']
        },

        // configure uglify to minify js files ----------------------
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'js/perfmatters.min.js': ['js/perfmatters.js', ]
                }
            }
        },

        // configure cssmin to minify css files ----------------------
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'css/style.min.css': 'css/style.css',
                    'css/print.min.css': 'css/print.css'
                }
            }
        },

        // configure htmlmin to minify html files --------
        htmlmin: {                                       // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'index.html': 'index_src.html'     // 'destination': 'source'
              }
            }
        },

        // configure watch to auto update ----------------
        watch: {

            // for stylesheets, watch css and less files
            // only run less and cssmin
            stylesheets: {
                files: ['css/*.css'],
                tasks: ['cssmin']
            },

            // for scripts, run jshint and uglify
            scripts: {
                files: 'js/**/*.js',
                tasks: ['jshint', 'uglify']
            },

            // for html src files
            html: {
                files: ['*src.html'],
                tasks: ['htmlmin']
            }
        }

    });

    // grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']);
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'htmlmin']);

    // ==================
    // LOAD GRUNT PLUGINS
    // ==================
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

};

