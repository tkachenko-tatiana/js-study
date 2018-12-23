const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfig = (env) => {
  const isDevelopment = env === 'dev';

  const commonConfig = {
    context: path.resolve(__dirname, '..', 'src'),
    entry: './index.tsx',
    output: {
      filename: '[name]-[hash:8].js',
      // chunkFilename: '[name]-[hash:8].js',
      path: path.join(__dirname, '..', '..', 'build/client'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
      modules: [
        path.resolve(__dirname, '..', 'src'),
        path.resolve(__dirname, '..', 'node_modules')
      ],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          exclude: [/node_modules/]
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },  
      ],
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //   react: 'React'
    // },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, '..', 'public/index.html'),
        filename: './index.html',
      }),
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
      // proxy: {
      //   '/api': 'http://localhost:3100'
      // },
      historyApiFallback: true,
      disableHostCheck: true,
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
