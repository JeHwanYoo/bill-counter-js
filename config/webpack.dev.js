const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const BannerPlugin = require('webpack').BannerPlugin;
const fs = require('fs');

module.exports = [
  /**
   * Common JS
   */
  merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'node',
    output: {
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].common.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new BannerPlugin(
        fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE.md'), 'utf-8'),
      ),
    ],
  }),
  /**
   * Browser
   */
  merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    output: {
      libraryTarget: 'umd',
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].js',
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
  merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    output: {
      library: 'BanknoteCounter',
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].esm.js',
    },
    plugins: [
      new EsmWebpackPlugin(),
      new BannerPlugin(
        fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE.md'), 'utf-8'),
      ),
    ],
  }),
];
