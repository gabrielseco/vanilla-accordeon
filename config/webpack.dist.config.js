/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CSS_FILENAME = 'css/[name].[hash].css';

module.exports = {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './../public/static'),
    filename: 'js/[name].[hash].js',
    publicPath: './static/',
  },
  entry: [
    './demo/index.js',
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin(CSS_FILENAME),
    new HtmlWebpackPlugin({
      title: 'Vanilla Example',
      template: './assets/index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
  ],
  module: {
    rules: [{
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
