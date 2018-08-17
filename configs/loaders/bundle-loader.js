const bundleLoader = () => {
  return {
    test: /\.bundle\.js$/,
    use: "bundle-loader"
  };
};

module.exports = bundleLoader();
