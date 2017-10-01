'use strict';

module.exports = () => {
  $.gulp.task('scss', () => {
    return $.gulp.src($.path.app.scss)
      .pipe($.gp.if($.dev, $.gp.sourcemaps.init()))
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError((error) => {
        return {
          title: 'SCSS',
          message: error.message
        };
      }))
      .pipe($.gp.autoprefixer({browsers: $.config.autoprefixerConfig}))
      .pipe($.gp.if(!$.dev, $.gp.cleanCSS()))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.write()))
      .pipe($.gp.if(!$.dev, $.gp.rename({suffix: '.min'})))
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  });
};
