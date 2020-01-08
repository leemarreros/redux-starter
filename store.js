import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { apiMiddleware } from './middleware/api';
import { booksMiddleware } from './middleware/books';
import { booksReducer } from './reducers/books';
import logger from './middleware/logger';

const rootReducer = combineReducers({
	books: booksReducer,
})

const featureMiddleware = [
	booksMiddleware
];

const coreMiddleware = [
	apiMiddleware,
	logger
];

const enhancer = compose(
	applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

export default createStore(
	rootReducer,
	{},
	enhancer
);