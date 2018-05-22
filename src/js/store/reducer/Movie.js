'use strict';

import axios from 'axios';

//===== Initial State =====//
const initialState = {
	isLoading: false,
	errorMsg: null,
	searchTerm: null,
	sortMethod: 'title',
	movies: {
		allMovies: {},
		byTitle: []
	}
};


//===== User Actions =====//
const MOVIES_LOADING_BEGIN		= 'movies:loading:BEGIN';
const MOVIES_LOADING_SUCCESS	= 'movies:loading:SUCCESS';
const MOVIES_LOADING_ERROR		= 'movies:loading:ERROR';
const MOVIES_DETAILS_SUCCESS	= 'movies:details:SUCCESS';
const MOVIES_SEARCH_SET_TERM	= 'movies:search:SET_TERM';


//===== Reducers =====//
export default function reducer(state = initialState, action) {

	switch(action.type) {

		case MOVIES_LOADING_BEGIN:
			return {
				...state,
				isLoading: true,
				errorMsg: null
			}

		case MOVIES_LOADING_SUCCESS:
			const allMovies = {};
			const byTitle = [];

			// Populate all movies referenced by ID
			action.movies.map(movie => {
				allMovies[movie.id] = movie;
			});

			// Order movies by title
			const alphaSorted = action.movies.sort( (a, b) => {
				if (a.title > b.title) return 1;
				if (a.title < b.title) return -1;

				return 0;
			});

			// Populate byTitle with ordered movie IDs
			alphaSorted.map(movie => {
				byTitle.push(movie.id);
			});

			return {
				...state,
				movies: {
					allMovies,
					byTitle
				},
				isLoading: false,
				errorMsg: null
			}

		case MOVIES_LOADING_ERROR:
			return {
				...state,
				isLoading: false,
				errorMsg: action.errorMsg || 'Unknown'
			};

		case MOVIES_DETAILS_SUCCESS:
			const movies = {
				...state.movies
			};

			// Replace initial movie data with our new detailed info
			movies.allMovies[action.movie.id] = action.movie;

			return {
				...state,
				movies,
				isLoading: false,
				errorMsg: null
			};

		case MOVIES_SEARCH_SET_TERM:
			return {
				...state,
				searchTerm: action.searchTerm
			};

		default:
			return state;
	}

}


//===== Action Creators =====//
export function beginLoadingMovies() {
	return {
		type: MOVIES_LOADING_BEGIN
	};
}

export function successLoadingMovies(movies) {
	return {
		type: MOVIES_LOADING_SUCCESS,
		movies
	};
}

export function successLoadingDetails(movie) {
	return {
		type: MOVIES_DETAILS_SUCCESS,
		movie
	}
}

export function errorLoadingMovies(errorMsg) {
	return {
		type: MOVIES_LOADING_ERROR,
		errorMsg
	};
}

export function setSearchTerm(searchTerm) {
	return {
		type: MOVIES_SEARCH_SET_TERM,
		searchTerm
	};
}


//===== Thunks =====//
export function fetchMovieList(searchTerm = null) {
	return function(dispatch, getState) {
		dispatch( setSearchTerm(searchTerm) );
		dispatch( beginLoadingMovies() );

		let axiosConfig = {
			method: 'get',
			url: '/api/movie'
		};

		if ( searchTerm ) {
			axiosConfig = {
				method: 'post',
				url: '/api/movie',
				data: {
					term: searchTerm
				}
			}
		}

		axios(axiosConfig)
			.then(response => {
				if (response.data && response.data.total_results) {
					dispatch( successLoadingMovies(response.data.results) );
				} else {
					dispatch( errorLoadingMovies(response.data.error) );
				}
			})
			.catch(err => {
				dispatch( errorLoadingMovies(err.error) );
			});
	}
}


export function fetchMovieDetails(movieId) {
	return function(dispatch, getState) {
		dispatch( beginLoadingMovies() );

		axios.get('/api/movie/details/'+movieId)
			.then(response => {
				if (response.data) {
					dispatch( successLoadingDetails(response.data) );
				} else {
					dispatch( errorLoadingMovies(response.data.error) );
				}
			})
			.catch(err => {
				dispatch( errorLoadingMovies(err.error) );
			});
	}
}


//===== Selectors =====//
export function getVisibleMovies(state) {
	const allMovies = state.Movie.movies.allMovies || {};

	switch (state.Movie.sortMethod) {
		case 'title':
			return state.Movie.movies.byTitle.map(key => {
				return allMovies[key];
			});

		default:
			// Return movie list as an array
			return Object.keys(allMovies).map(key => {
				return allMovies[key];
			});
	}

}

export function getSelectedMovie(state, movieId) {
	return state.Movie.movies.allMovies[movieId] || {};
}

//----- Status Flags -----//
export function getMoviesSearchTerm(state) {
	return state.Movie.searchTerm;
}

export function getMoviesLoading(state) {
	return state.Movie.isLoading;
}

export function getMoviesError(state) {
	return state.Movie.errorMsg;
}
