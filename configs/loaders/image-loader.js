const imageLoader = () => {
  return {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]"
        }
      },
      {
        loader: "img-loader"
      }
    ]
  };
};

module.exports = imageLoader();
