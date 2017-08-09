const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(ext => ['.bin'].indexOf(ext) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

const plugins = [
  new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(new WebpackShellPlugin({ onBuildEnd: ['nodemon dist/bundle.js --watch dist'] }));
}

if (process.env.NODE_ENV === 'production') {
  plugins.push(new UglifyJSPlugin());
}

module.exports = {
  plugins,
  devtool: 'sourcemap',
  entry: './app/App.js',
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
  module: {
    rules: [{
      test: /\.jsx?$/,
      enforce: 'pre',
      use: ['remove-flow-types-loader'],
    }],
  },
};
