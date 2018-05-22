'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

//===== Styled Components =====//
const StyledTagline = styled.div`
	padding-top: 10px;
	color: ${props => props.theme.color.primary.dark};
	font-family: ${props => props.theme.font.family.headline};
	font-size: ${props => props.theme.font.size.sm};
	text-transform: uppercase;
	font-weight: 400;
`;


class Tagline extends Component {
	render() {
		return(
			<StyledTagline>{this.props.tagline}</StyledTagline>
		);
	}
}

export default Tagline;
