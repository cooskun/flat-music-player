const options = require("../webpack.options");

const htmlLoader = () => {
  return {
    test: /\.html$/,
    use: {
      loader: "html-loader",
      options: {
        attrs: options.htmlAttrs
      }
    }
  };
};

module.exports = htmlLoader();
