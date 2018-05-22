const Webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');



module.exports = {
	entry: [
		path.resolve(__dirname, 'src', 'js', 'main.js')
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				query: {
					presets: ['env','react','stage-3']
				}
			}
		},{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	},

	plugins: [
		new UglifyJsPlugin()
	]
};
