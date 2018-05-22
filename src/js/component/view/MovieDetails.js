'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import CoreDetails from './Movie/CoreDetails';
import ExtraDetails from './Movie/ExtraDetails';

//===== Styled Components =====//
const ReturnLink = styled(NavLink)`
	display: inline-block;
	margin: 15px;

	color: ${props => props.theme.color.tertiary.dark};

	&:active, &:focus, &:hover {
		color: ${props => props.theme.color.secondary.light};
	}
`;

const DetailsContainer = styled.div`
	margin: 15px auto;
	max-width: 1030px;
`;

const StyledMovieDetails = styled.div`
	margin: 0 15px;

	color: ${props => props.theme.color.primary.dark};

	background-color: ${props => props.theme.color.tertiary.dark};
	background-repeat: no-repeat;
	background-size: 100% auto;
	box-shadow: ${props => props.theme.util.boxShadow};

	> div {
		height: 100%;

		background-image: linear-gradient(to bottom,rgba(249,250,252,0.85) 0%, rgba(249,250,252,1) 40vw, white 100%);

		@media (min-width: 900px) {
			display: flex;
		}
		@media (min-width: 1200px) {
			background-image: linear-gradient(to bottom,rgba(249,250,252,0.85) 0%, rgba(249,250,252,1) 475px, white 100%);
		}

		&:after {
			content: "";
			display: table;
			clear: both;
		}
	}
`;

const MoviePoster = styled.div`
	padding-top: 50px;
	text-align: center;

	@media (min-width: 650px) {
		float: left;
		padding: 85px 0 30px 30px;
		width: 215px;

		text-align: left;
	}
`;


class MovieDetails extends Component {

	getMoviePoster(posterPath) {
		const imageHostPath = 'https://image.tmdb.org/t/p/w185';
		const placeholderPath = '/static/movie_placeholder.png';

		const posterUrl = posterPath ? (imageHostPath + posterPath) : placeholderPath;

		return (
			<MoviePoster><img src={posterUrl} /></MoviePoster>
		);
	}

	getBackgroundImage(backdropPath) {
		const imageHostPath = 'https://image.tmdb.org/t/p/w780';

		if (backdropPath) {
			return {
				backgroundImage: 'url(' + (imageHostPath + backdropPath) + ')'
			}
		}

		return {};
	}

	render() {
		return (
			<DetailsContainer>
				<ReturnLink to="/">&#x2B05; Back to List</ReturnLink>
				<StyledMovieDetails style={this.getBackgroundImage(this.props.movie.backdrop_path)}>
					<div>
						{this.getMoviePoster(this.props.movie.poster_path)}
						<CoreDetails movie={this.props.movie} />
						<ExtraDetails movie={this.props.movie} />
					</div>
				</StyledMovieDetails>
			</DetailsContainer>
		);
	}

}

export default MovieDetails;
