const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION_MODE = 'production';
const DEVELOPMENT_MODE = 'development';
const ENV = process.env.NODE_ENV || DEVELOPMENT_MODE;
const isProd = ENV === PRODUCTION_MODE;

/** plugins **/
const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({template: './assets/index.html'}),
];

/** optimization **/

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.ts'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js'
  },
  devtool: isProd ? false : "inline-source-map",
  watch: !isProd,
  mode: ENV,
  plugins,
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.(ts|tsx)?$/, loader: "ts-loader" }
    ]
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
};