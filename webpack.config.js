var path = require("path")

module.exports = {
    entry: './src/entry.js',
    output: { 
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
      loaders: [
        {
          test: /.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
  };