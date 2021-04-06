const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // entry point
  entry: "./app/javascript/index.js",
  output: {
    // output directory
    path: path.resolve(__dirname, "./public/dest"),
    // output filename
    filename: "bundle.js",
  },
  devServer: {
    // settings for webpack-dev-sever
    host: 'localhost',
    port: 3035,
    publicPath: 'http://localhost:3035/public/dest/',
    contentBase: path.resolve(__dirname, 'public/dest'),
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    disableHostCheck: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
