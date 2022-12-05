module.exports = {
    staticFileGlobs: [
      'app/css/**.css',
      'app/**.html',
      'app/media/**.*',
      'app/js/**.js',
      'app/fonts/**.*'
    ],
    stripPrefix: 'app/',
    runtimeCaching: [{
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: 'networkFirst'
    }]
  };