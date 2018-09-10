# Resource Overview
This is learning project about:
 1. [Sass](https://sass-lang.com/)
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

## Creating first task:
 - Configure the ['grunt-sass'](https://www.npmjs.com/package/grunt-sass) inside grunt initConfig module.
 - We can choose whether to use ['Dart Sass'](http://sass-lang.com/dart-sass) or 
   ['Node Sass'](https://www.npmjs.com/package/node-sass) by passing the ['grunt-sass'](https://www.npmjs.com/package/grunt-sass) module to 
   the implementation option. One implementation or the other must be passed.
 - Compile command: `grunt sass`

## Watching for automated tasks:
 - ['grunt-contrib-watch'](https://www.npmjs.com/package/grunt-contrib-watch) will watch and run 
   automated task whenever we making changes in folders or files which are defined in configuration.
 - Compile command: `grunt watch`


## Minimizing JavaScript with Uglify:
 - ['jQuery'](https://www.npmjs.com/package/jquery) is for using JavaScript in our project.
 - Install command as dependencies: `npm install jquery --save`
 - ['grunt-contrib-uglify'](https://www.npmjs.com/package/grunt-contrib-uglify) is for using minify 
   the JavaScript into a single file.
 - Install command as devDependencies: `npm install grunt-contrib-uglify --save-dev`
 - ['grunt-contrib-uglify'](https://www.npmjs.com/package/grunt-contrib-uglify) must be 
   configured inside [gruntfile.js](https://github.com/aranab/sassy-codearx/blob/master/gruntfile.js)
 - Compile command: `grunt uglify`

## Preparing the assets:
 - Images are goes to image folder
 - [backstretch](http://www.jquery-backstretch.com/) is a jQuery plugin that let you 
   dynamically resize a background photo.
 - [Font Awesome Download](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css)
 - [Font Awesome free](https://www.npmjs.com/package/@fortawesome/fontawesome-free)
 - [Font Awesome Angular](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)
 - [Font Awesome React](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
 - [Font Awesome Vue](https://www.npmjs.com/package/@fortawesome/vue-fontawesome)
 - [Font Awesome Ember](https://www.npmjs.com/package/@fortawesome/ember-fontawesome)
 - [Font Awesome Sass](https://fontawesome.com/how-to-use/on-the-web/using-with/sass)
 - [Font Awesome Less](https://fontawesome.com/how-to-use/on-the-web/using-with/less)

## Modularizing Sass with partials:
 - Organized our code into separate partial files and then compile it into single CSS file.
 - Naming structure for sass partial is `_{fileName}.scss`. Example: `_header.scss`
 - Partial files should be imported by `@import {filePath}` statement before used them inside 
   main file.
 - Ordering of importing partial files are very important. Dependency files should be imported first.

## Creating a color palette with sass variables:
 - Variables are very useful for sass project because we can use them every place and assign or change the value of each varible in one place.
 - Make a color palette from: [Coolors](https://coolors.co/)

## Using nested styles for a menu:
 - Nesting styles are very petty and powerful in sass programming.
 - Greate article about [*Sass Ampersand* in css-tricks website](https://css-tricks.com/the-sass-ampersand/)

## Using Font Awesome:
 - We can font awesome by two way:
   - Embedded `<i>` tag with font awesome class
   - [Using css class with Unicode](https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements)
 - *Note: Accurate [Font Family](https://stackoverflow.com/questions/47894414/the-before-pseudo-element-not-working-in-font-awesome-v-5) name should be used.* 

## Using custom fonts:
 - [Free google fonts](https://fonts.google.com/)

## Styling default HTML styles:
 - Markup such as button, input textbox, textarea, typography etc are styled by using [Bourbon mixins](https://www.bourbon.io/docs/latest/) with less code writing.
 - For Button: [Bourbon Button Mixins](https://www.bourbon.io/docs/latest#all-buttons)
 - For input box: [Bourbon Inputbox Mixins](https://www.bourbon.io/docs/latest#all-text-inputs)
 - For typography: [Bourbon Modular Scale Mixins](https://www.bourbon.io/docs/latest#modular-scale)
 - For scale up and down images: [Bourbon Size Mixins](https://www.bourbon.io/docs/latest#size)

# Creating Responsive Layout
  - Important note that all CSS grid hack system controls will be taken by [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). Therefore, we should move on learning about [CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/).

### Setting up susy 3 defaults:
 - [Susy 3](http://oddbird.net/susy/) is a toolkit for creating responsive layouts. 
 - The main benefit of using [Susy 3](http://oddbird.net/susy/) is that its not need to create extra markup but other frameworks such as bootstrap has to be needed extra markup in order to achieve the responsive layout.
 - [Susy 2 Shorthand Syntax](https://susy.readthedocs.io/shorthand/) for understanding shorthand syntax.
 - [Susy 3 Shorthand Syntax](http://oddbird.net/2017/06/28/susy3/)
 - [Susy 3 Spread (spread on containers & spread on spans)](http://oddbird.net/2017/06/13/susy-spread/) for understanding Spread.
 - [Susy needs little bit setup](http://oddbird.net/susy/docs/)
   ```
   $susy: (
       'columns': susy-repeat(12), // required in 'grid-template-columns'
       'gutters': 0.1667 // using for 'grid-column-gap'
   );
   ``` 

### Starting layout structure:
 - [Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) 
 - Reset global box size base on [*CSS Trick article*](https://css-tricks.com/box-sizing/#article-header-id-6).
   ```
   html {
      box-sizing: border-box;
   }

   *, *:before, *:after {
       box-sizing: inherit;
   }
   ```
   But [susy 3 strongly recommended](http://oddbird.net/2017/06/28/susy3/) that box model reset should like `* { box-sizing: border-box; }`
 - And wrap class width would be 70%
   ```
   .wrap {
       max-width: 70%;
       margin-left: auto;
       margin-right: auto;

       &::after { // this is nested sass
           content: " ";
           clear: both;
           display: block;
       }
    }
   ```
 - Column width calculated by Susy function `span()` and `gutter()`
 - [*Make CSS custom properties or variables*](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

### Using media query breakpoints:
 - Mobile-First is better approach.
   - [*Mozilla Article*](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Responsive/Mobile_first)
   - [*Site Point Article*](https://www.sitepoint.com/introduction-mobile-first-media-queries/)
   - [*Zell Liew Article*](https://zellwk.com/blog/how-to-write-mobile-first-css/) 
 - Susy 2 has [Breakpoint mixin](https://susy.readthedocs.io/toolkit/#breakpoint) and that mixin helps to create media query for you.
 - Susy 3 does not have any mixins, so we have to define one by own from [Susy 3 Media Queries & Grid Settings](http://oddbird.net/2017/09/25/susy-use/)
 - Susy 3 shared some concept of mixin:
   ```
   // Idea - 1
   $medium: (
     'columns': susy-repeat(8),
     'gutters': 1em,
   );

   // any code out here uses the global $susy settings…

   @media (min-width: 30em) {
     @include susy-use($medium) {
       // any code in this block will use the $medium settings…
     }
   }

   @mixin susy-use(
     $config
   ) {
     //  parse and normalize any shorthand arguments
     $config: susy-compile($config);

     // record the global settings -
     // and update the global variable with our new settings
     $global: $susy;
     $susy: map-merge($susy, $config) !global;

     // any content inside this mixin
     // will use the local settings
     @content;

     // return the global variable to its initial value
     $susy: $global !global;
   }
   ```
   ```
   //Idea -2
   // it is safe to add non-Susy data to Susy maps
   $medium: (
     'min-width': 30em,
     'columns': susy-repeat(8),
     'gutters': 1em,
   );

   // any code out here uses the global $susy settings…

   @include susy-at($medium) {
     // this block establishes a new breakpoint,
     // and any code in this block will use the $medium settings…
   }

   @mixin susy-at(
     $config
   ) {
     //  parse and normalize any shorthand arguments
     $config: susy-compile($config);

     // build min-and-max queries
     $min: map-get($config, 'min-width');
     $min: if($min, '(min-width: #{$min})', null);
     $max: map-get($config, 'max-width');
     $max: if($max, '(max-width: #{$max})', null);

     // combine them if we need both
     $and: if($min and $max, '#{$min} and #{$max}', null);
     // or fall back to the value we need…
     $query: $and or $min or $max;

     // apply the results…
     @media #{$query} {
       @include susy-use($config) {
         @content;
       }
     }
   }
   ```

### Content Pushing, pulling and padding for susy:
 - To push content 3 column from left to right
   ```
   margin-left: span(3 wide);
   ```
 - To pull content 1 column from right to left
   ```
   margin-left: 0 - span(1 wide);
   ```
 - To pad content 1 column from left to right 
   ```
   padding: 0 span(1 wide);
   ```
 - Note: to align the content need a `wide` span spread.

## License
 Single license MIT
 
