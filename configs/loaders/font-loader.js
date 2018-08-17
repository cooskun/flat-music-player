const fontLoader = () => {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          publicPath: "dist",
          outputPath: "css/dist",
          name: "[name].[ext]"
        }
      }
    ]
  };
};

module.exports = fontLoader();
