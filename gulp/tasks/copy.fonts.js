'use strict';

module.exports = () => {
  $.gulp.task('copy:font', () => $.gulp.src('./src/fonts/**/*.*', {since: $.gulp.lastRun('copy:font')})
    .pipe($.gulp.dest($.config.root + '/assets/fonts')));
};