const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const minifier = require('./webpack.prod.minifier');
const BannerPlugin = require('webpack').BannerPlugin;
const fs = require('fs');

module.exports = [
  /**
   * Common JS
   */
  merge(common, minifier, {
    mode: 'production',
    devtool: 'source-map',
    target: 'node',
    output: {
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].common.min.js',
    },
    plugins: [
      new BannerPlugin(
        fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE.md'), 'utf-8'),
      ),
    ],
  }),
  /**
   * Browser
   */
  merge(common, minifier, {
    mode: 'production',
    devtool: 'source-map',
    target: 'web',
    output: {
      libraryTarget: 'umd',
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].min.js',
    },
    plugins: [
      new BannerPlugin(
        fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE.md'), 'utf-8'),
      ),
    ],
  }),
  /**
   * Browser ESM
   */
  merge(common, minifier, {
    mode: 'production',
    devtool: 'inline-source-map',
    target: 'web',
    output: {
      library: 'BillCounter',
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].esm.min.js',
    },
    plugins: [
      new EsmWebpackPlugin(),
      new BannerPlugin(
        fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE.md'), 'utf-8'),
      ),
    ],
  }),
];
