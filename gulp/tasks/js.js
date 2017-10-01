'use strict';

module.exports = () => {
  $.gulp.task('js', () => {
    return $.gulp.src($.path.app.js)
      .pipe($.gp.if($.dev, $.gp.sourcemaps.init({
        loadMaps: true
      })))
      .pipe($.gp.concat('app.js'))
      .on('error', $.gp.notify.onError((error) => {
        return {
          title: 'JS',
          message: error.message
        };
      }))
      .pipe($.gp.if(!$.dev, $.gp.uglify()))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.write('./maps')))
      .pipe($.gp.if(!$.dev, $.gp.rename({suffix: '.min'})))
      .pipe($.gulp.dest($.config.root + '/assets/js'));
  });
};