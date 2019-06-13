const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const dotEnvPlugin = require('dotenv-webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env  => {
  return {
    entry: './src/js/index',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              envName: env
            }
          }
        },
        {
          test: /\.s?css$/,
          use: extractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader",
          })
        }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({ 
        template: './src/index.html', 
        filename: './index.html' 
      }),
      new extractTextPlugin('style.css'),
      new dotEnvPlugin(),
      new copyWebpackPlugin([{
        from: 'static'
      }])
    ]
  }
}

