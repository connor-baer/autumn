// ==== CONFIGURATION ==== //

// Project paths
var src         = ''                // The raw material of the theme: custom scripts, SCSS source files, images, etc.; do not delete this folder!
  , dist        = '_site/'   // The distribution package that you'll be uploading to your server; delete it anytime.
  , assets      = 'assets/'             // A staging area for assets that require processing before landing in the source folder (example: icons before being added to a sprite sheet)
  , bower       = 'bower_components/'   // Bower packages
  , composer    = 'vendor/'             // Composer packages
  , modules     = 'node_modules/'       // npm packages
;


// Project settings
module.exports = {

  browsersync: {
    server: {
      baseDir: dist
    }
  , files: [dist + '**/*']
  , port: 4000 // Port number for the live version of the site; jekyll default: 4000
  , notify: false // In-line notifications (the blocks of text saying whether you are connected to the BrowserSync server or not)
  , ui: false // Set to false if you don't need the browsersync UI
  , open: false // Set to false if you don't like the browser window opening automatically
  , reloadDelay: 1000 // Time, in milliseconds, to wait before reloading/injecting
  , watchOptions: {
      debounceDelay: 2000 // This introduces a small delay when watching for file change events to avoid triggering too many reloads
    }
  },

  watch: {
    jekyll: [
      '_config.yml',
      src+'_data/**/*.{json,yml,yaml,csv}',
      src+'_includes/*.html',
      src+'_layouts/*.html',
      src+'_posts/*.md',
      src+'*/*.{html,md,yml,yaml,txt}',
      src+'*.{html,md,yml,yaml,txt}',
      '!'+modules,
      '!'+bower,
      '!'+composer,
      '!'+dist
    ],
    styles:  src+'_scss/*.scss',
    scripts: src+'_js/*.js',
    images:  src+'img/**/*'
  },

  delete: {
    src: [dist+assets]
  },

  jekyll: {
    src:    src,
    dest:   dist,
    config: '_config.yml'
  },

  styles: {
    build: {
      src: src+'_scss/**/*.scss'
    , dest: assets
    , dist: dist
    }
  , cssnano: {
      autoprefixer: {
        add: true
      , browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4'] // This tool is magic and you should use it in all your projects :)
      }
    }
  , libsass: { // Requires the libsass implementation of Sass (included in this package)
      includePaths: [bower, modules] // Adds Bower and npm directories to the load path so you can @import directly
    , precision: 6
    , onError: function(err) {
        return console.log(err);
      }
    }
  },

  scripts: {
    bundles: { // Bundles are defined by a name and an array of chunks (below) to concatenate; warning: this method offers no dependency management!
      scripts: ['navigation', 'core']
    }
  , chunks: { // Chunks are arrays of paths or globs matching a set of source files; this way you can organize a bunch of scripts that go together into pieces that can then be bundled (above)
      // The core chunk is loaded no matter what; put essential scripts that you want loaded by your theme in here
      core: [
        src+'_js/scripts.js',
      ]
    , navigation: [
        bower+'smooth-scroll/dist/js/smooth-scroll.js',
        bower+'headroom.js/dist/headroom.js',
        modules+'turbolinks/dist/turbolinks.js'
      ]
    }
  , dest: assets // Where the scripts end up in your theme
  , lint: {
      src: [src+'_js/**/*.js'] // Linting checks the quality of the code; we only lint custom scripts, not those under the various modules, so we're relying on the original authors to ship quality code
    }
  , minify: {
      src: assets+'**/*.js'
    , uglify: {} // Default options
    , dest: assets
    , dist: dist
    }
  },

  images: {
    dist: {
      src: [dist+'img/**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'] // The source is actually `dist` since we are minifying images in place
    , imagemin: {
        optimizationLevel: 5
      , progressive: true
      , interlaced: true
      }
    , dest: dist+'img/'
    }
  }
};
