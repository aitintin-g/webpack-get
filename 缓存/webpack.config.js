const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js',
plugins: [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
  title: 'Caching'
  }),
],
optimization: {
  splitChunks: {
         cacheGroups: {
             commons: {
                 name: "commons",
                 chunks: "initial",
                 minChunks: 2
             }
         }
     }
 },
output: {
filename: '[name].[chunkhash].js',
path: path.resolve(__dirname, 'dist')
}
};