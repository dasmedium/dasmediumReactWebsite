const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: [
    "./src/index",
    "webpack-dev-server/client?http://127.0.0.1:8080/" // Specify the local server port
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "file-loader", // inline base64 URLs for <=10kb images, direct URLs for the rest
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Hot reloading
    new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors

    // Declare global variables
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      _: "lodash"
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      hash: false
    })
  ]
};
