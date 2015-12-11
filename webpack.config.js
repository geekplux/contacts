var path = require('path');
var root = path.resolve(__dirname);


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(root, 'build'),
    filename: 'script.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(root, 'src'),
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  }
};
