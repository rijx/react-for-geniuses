const HtmlWebpackPlugin = require("html-webpack-plugin");

const packageDefinition = require("./package");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: packageDefinition.name,
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    }),
  ],
};
