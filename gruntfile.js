// Loading Node Sass plugin
var sass = require('node-sass');
var Fiber = require('fibers');
var jshintStylish = require('jshint-stylish');

// The "wrapper" function
module.exports = function (grunt) { 

    // Project and task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Define the pathes
         */
        paths: {
            styles: {
                allScss: 'assets/scss/**/*.scss',
                src: 'assets/scss/styles.scss',
                allDestCss: 'dist/css/**/*',
                dest: 'dist/css/styles.css'
            },
            scripts: {
                allJs: 'assets/js/**/*.js',
                src: 'assets/js/scripts.js',
                allDestJs: 'dist/js/**/*',
                concat: 'dist/js/bundle.js',
                minify: 'dist/js/bundle.min.js',
                dest: 'dist/js/'
            },
            test: {
                allJs: 'test/**/*.js',
                allCss: 'test/**/*.css',
                allHtml: 'test/**/*.html'
            },
            htlm: {
                root: 'index.html'
            },
            lib: {
                jquery: 'node_modules/jquery/dist/jquery.js'
            }
        },

        /**
         * Grunt Contrib Clean
         * Clean or delete the distribute files
         * https://www.npmjs.com/package/grunt-contrib-clean
         */
        clean: [
            '<%= paths.scripts.allDestJs %>',
            '<%= paths.styles.allDestCss %>'
        ],        

        /**
         * Grunt Sass
         * Compile Sass to CSS using node-sass
         * https://www.npmjs.com/package/grunt-sass
         */
        sass: {
            options: {
                implementation: sass,
                outputStyle: 'compressed',
                fiber: Fiber,
                sourceMap: false
            },
            dist: {
                files: {
                    '<%= paths.styles.dest %>': '<%= paths.styles.src %>'
                }
            }
        },

        /**
         * Grunt Contrib Concat
         * Concatenate JavaScript files
         * https://www.npmjs.com/package/grunt-contrib-concat
         */
        concat: {
            options: {
                separator: ';\n'
            },
            dist: {
                src: [
                    '<%= paths.lib.jquery %>',
                    '<%= paths.scripts.allJs %>'
                ],
                dest: '<%= paths.scripts.concat %>'
            }
        },

        /**
         * Grunt Contrib Uglify
         * Minify JavaScript files
         * https://www.npmjs.com/package/grunt-contrib-uglify
         */
        uglify: {
            my_target: {
                options: {
                    sourceMap: false,
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    '<%= paths.scripts.minify %>' : '<%= paths.scripts.concat %>'
                }
            }
        },

        /**
         * Grunt Contrib Qunit
         * Run QUnit unit tests in a headless Chrome instance
         * https://www.npmjs.com/package/grunt-contrib-qunit
         */
        qunit: {
            files: [
                '<%= paths.test.allHtml %>'
            ]
        },

        /**
         * Grunt Contrib Jshint
         * Validate files with JsHint
         * https://www.npmjs.com/package/grunt-contrib-jshint
         */
        jshint: {
            files: [
                'gruntfile.js',
                '<%= paths.scripts.allJs %>'
            ],
            options: { 
                jshintrc: true,
                reporter: jshintStylish
            }
        },

        /**
         * Grunt Contrib Connect
         * Start a connect web server
         * https://www.npmjs.com/package/grunt-contrib-connect
         */
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9001,
                    base: 'dist',
                    livereload: true
                }
            }
        },

        /**
         * Grunt Contrib Watch
         * Monitor files and excute tasks
         * https://www.npmjs.com/package/grunt-contrib-watch
         */
        watch: {
            sass: {
                files: [
                    '<%= paths.styles.allScss %>'
                ],
                tasks: [
                    'sass'
                ]
            },
            scripts: {
                files: [
                    '<%= paths.scripts.allJs %>',
                    '<%= paths.scripts.concat %>'
                ],
                tasks: [
                    'concat',
                    'uglify'
                ]
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'dist/**/*'
                ]
            },
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            }
        }
    });

    // Loading Grunt plugins and tasks
    require('load-grunt-tasks')(grunt);

    // Build tasks
    grunt.registerTask('build', [
        'clean',
        'sass',
        'concat',
        'uglify',
    ]);

    // Default tasks
    grunt.registerTask('default', [
        'build',
        'connect',
        'watch'
    ]);
};

