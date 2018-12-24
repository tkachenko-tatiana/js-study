const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
    mode: 'development',
    output: {
      devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // Enable HMR
    ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      port: 3000,
      host: 'localhost',
      contentBase: path.resolve(__dirname, '..', 'src'),
      watchContentBase: true,
      // proxy: {
      //   '/api': 'http://localhost:3100'
      // },
      historyApiFallback: true,
      disableHostCheck: true,
    }
};

module.exports = merge.smart(baseConfig, devConfig);