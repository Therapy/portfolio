'use strict';

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./src/js/**/*.js', $.gulp.series('js'));
    $.gulp.watch('./src/styles/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/templates/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/images/**/*.*', $.gulp.series('copy:image'));
  });
};
