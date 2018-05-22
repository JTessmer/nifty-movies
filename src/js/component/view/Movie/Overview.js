'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

//===== Styled Components =====//
const StyledOverview = styled.div`
	clear: both;
	padding-top: 30px;

	font-weight: 300;
	line-height: 1.45;
`;

const OverviewTitle = styled.h4`
	margin: 0 0 15px;

	color: ${props => props.theme.color.primary.base};
	font-family: ${props => props.theme.font.family.headline};
	text-transform: uppercase;
`;


class Overview extends Component {

	getTitle(showTitle) {
		return (
			<OverviewTitle>Overview</OverviewTitle>
		);
	}

	render() {
		return(
			<StyledOverview>
				{this.getTitle(this.props.showTitle)}
				{this.props.overview}
			</StyledOverview>
		);
	}
}

export default Overview;
