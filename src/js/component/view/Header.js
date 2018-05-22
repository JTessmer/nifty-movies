'use strict';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchMovieList } from '../../store/reducer/Movie';

import SearchForm from './SearchForm';

//===== Styled Components =====//
const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	padding: 10px 15px 13px;

	text-align: center;

	background-color: ${props => props.theme.color.tertiary.base};

	border-top: 3px solid ${props => props.theme.color.secondary.base};
	box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.15);

	@media (min-width: 650px) {
		padding: 20px 45px 20px;
	}
`;

const SiteTitle = styled.span`
	margin: 0;

	color: ${props => props.theme.color.primary.light};
	font-family: ${props => props.theme.font.family.headline};
	font-size: 28px;

	cursor: pointer;

	@media (min-width: 650px) {
		float: left;
		font-size: 32px;
	}

	span {
		color: ${props => props.theme.color.primary.base};
	}

	img {
		width: 25px;
		margin-right: 10px;
	}
`;


class Header extends Component {

	onTitleClick() {
		this.props.history.push('/');
		this.props.fetchMovieList();
	}

	render() {
		return (
			<StyledHeader>
				<SiteTitle onClick={this.onTitleClick.bind(this)}>
					<img src="/static/film_icon.svg" />
					<span>N</span>ifty <span>M</span>ovies
				</SiteTitle>
				<SearchForm />
			</StyledHeader>
		)
	}

}


//===== Redux =====//
const mapStateToProps = (state) => {
	return {
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
)(Header) );
