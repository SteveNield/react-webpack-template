const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const productionConfig = () => {
  return {
    plugins: [
      new webpack.DefinePlugin({ 
        'process.env.NODE_ENV': JSON.stringify("production")
      }),
    ]
  };
}

module.exports = merge.smart(
  baseConfig('production'),
  optimizationConfig, 
  productionConfig
);