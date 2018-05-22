'use strict';

const router = require('express').Router();

router.use('/movie', require('./movie'));

router.get('/', (request, response) => {
	response.json({
		success: true,
		controllers: [
			'movie'
		]
	});
});

module.exports = router;
