'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Styling
import styled, { ThemeProvider } from 'styled-components';
import Theme from './theme/Default';
import 'normalize.css';

// components
import App from './component/App';

// redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducers from './store/reducer/Combined';

let store = createStore(
	Reducers,
	applyMiddleware(thunk)
);

ReactDOM.render((
	<Provider store={store}>
		<ThemeProvider theme={Theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>
), document.getElementById('root'));
