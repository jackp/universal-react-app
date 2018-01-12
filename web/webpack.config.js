/**
 * Webpack configuration
 * - https://webpack.js.org/configuration/
 */

const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

const rootDirectory = path.resolve(__dirname, "../");
const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = {
  entry: ["babel-polyfill", path.resolve(rootDirectory, "web/index.web.js")],

  output: {
    path: path.resolve(rootDirectory, "web/dist"),
    filename: "bundle.web.js"
  },

  resolve: {
    extensions: [".web.js", ".js"],
    modules: [path.resolve(rootDirectory, "src"), "node_modules"]
  },

  module: {
    rules: [
      // Javascript
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(rootDirectory, "web/index.web.js"),
          path.resolve(rootDirectory, "src"),
          path.resolve(rootDirectory, "node_modules/react-native-uncompiled"),
          path.resolve(
            rootDirectory,
            "node_modules/react-native-extended-stylesheet"
          )
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
    new HtmlPlugin({ template: path.resolve(rootDirectory, "web/index.html") }),
    // Download Google Fonts locally
    new GoogleFontsPlugin({
      fonts: [{ family: "Roboto" }],
      path: "src/assets/fonts/"
    })
  ],

  // Development settings
  devServer: {
    historyApiFallback: true
    // stats: "errors-only"
  }
};
