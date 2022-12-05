module.exports = {
    staticFileGlobs: [
      "/",
      'css/**.css',
      '**.html',
      'media/**.*',
      'js/**.js',
      'fonts/**.*'
    ],
    stripPrefix: '/',
    runtimeCaching: [{
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: 'networkFirst'
    }]
  };