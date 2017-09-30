'use strict';

module.exports = () => {
  $.gulp.task('copy:image', () => $.gulp.src('./src/images/**/*.*', {since: $.gulp.lastRun('copy:image')})
      .pipe($.gulp.dest($.config.root + '/assets/img')));
};
