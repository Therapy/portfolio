'use strict';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

global.$ = {
  dev: isDevelopment,
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks'),
    app: require('./gulp/paths/app')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  sorting: require('postcss-sorting'),
  browserSync: require('browser-sync').create(),
  fs: require('fs'),
  gp: require('gulp-load-plugins')({
    rename: {
      'gulp-clean-css': 'cleanCSS'
    }
  })
};

$.path.task.forEach((taskPath) => {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'scss',
    'pug',
    'js',
    'images',
    'fonts'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'scss',
    'pug',
    'js',
    'images',
    'fonts'
  )
));

$.gulp.task('deploy', () => $.gulp.src($.config.root + '**/*')
  .pipe($.gp.ghPages())
);