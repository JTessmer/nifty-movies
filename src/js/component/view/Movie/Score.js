'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

//===== Styled Components =====//
const StyledScore = styled.div`
	float: right;
	margin-left: 30px;
`;

const MovieScore = styled.div`
	color: ${props => props.theme.color.secondary.dark};
	font-size: ${props => props.theme.font.size.xxl};
	text-align: center;
`;

const MovieVoteCount = styled.div`
	font-size: ${props => props.theme.font.size.xs};
`;


class Score extends Component {
	render() {
		return(
			<StyledScore>
				<MovieScore>{this.props.voteAverage}</MovieScore>
				<MovieVoteCount>{this.props.voteCount} votes</MovieVoteCount>
			</StyledScore>
		);
	}
}

export default Score;
