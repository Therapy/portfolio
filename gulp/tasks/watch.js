'use strict';

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./src/js/**/*.js', $.gulp.series('js'));
    $.gulp.watch('./src/styles/**/*.scss', $.gulp.series('scss'));
    $.gulp.watch('./src/templates/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/images/**/*.*', $.gulp.series('images'));
  });
};
