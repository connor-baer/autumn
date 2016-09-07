// ==== UPDATE ==== //

var gulp    = require('gulp')
  , plugins = require('gulp-load-plugins')({ camelize: true })
;

gulp.task('update', function () {
  gulp.watch('./package.json').on('change', function (file) {
    plugins.update.write(file);
  });
});