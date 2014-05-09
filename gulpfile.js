var gulp = require('gulp');
var _ = require('lodash');
var karma = require('karma').server;

//externalized common config into a separate file
var karmaCommonConf = require('./karma-common-conf.js');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}), done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start(karmaCommonConf, done);
});

gulp.task('default', ['tdd']);