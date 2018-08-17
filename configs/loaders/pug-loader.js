const options = require("../webpack.options");

const pugLoader = () => {
  return {
    test: /\.(pug|jade)$/,
    use: [
      {
        loader: "html-loader",
        options: {
          attrs: options.htmlAttrs
        }
      },
      {
        loader: "pug-html-loader",
        options: {
          pretty: options.pugPretty
        }
      }
    ]
  };
};

module.exports = pugLoader();
