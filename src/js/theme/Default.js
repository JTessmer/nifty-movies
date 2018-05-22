'use strict';

import { injectGlobal } from 'styled-components';

//===== Body / Global Styles =====//
injectGlobal`
	* {
		box-sizing:			border-box;
	}
	body {
		background:			#081c24;
		color:				#ffffff;
		font-family:		'Roboto', sans-serif;
		font-size:			16px;
	}
	a {
		text-decoration:	none;
		color:				#00487c;

		&:hover, &:active, &:focus {
			color:			#0074c7;
		}
	}
`;

//===== Theme Variables =====//
const color = {
	primary: {
		lightDesaturated:	'#1e6b8a',
		light:				'#0074c7',
		base:				'#00487c',
		dark:				'#081c24'
	},
	secondary: {
		light:				'#ffc850',
		base:				'#ffb81c',
		dark:				'#d39100'
	},
	tertiary: {
		light:				'#ffffff',
		base:				'#f9fafc',
		dark:				'#f9fafc'
	}
};

const font = {
	family: {
		main:				"'Roboto', sans-serif",
		headline:			"'Oswald', serif"
	},
	size: {
		xxl:				'30px',
		xl:					'22px',
		lg:					'18px',
		base:				'16px',
		sm:					'14px',
		xs:					'12px'
	}
};

const util = {
	boxShadow:				'0px 0px 5px 2px rgba(0,0,0,0.75)'
};


export default {
	color,
	font,
	util
};
