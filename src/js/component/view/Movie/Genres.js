'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

//===== Styled Components =====//
const StyledGenres = styled.div`

	h4 {
		margin: 30px 0 15px;

		color: ${props => props.theme.color.primary.base};
		font-family: ${props => props.theme.font.family.headline};
		text-transform: uppercase;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		display: inline-block;
		font-size: ${props => props.theme.font.size.sm};
		font-weight: 300;

		&:not(:last-child):after {
			content: ',';
			margin-right: 6px;
		}
	}

`;

class GenreDetails extends Component {

	getGenreItems(genreList = []) {
		return genreList.map(genre =>
			<li key={genre.id}>{genre.name}</li>
		);
	}

	render() {
		return(
			<StyledGenres>
				<h4>Genres</h4>
				<ul>
					{this.getGenreItems(this.props.genres)}
				</ul>
			</StyledGenres>
		);
	}
}

export default GenreDetails;
