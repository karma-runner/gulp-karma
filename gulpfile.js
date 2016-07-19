var gulp = require('gulp');
var gutils = require('gulp-util');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(err){
        if(err === 0){
            done();
        } else {
            var msg = err > 1 ? 'Tests' : 'Test';
            done(new gutils.PluginError('karma', {
                message: "" + err + ' ' + msg + ' failed'
            }));
        }
    }).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('default', ['tdd']);
