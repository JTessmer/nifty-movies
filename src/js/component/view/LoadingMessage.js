'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLoadingMessage = styled.div`
	margin-top: 15vh;
	text-align: center;
	opacity: 0.75;
`;

class LoadingMessage extends Component {

	render() {
		return (
			<StyledLoadingMessage>
				<img src="/static/loading.gif" />
			</StyledLoadingMessage>
		);
	}

}

export default LoadingMessage;
