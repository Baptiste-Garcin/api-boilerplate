var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  devtool: 'sourcemap',
  entry: './bin/www',
  target: 'node',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  node: {
    __dirname: false
  },
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false })
  ]
};
