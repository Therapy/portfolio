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
  merge: require('merge-stream'),
  browserify: require('browserify'),
  source: require('vinyl-source-stream'),
  buffer: require('vinyl-buffer'),
  browserSync: require('browser-sync').create(),
  fs: require('fs'),
  gp: require('gulp-load-plugins')({
    rename: {
      'gulp-replace-task': 'replaceTask',
      'gulp-clean-css': 'cleanCSS'
    }
  })
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
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
    'sass',
    'pug',
    'js',
    'images',
    'fonts'
  )
));
