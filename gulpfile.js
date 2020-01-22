var gulp = require("gulp");
var browserSync = require("browser-sync").create();
gulp.task("watch", ["browserSync", "sass"], function() {
  gulp.watch("app/scss/**/*.scss", ["sass"]);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch("app/*.html", browserSync.reload);
  gulp.watch("app/js/**/*.js", browserSync.reload);
});
gulp.task("useref", function() {
  return gulp
    .src("app/*.html")
    .pipe(useref())
    .pipe(gulp.dest("dist"));
});

var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");

gulp.task("useref", function() {
  return (
    gulp
      .src("app/*.html")
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf("*.js", uglify()))
      .pipe(gulp.dest("dist"))
  );
});

var cssnano = require("gulp-cssnano");

gulp.task("useref", function() {
  return (
    gulp
      .src("app/*.html")
      .pipe(useref())
      .pipe(gulpIf("*.js", uglify()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf("*.css", cssnano()))
      .pipe(gulp.dest("dist"))
  );
});
