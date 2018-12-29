const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
          "sass-loader"
        ]
      } 
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '..', 'public/index.html'),
      filename: './index.html',
    }),
  ],
};