'use strict';

module.exports = () => {
  $.gulp.task('images', () => {
    return $.gulp.src($.path.app.images, {since: $.gulp.lastRun('images')})
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
