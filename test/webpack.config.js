var path = require('path')

module.exports = {
  entry: {
    test: path.join(__dirname, 'src/entry.js')
  },
  resolveLoader: {
    alias: {
      'ngtemplate-loader': require.resolve('../index')
    }
  },
  output: {
    path: path.join(__dirname, 'output'),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'ngtemplate-loader',
        options: {
          globalAngular: true
        }
      }
    ]
  }
}
