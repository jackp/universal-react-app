/**
 * Webpack configuration
 * - https://webpack.js.org/configuration/
 */

const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const {
  CheckerPlugin,
  TsConfigPathsPlugin,
} = require("awesome-typescript-loader");

const rootDirectory = path.resolve(__dirname, "../");
const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = {
  entry: ["babel-polyfill", path.resolve(rootDirectory, "web/index.web.ts")],

  output: {
    path: path.resolve(rootDirectory, "web/dist"),
    filename: "bundle.web.js",
  },

  resolve: {
    extensions: [".web.ts", ".web.tsx", ".ts", ".tsx", ".js"],
    modules: [path.resolve(rootDirectory, "src"), "node_modules"],
    alias: {
      "react-native": "react-native-web",
    },
  },

  module: {
    rules: [
      // Typescript
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(rootDirectory, "web/index.web.ts"),
          path.resolve(rootDirectory, "src"),
        ],
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      // Images
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },

  plugins: [
    // Set environment
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
      __DEV__,
    }),
    // Insert processed modules into html
    new HtmlPlugin({ template: path.resolve(rootDirectory, "web/index.html") }),
    // Download Google Fonts locally
    new GoogleFontsPlugin({
      fonts: [{ family: "Roboto" }],
      path: "src/assets/fonts/",
    }),
    // Advanced path resolution for Typescript
    new TsConfigPathsPlugin(),
    ...(__DEV__
      ? [
          // Development-only plugins
          new CheckerPlugin(),
        ]
      : [
          // Production-only plugins
        ]),
  ],

  // Development settings
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    stats: "errors-only",
  },
};
