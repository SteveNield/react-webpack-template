const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new terserPlugin()],
  },
  plugins: [
    new optimizeCssAssetsPlugin()
  ]
}