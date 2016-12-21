import path from 'path';
import webpack from 'webpack';

const js = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  devServer: {
    // https://webpack.github.io/docs/webpack-dev-server.html#the-historyapifallback-option
    // https://github.com/callemall/material-ui-webpack-example/blob/4dba4758a56756921e2ec75b352c41d1325a6241/webpack-dev-server.config.js
    contentBase: './dist',
    hot: true,
    inline: true,
    host: "0.0.0.0",
    port: 3000,
    // If you are using the HTML5 history API you probably need to serve
    // your index.html in place of 404 responses,
    // which can be done by setting historyApiFallback: true
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: path.resolve('node_modules'),
      },
    ],
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      }
    ],
  },
};

export default js;
