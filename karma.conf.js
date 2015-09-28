module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};
