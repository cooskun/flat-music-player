const json5Loader = () => {
  return {
    test: /\.json5/,
    use: "json5-loader"
  };
};

module.exports = json5Loader();
