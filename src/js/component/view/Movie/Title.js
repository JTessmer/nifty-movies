'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

//===== Styled Components =====//
const StyledTitle = styled.div`
	padding-top: 10px;
	color: ${props => props.theme.color.primary.light};
	font-family: ${props => props.theme.font.family.headline};
	font-size: ${props => props.theme.font.size.xl};
	text-transform: uppercase;
	font-weight: 400;
`;


class Title extends Component {
	render() {
		return(
			<StyledTitle>{this.props.title}</StyledTitle>
		);
	}
}

export default Title;
