// ==== DEFAULT ==== //

var gulp = require('gulp')

// Default task chain: build -> (livereload or browsersync) -> watch
gulp.task('default', ['update', 'watch']);