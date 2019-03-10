const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const prodConfig = {
    mode: 'production',
    plugins: [
      new CleanWebpackPlugin(['dist']),
    ],
    performance: false,
};

module.exports = merge.smart(baseConfig, prodConfig);
