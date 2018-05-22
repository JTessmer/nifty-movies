'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
	margin: 15px;
`;

const ErrorBody = styled.div`
	margin: 0 auto;
	padding: 30px;
	max-width: 800px;

	color: ${props => props.theme.color.primary.dark};

	background: ${props => props.theme.color.tertiary.dark};
	box-shadow: ${props => props.theme.util.boxShadow};

	h1 {
		margin-top: 0;

		font-family: ${props => props.theme.font.family.headline};
	}
`;


class ErrorMessage extends Component {

	render() {
		return (
			<ErrorContainer>
				<ErrorBody>
					<h1>Uh oh!</h1>
					<p>It looks like you've run in to the following error:</p>
					<p><em>{this.props.message}</em></p>
				</ErrorBody>
			</ErrorContainer>
		);
	}

}

export default ErrorMessage;
