'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

const serverURL = 'http://localhost:3000';

describe('App API Server', () => {

	it('should accept requests', (done) => {
		request(serverURL)
			.get('/api')
			.end( (err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				done();
			});
	});

	it('should provide a movie list', (done) => {
		request(serverURL)
			.get('/api/movie')
			.end( (err, res) => {
				expect(res.body).to.have.property('results').with.lengthOf.at.least(1);
				done();
			});
	});

	it('should return a movie\'s details based on its ID', (done) => {
		request(serverURL)
			.get('/api/movie/details/562')
			.end( (err, res) => {
				expect(res.body).to.have.property('title').that.is.equal('Die Hard');
				done();
			});
	});

	it('should fail if a movie\'s details are requested without an ID', (done) => {
		request(serverURL)
			.get('/api/movie/details')
			.end( (err, res) => {
				expect(res).to.have.status(400);
				done();
			});
	});

	it('should provide movies based on a search term', (done) => {
		request(serverURL)
			.post('/api/movie')
			.send({ term: 'Die Hard: With a Vengeance' })
			.end( (err, res) => {
				expect(res.body).to.have.property('total_results'); //.with.length(1);
				done();
			});
	});

	it('should fail if a search is attempted without a term', (done) => {
		request(serverURL)
			.post('/api/movie')
			.end( (err, res) => {
				expect(res).to.have.status(400);
				done();
			});
	})

});
