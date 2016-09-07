// ==== IMAGES ==== //

var gulp        = require('gulp')
  , plugins     = require('gulp-load-plugins')({ camelize: true })
  , config      = require('../../gulpconfig').images
;


// Resize and optimize images to 1600*640.
gulp.task('images', function() {
  return gulp.src(config.dist.src)
  .pipe(plugins.imagemin(config.dist.imagemin))
  .pipe(gulp.dest(config.dist.dest));
});


// Resize and optimize images in the `dist` folder (slow)
// gulp.task('images', ['images-large', 'images-small']);

// Resize and optimize images to 1600*640.
gulp.task('images-large', function() {
  return gulp.src(config.dist.src)
  .pipe(plugins.imageResize({
      width : 1600,
      height : 640,
      crop : true
    }))
  .pipe(plugins.imagemin(config.dist.imagemin))
  .pipe(gulp.dest(config.dist.dest));
});

// Resize and optimize images to 640*360.
gulp.task('images-small', function() {
  return gulp.src(config.dist.src)
  .pipe(plugins.imageResize({
      width : 640,
      height : 360,
      crop : true
    }))
  .pipe(plugins.imagemin(config.dist.imagemin))
  .pipe(plugins.rename({
    suffix: '-thumb'
  }))
  .pipe(gulp.dest(config.dist.dest));
});