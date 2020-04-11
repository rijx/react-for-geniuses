const HtmlWebpackPlugin = require("html-webpack-plugin");

const packageDefinition = require("./package");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!@internal\/).*/,
        use: {
          loader: require.resolve("babel-loader"),
          options: require("./babel.config"),
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: packageDefinition.name,
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    }),
  ],
};
