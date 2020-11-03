const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["@babel/polyfill", "whatwg-fetch", "./js/script.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          "css-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "main.css" })],
};
