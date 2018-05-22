'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails, getSelectedMovie, getMoviesLoading, getMoviesError } from '../../store/reducer/Movie';

import MovieDetails from '../view/MovieDetails';
import LoadingMessage from '../view/LoadingMessage';
import ErrorMessage from '../view/ErrorMessage';


class MovieListContainer extends Component {
	componentDidMount() {
		this.props.fetchMovieDetails(this.props.match.params.id);
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
			<MovieDetails movie={this.props.movie} />
		)
	}
};

//===== Redux =====//
const mapStateToProps = (state, props) => {
	return {
		movie: getSelectedMovie(state, props.match.params.id),
		error: getMoviesError(state),
		loading: getMoviesLoading(state)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMovieDetails: (movieId) => dispatch( fetchMovieDetails(movieId) )
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieListContainer);
