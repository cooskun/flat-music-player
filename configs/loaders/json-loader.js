const jsonLoader = () => {
  return {
    test: /\.json/,
    use: "json-loader"
  };
};

module.exports = jsonLoader();
