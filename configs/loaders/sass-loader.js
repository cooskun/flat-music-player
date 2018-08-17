const options = require("../webpack.options");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssExtract = () => {
  if (options.extractCss == true) {
    return {
      loader: MiniCssExtractPlugin.loader
    };
  }
};

const sassLoader = () => {
  return {
    test: /\.(s[ac]ss)$/,
    use: [
      {
        loader: "style-loader" // creates style nodes from JS strings
      },
      // extracts CSS to external file
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
      // SASS Loader
      {
        loader: "sass-loader", // compiles SASS to CSS
        options: {
          sourceMap: options.styleSourceMap
        }
      }
    ]
  };
};

module.exports = sassLoader();
