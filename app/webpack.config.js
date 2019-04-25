const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src",
  devtool: "source-map",
  output: { path: path.resolve(__dirname, "./out") },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
