'use strict';

module.exports = () => {
  $.gulp.task('fonts', () => {
    return $.gulp.src($.path.app.fonts, {since: $.gulp.lastRun('fonts')})
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};