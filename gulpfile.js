var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');
var karma = require('karma').server;

//one could also externalize common config into a separate file,
//ex.: var karmaCommonConf = require('./karma-common-conf.js');
var karmaCommonConf = {
  browsers: ['Chrome'],
  frameworks: ['jasmine'],
  files: [
    'src/**/*.js',
    'test/**/*.spec.js'
  ]
};

//a helper function to report karma's exit status
function karmaExit(exitCode) {
  gutil.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
}

/**
 * Run test once and exit
 */
gulp.task('test', function () {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}), karmaExit);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function () {
  karma.start(karmaCommonConf, karmaExit);
});

gulp.task('default', ['tdd']);