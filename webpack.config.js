const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfig = (env) => {
  const isDevelopment = env === 'dev';

  const commonConfig = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.tsx',
    output: {
      filename: '[name]-[hash:8].js',
      chunkFilename: '[name]-[hash:8].js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        // All files with a '.ts' or '.tsx'
        // extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              cacheDirectory: true,
              plugins: 'react-hot-loader/babel',
              presets: [
                ['@babel/env', {
                  modules: false,
                  targets: {
                    browsers: ['chrome >= 62'],
                  },
                }], '@babel/react'
              ],
            },
          },
          exclude: /node_modules/,
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        }
      ],
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
      react: 'React'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, 'public/index.html'),
        filename: './index.html',
      }),
      new DynamicCdnWebpackPlugin(),
    ],
  };

  const configDevelopment = merge.smart(commonConfig, {
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
      historyApiFallback: true,
    }
  });

  const configProduction = merge.smart(commonConfig, {
    mode: 'production',
    plugins: [
      new CleanWebpackPlugin(['dist']),
    ],
    performance: false,
  });

  const config = isDevelopment ? configDevelopment : configProduction;

  return config;
};

module.exports = webpackConfig(process.env.NODE_ENV);
