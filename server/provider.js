'use strict';

const dbBaseURL = 'https://api.themoviedb.org/3/';
const dbApiKey = '0e0366273ea1e8cc06b01c26bc09426f';


module.exports = {
	// Providing the defaults as a method in this way allows controllers
	// to optionally inject additional parameters into their requests
	getDefaults: (extraParams) => {
		return {
			baseURL: dbBaseURL,
			params: {
				...extraParams,
				api_key: dbApiKey
			}
		};
	}
}
