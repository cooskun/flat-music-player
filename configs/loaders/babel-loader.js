const options = require("../webpack.options");

function babelLoader() {
  return {
    test: /\.(js|jsx)$/,
    loader: "babel-loader",
    exclude: /node_modules/,
    options: {
      presets: options.babelPresets
    }
  };
}

module.exports = babelLoader();
