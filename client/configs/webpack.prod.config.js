const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const prodConfig = {
    mode: 'production',
    performance: false,
};

module.exports = merge.smart(baseConfig, prodConfig);
