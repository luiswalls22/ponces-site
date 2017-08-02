var gulp = require('gulp');
imagemin = require('gulp-imagemin');

gulp.task('optimizeImages', function() {
  return gulp.src(['./dist/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlace: true,
      multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('build', ['optimizeImages']);
