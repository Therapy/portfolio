'use strict';

module.exports = () => {
  $.gulp.task('fonts', () => $.gulp.src($.path.app.fonts, {since: $.gulp.lastRun('fonts')})
    .pipe($.gulp.dest($.config.root + '/assets/fonts'))
  );
};