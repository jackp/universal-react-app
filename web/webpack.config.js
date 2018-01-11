/**
 * Webpack configuration
 * - https://webpack.js.org/configuration/
 */

const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");

const rootDirectory = path.resolve(__dirname, "../");
const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = {
  entry: ["babel-polyfill", path.resolve(rootDirectory, "web/index.web.js")],

  output: {
    path: path.resolve(rootDirectory, "web/dist"),
    filename: "bundle.web.js"
  },

  resolve: {
    extensions: [".web.js", ".js"]
  },

  module: {
    rules: [
      // Javascript
      {
        test: /\.js$/,
        include: [
          path.resolve(rootDirectory, "web/index.web.js"),
          path.resolve(rootDirectory, "src"),
          path.resolve(rootDirectory, "node_modules/react-native-uncompiled")
        ],
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: ["react-native-web"],
            presets: ["react-native"]
          }
        }
      },
      // Images
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      }
    ]
  },

  plugins: [
    // Set environment
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      __DEV__
    }),
    // Insert processed modules into html
    new HtmlPlugin({ template: path.resolve(rootDirectory, "web/index.html") })
  ]
};
