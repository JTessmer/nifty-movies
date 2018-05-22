const Webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',

	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8081',
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
					presets: ['env','react','react-hmre','stage-3']
				}
			}
		},{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	},

	plugins: [
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NamedModulesPlugin()
	],

	watch: true,
	devtool: 'eval',
	devServer: {
		contentBase: './dist',
		hot: true
	}
};
