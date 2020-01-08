import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fetchBooks } from './actions/books'
import MoreBooks from './MoreBooks';

import store from './store';
window.store = store;

render(
	<Provider store={store}>
		<MoreBooks />
	</Provider>,
	document.getElementById('app')
)