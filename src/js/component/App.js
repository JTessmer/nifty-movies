'use strict';

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MovieListContainer from './container/MovieListContainer';
import MovieDetailsContainer from './container/MovieDetailsContainer';
import Header from './view/Header';
import Footer from './view/Footer';

import styled from 'styled-components';

const FullHeightBody = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	padding-top: 116px;

	@media (min-width: 650px) {
		padding-top: 86px;
	}
`;

const FullHeightContent = styled.div`
	flex-grow: 1;
`;

class App extends Component {
	render() {
		return (
			<FullHeightBody>
				<Header></Header>
				<FullHeightContent>
					<Switch>
						<Route path="/details/:id" component={MovieDetailsContainer} />
						<Route path="/" component={MovieListContainer} />
					</Switch>
				</FullHeightContent>
				<Footer />
			</FullHeightBody>
		)
	}
}

export default App;
