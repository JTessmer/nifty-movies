'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

import MovieListItem from './MovieListItem';

//===== Styled Components =====//
const StyledMovieList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;


class MovieList extends Component {

	getMovieListItems(movieList = []) {
		return movieList.map(movie =>
			<MovieListItem key={movie.id} movie={movie} />
		);
	}

	render() {
		return (
			<StyledMovieList>
				{this.getMovieListItems(this.props.movieList)}
			</StyledMovieList>
		)
	}

};

export default MovieList;
