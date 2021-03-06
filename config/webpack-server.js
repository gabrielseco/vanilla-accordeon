/* eslint-disable import/no-extraneous-dependencies  */
/* eslint-disable consistent-return  */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const env = require('./env/dev.env');

const { HOST, PORT } = env;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  stats: {
    colors: true,
    hash: false,
    version: true,
    timings: true,
    assets: true,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false,
  },
}).listen(PORT, HOST, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Listening at http://${HOST}:${PORT}/`);
});
