var gulp = require('gulp');
var livereload = require('gulp-livereload');
var prefix = require('gulp-autoprefixer');

gulp.task('server', function(next) {
  var connect = require('connect');
  server = connect();
  var serveStatic = require('serve-static');
  server.use(serveStatic('./')).listen(process.env.PORT || 8080, next);
});

gulp.task('autoprefixer', function() {
  return gulp.src('bourbon/style.css')
  .pipe(prefix(["last 15 version", "> 1%", "ie 8", "ie 7"]))
  .pipe(gulp.dest('www/style/'));
});


gulp.task('watch', ['server'], function() {
  var server = livereload();
  
  gulp.watch('bourbon/style.css',['autoprefixer']);
  
  gulp.watch('www/**/*').on('change', function(file) {
      server.changed(file.path);
  });
  
  gulp.watch('bourbon/**/*').on('change', function(file) {
      server.changed(file.path);
  });
});
