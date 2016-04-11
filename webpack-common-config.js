/**
 * Created by AshZhang on 2016-4-8.
 */


var path = require('path'),
		webpack = require('webpack'),
		eslintFriendlyFormatter = require('eslint-friendly-formatter'),
		HTMLPlugin = require('html-webpack-plugin'),

		NODE_MODULE_PATH = /node_modules/,
		SRC_PATH = path.resolve(__dirname, 'src'),
		server = '';


// 连接开发服务器
if (process.env.npm_lifecycle_event === 'connect') {
	server = 'http://localhost:9090/';
}


module.exports = {
	devtool: 'source-map',

	entry: {
		app: './src/app.js'
	},

	eslint: {
		configFile: '.eslintrc',
		emitError: true,
		emitWarning: true,
		formatter: eslintFriendlyFormatter
	},

	plugins: [
		new HTMLPlugin({
			template: './src/index.tpl.html',
			filename: 'index.html'
		}),

		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				SERVER: JSON.stringify(server)
			}
		})
	],

	module: {

		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: NODE_MODULE_PATH,
				include: SRC_PATH
			}
		],

		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: NODE_MODULE_PATH,
				include: SRC_PATH,
				query: {
					plugins: ['transform-decorators-legacy'],
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.html$/,
				loader: 'html',
				exclude: NODE_MODULE_PATH,
				include: SRC_PATH,
				query: {
					interpolate: true
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass'],
				exclude: NODE_MODULE_PATH,
				includes: SRC_PATH
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash:8].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				],
				exclude: NODE_MODULE_PATH
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts',
				exclude: NODE_MODULE_PATH
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts',
				exclude: NODE_MODULE_PATH
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts',
				exclude: NODE_MODULE_PATH
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts',
				exclude: NODE_MODULE_PATH
			}
		]
	}
};
