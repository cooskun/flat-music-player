const options = require("../webpack.options");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssExtract = () => {
  if (options.extractCss == true) {
    return {
      loader: MiniCssExtractPlugin.loader
    };
  }
};

const cssLoader = () => {
  return {
    test: /\.css$/,
    use: [
      // Style Loader
      {
        loader: "style-loader" // creates style nodes from JS strings
      },
      // Extracts CSS to external file
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
      }
    ]
  };
};

module.exports = cssLoader();
