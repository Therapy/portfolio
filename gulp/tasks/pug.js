'use strict';

module.exports = () => {
  const patterns = [];
  $.gulp.task('pug', () => {
    patterns.push({match: '%=suffix=%', replace: $.dev ? '' : '.min'});
    patterns.push({match: '%=version=%', replace: $.dev ? '' : `?rel=${$.package.version}`});//Math.ceil(Math.random()*100000)

    return $.gulp.src('./src/templates/pages/*.pug')
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
