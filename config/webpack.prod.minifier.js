const TeserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TeserWebpackPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ecma: 8,
        },
        extractComments: true,
      }),
    ],
  },
};
