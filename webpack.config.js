const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  devtool: 'sourcemap',
  entry: './bin/www.js',
  target: 'node',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  node: {
    __dirname: false,
  },
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false }),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      enforce: 'pre',
      use: ['remove-flow-types-loader'],
    }],
  },
};
