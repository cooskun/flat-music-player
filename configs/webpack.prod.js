// Dependencies
const path = require('path')
const glob = require('glob')

// Plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// Config
const config = {
  // devtool is source-map. Read the follow link for other variants
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',

  // Plugins include
  plugins: [
    // Minify the javascript files
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
}

module.exports = config
