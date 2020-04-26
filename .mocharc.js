module.exports = {
  spec: ["src/**/*.test.js"],
  require: ["@babel/register", require.resolve("./configureEnzyme")],
};
