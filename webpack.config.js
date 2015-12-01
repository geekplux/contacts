var path = require('path');
var root = path.resolve(__dirname);


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(root, 'build'),
    filename: 'script.js'
  }
};
