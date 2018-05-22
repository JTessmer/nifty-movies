'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

//===== Styled Components =====//
const StyledFooter = styled.footer`
	margin-top: 15px;
	padding: 15px;

	color: ${props => props.theme.color.primary.dark};
	font-size: ${props => props.theme.font.size.sm};
	font-weight: 300;
	text-align: center;

	background-color: ${props => props.theme.color.tertiary.base};
	border-bottom: 5px solid ${props => props.theme.color.primary.light};

	@media (min-width: 650px) {
		padding: 30px 45px;
	}
`;


class Footer extends Component {

	render() {
		return (
			<StyledFooter>
				<p>
					<strong>Nifty Movies</strong> built by <strong>Jesse Tessmer</strong>
				</p>
				<p>
					Data provided by <a href="https://www.themoviedb.org/" target="_new">TheMovieDB</a>
				</p>
			</StyledFooter>
		);
	}

}

export default Footer;
