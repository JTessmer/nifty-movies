'use strict';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Score from './Movie/Score';
import Title from './Movie/Title';
import Overview from './Movie/Overview';

//===== Styled Components =====//
const StyledMovieItem = styled(NavLink)`
	display: block;
	flex: 1 1 22%;
	min-width: calc(100% - 30px);
	margin: 15px;
	max-width: 500px;

	color: ${props => props.theme.color.primary.dark};
	text-decoration: none;

	background-color: ${props => props.theme.color.tertiary.base};
	box-shadow: ${props => props.theme.util.boxShadow};

	&:hover, &:active, &:focus {
		color: ${props => props.theme.color.primary.dark};
	}

	@media (min-width: 775px) {
		min-width: 350px;
	}
`;

const MovieImage = styled.img`
	width: 100%;
	height: auto;
	border-bottom: 5px solid ${props => props.theme.color.secondary.base};

	background: url('${props => props.backdropPath}') no-repeat;
`;

const MovieContent = styled.div`
	padding: 20px 30px 30px;
`;


class MovieListItem extends Component {

	getMovieImage(backdropPath) {
		const imageHostPath = 'https://image.tmdb.org/t/p/w780';
		const placeholderPath = '/static/movie_placeholder.png';

		const backdropUrl = backdropPath ? (imageHostPath + backdropPath) : placeholderPath;

		return (
			<MovieImage src={backdropUrl} />
		);
	}

	render() {
		const detailsPath = '/details/' + this.props.movie.id;

		return (
			<StyledMovieItem to={detailsPath}>
				{this.getMovieImage(this.props.movie.backdrop_path)}
				<MovieContent>
					<Score voteAverage={this.props.movie.vote_average} voteCount={this.props.movie.vote_count} />
					<Title title={this.props.movie.title} />
					<Overview overview={this.props.movie.overview} />
				</MovieContent>
			</StyledMovieItem>
		)
	}

}

export default MovieListItem;
