// Dependencies
const webpack = require('webpack')
const path = require('path')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Loaders
const Loaders = require('./loaders/webpack.loaders')

// Options
const options = require('./webpack.options')

const config = {
  //  Javascript entries
  entry: {
    app: ['babel-polyfill', './src/scripts/app.js']
  },

  //  Javascript outputs
  output: {
    // the target directory for all output files
    // must be an absolute path (use the Node.js "path" module)
    path: path.resolve('dist'),

    // the filename format for chunks (output files)
    filename: 'js/[name].bundle.js'
  },

  // Watch mode
  watch: true,

  // Loaders
  module: {
    rules: [
      Loaders.htmlLoader,
      Loaders.pugLoader,
      Loaders.babelLoader,
      Loaders.cssLoader,
      Loaders.sassLoader,
      Loaders.imageLoader,
      Loaders.fontLoader,
      Loaders.txtLoader,
      Loaders.jsonLoader,
      Loaders.json5Loader
    ]
  },

  plugins: [
    /* Clean dist folder before re-writing */
    new CleanWebpackPlugin('dist', {
      root: process.cwd()
    }),

    /* Write HTML files */
    /* If you are using pug, make sure that you have pug-html-loaader */
    /* This configuration includes it already */
    new HtmlWebpackPlugin(options.htmlPages.home),

    /* Create global modules */
    new webpack.ProvidePlugin({
      /* 
        Example Usage 
        $: "jquery"
      */
    }),

    /* Extract CSS files */
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyWebpackPlugin([
      {
        from: process.cwd() + '/static/*.mp3',
        to: process.cwd() + '/dist/sound/[name].[ext]'
      },
      {
        from: process.cwd() + '/static/human.txt',
        to: process.cwd() + '/dist/[name].[ext]'
      }
    ]),

    /* Log the Progress */
    new webpack.ProgressPlugin()
  ]
}

module.exports = config
