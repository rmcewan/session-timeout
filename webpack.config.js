const path = require("path");

module.exports = {
  watch: true,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../pier-next/grails-app/assets/javascripts/lib"),
    filename: "session-timeout.js",
    library: "sessionTimeout",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
