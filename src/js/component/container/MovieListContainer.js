'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieList, getVisibleMovies, getMoviesSearchTerm, getMoviesLoading, getMoviesError } from '../../store/reducer/Movie';

import MovieList from '../view/MovieList';
import LoadingMessage from '../view/LoadingMessage';
import ErrorMessage from '../view/ErrorMessage';


class MovieListContainer extends Component {
	componentDidMount() {
		this.props.fetchMovieList(this.props.searchTerm);
	}
	render() {

		if (this.props.loading) {
			return (
				<LoadingMessage />
			);
		}

		if (this.props.error) {
			return (
				<ErrorMessage message={this.props.error} />
			);
		}

		return (
			<MovieList movieList={this.props.movieList} />
		)
	}
};

//===== Redux =====//
const mapStateToProps = (state) => {
	return {
		movieList: getVisibleMovies(state),
		searchTerm: getMoviesSearchTerm(state),
		error: getMoviesError(state),
		loading: getMoviesLoading(state)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMovieList: (term) => dispatch( fetchMovieList(term) )
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieListContainer);
