'use strict';

const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const listenPort = process.env.PORT || 3000;


const app = express();

//===== Static Files =====//

app.use( express.static( path.resolve(__dirname, '..', 'dist') ) );

//===== API Endpoints =====//

app.use('/api', require('./controller') );

//===== React App =====//

if ( process.env.NODE_ENV === 'development' ) {

	const bundle = require('./webpack')();

	app.get('*', (request, response) => {
		proxy.web(request, response, {
			target: 'http://localhost:8081'
		});
	});

} else {

	app.get('*', (request, response) => {
		response.sendFile( path.resolve(__dirname, '..', 'dist', 'index.html') );
	});

}

proxy.on('error', (e) => {
	console.error('Error connecting to proxy:', e);
});

app.listen(listenPort, () => {
	console.info(`Server listening on port ${listenPort}`);
});
