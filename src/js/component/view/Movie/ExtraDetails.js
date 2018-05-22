'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';


//===== Styled Components =====//
const StyledExtraDetails = styled.div`
	padding: 30px;
	clear: both;

	background: rgba(8,28,36,0.1);

	h4 {
		margin: 0;

		color: ${props => props.theme.color.primary.base};
		font-family: ${props => props.theme.font.family.headline};
		text-transform: uppercase;
	}

	dl {
		margin: 0;
	}

	dt {
		margin: 20px 0 8px;

		color: #444;
		font-family: ${props => props.theme.font.family.headline};
		font-size: 14px;
		text-transform: uppercase;
	}

	dd {
		margin-left: 0;
		font-size: 16px;
		font-weight: 300;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}
	li+li {
		margin-top: 7px;
	}

	@media (min-width: 650px) and (max-width: 899px) {
		padding-left: 245px;
	}

	@media (min-width: 420px) and (max-width: 899px) {
		dl {
			display: flex;
			flex-wrap: wrap;
		}

		dt {
			flex: 1 0 150px;
		}

		dd {
			margin: 20px 0 8px;
			flex: 1 0 calc(100% - 150px);
		}
	}

	@media (min-width: 900px) {
		float: right;
		clear: none;
		width: 30%;
		padding-top: 82px;
	}
`;

class ExtraDetails extends Component {

	getAsMillions(dollars) {
		return '$' + Number( (dollars / 1000000).toFixed(1) ).toLocaleString('en') + 'm';
	}

	getImdbLink(imdbId) {
		return 'https://www.imdb.com/title/' + imdbId;
	}

	render() {
		return (
			<StyledExtraDetails>
				<h4>Movie Facts</h4>
				<dl>
					<dt>Status</dt>
					<dd>{this.props.movie.status}</dd>

					<dt>Release Date</dt>
					<dd>{this.props.movie.release_date}</dd>

					<dt>Runtime</dt>
					<dd>{this.props.movie.runtime} minutes</dd>

					<dt>Links</dt>
					<dd>
						<ul>
							<li><a target="_new" href={this.props.movie.homepage}>Movie Homepage</a></li>
							<li><a target="_new" href={this.getImdbLink(this.props.movie.imdb_id)}>IMDb</a></li>
						</ul>
					</dd>

					<dt>Finances</dt>
					<dd>
						<ul>
							<li>Budget: {this.getAsMillions(this.props.movie.budget)}</li>
							<li>Revenue: {this.getAsMillions(this.props.movie.revenue)}</li>
						</ul>
					</dd>
				</dl>

			</StyledExtraDetails>
		)
	}
}


export default ExtraDetails;
