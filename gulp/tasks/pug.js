'use strict';

module.exports = () => {
  const patterns = [];
  $.gulp.task('pug', () => {
    patterns.push({match: '%=suffix=%', replace: $.dev ? '' : '.min'});
    patterns.push({match: '%=version=%', replace: $.dev ? '' : `?rel=${$.package.version}`});

    return $.gulp.src($.path.app.pug)
      .pipe($.gp.pug({pretty: true}))
      .on('error', $.gp.notify.onError((error) => {
        return {
          title: 'PUG',
          message: error.message
        };
      }))
      .pipe($.gp.replaceTask({patterns, usePrefix: false}))
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream({once: true}));
  });
};
