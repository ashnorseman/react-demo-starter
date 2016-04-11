/**
 * Created by AshZhang on 2016-4-8.
 */


var path = require('path'),
		COMMON = require('./webpack-common-config');


module.exports = Object.assign(COMMON, {
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
		COMMON.entry.app
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	}
});
