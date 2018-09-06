# Resource Overview
This is learning project about:
 1. [sass](https://sass-lang.com/)
 2. [Bourbon](https://www.bourbon.io/)
 3. [gruntjs](http://gruntjs.com/)
 4. [gulpjs](http://gulpjs.com/) 
 5. [nodejs](https://nodejs.org/en/)
 6. [npm](https://www.npmjs.com/)
 7. [Bower](https://bower.io/)
 8. [Susy](http://oddbird.net/susy/)(*grid-layout engine for Sass*) 
 9. [normalize.css](https://github.com/necolas/normalize.css)
 10. CSS Frameworks: [Bootstrap](http://getbootstrap.com/), [Foundation](https://foundation.zurb.com/)
 11. HTML 

 ### What is Sass?
  - Syntactically Awesome Stylesheet
  - Makes styles easier to organize and maintain
  - Lets you separate files without reducing performance
  - Helps you avoid CSS bloat by writing DRY (don't repeat yourself) code
  - Preprocessor

### How Sass works?
 - Variables, Nesting, Math, Mixins, Functions
 - Conditional logic with control directives
 - Sass has two syntax and file extension 
   - .sass : Indented CSS << syntax has no code block brackets and semi-colon, and has own syntax highlight.
   - .scss : Sassy CSS << syntax like regular css and more approachable syntax.

### What is Bourbon? 
 - [Bourbon](https://www.bourbon.io/) is a small library that runs on top of sass.
 - Sub plugins for specific use:
   - Neat
   - Bitters
   - Refills

### Analyzing workflow options:
 - Preprocessing or compiling: https://sass-lang.com/guide
   ```
   sass --watch input.scss output.css
   sass --watch app/sass:public/stylesheets
   ```
 - Task Runner tools for auto preprocessing to CSS style:
   - paid: https://codekitapp.com/
   - paid: https://prepros.io/ 
   - free: http://koala-app.com
   - free and suitable: http://gruntjs.com/
   - alternative to gruntjs: http://gulpjs.com/
 
## Setting up a folder structure:
   ```
   |- sassy-codearx
      |- assets
         |- js
            |- scripts.js
         |- scss
            |- styles.scss
      |- css
      |- js
      |- index.html
   ```
## Configuring package.json: 
 - https://docs.npmjs.com/files/package.json
 - dependencies
 - devDependencies
   - [grunt](http://gruntjs.com/) `npm install grunt --save-dev`
   - grunt-contrib-watch
   - grunt-sass
   - load-grunt-tasks

## Using Bower with bower.json:
 - https://bower.io/
 - Bower is very similar to npm but it is managed only frontend package.
   But sometimes both are shared same packages.
 - `npm install -g bower`
 - bower configuration file: bower.json and created by: bower init

## Configuration bower.json:
 - https://bower.io/search/
 - dependencies
 - devDependencies
   - [bourbon](https://www.bourbon.io/) `bower install bourbon --save-dev`
   - [susy](http://oddbird.net/susy/) (*grid-layout engine for Sass*) 
   - [normalize.css](https://github.com/necolas/normalize.css)

## Configuring gruntfile.js:
 - Grunt is javascript task runner or task manager and is the key to project automation.
 - Task like to do such as compiling, minification, code linting and so on.
 - The downside of the grunt is that the lot of inital setup needs to fullfil the automation.
 - Grunt cli command line tools: `npm install -g grunt-cli`
 - Grunt needs Gruntfile.js file and is used to configure or define tasks and load Grunt plugins.
 - The Gruntfile is comprised of the following parts:
   1. The "wrapper" function
   2. Project and task configuration
   3. Loading Grunt plugins and tasks
   4. Custom tasks
 - All tasks are loaded by ['load-grunt-tasks'](https://www.npmjs.com/package/load-grunt-tasks): `require('load-grunt-tasks')(grunt);`
