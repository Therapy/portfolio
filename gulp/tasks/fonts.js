'use strict';

module.exports = () => {
  $.gulp.task('fonts', () => $.gulp.src('./src/fonts/**/*.*', {since: $.gulp.lastRun('fonts')})
    .pipe($.gulp.dest($.config.root + '/assets/fonts')));
};