/* Copyright G. Hemingway, 2020 - All rights reserved */
"use strict";

const path = require("path");

module.exports = {
  context: path.join(__dirname, "/src/client"),
  entry: "./main.js",
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
