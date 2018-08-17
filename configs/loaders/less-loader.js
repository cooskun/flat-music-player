const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const options = require("../webpack.options");

const cssExtract = () => {
  if (options.extractCss == true) {
    return {
      loader: MiniCssExtractPlugin.loader
    };
  }
};

const lessLoader = () => {
  return {
    test: /\.less$/,
    use: [
      {
        loader: "style-loader" // creates style nodes from JS strings
      },
      // Extract Css to external file
      cssExtract(),
      // CSS Loader
      {
        loader: "css-loader", // translates CSS into CommonJS
        options: {
          sourceMap: options.styleSourceMap
        }
      },
      // PostCSS Loader
      {
        loader: "postcss-loader", // applies PostCSS filters
        options: {
          sourceMap: options.styleSourceMap
        }
      },
      // Resolve URL Loader
      {
        loader: "resolve-url-loader" // resolves importing paths
      },
      // LESS Loader
      {
        loader: "less-loader", // compiles Less to CSS
        options: {
          sourceMap: options.styleSourceMap
        }
      }
    ]
  };
};

module.exports = lessLoader();
