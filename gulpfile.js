var gulp = require('gulp');
var gutil = require('gulp-util');
var Server = require('karma').Server;

/**
 * Run test once and exit. Also give a hint when this task is done.
 */
gulp.task('test', function (done) {
  var server = new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  });

  server.on('run_complete', function (browsers, results) {
    // NB If the argument of done() is not null or not undefined, e.g. a string, the next task in a series won't run.
    done(results.error ? 'There are test failures' : null);
  });

  server.start();
});

/**
 * Watch for file changes and re-run tests on each change.
 */
gulp.task('tdd', function () {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }).start();
});

/**
 * Depends on completion of the `test` task, i.e. won't launch `deploy` if there are test failures.
 */
gulp.task('deploy', ['test'], function () {
  gutil.log(gutil.colors.bold.yellow('Deploying app only after all tests passed...'));
});

gulp.task('default', ['tdd']);
