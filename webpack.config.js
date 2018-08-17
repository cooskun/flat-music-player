// Common Config
const commonConfig = require("./configs/webpack.common.js");

// Dependencies
const merge = require("webpack-merge");

// Config
module.exports = env => {
  // Placeholder to another configfile for merge
  // The name is depend to "env.env" value.
  // Value will be "dev" or "prod"
  let envConfig = require(`./configs/webpack.${env.env}.js`);

  // Finally merge the config files
  return merge(commonConfig, envConfig);
};
