/**
 * Created by AshZhang on 2016-4-10.
 */


var path = require('path'),
		webpack = require('webpack'),
		CleanPlugin = require('clean-webpack-plugin'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		COMMON = require('./webpack-common-config');


module.exports = Object.assign(COMMON, {
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[hash].js'
	},
	plugins: COMMON.plugins.concat([
		new CleanPlugin(['build']),
		new ExtractTextPlugin('style.[contenthash:8].css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	])
});
