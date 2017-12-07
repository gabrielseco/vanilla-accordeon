const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  HOST, PORT, PROTOCOL, TITLE,
} = require('./env/dev.env');


const CSS_FILENAME = 'css/main.css';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'js/main.js',
    publicPath: '/',
  },
  entry: [
    `webpack-dev-server/client?${PROTOCOL}${HOST}${PORT}`, // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './demo/index.js',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin(CSS_FILENAME),
    new HtmlWebpackPlugin({
      title: TITLE,
      template: './assets/index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
