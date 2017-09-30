'use strict';

module.exports = () => {
  $.gulp.task('js', () => {
    let sourcePath = $.path.app.src;
    let bundles = $.path.app.bundles;

    let bundled = bundles.map((bundle) => {
      return $.browserify({
          entries: sourcePath + bundle,
          debug: true
        }).bundle()
        .on('error', $.gp.notify.onError((error) => {
          return {
            title: 'JS',
            message: error.message
          };
        }))
        .pipe($.source(bundle))
        .pipe($.buffer())
        .pipe($.gp.if($.dev, $.gp.sourcemaps.init({
          loadMaps: true
        })))
        .pipe($.gp.if(!$.dev, $.gp.uglify()))
        .pipe($.gp.if($.dev, $.gp.sourcemaps.write('./maps')))
        .pipe($.gp.if(!$.dev, $.gp.rename({suffix: '.min'})))
        .pipe($.gulp.dest($.config.root + '/assets/js'));
    });

    return $.merge(bundled);
  });
};
