var webpack = require('webpack');
var path = require('path');

const SRC_PATH = path.join(__dirname, 'src');
const BUILD_PATH = path.join(__dirname, 'build');

var config = {
  entry: [
    SRC_PATH +'/index'
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
  	loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: SRC_PATH
    }]
	}
};

module.exports = config;
