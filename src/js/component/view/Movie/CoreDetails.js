'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

import Score from './Score';
import Title from './Title';
import Tagline from './Tagline';
import Overview from './Overview';
import Genres from './Genres';

//===== Styled Components =====//
const StyledCoreDetails = styled.div`
	padding: 30px;

	@media (min-width: 650px) {
		float: left;
		padding-top: 79px;
		width: calc(100% - 215px);
	}

	@media (min-width: 900px) {
		width: calc(70% - 215px);
	}
`;


class CoreDetails extends Component {

	render() {
		return (
			<StyledCoreDetails>
				<Score voteAverage={this.props.movie.vote_average} voteCount={this.props.movie.vote_count} />
				<Title title={this.props.movie.title} />
				<Tagline tagline={this.props.movie.tagline} />
				<Overview showTitle={true} overview={this.props.movie.overview} />
				<Genres genres={this.props.movie.genres} />
			</StyledCoreDetails>
		)
	}
}


export default CoreDetails;
