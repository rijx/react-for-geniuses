module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    ["babel-plugin-transform-async-to-promises", { inlineHelpers: true }],
    "babel-plugin-react-require",
    "@babel/plugin-transform-runtime",
    "babel-plugin-transform-for-of-as-array",
    "babel-plugin-import-to-require",
  ],
};
