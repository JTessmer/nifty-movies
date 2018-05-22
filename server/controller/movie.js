'use strict';

const axios = require('axios');
const router = require('express').Router();
const provider = require('../provider');
const bodyParser = require('body-parser');


// For the sake of this demo, we'll simply output errors to the console
// A production app should include logging/reporting and ideally a graceful response
function simpleErrorHandler(response, err) {
	console.error(err);
	response.status(500).json({success: false});
}

//----- List Movies -----//
router.get('/', (request, response) => {
	axios.get('/discover/movie', provider.getDefaults())
		.then((res) => {
			try {
				response.json(res.data);
			}
			catch(err) {
				simpleErrorHandler(response, err);
			}
		}).catch((err) => {
			simpleErrorHandler(response, err);
		});
});


//----- View Specific Movie -----//
router.get('/details/:movie_id?', (request, response) => {
	if (!request.params || !request.params.movie_id) {
		response.status(400).json({success: false, error: 'Must provide a Movie ID'});
		return;
	}

	const requestPath = '/movie/' + request.params.movie_id;

	axios.get(requestPath, provider.getDefaults())
		.then((res) => {
			try {
				response.json(res.data);
			}
			catch(err) {
				simpleErrorHandler(response, err);
			}
		}).catch((err) => {
			simpleErrorHandler(response, err);
		});
});


//----- Search Movies -----//
router.post('/', bodyParser.json(), (request, response) => {

	if (!request.body || !request.body.term) {
		response.status(400).json({success: false, error: 'Must provide a Search Term'});
		return;
	}

	axios.get('/search/movie', provider.getDefaults({ query: request.body.term }))
		.then((res) => {
			try {
				response.json(res.data);
			}
			catch(err) {
				simpleErrorHandler(response, err);
			}
		}).catch((err) => {
			simpleErrorHandler(response, err);
		});
});

module.exports = router;
