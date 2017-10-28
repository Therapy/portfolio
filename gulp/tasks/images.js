'use strict';

module.exports = () => {
  $.gulp.task('images', () => $.gulp.src($.path.app.images, {since: $.gulp.lastRun('images')})
    .pipe($.gulp.dest($.config.root + '/assets/img'))
  );
};
