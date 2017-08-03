const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin')

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

plugins = [
  new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
]

if (!process.env.BUILD) {
  plugins.push(new WebpackShellPlugin({onBuildEnd: ['nodemon dist/bundle.js --watch dist']}))
}

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
  plugins: plugins,
  module: {
    rules: [{
      test: /\.jsx?$/,
      enforce: 'pre',
      use: ['remove-flow-types-loader'],
    }],
  },
};
