// Loading Node Sass plugin
const sass = require('node-sass');

// The "wrapper" function
module.exports = function(grunt) {    

    // Project and task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Grunt Sass
         * Compile Sass to CSS using node-sass
         * https://www.npmjs.com/package/grunt-sass
         */
        sass: {

            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: {
                    'css/styles.css' : 'assets/scss/styles.scss'
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
                    'assets/scss/*.scss'
                ],
                tasks: [
                    'sass'
                ]
            }
        }
    });

    // Loading Grunt plugins and tasks
    require('load-grunt-tasks')(grunt); 

    // Custom tasks
    grunt.registerTask('default', ['watch']);
}

