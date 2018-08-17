const txtLoader = () => {
  return {
    test: /\.txt$/,
    use: "raw-loader"
  };
};

module.exports = txtLoader();
