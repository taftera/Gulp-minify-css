/*
$ npm init
$ npm instal gulp gulp-clean-css gulp-rename --save-dev
*/ 
const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require('gulp-rename');

function minifyCSS() {
  return (
    gulp
      .src("./assets/team-liquid-global.css")
      .pipe(cleanCSS())
      .pipe(rename(function (path) {
        // Updates the object in-place
        //path.dirname += "/assets";
        path.basename += "-min";
        //path.extname = ".css";
      }))
      .pipe(gulp.dest("./assets/"))
  );
}

gulp.task("minify-css", minifyCSS);

gulp.task("watch", () => {
  gulp.watch("./assets/team-liquid-global.css", minifyCSS);
});

gulp.task('default', gulp.series('minify-css', 'watch'));