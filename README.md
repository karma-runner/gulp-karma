[![devDependency Status](https://david-dm.org/karma-runner/gulp-karma/dev-status.png?branch=master)](https://david-dm.org/karma-runner/gulp-karma#info=devDependencies)

# gulp-karma

> [Karma](https://github.com/karma-runner/karma) integration into [Gulp.js](http://gulpjs.com/)-based build.

## tl;dr;

You don't need any gulp plugins ([why?](https://github.com/karma-runner/gulp-karma#do-we-need-a-plugin)) to run Karma from the Gulp-based build, use Karma directly:

```javascript
var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
```

## Illustrated tasks

This sample project illustrates 2 usage scenarios of Karma integration in the Gulp.js build:

* `gulp test` - a task that runs all the tests with Karma once and exits. Such a task is often used on CI servers etc.
* `gulp tdd` - a task that runs the tests and pauses, watching for file changes. Upon detecting a change Karma re-runs the tests. Such a task is often used during development.

## Do we need a plugin?

While there exist integration of the karma-runner into [Grunt](http://gruntjs.com/) based builds (https://github.com/karma-runner/grunt-karma)
we've decided _not_ to create a dedicated plugin for Gulp.js. The reasoning here is that it is very, very easy to
invoke Karma's [public API](http://karma-runner.github.io/0.12/dev/public-api.html) directly from a Gulp.js task, as illustrated in this repository. Writing a dedicated plugin
would bring little benefit and could limit possible usage scenarios.

To see how easy is to integrate Karma into an existing Gulp.js build just check the included [gulpfile.js](gulpfile.js).

There are several people moving from Grunt.js to Gulp.js who noticed that with Gulp we often don't need a dedicated plugin anymore.
For example, a good overview of such situation can be found in the [following article](http://blog.overzealous.com/post/74121048393/why-you-shouldnt-create-a-gulp-plugin-or-how-to-stop).

