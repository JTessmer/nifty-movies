'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./../webpack.config.js');
const path = require('path');
const fs = require('fs');

module.exports = function() {

	// Delete previously generated bundle.js, if it exists
	const appBuildPath = path.resolve(__dirname, '..', 'dist', 'bundle.js');

	if ( fs.existsSync(appBuildPath) ) {
		fs.unlink(appBuildPath);
	}

	const bundler = new WebpackDevServer(Webpack(webpackConfig), {

	});

	bundler.listen(8081, 'localhost', () => {
		console.info('Running initial build of Webpack. Please be patient...');
	});

}
