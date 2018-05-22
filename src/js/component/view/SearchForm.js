'use strict';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchMovieList, getMoviesLoading, getMoviesSearchTerm } from '../../store/reducer/Movie';

//===== Styled Components =====//
const StyledSearchForm = styled.form`
	margin-left: auto;
	clear: both;
	padding-top: 15px;

	@media (min-width: 650px) {
		clear: none;
		max-width: 300px;
		padding-top: 0;
	}

	input {
		height: 38px;
		width: calc(100% - 38px);
		padding: 0 10px;

		color: ${props => props.theme.color.primary.dark};

		border: 1px solid ${props => props.theme.color.primary.base};
		border-right: 0;
	}

	button {
		float: right;
		height: 38px;
		width: 38px;

		background: ${props => props.theme.color.primary.base} url('/static/search_icon.svg') no-repeat;
		background-position: center;
		background-size: 20px 20px;
		border: 1px solid ${props => props.theme.color.primary.base};

		cursor: pointer;
		transition: background 75ms ease-in-out;

		&:active, &:hover, &:focus {
			background-color: ${props => props.theme.color.primary.light};
			border-color: ${props => props.theme.color.primary.light};
		}
		&:disabled {
			background-color: #888;
		}
	}
`;

class SearchForm extends Component {

	handleSubmit(event) {
		event.preventDefault();

		this.props.history.push('/');
		this.props.fetchMovieList(this.refs.searchInput.value);
	}

	render() {
		return (
			<StyledSearchForm onSubmit={this.handleSubmit.bind(this)}>
				<input ref="searchInput" type="text" placeholder="Search..." disabled={this.props.loading} />
				<button disabled={this.props.loading}/>
			</StyledSearchForm>
		)
	}
}


//===== Redux =====//
const mapStateToProps = (state) => {
	return {
		loading: getMoviesLoading(state),
		searchTerm: getMoviesSearchTerm(state)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMovieList: (searchTerm) => dispatch( fetchMovieList(searchTerm) )
	};
}

export default withRouter( connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchForm) );
