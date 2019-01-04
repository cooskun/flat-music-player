const htmlLoader = require('./html-loader')
const pugLoader = require('./pug-loader')

const cssLoader = require('./css-loader')
const sassLoader = require('./sass-loader')

const babelLoader = require('./babel-loader')

const jsonLoader = require('./json-loader')
const json5Loader = require('./json5-loader')

const txtLoader = require('./txt-loader')
const fontLoader = require('./font-loader')
const imageLoader = require('./image-loader')

// Markup Loaders
module.exports.htmlLoader = htmlLoader
module.exports.pugLoader = pugLoader

// Stylesheet Loaders
module.exports.cssLoader = cssLoader
module.exports.sassLoader = sassLoader

// File Loaders
module.exports.txtLoader = txtLoader
module.exports.fontLoader = fontLoader
module.exports.imageLoader = imageLoader

// Script Loaders
module.exports.babelLoader = babelLoader

// Data Loaders
module.exports.jsonLoader = jsonLoader
module.exports.json5Loader = json5Loader
