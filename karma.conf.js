module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};